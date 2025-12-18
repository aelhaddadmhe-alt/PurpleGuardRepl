import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  User, 
  Gift, 
  CheckCircle, 
  Star,
  Calendar,
  Phone,
  Video,
  MessageSquare
} from "lucide-react";

export default function Booking() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-secondary-500" />,
      title: "Free Security Assessment",
      description: "Get a comprehensive evaluation of your current security posture with actionable recommendations."
    },
    {
      icon: <User className="h-6 w-6 text-primary-500" />,
      title: "Expert Consultation",
      description: "Speak directly with certified security professionals who understand SMB challenges."
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
      title: "Custom Roadmap",
      description: "Receive a tailored security implementation plan based on your business needs and budget."
    },
    {
      icon: <Gift className="h-6 w-6 text-green-500" />,
      title: "No Commitment Required",
      description: "This consultation is completely free with no obligation to purchase any services."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Book Your Call",
      description: "Fill out the form below and select a convenient time slot."
    },
    {
      step: "2",
      title: "Security Assessment",
      description: "Our expert will review your current security setup and identify vulnerabilities."
    },
    {
      step: "3",
      title: "Custom Recommendations",
      description: "Receive personalized recommendations and a security roadmap for your business."
    },
    {
      step: "4",
      title: "Implementation Plan",
      description: "Get a clear implementation plan with timelines and budget considerations."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-secondary-400" />
            <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
              Free 30-Minute Consultation
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Expert Security Guidance
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Schedule a free discovery call with our cybersecurity experts. We'll assess your current security posture 
            and provide actionable recommendations to protect your business.
          </p>
          <div className="flex items-center justify-center space-x-8 text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-secondary-400" />
              <span>30-minute call</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-secondary-400" />
              <span>Expert guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="h-5 w-5 text-secondary-400" />
              <span>Completely free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Booking Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      Book Your Free Discovery Call
                    </h2>
                    <p className="text-slate-600">
                      Tell us about your business and security challenges. We'll prepare a customized consultation 
                      to address your specific needs.
                    </p>
                  </div>

                  <BookingForm />
                </CardContent>
              </Card>

              {/* Contact Options */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Phone className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-900">Phone</div>
                    <div className="text-xs text-slate-600">+971585159666</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Video className="h-6 w-6 text-secondary-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-900">Video Call</div>
                    <div className="text-xs text-slate-600">Zoom or Teams</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <MessageSquare className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-900">Chat</div>
                    <div className="text-xs text-slate-600">Live support</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits and Process */}
            <div className="space-y-12">
              {/* What You'll Get */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">What You'll Get</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-slate-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic">
                    "The discovery call was incredibly valuable. The team identified security gaps we didn't even know 
                    existed and provided a clear roadmap to address them. Best 30 minutes we've spent on security."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold">MJ</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Michael Johnson</div>
                      <div className="text-sm text-slate-600">CTO, TechCorp Solutions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Stats */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Why This Matters</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">43%</div>
                      <div className="text-xs text-slate-600">of attacks target SMBs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">$1.4M</div>
                      <div className="text-xs text-slate-600">average annual losses</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">87%</div>
                      <div className="text-xs text-slate-600">feel unprepared</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-600">24/7</div>
                      <div className="text-xs text-slate-600">threats never sleep</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-slate-600">Our security experts have helped hundreds of businesses strengthen their defenses.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-slate-600">Businesses Protected</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary-600">10+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-slate-600">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-slate-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">Is the consultation really free?</h4>
                <p className="text-slate-600">
                  Yes, absolutely! There are no hidden fees or obligations. We provide valuable insights 
                  because we believe every business deserves to understand their security risks.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">What happens after the consultation?</h4>
                <p className="text-slate-600">
                  You'll receive a written summary of our findings and recommendations. If you're interested 
                  in our services, we can discuss next steps. If not, you keep all the valuable insights we've shared.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">How should I prepare for the call?</h4>
                <p className="text-slate-600">
                  Come prepared to discuss your current security setup, any concerns you have, and your business goals. 
                  We'll handle the rest and guide you through the assessment process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
