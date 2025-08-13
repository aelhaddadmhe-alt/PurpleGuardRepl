import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Server, Eye, Users, Lock, Globe, Database, AlertTriangle } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap = {
  'fas fa-shield-alt': Shield,
  'fas fa-laptop': Server,
  'fas fa-chart-line': Eye,
  'fas fa-search': AlertTriangle,
  'fas fa-users': Users,
};

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
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
            Comprehensive Security Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our complete portfolio of managed security services and advanced purple team exercises
          </p>
        </div>
      </section>

      {/* Managed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Managed Services</Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">Managed[X] Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              24/7 managed security services with proactive monitoring and rapid response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Shield;
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">Managed</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {(service.features as string[]).slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          ${service.monthlyPrice}<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/subscribe/${service.slug}`}>Subscribe Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Purple Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Purple Services</Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">Purple[X] Advanced Security</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elite security services with human expertise and advanced threat hunting capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purpleServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || AlertTriangle;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 bg-gradient-to-br from-secondary/5 to-accent/5">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-secondary to-accent">Purple Team</Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(service.features as string[]).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                          ${service.monthlyPrice}<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button asChild className="flex-1 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
                      <Link href={`/booking?service=${service.slug}`}>Book Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}