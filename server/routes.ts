import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { storage } from "./storage";
import { insertBookingSchema, insertServiceSchema, insertBlogPostSchema } from "@shared/schema";
import Stripe from "stripe";

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-07-30.basil",
}) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Services routes
  app.get('/api/services', async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  app.get('/api/services/:slug', async (req, res) => {
    try {
      const service = await storage.getServiceBySlug(req.params.slug);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });

  // Subscription routes (protected)
  app.get('/api/subscriptions', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscriptions = await storage.getUserSubscriptions(userId);
      res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  // Stripe subscription creation
  app.post('/api/create-subscription', isAuthenticated, async (req: any, res) => {
    if (!stripe) {
      return res.status(503).json({ message: "Payment processing unavailable - Stripe not configured" });
    }
    try {
      const userId = req.user.claims.sub;
      const { serviceId } = req.body;
      
      let user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const service = await storage.getServiceBySlug(serviceId);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }

      // Create or get Stripe customer
      let stripeCustomerId = user.stripeCustomerId;
      if (!stripeCustomerId) {
        const customer = await stripe.customers.create({
          email: user.email!,
          name: `${user.firstName} ${user.lastName}`.trim() || user.email!,
        });
        stripeCustomerId = customer.id;
        await storage.updateUserStripeInfo(userId, stripeCustomerId);
      }

      // Create Stripe subscription
      const subscription = await stripe.subscriptions.create({
        customer: stripeCustomerId,
        items: [{
          price_data: {
            currency: 'usd',
            product: {
              name: service.name,
              description: service.description,
            },
            unit_amount: Math.round(parseFloat(service.monthlyPrice) * 100),
            recurring: {
              interval: 'month',
            },
          },
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      // Store subscription in database
      await storage.createSubscription({
        userId,
        serviceId: service.id,
        stripeSubscriptionId: subscription.id,
        status: 'pending',
        monthlyPrice: service.monthlyPrice,
        nextRenewal: new Date((subscription as any).current_period_end * 1000),
      });

      const latestInvoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = (latestInvoice as any).payment_intent as Stripe.PaymentIntent;

      res.json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: any) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ message: error.message || "Failed to create subscription" });
    }
  });

  // Blog routes
  app.get('/api/blog', async (req, res) => {
    try {
      const posts = await storage.getBlogPosts(true);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get('/api/blog/:slug', async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || !post.published) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Booking routes
  app.post('/api/bookings', async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // TODO: Send confirmation email and schedule follow-up
      
      res.status(201).json(booking);
    } catch (error: any) {
      console.error("Error creating booking:", error);
      res.status(400).json({ message: error.message || "Failed to create booking" });
    }
  });

  // Security events (protected)
  app.get('/api/security-events', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const events = await storage.getUserSecurityEvents(userId, 20);
      res.json(events);
    } catch (error) {
      console.error("Error fetching security events:", error);
      res.status(500).json({ message: "Failed to fetch security events" });
    }
  });

  // Dashboard stats (protected)
  app.get('/api/dashboard/stats', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const [subscriptions, recentEvents] = await Promise.all([
        storage.getUserSubscriptions(userId),
        storage.getUserSecurityEvents(userId, 5),
      ]);

      const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
      const totalMonthlyCost = activeSubscriptions.reduce(
        (sum, sub) => sum + parseFloat(sub.monthlyPrice), 0
      );

      const stats = {
        securityScore: 85, // TODO: Calculate based on active services and recent events
        activeServices: activeSubscriptions.length,
        totalMonthlyCost,
        recentEvents: recentEvents.length,
        subscriptions: activeSubscriptions,
        events: recentEvents,
      };

      res.json(stats);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
  });

  // Seed initial data (development only)
  if (process.env.NODE_ENV === 'development') {
    app.post('/api/seed', async (req, res) => {
      try {
        // Create initial services
        const managedServices = [
          {
            name: 'ManagedFirewall',
            slug: 'managed-firewall',
            category: 'managed',
            description: '24/7 firewall monitoring and management with advanced threat detection and automatic rule updates.',
            features: ['24/7 monitoring', 'Automatic rule updates', 'Threat detection', 'Performance optimization'],
            monthlyPrice: '299.00',
            icon: 'fas fa-shield-alt',
          },
          {
            name: 'ManagedEndpoint',
            slug: 'managed-endpoint',
            category: 'managed',
            description: 'Comprehensive endpoint protection with AI-powered threat hunting and automated response capabilities.',
            features: ['AI-powered detection', 'Automated response', 'Device management', 'Threat hunting'],
            monthlyPrice: '399.00',
            icon: 'fas fa-laptop',
          },
          {
            name: 'ManagedSIEM',
            slug: 'managed-siem',
            category: 'managed',
            description: 'Security Information and Event Management with real-time monitoring and intelligent alerting.',
            features: ['Real-time monitoring', 'Intelligent alerts', 'Log analysis', 'Compliance reporting'],
            monthlyPrice: '899.00',
            icon: 'fas fa-chart-line',
          },
        ];

        const purpleServices = [
          {
            name: 'PurpleThreatHunting',
            slug: 'purple-threat-hunting',
            category: 'purple',
            description: 'Advanced persistent threat detection with human-led investigation.',
            features: ['Human-led hunting', 'APT detection', 'Custom IOCs', 'Threat intelligence'],
            monthlyPrice: '2999.00',
            icon: 'fas fa-search',
          },
          {
            name: 'PurpleTeamExercises',
            slug: 'purple-team-exercises',
            category: 'purple',
            description: 'Collaborative red/blue team simulations for continuous improvement.',
            features: ['Red/blue team exercises', 'Vulnerability assessment', 'Attack simulation', 'Defense testing'],
            monthlyPrice: '4999.00',
            icon: 'fas fa-users',
          },
        ];

        for (const service of [...managedServices, ...purpleServices]) {
          await storage.createService(service);
        }

        res.json({ message: 'Initial data seeded successfully' });
      } catch (error) {
        console.error("Error seeding data:", error);
        res.status(500).json({ message: "Failed to seed data" });
      }
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}
