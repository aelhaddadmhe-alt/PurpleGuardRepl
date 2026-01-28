import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ChevronRight, 
  Shield,
  Calendar,
  CheckCircle,
  Target,
  Eye,
  Zap,
  Database,
  RefreshCw,
  Download,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const defenseLayers = [
  {
    title: "Attack Surface Reduction",
    icon: Target,
    points: [
      "External Attack Surface Management (EASM) to identify exposed assets",
      "Vulnerability assessment and prioritization (PurpleVAPT)",
      "Secure configuration baselines (PurpleConfig – CIS/NIST)",
      "Identity hardening (MFA, least privilege, conditional access)"
    ]
  },
  {
    title: "Threat Detection & Early Warning",
    icon: Eye,
    points: [
      "24/7 monitoring via PurpleSOC / PurpleSentinel (MDR/MXDR)",
      "Behavioral detection of ransomware precursors (LOLBins, privilege escalation, abnormal encryption activity)",
      "Network-based detection for lateral movement and command-and-control"
    ]
  },
  {
    title: "Automated Containment & Response",
    icon: Zap,
    points: [
      "Rapid isolation of infected endpoints",
      "Credential reset and session termination",
      "Blocking malicious IPs, domains, and payloads",
      "SOAR-driven response playbooks"
    ]
  },
  {
    title: "Data Protection & Recovery",
    icon: Database,
    points: [
      "Immutable and ransomware-resistant backups",
      "Managed backup and recovery testing",
      "Fast restore workflows to minimize downtime"
    ]
  },
  {
    title: "Validation & Continuous Improvement",
    icon: RefreshCw,
    points: [
      "Breach and Attack Simulation (PurpleStrike)",
      "Ransomware scenario testing",
      "Control effectiveness reporting and tuning"
    ]
  }
];

const customerExpectations = [
  "Clear visibility into ransomware risk exposure",
  "24/7 monitoring and response coverage",
  "Reduced dwell time and blast radius",
  "Tested recovery and business continuity confidence",
  "Executive and technical ransomware reporting"
];

const relatedServices = [
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "Detection, response, and forensic evidence" },
  { name: "PurpleSentinel", path: "/services/purple-x/purplesentinel", description: "MDR/MXDR coverage" },
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt", description: "Identify exploitable paths" },
  { name: "PurpleConfig", path: "/services/purple-x/purpleconfig", description: "Hardened configurations" },
  { name: "PurpleStrike", path: "/services/purple-x/purplestrike", description: "Breach and attack simulation" },
  { name: "Managed Backup", path: "/services/managed-x/managed-backup-bcdr", description: "Ransomware-resistant backups" }
];

export default function SolutionRansomware() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Ransomware Defense Solution | PurpleGuard</title>
      <meta name="description" content="Stop ransomware with layered defense: prevention, detection, response, and recovery. PurpleGuard delivers comprehensive ransomware protection for your organization." />
      <meta property="og:title" content="Ransomware Defense Solution | PurpleGuard" />
      <meta property="og:description" content="Stop ransomware before it stops your business with layered, defense-in-depth protection." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <Link href="/solutions">
              <Button variant="ghost" className="text-red-200 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Solutions
              </Button>
            </Link>
            
            <Badge className="bg-red-500/20 text-red-200 border-red-400/30 mb-6">
              Ransomware Solution
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ransomware Defense
            </h1>
            
            <p className="text-2xl text-red-100 font-medium mb-4">
              Stop ransomware before it stops your business.
            </p>
            
            <p className="text-lg text-red-200 mb-8 leading-relaxed max-w-3xl">
              PurpleGuard delivers layered, ransomware-focused defense that prevents attacks, detects malicious behavior early, 
              and enables rapid containment and recovery. By combining continuous monitoring, exposure management, hardened configurations, 
              and resilient backup strategies, PurpleGuard reduces ransomware risk across endpoints, identities, networks, cloud, and applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Ransomware Assessment
                </Button>
              </a>
              <a href="/api/whitepapers/ransomware-defense" download>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Ransomware Challenge
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Ransomware is no longer just malware—it is a <strong>multi-stage attack</strong> involving credential theft, 
              lateral movement, data exfiltration, and extortion. Traditional antivirus and perimeter defenses are insufficient 
              against modern ransomware campaigns.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              PurpleGuard addresses ransomware as a full attack lifecycle problem, not a single control.
            </p>
          </div>
        </div>
      </section>

      {/* Kill Chain */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Understanding the Ransomware Kill Chain
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern ransomware attacks follow a predictable path. PurpleGuard maps security controls to each phase.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Initial Access (phishing, RDP abuse, exploits)",
              "Credential Theft & Privilege Escalation",
              "Lateral Movement & Reconnaissance",
              "Payload Deployment & Encryption",
              "Data Exfiltration & Extortion"
            ].map((phase, idx) => (
              <div key={idx} className="flex items-center">
                <Badge variant="secondary" className="bg-red-100 text-red-700 border-0 px-4 py-2">
                  <span className="font-bold mr-2">{idx + 1}.</span>
                  {phase}
                </Badge>
                {idx < 4 && <ArrowRight className="h-5 w-5 text-slate-400 mx-2 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Layers */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Defense-in-Depth Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              PurpleGuard's ransomware defense is built on five operational layers that work together to prevent, detect, contain, and recover.
            </p>
          </div>
          
          <div className="space-y-6">
            {defenseLayers.map((layer, idx) => (
              <Card key={layer.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-red-500 to-orange-600 p-6 flex items-center">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <layer.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-red-200 text-sm font-medium">Layer {idx + 1}</span>
                          <h3 className="text-xl font-bold">{layer.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 bg-white">
                      <ul className="space-y-3">
                        {layer.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-20 bg-red-50">
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
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-red-600" />
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
              Our ransomware defense integrates these services across Purple X and Managed X.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-red-600 transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-900 via-orange-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 text-red-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't wait for ransomware to strike
          </h2>
          <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
            Get proactive protection with PurpleGuard's layered ransomware defense. Prevention, detection, response, and recovery—all managed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get Protected Now
              </Button>
            </a>
            <a href="/api/whitepapers/ransomware-defense" download>
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
