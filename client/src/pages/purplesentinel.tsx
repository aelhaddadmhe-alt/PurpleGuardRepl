import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ChevronRight,
  Calendar,
  ArrowLeft,
  CheckCircle,
  Eye,
  Search,
  Zap,
  Target,
  FileText,
  Clock,
  TrendingDown,
  BarChart3,
  DollarSign,
  AlertTriangle,
  Users,
  Cloud,
  Building,
  X,
  Check,
  Globe,
  Lock
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncludedCards = [
  {
    title: "Continuous Threat Detection",
    description: "24/7 monitoring and detection across endpoints, networks, and cloud environments using advanced analytics and threat intelligence.",
    icon: Eye,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Alert Correlation & Investigation",
    description: "Intelligent correlation of security events to surface real threats and reduce noise. Expert-led investigation of suspicious activity.",
    icon: Search,
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Automated & Guided Response",
    description: "Rapid containment and remediation actions—automated where appropriate, guided by analysts when human judgment is needed.",
    icon: Zap,
    color: "from-indigo-500 to-violet-600"
  },
  {
    title: "Threat Hunting",
    description: "Proactive threat hunting to identify hidden threats and adversary activity that evades automated detection.",
    icon: Target,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Incident Reporting & Visibility",
    description: "Clear incident reports, operational dashboards, and visibility into threat activity for security and executive stakeholders.",
    icon: FileText,
    color: "from-violet-600 to-purple-700"
  }
];

const businessValueItems = [
  {
    icon: Clock,
    title: "Faster detection and containment",
    description: "Reduce time from threat detection to response with 24/7 SOC-backed operations."
  },
  {
    icon: TrendingDown,
    title: "Reduced dwell time and impact",
    description: "Minimize attacker dwell time and limit the blast radius of security incidents."
  },
  {
    icon: BarChart3,
    title: "Improved security visibility",
    description: "Gain comprehensive visibility across endpoints, networks, and cloud environments."
  },
  {
    icon: DollarSign,
    title: "Lower cost than building in-house MDR",
    description: "Access enterprise-grade MDR capabilities without the cost of building an internal team."
  }
];

const whoThisIsFor = [
  {
    icon: AlertTriangle,
    title: "Organizations targeted by ransomware",
    description: "Proactive detection and response to ransomware threats before encryption occurs."
  },
  {
    icon: Users,
    title: "Businesses without internal SOC teams",
    description: "Full MDR coverage without the need to hire, train, and retain security analysts."
  },
  {
    icon: Cloud,
    title: "Cloud and hybrid environments",
    description: "Protection across on-premises, cloud, and hybrid infrastructure."
  },
  {
    icon: Building,
    title: "Compliance and risk-driven organizations",
    description: "Meet regulatory requirements with documented detection and response capabilities."
  }
];

const comparisonTable = [
  {
    feature: "24/7 Monitoring",
    edr: false,
    soc: true,
    purplesentinel: true
  },
  {
    feature: "Threat Detection",
    edr: true,
    soc: true,
    purplesentinel: true
  },
  {
    feature: "Alert Investigation",
    edr: false,
    soc: true,
    purplesentinel: true
  },
  {
    feature: "Active Response & Containment",
    edr: false,
    soc: false,
    purplesentinel: true
  },
  {
    feature: "Threat Hunting",
    edr: false,
    soc: false,
    purplesentinel: true
  },
  {
    feature: "Endpoint Coverage",
    edr: true,
    soc: false,
    purplesentinel: true
  },
  {
    feature: "Network & Cloud Coverage",
    edr: false,
    soc: true,
    purplesentinel: true
  },
  {
    feature: "Vendor-Agnostic Integration",
    edr: false,
    soc: false,
    purplesentinel: true
  }
];

const purpleXServices = [
  { name: "PurpleSOC", href: "/services/purple-x/purplesoc", description: "24/7 Managed SOC" },
  { name: "PurpleVAPT", href: "/services/purple-x/purplevapt", description: "Vulnerability Assessment & Pen Testing" },
  { name: "PurpleConfig", href: "/services/purple-x/purpleconfig", description: "Configuration & Hardening" },
  { name: "PurpleSentry", href: "/services/purple-x/purplesentry", description: "Digital Risk Protection" }
];

