import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  ChevronRight,
  Calendar,
  ArrowLeft,
  CheckCircle,
  Shield,
  AlertTriangle,
  Search,
  FileText,
  Clock,
  Users,
  Activity,
  Zap,
  TrendingUp,
  Target,
  Check,
  X,
  Headphones,
  BarChart3,
  Settings,
  MessageSquare
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncludedCards = [
  {
    title: "24/7 Security Monitoring",
    description: "Continuous monitoring of logs, alerts, and security events across the environment.",
    icon: Clock
  },
  {
    title: "Alert Triage & Noise Reduction",
    description: "Correlation and prioritization of alerts to surface real threats and suppress false positives.",
    icon: AlertTriangle
  },
  {
    title: "Threat Investigation & Analysis",
    description: "Contextual analysis of suspicious activity to determine impact and root cause.",
    icon: Search
  },
  {
    title: "Incident Response Coordination",
    description: "Guided containment, remediation, and escalation aligned to severity.",
    icon: Shield
  },
  {
    title: "Reporting & Visibility",
    description: "Operational dashboards and incident reports for IT, security, and compliance teams.",
    icon: FileText
  }
];

const analystCapabilities = [
  "Continuous alert monitoring",
  "Investigation and escalation",
  "Incident response guidance",
  "Ongoing detection tuning"
];

const businessValueItems = [
  {
    title: "Faster threat detection and response",
    icon: Zap
  },
  {
    title: "Reduced alert fatigue",
    icon: TrendingUp
  },
  {
    title: "Improved security visibility",
    icon: Eye
  },
  {
    title: "Lower cost than in-house SOC",
    icon: BarChart3
  }
];

const whoIsForItems = [
  "Organizations without 24/7 SOC coverage",
  "IT teams overwhelmed by security alerts",
  "Compliance-driven businesses",
  "Growing environments with increasing telemetry"
];

const comparisonData = {
  headers: ["Feature", "Basic Monitoring", "PurpleSOC"],
  rows: [
    { feature: "Alert Generation", basic: true, purplesoc: true },
    { feature: "Alert Triage & Prioritization", basic: false, purplesoc: true },
    { feature: "Threat Investigation", basic: false, purplesoc: true },
    { feature: "Incident Response", basic: false, purplesoc: true },
    { feature: "24/7 Human Analysts", basic: false, purplesoc: true },
    { feature: "Compliance Reporting", basic: false, purplesoc: true },
    { feature: "Detection Tuning", basic: false, purplesoc: true }
  ]
};

const ecosystemLinks = [
  { name: "PurpleSentinel (MDR)", href: "/services/purple-x/purplesentinel" },
  { name: "PurpleVAPT", href: "/services/purple-x/purplevapt" },
  { name: "PurpleConfig", href: "/services/purple-x" },
  { name: "PurpleSentry", href: "/services/purple-x/purplesentry" }
];

export default function PurpleSOC() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>24/7 Managed SOC & Incident Response | PurpleSOC</title>
      <meta name="description" content="24/7 managed SOC with continuous monitoring, alert triage, and incident response. Reduce dwell time with PurpleSOC." />
      <meta property="og:title" content="24/7 Managed SOC & Incident Response | PurpleSOC" />
      <meta property="og:description" content="Continuous threat monitoring, alert triage, and incident response—operated by security professionals, around the clock." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-blue-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 mb-6">
              Purple-X | Security Operations
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleSOC — 24/7 Managed Security Operations Center
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Continuous threat monitoring, alert triage, and incident response—operated by security professionals, around the clock.
            </p>
            
            {/* Hook Bullets */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-cyan-300">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 monitoring and response</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <CheckCircle className="h-5 w-5" />
                <span>Alert triage and investigation</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <CheckCircle className="h-5 w-5" />
                <span>Compliance-ready reporting</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request a SOC Consultation
                </Button>
              </a>
              <Link href="/services/purple-x">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                  View Purple-X Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium">Always-on SOC operations</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium">MITRE ATT&CK–aligned detection</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium">Subscription-based SOCaaS model</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is PurpleSOC */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is PurpleSOC?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PurpleSOC is PurpleGuard's managed Security Operations Center (SOC) service that provides continuous monitoring, alert triage, investigation, and incident response across security telemetry. The service reduces alert fatigue and accelerates response to real threats.
            </p>
            <Link href="/services/purple-x">
              <Button variant="link" className="text-blue-600 hover:text-blue-700 mt-4">
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
              What's Included in PurpleSOC
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive SOC capabilities delivered as a managed service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncludedCards.map((card, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
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
              How PurpleSOC is Delivered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Technology-Agnostic SOC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg">
                  PurpleSOC integrates with existing security tools and telemetry sources without forcing platform replacement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Operated by PurpleGuard Analysts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {analystCapabilities.map((capability, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/purple-x">
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 mt-4 p-0">
                    PurpleGuard Operating Model
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
            <p className="text-lg text-blue-200">
              The impact of managed SOC operations on your organization
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValueItems.map((item, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <p className="text-white font-medium text-lg">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who PurpleSOC is For
              </h2>
              <ul className="space-y-4">
                {whoIsForItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="link" className="text-blue-600 hover:text-blue-700 mt-6 p-0">
                  Industries We Serve
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Need SOC Coverage?</h3>
                  <p className="text-slate-600">Talk to our security experts</p>
                </div>
              </div>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleSOC vs Basic Monitoring
            </h2>
            <p className="text-lg text-slate-600">
              See why managed SOC operations deliver better outcomes
            </p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-900 to-cyan-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Basic Monitoring</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">PurpleSOC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonData.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-slate-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.basic ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.purplesoc ? (
                          <Check className="h-5 w-5 text-cyan-600 mx-auto" />
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
            <Link href="/services/purple-x/purplesentinel">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                PurpleSentinel (MDR)
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/services/managed-edr">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Managed EDR
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pricing Model
            </h2>
          </div>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    PurpleSOC is priced as a subscription based on telemetry volume, monitored assets, and response scope. Coverage options scale from business-hours to full 24/7 operations.
                  </p>
                  <Link href="/pricing">
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 mt-4 p-0">
                      View Pricing Explained
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Part of Purple-X Ecosystem */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Part of the Purple-X Security Ecosystem
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              PurpleSOC integrates with PurpleSentinel (MDR), PurpleVAPT, PurpleConfig, and PurpleSentry to deliver detection, response, and exposure management as a unified service.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full bg-white hover:bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold text-slate-900">{link.name}</p>
                    <ChevronRight className="h-5 w-5 text-blue-600 mx-auto mt-2" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Turn alerts into action. Detect and respond faster.
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Get 24/7 security operations without building an in-house SOC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white min-w-[200px]">
                <MessageSquare className="h-5 w-5 mr-2" />
                Talk to a SOC Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
