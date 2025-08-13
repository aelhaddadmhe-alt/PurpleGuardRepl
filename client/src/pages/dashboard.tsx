import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardStats from "@/components/DashboardStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  TrendingUp, 
  Settings, 
  Bell, 
  CreditCard, 
  FileText, 
  Calendar,
  Download,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Clock,
  User
} from "lucide-react";

export default function Dashboard() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();

  const { data: dashboardStats, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/dashboard/stats'],
    enabled: isAuthenticated,
  });

  const { data: securityEvents = [] } = useQuery({
    queryKey: ['/api/security-events'],
    enabled: isAuthenticated,
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
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
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/3" />
            <div className="grid md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-200 rounded" />
              ))}
            </div>
            <div className="h-64 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'threat_blocked':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'scan_completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rule_updated':
        return <Settings className="h-4 w-4 text-blue-500" />;
      default:
        return <Bell className="h-4 w-4 text-slate-500" />;
    }
  };

  const getEventColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-l-red-500 bg-red-50';
      case 'high':
        return 'border-l-orange-500 bg-orange-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-slate-500 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Security Dashboard
              </h1>
              <p className="text-slate-300">
                Welcome back, {user?.firstName || 'User'}! Here's your security overview.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
                {dashboardStats?.subscriptions?.length > 0 ? 'Professional Plan' : 'No Active Plan'}
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
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full md:w-auto md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="events">Security Events</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Dashboard Stats */}
            {statsLoading ? (
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

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Recent Security Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {securityEvents.length > 0 ? (
                      <div className="space-y-4">
                        {securityEvents.slice(0, 5).map((event: any) => (
                          <div 
                            key={event.id} 
                            className={`border-l-4 p-4 rounded-lg ${getEventColor(event.severity)}`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                {getEventIcon(event.eventType)}
                                <div className="flex-1">
                                  <h4 className="font-medium text-slate-900">{event.title}</h4>
                                  <p className="text-sm text-slate-600 mt-1">{event.description}</p>
                                  <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                                    <span>{new Date(event.createdAt).toLocaleString()}</span>
                                    <span>•</span>
                                    <span className="capitalize">{event.severity} severity</span>
                                  </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        <div className="pt-4 border-t">
                          <Button variant="outline" className="w-full">
                            View All Events
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Shield className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">All Clear</h3>
                        <p className="text-slate-600">No security events to report. Your systems are secure.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-3" />
                      Download Security Report
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-3" />
                      Manage Services
                    </Button>
                    <Link href="/booking">
                      <Button variant="ghost" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-3" />
                        Schedule Consultation
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-3" />
                      Export Data
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Need Help?</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Our security experts are available 24/7 to assist you with any questions or concerns.
                    </p>
                    <Button size="sm" className="w-full">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Your Security Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                {dashboardStats?.subscriptions?.length > 0 ? (
                  <div className="space-y-6">
                    {dashboardStats.subscriptions.map((subscription: any) => (
                      <div key={subscription.id} className="border border-slate-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                              <Shield className="h-6 w-6 text-secondary-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">{subscription.service?.name || 'Service'}</h3>
                              <p className="text-slate-600">{subscription.service?.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-green-100 text-green-800 mb-2">Active</Badge>
                            <div className="text-lg font-bold">${subscription.monthlyPrice}/month</div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600">Status:</span>
                            <div className="font-medium capitalize">{subscription.status}</div>
                          </div>
                          <div>
                            <span className="text-slate-600">Next Renewal:</span>
                            <div className="font-medium">
                              {subscription.nextRenewal ? new Date(subscription.nextRenewal).toLocaleDateString() : 'N/A'}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-600">Started:</span>
                            <div className="font-medium">
                              {new Date(subscription.startDate || subscription.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3 mt-4">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-2" />
                            Configure
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            View Reports
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center pt-6 border-t">
                      <h4 className="font-semibold text-slate-900 mb-2">Add More Protection</h4>
                      <p className="text-slate-600 mb-4">Strengthen your security posture with additional services.</p>
                      <Link href="/services">
                        <Button variant="outline">
                          Browse Services
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Shield className="h-16 w-16 text-slate-300 mx-auto mb-6" />
                    <h3 className="text-xl font-medium text-slate-900 mb-4">No Active Services</h3>
                    <p className="text-slate-600 mb-6">
                      Start protecting your business with our comprehensive security services.
                    </p>
                    <Link href="/services">
                      <Button>Browse Security Services</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Security Events Log
                </CardTitle>
              </CardHeader>
              <CardContent>
                {securityEvents.length > 0 ? (
                  <div className="space-y-4">
                    {securityEvents.map((event: any) => (
                      <div 
                        key={event.id} 
                        className={`border-l-4 p-4 rounded-lg ${getEventColor(event.severity)}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {getEventIcon(event.eventType)}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium text-slate-900">{event.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {event.severity}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-600 mb-2">{event.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-slate-500">
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {new Date(event.createdAt).toLocaleString()}
                                </span>
                                <span>•</span>
                                <span>{event.service?.name || 'System'}</span>
                                <span>•</span>
                                <span className="capitalize">{event.eventType.replace('_', ' ')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {event.resolved ? (
                              <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                            ) : (
                              <Badge variant="outline">Open</Badge>
                            )}
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-xl font-medium text-slate-900 mb-4">No Security Events</h3>
                    <p className="text-slate-600">
                      Great news! No security events have been logged. Your systems are secure.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Billing Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        ${dashboardStats?.totalMonthlyCost?.toFixed(0) || '0'}
                      </div>
                      <div className="text-sm text-slate-600">Monthly Total</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        {dashboardStats?.activeServices || 0}
                      </div>
                      <div className="text-sm text-slate-600">Active Services</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">Current</div>
                      <div className="text-sm text-slate-600">Account Status</div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Invoices
                    </Button>
                    <Button variant="outline">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Update Payment Method
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Receipt
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  {dashboardStats?.subscriptions?.length > 0 ? (
                    <div className="space-y-4">
                      {dashboardStats.subscriptions.map((subscription: any) => (
                        <div key={subscription.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-slate-900">{subscription.service?.name || 'Service'}</h4>
                            <p className="text-sm text-slate-600">
                              Next billing: {subscription.nextRenewal ? new Date(subscription.nextRenewal).toLocaleDateString() : 'N/A'}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">${subscription.monthlyPrice}/month</div>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CreditCard className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">No Active Subscriptions</h3>
                      <p className="text-slate-600">Start protecting your business with our security services.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
