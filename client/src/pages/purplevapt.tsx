import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ChevronRight,
  Calendar,
  ArrowLeft,
  Shield,
  Target,
  Globe,
  FileSearch,
  CheckCircle,
  Zap,
  TrendingUp,
  Cloud,
  Eye,
  X,
  Check,
  RefreshCw,
  Clock,
  Layers
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncludedCards = [
  {
    title: "Vulnerability Assessment (VA)",
    description: "Continuous and scheduled scanning to identify known vulnerabilities and misconfigurations.",
    icon: Search,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Penetration Testing (PT)",
    description: "Expert-led testing to validate exploitability and attack paths across in-scope assets.",
    icon: Target,
    color: "from-indigo-600 to-purple-700"
  },
  {
    title: "Application & API Testing",
    description: "Assessment of web applications and APIs for OWASP Top 10 and logic flaws.",
    icon: Globe,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Cloud & SaaS Risk Evaluation",
    description: "Testing of cloud configurations, exposed services, and SaaS security posture.",
    icon: Cloud,
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Risk Prioritization & Reporting",
    description: "Business-aligned findings with clear remediation guidance and executive summaries.",
    icon: FileSearch,
    color: "from-purple-600 to-indigo-600"
  }
];

const businessValueItems = [
  {
    title: "Identifies exploitable weaknesses early",
    icon: Eye
  },
  {
    title: "Reduces attack surface and breach likelihood",
    icon: Shield
  },
  {
    title: "Improves remediation efficiency",
    icon: Zap
  },
  {
    title: "Supports audits and risk reporting",
    icon: TrendingUp
  }
];

const complianceFrameworks = [
  "OWASP Top 10",
  "NIST",
  "ISO 27001",
  "SOC 2",
  "PCI DSS"
];

const whoIsForItems = [
  "Organizations preparing for audits or certifications",
  "Businesses with internet-facing applications",
  "Cloud and SaaS environments",
  "Teams needing continuous risk visibility"
];

const deliveryOptions = [
  {
    title: "One-time assessment",
    description: "Point-in-time vulnerability assessment and penetration testing",
    icon: Target
  },
  {
    title: "Scheduled recurring testing",
    description: "Regular testing cycles aligned to your release or audit schedule",
    icon: Clock
  },
  {
    title: "Continuous VAPT subscription",
    description: "Ongoing vulnerability assessment with continuous validation",
    icon: RefreshCw
  }
];

const purpleXServices = [
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "24/7 Managed SOC" },
  { name: "PurpleSentinel (MDR)", path: "/services/purple-x/purplesentinel", description: "Managed Detection & Response" },
  { name: "PurpleConfig", path: "/services/purple-x/purpleconfig", description: "Configuration Management" },
  { name: "PurpleStrike", path: "/services/purple-x/purplestrike", description: "Red Teaming & BAS" }
];

export default function PurpleVAPT() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Vulnerability Assessment & Pen Testing (VAPT) | PurpleVAPT</title>
      <meta name="description" content="Continuous vulnerability assessment and penetration testing for networks, applications, cloud, and APIs. Risk-prioritized and compliance-ready." />
      <meta property="og:title" content="Vulnerability Assessment & Pen Testing (VAPT) | PurpleVAPT" />
      <meta property="og:description" content="Identify, validate, and prioritize exploitable risk across your environment—continuously and on demand." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-6">
              Purple-X | Exposure Identification
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleVAPT — Vulnerability Assessment & Penetration Testing
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Identify, validate, and prioritize exploitable risk across your environment—continuously and on demand.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">Network, application, cloud, and API testing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">Automated + expert-led validation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">Compliance-aware, business-ready reporting</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request a VAPT Assessment
                </Button>
              </a>
              <Link href="/services/purple-x">
                <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  View Purple-X Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
            <div className="flex items-center gap-2 text-slate-600">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-medium">MITRE ATT&CK–aligned testing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="font-medium">OWASP Top 10 coverage</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <RefreshCw className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Subscription or engagement-based delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is PurpleVAPT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is PurpleVAPT?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              PurpleVAPT is PurpleGuard's vulnerability assessment and penetration testing service designed to identify security weaknesses, validate real-world exploitability, and prioritize remediation based on business risk—not just CVSS scores.
            </p>
            <Link href="/services/purple-x">
              <Button variant="link" className="text-purple-600 hover:text-purple-700">
                How Purple-X Works
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included in PurpleVAPT
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive testing coverage across your entire environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncludedCards.map((card, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Delivered */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How PurpleVAPT is Delivered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Hybrid Testing Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  PurpleVAPT combines automated scanning with manual validation to reduce false positives and highlight real risk.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Compliance-Aware Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Testing aligned to common frameworks and audit expectations without "checkbox-only" output.
                </p>
                <div className="flex flex-wrap gap-2">
                  {complianceFrameworks.map((framework, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-purple-600 hover:text-purple-700">
                Compliance Solutions
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValueItems.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-white font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who PurpleVAPT is For
            </h2>
            
            <div className="space-y-4">
              {whoIsForItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/services">
                <Button variant="link" className="text-purple-600 hover:text-purple-700">
                  Industries We Serve
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleVAPT vs Basic Vulnerability Scanning
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-slate-200">
                <CardHeader className="bg-slate-100">
                  <CardTitle className="text-xl text-slate-700 flex items-center gap-2">
                    <X className="h-5 w-5 text-slate-400" />
                    Basic Scanning
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      Automated only
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      Noisy results with false positives
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      Limited context
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-500 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    PurpleVAPT
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      Validated findings
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      Exploit context included
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      Business prioritization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/services/purple-x/purpleconfig">
                <Button variant="link" className="text-purple-600 hover:text-purple-700">
                  PurpleConfig
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="/services/purple-x/purplestrike">
                <Button variant="link" className="text-purple-600 hover:text-purple-700">
                  PurpleStrike
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Delivery Options
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="link" className="text-purple-600 hover:text-purple-700">
                View Pricing Explained
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Purple-X Lifecycle */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Part of the Purple-X Security Lifecycle
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              PurpleVAPT integrates with PurpleSOC, PurpleSentinel (MDR), PurpleConfig, and PurpleStrike to provide continuous exposure management and validation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {purpleXServices.map((service, index) => (
              <Link key={index} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Know your weaknesses before attackers do.
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get proactive about your security posture with continuous vulnerability assessment and penetration testing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                Talk to a Security Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
