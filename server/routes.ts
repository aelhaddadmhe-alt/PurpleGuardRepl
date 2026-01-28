import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { storage } from "./storage";
import { insertBookingSchema, insertServiceSchema, insertBlogPostSchema } from "@shared/schema";
import Stripe from "stripe";
import PDFDocument from "pdfkit";

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
            product_data: {
              name: service.name,
              description: service.description || undefined,
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

  // Whitepaper PDF generation endpoint
  app.get('/api/whitepapers/:slug', async (req, res) => {
    const { slug } = req.params;
    
    const whitepapers: Record<string, { title: string; subtitle: string; sections: Array<{ heading: string; content: string[] }> }> = {
      'compliance-audit-readiness': {
        title: 'Continuous Compliance & Audit Readiness',
        subtitle: 'with PurpleGuard',
        sections: [
          {
            heading: 'Executive Summary',
            content: [
              'Compliance should not be a checkbox exercise. Traditional approaches rely on periodic assessments, static evidence, and manual effort—leaving organizations exposed between audits.',
              'PurpleGuard delivers continuous, operationalized compliance by embedding security controls into managed services and exposure management.'
            ]
          },
          {
            heading: 'The Problem with Traditional Compliance',
            content: [
              '• Point-in-time assessments miss emerging risk',
              '• Manual evidence collection is error-prone',
              '• Security tools are not aligned to audit objectives',
              '• Compliance becomes a burden instead of a security driver'
            ]
          },
          {
            heading: 'PurpleGuard\'s Continuous Compliance Model',
            content: [
              'PurpleGuard integrates compliance across Purple X and Managed X services:',
              '• PurpleSOC / PurpleSentinel: Continuous monitoring, incident records, and response evidence',
              '• PurpleVAPT / PurpleStrike: Control effectiveness testing and adversary validation',
              '• PurpleConfig: CIS/NIST benchmark validation and configuration drift detection',
              '• PurpleSentry: External exposure and third-party risk intelligence',
              '• Managed X Services: Enforced operational controls for endpoints, identity, network, and cloud'
            ]
          },
          {
            heading: 'Compliance Framework Coverage',
            content: [
              'PurpleGuard supports organizations pursuing or maintaining:',
              '• SOC 2 (Type I & II)',
              '• ISO 27001 / 27002',
              '• NIST CSF / NIST 800-53',
              '• CIS Critical Security Controls',
              '• HIPAA',
              '• PCI DSS',
              '• GDPR (security-related controls)'
            ]
          },
          {
            heading: 'Operational Workflow',
            content: [
              '1. Onboarding & Scoping: Define compliance targets and system boundaries',
              '2. Control Mapping: Map PurpleGuard services to framework requirements',
              '3. Continuous Validation: Monitor controls, detect drift, test defenses',
              '4. Evidence Automation: Collect logs, alerts, reports, and metrics continuously',
              '5. Audit Readiness & Support: Deliver auditor-ready evidence and ongoing guidance'
            ]
          },
          {
            heading: 'Business Outcomes',
            content: [
              '• Reduced compliance costs',
              '• Faster audit cycles',
              '• Lower security risk',
              '• Improved security maturity',
              '• Executive-level visibility and confidence'
            ]
          },
          {
            heading: 'Conclusion',
            content: [
              'PurpleGuard transforms compliance from a reactive obligation into a proactive security advantage. By aligning continuous security operations with regulatory requirements, organizations achieve real readiness—not just audit survival.'
            ]
          }
        ]
      },
      'ransomware-defense': {
        title: 'Modern Ransomware Defense',
        subtitle: 'with PurpleGuard',
        sections: [
          {
            heading: 'Executive Summary',
            content: [
              'Ransomware remains one of the most disruptive and costly cyber threats facing organizations today. Attackers exploit misconfigurations, stolen credentials, and unmonitored systems to gain persistence, exfiltrate data, and extort victims.',
              'PurpleGuard delivers a resilient, managed ransomware defense strategy that prioritizes prevention, rapid detection, and assured recovery.'
            ]
          },
          {
            heading: 'Understanding the Ransomware Kill Chain',
            content: [
              'Modern ransomware attacks typically follow this path:',
              '1. Initial access (phishing, RDP abuse, exploited vulnerabilities)',
              '2. Credential theft and privilege escalation',
              '3. Lateral movement and reconnaissance',
              '4. Payload deployment and data encryption',
              '5. Data exfiltration and extortion',
              '',
              'PurpleGuard maps security controls to each phase of this kill chain.'
            ]
          },
          {
            heading: 'PurpleGuard Ransomware Defense Architecture',
            content: [
              'Prevention & Hardening:',
              '• CIS-aligned endpoint and server configurations',
              '• Patch and vulnerability management',
              '• Email and web threat protection',
              '• Identity security with MFA and access controls',
              '',
              'Detection & Response:',
              '• Endpoint, network, and cloud telemetry correlation',
              '• Behavioral ransomware detection',
              '• 24/7 SOC-driven response',
              '• Automated isolation and containment',
              '',
              'Resilience & Recovery:',
              '• Secure, immutable backups',
              '• Regular recovery testing',
              '• Incident-driven restoration workflows'
            ]
          },
          {
            heading: 'Integration Across Purple X & Managed X',
            content: [
              '• PurpleSOC / PurpleSentinel: Detection, response, and forensic evidence',
              '• PurpleVAPT: Identify exploitable paths used by ransomware actors',
              '• PurpleConfig: Reduce attack surface via hardened configurations',
              '• PurpleSentry: External exposure and threat intelligence',
              '• Managed Endpoint, Identity, Firewall, Backup: Enforced ransomware controls'
            ]
          },
          {
            heading: 'Measurable Outcomes',
            content: [
              '• Reduced ransomware attack success rate',
              '• Faster detection and containment',
              '• Minimized downtime and financial impact',
              '• Improved cyber insurance posture',
              '• Stronger regulatory and board-level confidence'
            ]
          },
          {
            heading: 'Conclusion',
            content: [
              'Ransomware defense requires continuous visibility, rapid response, and proven recovery. PurpleGuard delivers all three as a managed service—helping organizations withstand ransomware attacks without operational chaos.'
            ]
          }
        ]
      },
      'cloud-saas-security': {
        title: 'Securing Cloud & SaaS Environments',
        subtitle: 'with PurpleGuard',
        sections: [
          {
            heading: 'Executive Summary',
            content: [
              'Cloud platforms and SaaS applications are now core to business operations—but their dynamic nature makes traditional security models ineffective.',
              'PurpleGuard delivers managed Cloud and SaaS security that aligns with the shared responsibility model while providing continuous assurance, detection, and response.'
            ]
          },
          {
            heading: 'The Shared Responsibility Reality',
            content: [
              'Cloud and SaaS providers secure the underlying infrastructure—but customers remain responsible for:',
              '• Identity and access management',
              '• Configuration and exposure management',
              '• Data protection and logging',
              '• Threat detection and response',
              '',
              'PurpleGuard operationalizes this responsibility as a managed service.'
            ]
          },
          {
            heading: 'PurpleGuard Cloud & SaaS Security Architecture',
            content: [
              'Posture & Configuration Assurance:',
              '• Continuous CSPM and SSPM checks',
              '• CIS/NIST-aligned baselines',
              '• Detection of risky settings and configuration drift',
              '',
              'Identity-Centric Protection:',
              '• Monitoring of user and service identities',
              '• MFA and conditional access enforcement',
              '• Detection of anomalous login and API behavior',
              '',
              'Threat Detection & Response:',
              '• SOC-driven monitoring of cloud and SaaS activity',
              '• Detection of account takeover, insider risk, and data exfiltration',
              '• Automated containment actions'
            ]
          },
          {
            heading: 'Integration Across Purple X & Managed X',
            content: [
              '• PurpleSOC / PurpleSentinel: Cloud and SaaS threat monitoring and response',
              '• PurpleConfig: Cloud and SaaS configuration assessment',
              '• PurpleVAPT: Cloud workload and application testing',
              '• PurpleSentry: External exposure and SaaS risk intelligence',
              '• Managed Identity, Managed SASE, Managed Endpoint: Enforcement of access and device trust'
            ]
          },
          {
            heading: 'Business Outcomes',
            content: [
              '• Reduced cloud misconfiguration risk',
              '• Improved SaaS visibility and control',
              '• Faster detection of cloud-based attacks',
              '• Stronger compliance and audit readiness',
              '• Secure cloud adoption without slowing the business'
            ]
          },
          {
            heading: 'Conclusion',
            content: [
              'Cloud and SaaS security requires continuous oversight—not periodic reviews. PurpleGuard delivers managed, identity-driven, and compliance-aware security that keeps cloud environments resilient as they scale.'
            ]
          }
        ]
      },
      'external-attack-surface-management': {
        title: 'Managing the External Attack Surface',
        subtitle: 'with PurpleGuard',
        sections: [
          {
            heading: 'Executive Summary',
            content: [
              'The majority of modern breaches begin with the exploitation of external-facing assets. Yet many organizations lack accurate visibility into what is exposed to the internet.',
              'PurpleGuard\'s External Attack Surface Management (EASM) delivers continuous discovery, risk prioritization, and threat-informed remediation—turning unknown exposure into manageable risk.'
            ]
          },
          {
            heading: 'Why External Attack Surface Management Matters',
            content: [
              'Traditional asset inventories are incomplete and quickly outdated. Cloud services, SaaS platforms, and DevOps workflows introduce assets faster than teams can track them.',
              '',
              'Attackers exploit this gap by targeting:',
              '• Forgotten subdomains and test environments',
              '• Misconfigured cloud storage and services',
              '• Exposed RDP, SSH, VPN, and admin portals',
              '• Leaked credentials tied to external assets',
              '',
              'EASM closes this visibility gap.'
            ]
          },
          {
            heading: 'PurpleGuard EASM Architecture',
            content: [
              'Discovery & Mapping:',
              '• Internet-wide asset discovery',
              '• Continuous monitoring for changes',
              '• Attribution of assets to business units and environments',
              '',
              'Exposure Analysis:',
              '• Identification of vulnerable and misconfigured services',
              '• Detection of exposed credentials, certificates, and secrets',
              '• Correlation with known exploit paths',
              '',
              'Threat Intelligence Integration:',
              '• Mapping exposure to real-world threat activity',
              '• Dark web monitoring for organization-related data',
              '• Prioritization based on attacker behavior'
            ]
          },
          {
            heading: 'Integration Across Purple X & Managed X',
            content: [
              '• PurpleSentry: Core EASM, threat intelligence, and digital risk protection',
              '• PurpleVAPT: Validation of exploitable external paths',
              '• PurpleConfig: Reduction of misconfiguration-driven exposure',
              '• PurpleSOC / PurpleSentinel: Monitoring and response for exploitation attempts',
              '• Managed Firewall, WAF, SASE: Enforcement and mitigation controls'
            ]
          },
          {
            heading: 'Business Outcomes',
            content: [
              '• Reduced likelihood of initial compromise',
              '• Faster detection of new exposure',
              '• Improved risk prioritization',
              '• Stronger compliance and cyber insurance posture',
              '• Clear ownership of external-facing risk'
            ]
          },
          {
            heading: 'Conclusion',
            content: [
              'External attack surface management is no longer optional. PurpleGuard delivers continuous, threat-informed visibility into what attackers see—helping organizations close exposure gaps before they lead to breaches.'
            ]
          }
        ]
      },
      'zero-trust-secure-remote-access': {
        title: 'Zero Trust & Secure Remote Access',
        subtitle: 'with PurpleGuard',
        sections: [
          {
            heading: 'Executive Summary',
            content: [
              'As workforces become more distributed and applications move to the cloud, traditional perimeter-based security models break down. Zero Trust shifts security from the network to identity, device posture, and context.',
              'PurpleGuard delivers Zero Trust and secure remote access as a managed, operational service—not just a technology deployment.'
            ]
          },
          {
            heading: 'Why Zero Trust Matters',
            content: [
              'Most breaches involve stolen credentials and lateral movement. VPNs amplify this risk by granting broad network access once connected.',
              '',
              'Zero Trust principles reduce breach impact by:',
              '• Verifying identity and context continuously',
              '• Limiting access to specific applications',
              '• Eliminating implicit trust based on network location'
            ]
          },
          {
            heading: 'PurpleGuard Zero Trust Architecture',
            content: [
              'Identity & Access Enforcement:',
              '• MFA and conditional access policies',
              '• Least-privilege access models',
              '• Monitoring of privileged and high-risk users',
              '',
              'Zero Trust Network Access (ZTNA):',
              '• Application-level access control',
              '• No exposed internal IPs or ports',
              '• Secure connectivity for users and third parties',
              '',
              'Device & Risk Context:',
              '• Endpoint compliance and health validation',
              '• Integration with EDR and endpoint management',
              '• Adaptive access decisions based on risk'
            ]
          },
          {
            heading: 'Monitoring & Response',
            content: [
              '• Full audit logging of access events',
              '• Detection of anomalous access patterns',
              '• Session termination and re-authentication on risk signals',
              '• Integration with PurpleSOC for unified visibility'
            ]
          },
          {
            heading: 'Integration Across Purple X & Managed X',
            content: [
              '• Managed SASE / ZTNA: Secure, identity-aware access',
              '• Managed Identity: SSO, MFA, conditional access',
              '• Managed Endpoint / EDR: Device trust and posture',
              '• PurpleSOC / PurpleSentinel: Access monitoring and threat response'
            ]
          },
          {
            heading: 'Business Outcomes',
            content: [
              '• Secure remote access without exposing the internal network',
              '• Reduced reliance on traditional VPNs',
              '• Improved visibility into access patterns',
              '• Stronger protection against credential-based attacks',
              '• Seamless user experience with stronger security'
            ]
          },
          {
            heading: 'Conclusion',
            content: [
              'Zero Trust is not a product—it\'s an operational approach. PurpleGuard delivers Zero Trust and secure remote access as a managed service, helping organizations protect distributed workforces without compromising productivity.'
            ]
          }
        ]
      }
    };

    const whitepaper = whitepapers[slug];
    if (!whitepaper) {
      return res.status(404).json({ message: 'Whitepaper not found' });
    }

    try {
      const doc = new PDFDocument({ 
        size: 'A4',
        margins: { top: 72, bottom: 100, left: 72, right: 72 },
        bufferPages: true
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="PurpleGuard-${slug}.pdf"`);
      
      doc.pipe(res);

      // Contact information for footer
      const contactInfo = {
        name: 'PurpleGuard Security',
        address: '123 Cybersecurity Ave, Tech District, CA 94105',
        phone: '+1 (888) 555-GUARD',
        website: 'www.purpleguard.io',
        email: 'info@purpleguard.io'
      };

      // Header with brand colors - logo + tagline only
      doc.rect(0, 0, doc.page.width, 60).fill('#6633cc');
      
      // Logo text and tagline
      doc.fillColor('#ffffff')
         .fontSize(20)
         .font('Helvetica-Bold')
         .text('PurpleGuard', 72, 20);
      
      doc.fontSize(10)
         .font('Helvetica')
         .text('Stronger Security. Smarter Defenses.', 72, 42);

      // Whitepaper title - below the header
      doc.y = 80;
      doc.fillColor('#6633cc')
         .fontSize(28)
         .font('Helvetica-Bold')
         .text(whitepaper.title, 72, doc.y, { width: doc.page.width - 144 });
      
      doc.moveDown(0.3);
      doc.fillColor('#666666')
         .fontSize(14)
         .font('Helvetica')
         .text(whitepaper.subtitle);

      doc.moveDown(1.5);

      // Content sections
      whitepaper.sections.forEach((section, index) => {
        // Check if we need a new page
        if (doc.y > doc.page.height - 180) {
          doc.addPage();
          doc.y = 72;
        }

        // Section heading
        doc.fillColor('#6633cc')
           .fontSize(16)
           .font('Helvetica-Bold')
           .text(section.heading, { continued: false });
        
        doc.moveDown(0.5);

        // Section content
        doc.fillColor('#333333')
           .fontSize(11)
           .font('Helvetica');

        section.content.forEach(paragraph => {
          if (doc.y > doc.page.height - 140) {
            doc.addPage();
            doc.y = 72;
          }
          doc.text(paragraph, { lineGap: 4 });
          doc.moveDown(0.3);
        });

        doc.moveDown(1);
      });

      // Add footer to all pages
      const pages = doc.bufferedPageRange();
      for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(i);
        
        // Footer divider line
        const footerY = doc.page.height - 85;
        doc.strokeColor('#6633cc')
           .lineWidth(1)
           .moveTo(72, footerY)
           .lineTo(doc.page.width - 72, footerY)
           .stroke();

        // Contact details footer
        doc.fillColor('#6633cc')
           .fontSize(9)
           .font('Helvetica-Bold')
           .text(contactInfo.name, 72, footerY + 10, { width: doc.page.width - 144, align: 'center' });
        
        doc.fillColor('#666666')
           .fontSize(8)
           .font('Helvetica')
           .text(contactInfo.address, 72, footerY + 22, { width: doc.page.width - 144, align: 'center' })
           .text(`Phone: ${contactInfo.phone}  |  Website: ${contactInfo.website}  |  Email: ${contactInfo.email}`, 72, footerY + 33, { width: doc.page.width - 144, align: 'center' });

        // Page number
        doc.fillColor('#999999')
           .fontSize(8)
           .text(`Page ${i + 1} of ${pages.count}`, 72, footerY + 50, { width: doc.page.width - 144, align: 'center' });
      }

      doc.end();
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ message: 'Failed to generate PDF' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
