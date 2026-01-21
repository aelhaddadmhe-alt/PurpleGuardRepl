import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Activity,
  Shield,
  Eye,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  ArrowLeft,
  Search,
  AlertTriangle,
  Globe,
  Target,
  Zap,
  TrendingUp,
  FileSearch,
  BarChart3,
  X,
  Check,
  Radar,
  Server,
  GitBranch,
  LineChart
} from "lucide-react";

const serviceOverviewCards = [
  {
    id: "nta-section",
    title: "Network Traffic Analysis",
    description: "Deep packet inspection and flow analysis to detect suspicious patterns and anomalies in east-west and north-south traffic.",
    icon: Activity,
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "lateral-section",
    title: "Lateral Movement Detection",
    description: "Identify attackers moving between systems, detecting credential abuse, privilege escalation, and internal reconnaissance.",
    icon: GitBranch,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "behavioral-section",
    title: "Behavioral & Anomaly Detection",
    description: "Machine learning-powered detection of abnormal network behavior, protocol anomalies, and suspicious communications.",
    icon: Radar,
    color: "from-teal-600 to-emerald-600"
  },
  {
    id: "investigation-section",
    title: "Threat Investigation & Context",
    description: "Rich contextual data for security analysts to investigate alerts, understand attack scope, and respond effectively.",
    icon: Search,
    color: "from-cyan-600 to-teal-700"
  },
  {
    id: "reporting-section",
    title: "Reporting & Visibility",
    description: "Comprehensive dashboards and reports providing network security posture insights for IT and security teams.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  }
];

const businessValueItems = [
  {
    title: "Detects threats missed by endpoints",
    description: "Uncover network-level threats that bypass endpoint detection, including encrypted malware communications and protocol abuse.",
    icon: Eye
  },
  {
    title: "Exposes lateral movement early",
    description: "Identify attackers traversing your network before they reach critical assets, reducing dwell time and breach impact.",
    icon: GitBranch
  },
  {
    title: "Improves internal network visibility",
    description: "Gain comprehensive insight into internal traffic patterns, shadow IT, and unauthorized communications.",
    icon: Network
  },
  {
    title: "Strengthens incident response accuracy",
    description: "Provide security teams with network-level evidence and context for faster, more accurate incident investigation.",
    icon: Target
  }
];

const whoIsForItems = [
  "Organizations with flat or complex networks",
  "Cloud and hybrid environments",
  "Businesses concerned about insider threats",
  "Teams seeking deeper visibility beyond EDR"
];

const comparisonItems = [
  {
    feature: "Traffic Visibility",
    endpointOnly: "Endpoint processes only",
    purpleReveal: "Full network visibility (east-west & north-south)"
  },
  {
    feature: "Lateral Movement Detection",
    endpointOnly: "Limited to host activity",
    purpleReveal: "Network-wide movement tracking"
  },
  {
    feature: "Encrypted Traffic Analysis",
    endpointOnly: "Endpoint decryption only",
    purpleReveal: "Behavioral analysis of encrypted flows"
  },
  {
    feature: "IoT/OT Visibility",
    endpointOnly: "No coverage",
    purpleReveal: "Full device visibility"
  },
  {
    feature: "Attack Scope Understanding",
    endpointOnly: "Single host context",
    purpleReveal: "Network-wide attack mapping"
  }
];

const purpleXServices = [
  { name: "PurpleSentry", href: "/services/purple-x/purplesentry", description: "External Attack Surface Management" },
  { name: "PurpleSentinel", href: "/services/purple-x/purplesentinel", description: "Managed Detection & Response (MDR)" },
  { name: "PurpleSOC", href: "/services/purple-x/purplesoc", description: "24/7 Security Operations Center" },
  { name: "PurpleVAPT", href: "/services/purple-x/purplevapt", description: "Vulnerability Assessment & Pen Testing" },
  { name: "PurpleStrike", href: "/services/purple-x/purplestrike", description: "Red Teaming & Breach Simulation" }
];

export default function PurpleReveal() {
  return (
    <div className="min-h-screen bg-white">
      <title>Network Detection & Response (NDR) | PurpleReveal</title>
      <meta name="description" content="Network Detection and Response for east-west and north-south traffic. Detect lateral movement and hidden threats with PurpleReveal." />
      <meta property="og:title" content="Network Detection & Response (NDR) | PurpleReveal" />
      <meta property="og:description" content="Deep network visibility to detect lateral movement, hidden threats, and abnormal behavior with PurpleReveal NDR." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple X Services
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Network Detection & Response
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                PurpleReveal — Network Detection & Response (NDR)
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Deep network visibility to detect lateral movement, hidden threats, and abnormal behavior.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "East-west and north-south traffic visibility",
                  "Behavioral network threat detection",
                  "SOC-integrated response workflows"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50" data-testid="button-cta-primary">
                    <Calendar className="h-5 w-5 mr-2" />
                    Request an NDR Assessment
                  </Button>
                </Link>
                <Link href="/services/purple-x">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-cta-secondary">
                    View Purple-X Services
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-500/30 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-500/40 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center">
                      <Network className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-10 left-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center animate-pulse delay-300">
                  <Radar className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Eye, text: "Network-layer threat visibility" },
              { icon: Target, text: "MITRE ATT&CK-aligned detection" },
              { icon: Zap, text: "Subscription-based NDR service" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-teal-600" />
                <span className="text-slate-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is PurpleReveal?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PurpleReveal is PurpleGuard's Network Detection and Response (NDR) service, delivering continuous monitoring and threat detection across internal and external network traffic. It identifies lateral movement, command-and-control activity, data exfiltration, and other hidden threats that bypass endpoint-only defenses.
            </p>
            <div className="mt-8">
              <Link href="/services/purple-x">
                <Button variant="link" className="text-teal-600 hover:text-teal-700">
                  How Purple-X Works
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included in PurpleReveal
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive network detection and response capabilities delivered as a managed service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOverviewCards.map((card, idx) => (
              <Card 
                key={card.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
                data-testid={`card-${card.id}`}
              >
                <CardHeader className={`bg-gradient-to-r ${card.color} p-6`}>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How PurpleReveal is Delivered
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Non-disruptive deployment with vendor-agnostic operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Passive Non-Disruptive Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  PurpleReveal operates passively, analyzing network traffic without inline deployment or production impact. Sensors capture and analyze traffic flows without affecting network performance or introducing latency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Vendor-Agnostic NDR Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  PurpleReveal integrates with existing network infrastructure and security tools. Our analysts operate the service independent of specific vendor platforms, providing flexibility and avoiding lock-in.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Why organizations choose PurpleReveal for network security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValueItems.map((item, idx) => (
              <Card key={idx} className="border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who PurpleReveal is For
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                PurpleReveal is designed for organizations that need visibility beyond what endpoint detection provides.
              </p>
              
              <div className="space-y-4">
                {whoIsForItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/services">
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                    Industries We Serve
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Network, label: "Complex Networks" },
                  { icon: Globe, label: "Cloud & Hybrid" },
                  { icon: Shield, label: "Insider Threat Concerns" },
                  { icon: Eye, label: "Beyond EDR" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm text-center">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-teal-100 flex items-center justify-center mb-2">
                      <item.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Endpoint-Only Detection vs PurpleReveal
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how network detection complements and enhances endpoint security.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-cyan-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">Capability</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Endpoint-Only Detection</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">PurpleReveal NDR</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-medium text-slate-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{item.endpointOnly}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 text-teal-600 font-medium">
                        <Check className="h-4 w-4" />
                        {item.purpleReveal}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/services/purple-x/purplesentinel">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                PurpleSentinel (MDR)
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/services/managed-x/managed-edr">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Managed EDR
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pricing Model
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              PurpleReveal is priced as a subscription based on monitored network segments, traffic volume, and deployment scope. Pricing is tailored to your environment and coverage requirements.
            </p>
            <Link href="/pricing">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                View Pricing Explained
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Part of the Purple-X Detection Fabric
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              PurpleReveal integrates with the Purple-X security ecosystem to provide comprehensive detection, response, and exposure management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {purpleXServices.map((service, idx) => (
              <Link key={idx} href={service.href}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-white h-full">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Reveal what's happening inside your network.
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get deep network visibility and detect threats that bypass endpoint-only defenses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" data-testid="button-cta-final">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" data-testid="button-cta-expert">
                <Phone className="h-5 w-5 mr-2" />
                Talk to a Security Expert
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              All pricing shown is indicative. Final pricing depends on environment size, network complexity, and coverage requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
