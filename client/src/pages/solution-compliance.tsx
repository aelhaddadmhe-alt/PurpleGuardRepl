import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ChevronRight, 
  FileCheck,
  Calendar,
  CheckCircle,
  Target,
  Eye,
  FileText,
  AlertTriangle,
  Users,
  Download,
  ArrowRight,
  Shield
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const keyPillars = [
  {
    title: "Compliance Mapping & Scoping",
    icon: Target,
    points: [
      "Identify applicable regulations and frameworks (SOC 2, ISO 27001, HIPAA, PCI DSS, etc.)",
      "Define scope, systems, users, and data flows",
      "Map requirements to technical and operational controls"
    ]
  },
  {
    title: "Continuous Control Monitoring",
    icon: Eye,
    points: [
      "Leverage Purple X services (SOC, MDR, VAPT, Configuration, EASM) to validate controls in real time",
      "Monitor endpoint, network, cloud, identity, and application controls",
      "Detect control drift and misconfigurations"
    ]
  },
  {
    title: "Evidence Collection & Documentation",
    icon: FileText,
    points: [
      "Automated log collection, alerts, and reports",
      "Centralized evidence aligned to audit requirements",
      "Policies, procedures, and control narratives supported by operational data"
    ]
  },
  {
    title: "Risk & Gap Management",
    icon: AlertTriangle,
    points: [
      "Identify gaps against target frameworks",
      "Prioritize remediation based on risk and audit impact",
      "Track remediation progress with clear ownership"
    ]
  },
  {
    title: "Audit Support & Readiness Reviews",
    icon: Users,
    points: [
      "Pre-audit readiness assessments",
      "Auditor-friendly reporting and dashboards",
      "Ongoing support during audits and client inquiries"
    ]
  }
];

const customerExpectations = [
  "Defined compliance scope and roadmap",
  "Always-on security controls mapped to compliance needs",
  "Reduced audit preparation time",
  "Clear visibility into compliance posture",
  "Business-focused reporting for leadership and auditors"
];

const frameworks = [
  { name: "SOC 2", description: "Type I & II" },
  { name: "ISO 27001", description: "/ 27002" },
  { name: "NIST CSF", description: "/ 800-53" },
  { name: "CIS", description: "Critical Controls" },
  { name: "HIPAA", description: "Healthcare" },
  { name: "PCI DSS", description: "Payment Card" },
  { name: "GDPR", description: "Data Privacy" }
];

const relatedServices = [
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "Continuous monitoring and incident records" },
  { name: "PurpleSentinel", path: "/services/purple-x/purplesentinel", description: "Detection and response evidence" },
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt", description: "Control effectiveness testing" },
  { name: "PurpleConfig", path: "/services/purple-x/purpleconfig", description: "CIS/NIST benchmark validation" },
  { name: "PurpleSentry", path: "/services/purple-x/purplesentry", description: "External exposure and third-party risk" }
];

export default function SolutionCompliance() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Compliance & Audit Readiness Solution | PurpleGuard</title>
      <meta name="description" content="Achieve continuous compliance with ISO 27001, SOC 2, NIST, HIPAA, PCI DSS, and GDPR. PurpleGuard embeds compliance into day-to-day security operations." />
      <meta property="og:title" content="Compliance & Audit Readiness Solution | PurpleGuard" />
      <meta property="og:description" content="Be audit-ready. Stay compliant. Reduce risk with continuous security monitoring and control validation." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <Link href="/solutions">
              <Button variant="ghost" className="text-emerald-200 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Solutions
              </Button>
            </Link>
            
            <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 mb-6">
              Compliance Solution
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Compliance & Audit Readiness
            </h1>
            
            <p className="text-2xl text-emerald-100 font-medium mb-4">
              Be audit-ready. Stay compliant. Reduce risk.
            </p>
            
            <p className="text-lg text-emerald-200 mb-8 leading-relaxed max-w-3xl">
              PurpleGuard helps organizations achieve and maintain compliance through continuous security monitoring, 
              control validation, and audit-ready documentation. Our compliance-aware services align security operations 
              with frameworks such as ISO 27001, SOC 2, NIST CSF, CIS, HIPAA, PCI DSS, and GDPR—reducing audit friction 
              while strengthening real-world security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Compliance Review
                </Button>
              </a>
              <a href="/api/whitepapers/compliance-audit-readiness" download>
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
              What We Solve
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Many organizations struggle with compliance because controls are manual, evidence is fragmented, 
              and security tools operate in silos. PurpleGuard integrates security operations, exposure management, 
              and managed services into a <strong>continuous compliance model</strong>—not a once-a-year audit scramble.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compliance Framework Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              PurpleGuard supports organizations pursuing or maintaining compliance with major security and privacy frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {frameworks.map((framework) => (
              <Card key={framework.name} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <FileCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{framework.name}</h3>
                  <p className="text-xs text-slate-500">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              PurpleGuard embeds compliance into day-to-day security operations using automation, telemetry, and expert oversight.
            </p>
          </div>
          
          <div className="space-y-6">
            {keyPillars.map((pillar, idx) => (
              <Card key={pillar.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex items-center">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-emerald-200 text-sm font-medium">Step {idx + 1}</span>
                          <h3 className="text-xl font-bold">{pillar.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 bg-white">
                      <ul className="space-y-3">
                        {pillar.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-20 bg-emerald-50">
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
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
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
              Our compliance solution leverages these Purple X services to deliver continuous control validation.
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to simplify your compliance journey?
          </h2>
          <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto">
            Let PurpleGuard transform compliance from a reactive obligation into a proactive security advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </a>
            <a href="/api/whitepapers/compliance-audit-readiness" download>
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
