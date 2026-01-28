import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ChevronRight, 
  Lock,
  Calendar,
  CheckCircle,
  KeyRound,
  Shield,
  Smartphone,
  Eye,
  FileText,
  Download,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const zeroTrustPillars = [
  {
    title: "Identity-Centric Access Control",
    icon: KeyRound,
    points: [
      "Strong authentication (MFA everywhere)",
      "Conditional access based on user, device, location, and risk",
      "Least-privilege, application-level access",
      "Integration with Managed Identity services"
    ]
  },
  {
    title: "Secure Remote Access (ZTNA)",
    icon: Shield,
    points: [
      "Zero Trust Network Access (ZTNA) replacing legacy VPNs",
      "Application-specific access instead of network-wide access",
      "No inbound exposure of internal services",
      "Encrypted, policy-enforced connections"
    ]
  },
  {
    title: "Device Trust & Posture Validation",
    icon: Smartphone,
    points: [
      "Endpoint posture checks (managed, compliant, healthy devices)",
      "Integration with Managed Endpoint and EDR",
      "Blocking or restricting access from risky devices"
    ]
  },
  {
    title: "Continuous Monitoring & Threat Detection",
    icon: Eye,
    points: [
      "Monitoring of access activity via PurpleSOC / PurpleSentinel",
      "Detection of anomalous access, impossible travel, and session abuse",
      "Automated response actions (session termination, re-authentication)"
    ]
  },
  {
    title: "Policy, Visibility & Governance",
    icon: FileText,
    points: [
      "Centralized access policies",
      "Full audit logging of access events",
      "Reporting aligned to compliance and audit requirements"
    ]
  }
];

const modernChallenges = [
  "Remote and hybrid workforces",
  "Cloud and SaaS-first application architectures",
  "Credential theft and lateral movement attacks",
  "VPNs as frequent initial access vectors"
];

const customerExpectations = [
  "Secure remote access without exposing the internal network",
  "Reduced reliance on VPNs",
  "Improved visibility into who accesses what—and why",
  "Stronger protection against credential-based attacks",
  "Seamless user experience with stronger security"
];

const relatedServices = [
  { name: "Managed SASE / ZTNA", path: "/services/managed-x/managed-sase-ztna", description: "Zero Trust Network Access" },
  { name: "Managed Identity", path: "/services/managed-x/managed-identity", description: "SSO, MFA, and conditional access" },
  { name: "Managed Endpoint", path: "/services/managed-x/managed-endpoint", description: "Device management and compliance" },
  { name: "Managed EDR", path: "/services/managed-x/managed-edr", description: "Endpoint detection and response" },
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "Access activity monitoring" },
  { name: "PurpleSentinel", path: "/services/purple-x/purplesentinel", description: "Anomaly detection and response" }
];

export default function SolutionZeroTrust() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Zero Trust & Secure Remote Access Solution | PurpleGuard</title>
      <meta name="description" content="Replace legacy VPNs with identity-driven, policy-based Zero Trust access. PurpleGuard delivers secure remote access that never trusts the network." />
      <meta property="og:title" content="Zero Trust & Secure Remote Access Solution | PurpleGuard" />
      <meta property="og:description" content="Secure access without trusting the network. Zero Trust and ZTNA solutions for modern organizations." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <Link href="/solutions">
              <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Solutions
              </Button>
            </Link>
            
            <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/30 mb-6">
              Zero Trust Solution
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Zero Trust & Secure Remote Access
            </h1>
            
            <p className="text-2xl text-slate-300 font-medium mb-4">
              Secure access without trusting the network.
            </p>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl">
              PurpleGuard delivers Zero Trust and secure remote access services that replace legacy VPNs with identity-driven, 
              policy-based access. By continuously verifying users, devices, and context, PurpleGuard ensures employees, partners, 
              and contractors can securely access applications and data—anywhere, without expanding your attack surface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Zero Trust Assessment
                </Button>
              </a>
              <a href="/api/whitepapers/zero-trust-secure-remote-access" download>
                <Button size="lg" variant="outline" className="border-slate-500 bg-slate-700/50 text-white hover:bg-slate-700">
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
                The Remote Access Security Problem
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Traditional network-based security models assume trust once a user is "inside" the network. VPNs extend the 
                internal network to remote users, creating broad access, poor visibility, and high breach impact.
              </p>
            </div>
            
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Modern organizations face:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modernChallenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg text-slate-700 font-medium mt-6">
                PurpleGuard addresses this by enforcing Zero Trust principles: <strong>never trust, always verify.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Trust Principles */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Zero Trust Reduces Breach Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Most breaches involve stolen credentials and lateral movement. Zero Trust principles minimize damage by:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Verify Continuously", desc: "Verify identity and context at every access request" },
              { title: "Limit Access", desc: "Grant access to specific applications, not the entire network" },
              { title: "Eliminate Trust", desc: "Never assume trust based on network location" }
            ].map((principle, idx) => (
              <Card key={idx} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-slate-600">{principle.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust Pillars */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleGuard's Zero Trust Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive framework that delivers Zero Trust and secure remote access as a managed, operational service.
            </p>
          </div>
          
          <div className="space-y-6">
            {zeroTrustPillars.map((pillar, idx) => (
              <Card key={pillar.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-slate-700 to-slate-900 p-6 flex items-center">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm font-medium">Pillar {idx + 1}</span>
                          <h3 className="text-xl font-bold">{pillar.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 bg-white">
                      <ul className="space-y-3">
                        {pillar.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-20 bg-slate-100">
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
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-slate-700" />
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
              Our Zero Trust solution integrates these services across Purple X and Managed X.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-slate-700 transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-16 w-16 text-slate-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to go beyond VPNs?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Zero Trust shifts security from the network to identity, device posture, and context. Let PurpleGuard deliver 
            Zero Trust and secure remote access as a managed, operational service—not just a technology deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </a>
            <a href="/api/whitepapers/zero-trust-secure-remote-access" download>
              <Button size="lg" variant="outline" className="border-slate-500 bg-slate-700/50 text-white hover:bg-slate-700 min-w-[200px]">
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
