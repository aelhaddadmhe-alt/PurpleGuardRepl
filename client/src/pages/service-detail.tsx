import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Check, ArrowLeft, Users, Clock, Award, Zap } from "lucide-react";
import type { Service } from "@shared/schema";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { isAuthenticated } = useAuth();

  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: ['/api/services', slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/4" />
            <div className="h-12 bg-slate-200 rounded w-3/4" />
            <div className="h-6 bg-slate-200 rounded w-1/2" />
            <div className="h-32 bg-slate-200 rounded" />
          </div>
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
          <Link href="/services">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const features = Array.isArray(service.features) ? service.features : [];
  const isPurpleService = service.category === 'purple';

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/services">
              <span className="text-slate-600 hover:text-primary-600 cursor-pointer">Services</span>
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{service.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`py-20 ${isPurpleService ? 'bg-gradient-to-br from-purple-50 to-indigo-50' : 'bg-gradient-to-br from-primary-50 to-secondary-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Badge className={`${isPurpleService ? 'bg-purple-100 text-purple-800 hover:bg-purple-100' : 'bg-primary-100 text-primary-800 hover:bg-primary-100'}`}>
                  {isPurpleService ? 'Purple[X] Advanced' : 'Managed[X] Core'}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-slate-600" />
                  <span className="text-sm text-slate-600">24/7 Monitoring</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {service.name}
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary-500" />
                  <span className="text-slate-700">Enterprise-grade protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-secondary-500" />
                  <span className="text-slate-700">Expert support included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link href={`/subscribe/${service.slug}`}>
                    <Button size="lg" className={`${isPurpleService ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600'}`}>
                      Subscribe Now - ${service.monthlyPrice}/month
                    </Button>
                  </Link>
                ) : (
                  <a href="/api/login">
                    <Button size="lg" className={`${isPurpleService ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600'}`}>
                      Sign In to Subscribe
                    </Button>
                  </a>
                )}
                <Link href="/booking">
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">${service.monthlyPrice}</div>
                  <div className="text-slate-600">per month</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="text-slate-600">monitoring</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">&lt;5min</div>
                  <div className="text-slate-600">response time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
                  <div className="text-slate-600">uptime SLA</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features List */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Included</h2>
              <div className="space-y-6">
                {features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-6 h-6 ${isPurpleService ? 'bg-purple-100' : 'bg-secondary-100'} rounded-full flex items-center justify-center mt-1 flex-shrink-0`}>
                      <Check className={`h-4 w-4 ${isPurpleService ? 'text-purple-600' : 'text-secondary-600'}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature}</h3>
                      <p className="text-slate-600">Professional implementation and ongoing management included.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Rapid Deployment</h3>
                    <p className="text-slate-600">Get up and running in 24 hours with our streamlined onboarding process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proactive Protection</h3>
                    <p className="text-slate-600">AI-powered threat detection identifies and blocks attacks before they impact your business.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Expert Support</h3>
                    <p className="text-slate-600">Access to certified security professionals with average 10+ years experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Compliance Ready</h3>
                    <p className="text-slate-600">Built-in compliance reporting for GDPR, HIPAA, SOC 2, and other frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className={`py-20 ${isPurpleService ? 'bg-gradient-to-br from-purple-600 to-indigo-600' : 'bg-gradient-to-br from-primary-600 to-secondary-600'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Start protecting your business today with {service.name}. No setup fees, cancel anytime.
          </p>
          
          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-4">
                  ${service.monthlyPrice}
                  <span className="text-lg text-slate-500 font-normal">/month</span>
                </div>
                <p className="text-slate-600 mb-6">Everything you need to secure your business</p>
                
                {isAuthenticated ? (
                  <Link href={`/subscribe/${service.slug}`}>
                    <Button size="lg" className="w-full">
                      Subscribe Now
                    </Button>
                  </Link>
                ) : (
                  <a href="/api/login">
                    <Button size="lg" className="w-full">
                      Sign In to Subscribe
                    </Button>
                  </a>
                )}
                
                <p className="text-xs text-slate-500 mt-4">
                  30-day free trial • No setup fees • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center space-x-8 text-slate-200">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">30-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span className="text-sm">SOC 2 certified</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
