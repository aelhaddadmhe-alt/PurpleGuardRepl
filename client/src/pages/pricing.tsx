import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Shield, Star, ArrowRight, ChevronRight } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Pricing() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-12 bg-muted rounded w-1/3 mb-4"></div>
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="h-3 bg-muted rounded"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const managedServices = services?.filter(s => s.category === 'managed') || [];
  const purpleServices = services?.filter(s => s.category === 'purple') || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Transparent Security Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect security package for your business. No hidden fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              24/7 expert support
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Managed Services</Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">Managed[X] Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional security management with predictable monthly pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managedServices.map((service, index) => (
              <Card 
                key={service.id} 
                className={`relative group hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'border-2 border-secondary shadow-lg scale-105' : 'border hover:border-secondary/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{service.name.replace('Managed', '')}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${service.monthlyPrice}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(service.features as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${index === 1 ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                  >
                    <Link href={`/subscribe/${service.slug}`}>
                      Start Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purple Services Pricing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent">Elite Services</Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">Purple[X] Advanced Security</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security services with dedicated security experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {purpleServices.map((service) => (
              <Card 
                key={service.id} 
                className="relative group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 bg-gradient-to-br from-secondary/5 to-accent/5"
              >
                <div className="absolute top-4 right-4">
                  <Star className="h-6 w-6 text-accent fill-current" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-secondary" />
                    {service.name.replace('Purple', '')}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                      ${service.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(service.features as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                  >
                    <Link href={`/booking?service=${service.slug}`}>
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purple X Bundles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent">Value Bundles</Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">Recommended Purple X Bundles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize value with curated service combinations designed for your security maturity level
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-6 font-bold text-primary">Bundle</th>
                  <th className="text-left py-4 px-6 font-bold text-primary">Included Services</th>
                  <th className="text-right py-4 px-6 font-bold text-primary">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-900">Purple X Core</td>
                  <td className="py-4 px-6 text-slate-600">PurpleVAPT (VAaaS), PurpleSOC, PurpleConfig</td>
                  <td className="text-right py-4 px-6 font-bold text-secondary">$2,500/month</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-900">Purple X Advanced</td>
                  <td className="py-4 px-6 text-slate-600">PurpleSentinel (MDR), PurpleSOC, PurpleSentry</td>
                  <td className="text-right py-4 px-6 font-bold text-secondary">$4,500/month</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-gradient-to-r from-secondary/5 to-accent/5">
                  <td className="py-4 px-6 font-semibold text-slate-900">Purple X Complete</td>
                  <td className="py-4 px-6 text-slate-600">All Purple X Services</td>
                  <td className="text-right py-4 px-6 font-bold text-secondary">$7,000+/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90" data-testid="button-custom-quote">
              <ArrowRight className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-individual-pricing">
              <Link href="/services/purple-x">
                View Individual Service Prices
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              All pricing shown is indicative. Final pricing depends on environment size, complexity, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business has unique security requirements. Let's discuss how we can create 
            a tailored security program that fits your specific needs and budget.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
            <Link href="/booking">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}