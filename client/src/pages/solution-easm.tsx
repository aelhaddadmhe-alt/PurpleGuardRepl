import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ChevronRight, 
  Globe,
  Calendar,
  CheckCircle,
  Search,
  AlertTriangle,
  Brain,
  Target,
  BarChart,
  Download,
  ArrowRight,
  Shield
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const easmPillars = [
  {
    title: "Continuous Asset Discovery",
    icon: Search,
    points: [
      "Identification of internet-facing IPs, domains, subdomains, cloud assets, and SaaS services",
      "Detection of shadow IT, orphaned assets, and legacy infrastructure",
      "Monitoring of changes to the external footprint over time"
    ]
  },
  {
    title: "Exposure & Misconfiguration Detection",
    icon: AlertTriangle,
    points: [
      "Identification of exposed services, open ports, and risky protocols",
      "Cloud and SaaS misconfiguration discovery",
      "Detection of exposed admin panels, APIs, and development environments"
    ]
  },
  {
    title: "Threat Intelligence & Context",
    icon: Brain,
    points: [
      "Correlation with active threat campaigns and attacker tooling",
      "Dark web and credential leak monitoring",
      "Prioritization based on exploitability and threat activity"
    ]
  },
  {
    title: "Risk Prioritization & Remediation Support",
    icon: Target,
    points: [
      "Risk scoring based on exposure, criticality, and threat relevance",
      "Actionable remediation guidance",
      "Integration with vulnerability management and configuration hardening"
    ]
  },
  {
    title: "Continuous Monitoring & Reporting",
    icon: BarChart,
    points: [
      "Real-time alerts for new or changed exposure",
      "Executive and technical reporting",
      "Support for compliance and cyber insurance requirements"
    ]
  }
];

const attackerExploits = [
  "Unknown or forgotten internet-facing assets",
  "Misconfigured cloud services and storage",
  "Exposed management interfaces and APIs",
  "Leaked credentials and certificates",
  "Shadow IT and unmanaged domains"
];

const customerExpectations = [
  "Clear, continuously updated inventory of external assets",
  "Early warning of new exposure and misconfigurations",
  "Reduced likelihood of initial access attacks",
  "Improved visibility for security, IT, and leadership",
  "Audit- and insurer-friendly exposure reporting"
];

const relatedServices = [
  { name: "PurpleSentry", path: "/services/purple-x/purplesentry", description: "Core EASM and digital risk protection" },
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt", description: "Validation of exploitable paths" },
  { name: "PurpleConfig", path: "/services/purple-x/purpleconfig", description: "Configuration hardening" },
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "Monitoring for exploitation attempts" },
  { name: "Managed Firewall", path: "/services/managed-x/managed-firewall", description: "Enforcement and mitigation" },
  { name: "Managed WAF", path: "/services/managed-x/managed-waf", description: "Web application protection" }
];

export default function SolutionEASM() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>External Attack Surface Management (EASM) Solution | PurpleGuard</title>
      <meta name="description" content="Continuously discover, monitor, and reduce your internet-facing exposure. PurpleGuard EASM identifies unknown, unmanaged, and misconfigured external assets." />
      <meta property="og:title" content="External Attack Surface Management Solution | PurpleGuard" />
      <meta property="og:description" content="Know what attackers see—before they exploit it. Continuous external attack surface management for your organization." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <Link href="/solutions">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Solutions
              </Button>
            </Link>
            
            <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 mb-6">
              EASM Solution
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              External Attack Surface Management
            </h1>
            
            <p className="text-2xl text-purple-100 font-medium mb-4">
              Know what attackers see—before they exploit it.
            </p>
            
            <p className="text-lg text-purple-200 mb-8 leading-relaxed max-w-3xl">
              PurpleGuard's External Attack Surface Management (EASM) continuously discovers, monitors, and reduces your 
              internet-facing exposure. We identify unknown, unmanaged, and misconfigured external assets and help 
              organizations proactively close attack paths before they are weaponized.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get EASM Assessment
                </Button>
              </a>
              <a href="/api/whitepapers/external-attack-surface-management" download>
                <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  <Download className="h-5 w-5 mr-2" />
                  Download Whitepaper
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The External Exposure Problem
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Organizations no longer have a fixed perimeter. Cloud adoption, SaaS usage, remote work, subsidiaries, 
                and third-party services constantly expand the external attack surface—often without visibility from internal teams.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Attackers routinely exploit:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {attackerExploits.map((exploit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{exploit}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg text-slate-700 font-medium mt-6">
                EASM closes this visibility gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EASM Pillars */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleGuard's EASM Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Continuous, attacker-centric visibility into your external exposure with actionable intelligence.
            </p>
          </div>
          
          <div className="space-y-6">
            {easmPillars.map((pillar, idx) => (
              <Card key={pillar.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex items-center">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-purple-200 text-sm font-medium">Step {idx + 1}</span>
                          <h3 className="text-xl font-bold">{pillar.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 bg-white">
                      <ul className="space-y-3">
                        {pillar.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Expectations */}
      <section className="py-16 lg:py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What to Expect as a Customer
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {customerExpectations.map((expectation, idx) => (
              <Card key={idx} className="border-0 shadow-md bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{expectation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powered by PurpleGuard Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our EASM solution integrates these services across Purple X and Managed X.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 text-purple-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See what attackers see
          </h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            External attack surface management is no longer optional. PurpleGuard delivers continuous, threat-informed visibility 
            into what attackers see—helping organizations close exposure gaps before they lead to breaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </a>
            <a href="/api/whitepapers/external-attack-surface-management" download>
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30 min-w-[200px]">
                <Download className="h-5 w-5 mr-2" />
                Download Whitepaper
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