export default function PurpleSentinel() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed Detection & Response (MDR) | PurpleSentinel</title>
      <meta name="description" content="24/7 Managed Detection and Response for endpoints, networks, and cloud. Stop threats faster with PurpleSentinel MDR." />
      <meta property="og:title" content="Managed Detection & Response (MDR) | PurpleSentinel" />
      <meta property="og:description" content="Detect, investigate, and respond to active threats across endpoints, networks, and cloud—24/7." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a0033] via-[#6633cc] to-[#2d0066] overflow-hidden">
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
              Purple-X | Managed Detection & Response
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleSentinel — Managed Detection & Response (MDR)
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Detect, investigate, and respond to active threats across endpoints, networks, and cloud—24/7.
            </p>
            
            {/* Hook Bullets */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>Continuous detection and response</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>Endpoint, network, and cloud coverage</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>SOC-backed MDR operations</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request an MDR Consultation
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
      <section className="bg-gradient-to-r from-purple-900 to-violet-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-purple-300" />
              <span className="text-white font-medium">24/7 MDR operations</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Target className="h-6 w-6 text-purple-300" />
              <span className="text-white font-medium">MITRE ATT&CK–aligned detection</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-purple-300" />
              <span className="text-white font-medium">Subscription-based MDR service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is PurpleSentinel */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is PurpleSentinel?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              PurpleSentinel is PurpleGuard's Managed Detection and Response (MDR) service that continuously monitors security telemetry to identify, investigate, and contain active threats. The service combines advanced detection logic with human-led response to reduce dwell time and business impact.
            </p>
            <Link href="/services/purple-x">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                How Purple-X Works
                <ChevronRight className="h-4 w-4 ml-2" />
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
              What's Included in PurpleSentinel
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive MDR coverage from detection to response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncludedCards.map((card, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />
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
              How PurpleSentinel is Delivered
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Extended Detection Coverage (MXDR)</h3>
              <p className="text-slate-600 leading-relaxed">
                PurpleSentinel extends detection and response coverage beyond endpoints to include network telemetry, cloud workloads, and identity systems—delivering true extended detection and response (MXDR) capabilities.
              </p>
            </Card>
            
            <Card className="border-0 shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mb-6">
                <Lock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vendor-Agnostic MDR Operations</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                PurpleSentinel integrates with existing security tools and telemetry sources without forcing platform replacement. Our analysts work with your current investments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  Continuous threat monitoring
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  Investigation and escalation
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  Active response and containment
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  Ongoing detection tuning
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Why organizations choose PurpleSentinel MDR
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValueItems.map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-purple-200 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who PurpleSentinel Is For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoThisIsFor.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-slate-50 hover:bg-purple-50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/industries">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Industries We Serve
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              EDR vs SOC vs PurpleSentinel
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how PurpleSentinel MDR compares to standalone solutions
            </p>
          </div>
          
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-violet-600">
                  <tr>
                    <th className="text-left py-4 px-6 text-white font-semibold">Capability</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">EDR Only</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">SOC Only</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">PurpleSentinel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-4 px-6 text-slate-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.edr ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.soc ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.purplesentinel ? (
                          <Check className="h-5 w-5 text-purple-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/services/purple-x/purplesoc">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Learn about PurpleSOC
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/managed-edr">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Managed EDR Services
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pricing Model
            </h2>
          </div>
          
          <Card className="border-0 shadow-lg p-8 text-center bg-gradient-to-br from-slate-50 to-purple-50">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              PurpleSentinel is priced per protected asset (endpoint, workload, or data source), per month. Coverage scales based on your environment size and response scope requirements.
            </p>
            <Link href="/pricing">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View Pricing Explained
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Part of Purple-X */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Part of the Purple-X Threat Lifecycle
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              PurpleSentinel integrates with PurpleSOC, PurpleVAPT, PurpleConfig, and PurpleSentry to deliver detection, response, and exposure management as a unified service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purpleXServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full hover:border-purple-300">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">{service.name}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Detect faster. Respond smarter. Reduce impact.
          </h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Get 24/7 managed detection and response for your organization. Let our experts protect your endpoints, networks, and cloud environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                Talk to an MDR Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
