import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { isUnauthorizedError } from "@/lib/authUtils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, CreditCard, Check, ArrowLeft, Loader2 } from "lucide-react";
import type { Service } from "@shared/schema";

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY ? 
  loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY) : 
  null;

const CheckoutForm = ({ service }: { service: Service }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Subscription Successful!",
          description: `You're now subscribed to ${service.name}. Welcome aboard!`,
        });
        setLocation('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
          <Lock className="h-4 w-4 mr-2" />
          Secure Payment Details
        </h3>
        <PaymentElement />
      </div>
      
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
        size="lg"
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="h-4 w-4 mr-2" />
            Subscribe to {service.name}
          </>
        )}
      </Button>
      
      <p className="text-xs text-slate-500 text-center">
        Your subscription will start immediately. You can cancel anytime from your dashboard.
      </p>
    </form>
  );
};

export default function Subscribe() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { toast } = useToast();
  const { isAuthenticated, user, isLoading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [clientSecret, setClientSecret] = useState("");

  const { data: service, isLoading: serviceLoading, error } = useQuery<Service>({
    queryKey: ['/api/services', serviceId],
    enabled: !!serviceId,
  });

  const subscriptionMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/create-subscription", { 
        serviceId: serviceId 
      });
      return response.json();
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: error.message || "Failed to create subscription. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Check authentication and redirect if needed
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to services.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 1000);
      return;
    }
  }, [isAuthenticated, authLoading, toast]);

  // Create subscription when service is loaded and user is authenticated
  useEffect(() => {
    if (service && isAuthenticated && !clientSecret && !subscriptionMutation.isPending) {
      subscriptionMutation.mutate();
    }
  }, [service, isAuthenticated, clientSecret]);

  if (authLoading || serviceLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/4" />
            <div className="h-32 bg-slate-200 rounded" />
            <div className="h-64 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Shield className="h-16 w-16 text-slate-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Authentication Required</h1>
          <p className="text-slate-600 mb-8">Please sign in to subscribe to our services.</p>
          <a href="/api/login">
            <Button>Sign In</Button>
          </a>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Shield className="h-16 w-16 text-slate-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The requested service could not be found.</p>
          <Button onClick={() => setLocation('/services')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card>
            <CardContent className="p-12 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary-500 mx-auto mb-6" />
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Preparing Your Subscription</h2>
              <p className="text-slate-600">Setting up secure payment processing...</p>
              {subscriptionMutation.error && (
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-600 text-sm">
                    {subscriptionMutation.error.message || 'Failed to create subscription'}
                  </p>
                  <Button 
                    onClick={() => subscriptionMutation.mutate()} 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                  >
                    Retry
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const isPurpleService = service.category === 'purple';

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Button variant="ghost" onClick={() => setLocation(`/services/${service.slug}`)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Service
              </Button>
            </div>
            <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
              <Shield className="h-3 w-3 mr-1" />
              Secure Checkout
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Subscription Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${isPurpleService ? 'bg-purple-100' : 'bg-primary-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Shield className={`h-6 w-6 ${isPurpleService ? 'text-purple-600' : 'text-primary-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg">{service.name}</h3>
                    <p className="text-slate-600 mt-1">{service.description}</p>
                    <Badge className={`mt-2 ${isPurpleService ? 'bg-purple-100 text-purple-800 hover:bg-purple-100' : 'bg-primary-100 text-primary-800 hover:bg-primary-100'}`}>
                      {isPurpleService ? 'Purple[X] Advanced' : 'Managed[X] Core'}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">${service.monthlyPrice}</div>
                    <div className="text-sm text-slate-500">per month</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                  <div className="space-y-2">
                    {Array.isArray(service.features) && service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly subscription</span>
                    <span className="font-medium">${service.monthlyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Setup fee</span>
                    <span className="font-medium text-secondary-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">30-day trial</span>
                    <span className="font-medium text-secondary-600">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total monthly</span>
                    <span>${service.monthlyPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Account</span>
                    <span className="font-medium">{(user as any)?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Name</span>
                    <span className="font-medium">
                      {(user as any)?.firstName && (user as any)?.lastName 
                        ? `${(user as any).firstName} ${(user as any).lastName}`
                        : (user as any)?.email
                      }
                    </span>
                  </div>
                  {(user as any)?.company && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Company</span>
                      <span className="font-medium">{(user as any).company}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stripePromise && clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm service={service} />
                  </Elements>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">Payment processing is currently unavailable.</p>
                    <Button asChild variant="outline">
                      <a href={`/booking?service=${service.slug}`}>Book a consultation instead</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="mt-6 bg-slate-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Secure Payment Processing</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 256-bit SSL encryption protects your data</li>
                      <li>• PCI DSS compliant payment processing</li>
                      <li>• No payment information stored on our servers</li>
                      <li>• 30-day money-back guarantee</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
