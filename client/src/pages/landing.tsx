import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import BookingForm from "@/components/BookingForm";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Clock, Award, Users, Star, Play, ChevronRight, Calendar, Gift, User } from "lucide-react";
import type { Service, BlogPost } from "@shared/schema";

export default function Landing() {
  const [activeServiceCategory, setActiveServiceCategory] = useState<'managed' | 'purple' | 'all'>('managed');

  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const managedServices = services.filter(s => s.category === 'managed');
  const purpleServices = services.filter(s => s.category === 'purple');
  
  const filteredServices = activeServiceCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeServiceCategory);

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
                  Trusted by 500+ SMBs
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-slate-300 text-sm">4.9/5 Security Rating</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Smarter Security. Stronger Defense with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  PurpleGuard
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Enterprise-grade cybersecurity for SMBs. Choose from our Managed[X] services for 24/7 protection 
                or Purple[X] advanced threat hunting. Starting at $299/month with no setup fees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
                  Book Free Security Assessment
                </Button>
                <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 bg-[#6633cc]">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Hero Stats */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-slate-300 text-sm">Threat Detection Rate</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">&lt;5min</div>
                    <div className="text-slate-300 text-sm">Response Time</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-slate-300 text-sm">Protected Clients</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">$90B</div>
                    <div className="text-slate-300 text-sm">Assets Protected</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our Managed[X] core services or Purple[X] advanced threat protection suite
            </p>
          </div>

          <Tabs value={activeServiceCategory} onValueChange={(value) => setActiveServiceCategory(value as any)} className="w-full">
            <TabsList className="grid w-full md:w-auto md:grid-cols-3 mx-auto mb-12">
              <TabsTrigger value="managed">Managed[X] Core</TabsTrigger>
              <TabsTrigger value="purple">Purple[X] Advanced</TabsTrigger>
              <TabsTrigger value="all">View All</TabsTrigger>
            </TabsList>

            <TabsContent value="managed" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managedServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="purple" className="space-y-8">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <CardContent className="p-8">
                  <div className="text-center mb-12">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                      <Users className="h-3 w-3 mr-1" />
                      Purple[X] Advanced Threat Protection
                    </Badge>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Elite Security Operations</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                      Advanced threat hunting, purple team exercises, and custom security solutions for enterprise-grade protection.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purpleServices.map((service) => (
                      <ServiceCard key={service.id} service={service} variant="purple" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why SMBs Choose Managed Security
            </h2>
            <p className="text-xl text-slate-600">Industry data shows the urgent need for professional security services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">43%</div>
              <div className="text-slate-600">of cyberattacks target SMBs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">$1.4M</div>
              <div className="text-slate-600">average annual cyber losses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$90B</div>
              <div className="text-slate-600">SMB cybersecurity spending in 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">14%</div>
              <div className="text-slate-600">of SMBs feel prepared</div>
            </div>
          </div>

          {/* Market Growth Stats */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Market Growth Projections</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-700">2025 MSS Market Size</span>
                      <span className="font-bold text-primary-600">$39.47B</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-700">2030 Projected Size</span>
                      <span className="font-bold text-secondary-600">$66.83B</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-700">Annual Growth Rate</span>
                      <span className="font-bold text-accent-600">11.1% CAGR</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Professional cybersecurity team analyzing data"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent, Scalable Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start with our Essential package or build a custom solution. All plans include 24/7 SOC monitoring.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <PricingCard
              name="Essential Security"
              price="1,299"
              description="Perfect for growing SMBs"
              features={[
                "ManagedFirewall ($299)",
                "ManagedEndpoint ($399)",
                "ManagedBackup ($199)",
                "24/7 SOC Monitoring",
                "Basic Compliance Reports",
                "Email Support"
              ]}
              buttonText="Start Essential Plan"
            />
            
            <PricingCard
              name="Professional Security"
              price="2,199"
              description="Complete protection for enterprises"
              features={[
                "Everything in Essential",
                "ManagedSIEM ($899)",
                "ManagedIdentity ($449)",
                "Advanced Threat Intelligence",
                "Incident Response Team",
                "Phone & Chat Support",
                "Quarterly Security Reviews"
              ]}
              buttonText="Start Professional Plan"
              popular
            />
            
            <PricingCard
              name="Enterprise Security"
              price="Custom pricing"
              description="Tailored for large organizations"
              features={[
                "Everything in Professional",
                "Purple[X] Threat Hunting",
                "Custom Purple Team Exercises",
                "Dedicated Security Architect",
                "Custom Integrations",
                "SLA Guarantees"
              ]}
              buttonText="Contact Sales"
              enterprise
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center">
                <Shield className="h-4 w-4 text-secondary-500 mr-2" />
                30-day free trial
              </span>
              <span className="flex items-center">
                <Shield className="h-4 w-4 text-secondary-500 mr-2" />
                No setup fees
              </span>
              <span className="flex items-center">
                <Shield className="h-4 w-4 text-secondary-500 mr-2" />
                Cancel anytime
              </span>
              <span className="flex items-center">
                <Shield className="h-4 w-4 text-secondary-500 mr-2" />
                99.9% SLA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute discovery call with our security experts. We'll assess your current posture and recommend the right protection strategy.
              </p>

              <BookingForm />

              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Clock className="h-4 w-4 text-primary-500" />
                  <span className="text-sm">30-minute call</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <User className="h-4 w-4 text-primary-500" />
                  <span className="text-sm">Security expert</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Gift className="h-4 w-4 text-primary-500" />
                  <span className="text-sm">Free assessment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Insights & Resources
              </h2>
              <p className="text-xl text-slate-600">Stay ahead of threats with expert analysis and industry updates</p>
            </div>
            <Link href="/blog">
              <Button variant="ghost" className="hidden md:flex items-center">
                View All Articles
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Resource Categories */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore More Resources</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Whitepapers', icon: '📄', description: 'In-depth security research and analysis' },
                { name: 'Webinars', icon: '🎥', description: 'Live and recorded security training sessions' },
                { name: 'Case Studies', icon: '📊', description: 'Real-world security implementations' },
                { name: 'Security Tools', icon: '🛠️', description: 'Free assessment and planning resources' },
              ].map((category) => (
                <Card key={category.name} className="group hover:shadow-lg hover:border-primary-200 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{category.name}</h4>
                    <p className="text-slate-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
