import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardStats from "@/components/DashboardStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Shield, TrendingUp, Calendar, FileText, Settings, Bell } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Home() {
  const { user } = useAuth();
  
  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const { data: dashboardStats, isLoading } = useQuery({
    queryKey: ['/api/dashboard/stats'],
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Welcome Header */}
      <section className="bg-gradient-to-br from-slate-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, {(user as any)?.firstName || 'User'}!
              </h1>
              <p className="text-slate-300">
                Your security posture is looking strong. Here's your dashboard overview.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
                Professional Plan
              </Badge>
              <Button variant="outline" size="sm" className="border-slate-400 text-slate-300 hover:bg-slate-800">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-3 space-y-8">
            {/* Dashboard Stats */}
            {isLoading ? (
              <div className="grid md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-8 bg-slate-200 rounded mb-2" />
                      <div className="h-4 bg-slate-200 rounded" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <DashboardStats stats={dashboardStats} />
            )}

            {/* Active Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Active Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                {dashboardStats?.subscriptions?.length > 0 ? (
                  <div className="space-y-4">
                    {dashboardStats.subscriptions.map((subscription: any) => (
                      <div key={subscription.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <Shield className="h-5 w-5 text-secondary-600" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{subscription.service?.name || 'Service'}</div>
                            <div className="text-sm text-slate-600">
                              Active • Next renewal: {subscription.nextRenewal ? new Date(subscription.nextRenewal).toLocaleDateString() : 'N/A'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                          <span className="text-sm text-slate-600">${subscription.monthlyPrice}/mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No active services</h3>
                    <p className="text-slate-600 mb-4">Start protecting your business with our managed security services.</p>
                    <Link href="/services">
                      <Button>Browse Services</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Security Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Security Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                {dashboardStats?.events?.length > 0 ? (
                  <div className="space-y-4">
                    {dashboardStats.events.map((event: any) => (
                      <div key={event.id} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2" />
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">{event.title}</div>
                          <div className="text-sm text-slate-600">
                            {new Date(event.createdAt).toLocaleString()} • {event.service?.name || 'System'}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <TrendingUp className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No recent events</h3>
                    <p className="text-slate-600">Your security services will appear here once activated.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/dashboard">
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-3" />
                    View Reports
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-3" />
                    Billing & Plans
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-3" />
                    Book Call
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Available Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Expand Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.slice(0, 3).map((service) => (
                    <Link key={service.id} href={`/services/${service.slug}`}>
                      <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
                        <div className="font-medium text-slate-900 text-sm">{service.name}</div>
                        <div className="text-xs text-slate-600">${service.monthlyPrice}/month</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/services">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">Need Help?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Our security experts are available 24/7 to assist you.
                </p>
                <Button size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
