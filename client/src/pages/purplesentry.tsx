import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Eye, 
  Globe, 
  Search,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  ArrowLeft,
  Lock,
  Radar,
  ShieldAlert,
  Fingerprint
} from "lucide-react";

const serviceModules = [
  {
    id: "dark-web",
    title: "Dark Web Monitoring",
    subtitle: "Your One-Stop Dark Web Solution",
    icon: Eye,
    description: "Navigate the dark web with our ultimate compass for detecting threats before they escalate. Monitor underground forums for mentions of your organization, leaked credentials, and emerging threats targeting your industry.",
    features: [
      "Fraud Protection - Detect stolen credentials and payment data",
      "Critical Vulnerability Alerts - Early warning of exploits targeting your systems",
      "Underground Forum Monitoring - Track mentions of your organization",
      "Data Leak Detection - Identify exposed sensitive information",
      "Threat Actor Tracking - Monitor known adversaries targeting your sector"
    ],
    color: "from-purple-600 to-indigo-700"
  },
  {
    id: "easm",
    title: "External Attack Surface Management (EASM)",
    subtitle: "Think Like a Hacker, Defend Like a Pro",
    icon: Radar,
    description: "With EASM advanced continuous monitoring algorithms, you gain enhanced visibility into your external-facing assets. Discover unknown assets, shadow IT, and vulnerabilities before attackers do.",
    features: [
      "Internet-Facing Asset Discovery - Find all your external assets",
      "Shadow IT Detection - Identify unauthorized services and applications",
      "Vulnerability Intelligence - Prioritize risks based on exploitability",
      "Continuous Monitoring - Real-time alerts on new exposures",
      "Attack Surface Reduction - Actionable recommendations to minimize risk"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "brand-protection",
    title: "Brand Protection Services",
    subtitle: "Guard Your Brand, Strengthen Your Trust",
    icon: ShieldAlert,
    description: "Brand Protection (BP) Services proactively guard against phishing scams, impersonation attacks, and fraudulent sites. Protect your reputation by detecting and facilitating the takedown of threats targeting your brand.",
    features: [
      "Phishing Detection - Identify fake sites mimicking your brand",
      "Domain Monitoring - Track lookalike domains and typosquatting",
      "Social Media Impersonation - Detect fake accounts and profiles",
      "Fraudulent Site Takedown - Facilitate removal of malicious sites",
      "Brand Abuse Alerts - Real-time notifications of brand misuse"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "cti",
    title: "Cyber Threat Intelligence (CTI)",
    subtitle: "Intelligence You Need, When You Need It",
    icon: Fingerprint,
    description: "Get the threat intelligence you need, exactly when you need it. Our CTI service delivers actionable insights on emerging threats, threat actors, and vulnerabilities relevant to your organization.",
    features: [
      "Threat Actor Profiles - Detailed intelligence on adversaries",
      "Industry-Specific Threats - Insights tailored to your sector",
      "Vulnerability Intelligence - Context on actively exploited CVEs",
      "Indicators of Compromise (IOCs) - Actionable threat indicators",
      "Strategic Threat Reports - Executive-level threat briefings"
    ],
    color: "from-blue-500 to-cyan-600"
  }
];

const keyBenefits = [
  "Visibility into unknown or unmanaged external assets",
  "Early warning of data leaks and credential exposure",
  "Reduced risk of brand abuse and impersonation",
  "Improved external risk posture",
  "Proactive threat detection before attacks occur",
  "Comprehensive digital footprint awareness"
];

export default function PurpleSentry() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>PurpleSentry - Threat Intelligence, EASM & Digital Risk Protection | PurpleGuard</title>
      <meta name="description" content="PurpleSentry provides External Attack Surface Management (EASM), Dark Web Monitoring, Brand Protection, and Cyber Threat Intelligence to identify and manage risks outside your traditional perimeter." />
      <meta property="og:title" content="PurpleSentry - Threat Intelligence, EASM & Digital Risk Protection | PurpleGuard" />
      <meta property="og:description" content="Continuous monitoring of your external attack surface and digital presence. Starting at $750/month." />
      <meta property="og:type" content="website" />
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-orange-900/30 to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6 -ml-2" data-testid="button-back-purple-x">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple X Services
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6" data-testid="badge-category">
                External Risk & Threat Intelligence
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="heading-purplesentry">
                PurpleSentry
              </h1>
              
              <p className="text-2xl text-orange-300 font-medium mb-4">
                Threat Intelligence, EASM & Digital Risk Protection
              </p>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                PurpleSentry focuses on identifying and managing risks outside the traditional perimeter by continuously monitoring your external attack surface and digital presence. See what attackers see before they strike.
              </p>

              <div className="p-4 bg-white/10 rounded-lg border border-white/20 mb-8">
                <div className="text-sm mb-1 text-[#000433]">Starting Price</div>
                <div className="text-3xl font-bold text-[#000433]">$750<span className="text-lg text-[#000433]">/month</span></div>
                <div className="text-sm mt-2 text-[#f97316]">Per Organization</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-book-consultation">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-view-pricing">
                    View Full Pricing
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl" />
                <Card className="relative bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8 text-orange-400" />
                      Best For
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="text-lg">External attack surface & digital risk protection for organizations needing visibility beyond their perimeter.</p>
                    <ul className="mt-4 space-y-2">
                      {keyBenefits.slice(0, 4).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleSentry Service Modules
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four integrated capabilities for comprehensive external threat visibility and digital risk protection
            </p>
          </div>

          <div className="space-y-16">
            {serviceModules.map((module, index) => (
              <div 
                key={module.id}
                id={module.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'bg-slate-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl' : ''}`}
                data-testid={`section-${module.id}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                        <module.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-orange-600 font-medium mb-4">{module.subtitle}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{module.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Shield className="h-5 w-5 text-orange-500" />
                          Key Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {module.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-slate-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#000033] to-orange-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive external visibility and proactive threat detection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to See Your External Attack Surface?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call to understand your organization's external exposure and digital risk posture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600" data-testid="button-cta-discovery">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Discovery Call
              </Button>
            </Link>
            <Link href="/services/purple-x">
              <Button size="lg" variant="outline" data-testid="button-cta-all-services">
                View All Purple X Services
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              All pricing shown is indicative. Final pricing depends on environment size, complexity, and compliance requirements.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
