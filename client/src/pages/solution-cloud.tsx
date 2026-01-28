import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  ChevronRight, 
  Cloud,
  Calendar,
  CheckCircle,
  Eye,
  KeyRound,
  Settings,
  Shield,
  Database,
  Download,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const securityPillars = [
  {
    title: "Cloud & SaaS Visibility",
    icon: Eye,
    points: [
      "Asset discovery across cloud accounts and SaaS tenants",
      "Shadow IT and unmanaged application identification",
      "Continuous monitoring of cloud resources and SaaS activity"
    ]
  },
  {
    title: "Identity & Access Security",
    icon: KeyRound,
    points: [
      "Identity-centric security model (users, service accounts, APIs)",
      "MFA enforcement and conditional access",
      "Privileged access monitoring and abuse detection",
      "Integration with Managed Identity services"
    ]
  },
  {
    title: "Configuration & Posture Management",
    icon: Settings,
    points: [
      "Cloud Security Posture Management (CSPM)",
      "SaaS Security Posture Management (SSPM)",
      "CIS and NIST benchmark alignment",
      "Misconfiguration and drift detection"
    ]
  },
  {
    title: "Threat Detection & Response",
    icon: Shield,
    points: [
      "24/7 monitoring via PurpleSOC / PurpleSentinel",
      "Detection of account compromise, impossible travel, token abuse, and data exfiltration",
      "Correlation of cloud, SaaS, endpoint, and network telemetry",
      "Automated response actions"
    ]
  },
  {
    title: "Data Protection & Governance",
    icon: Database,
    points: [
      "Visibility into sensitive data exposure",
      "Policy-based access controls",
      "Audit logging and activity monitoring",
      "Support for data residency and compliance requirements"
    ]
  }
];

const challenges = [
  "Misconfigurations that expose data",
  "Over-privileged identities and API tokens",
  "Shadow IT and unmanaged SaaS usage",
  "Limited visibility across multiple platforms",
  "Shared responsibility gaps"
];

const customerExpectations = [
  "Unified visibility across cloud and SaaS environments",
  "Reduced risk from misconfigurations and identity abuse",
  "Continuous monitoring and response",
  "Improved compliance posture for cloud workloads",
  "Clear, business-aligned reporting"
];

const relatedServices = [
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc", description: "Cloud and SaaS threat monitoring" },
  { name: "PurpleSentinel", path: "/services/purple-x/purplesentinel", description: "Cloud detection and response" },
  { name: "PurpleConfig", path: "/services/purple-x/purpleconfig", description: "Cloud configuration assessment" },
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt", description: "Cloud workload testing" },
  { name: "Managed Identity", path: "/services/managed-x/managed-identity", description: "Identity and access management" },
  { name: "Managed SASE", path: "/services/managed-x/managed-sase-ztna", description: "Secure cloud access" }
];

export default function SolutionCloud() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Cloud & SaaS Security Solution | PurpleGuard</title>
      <meta name="description" content="Secure your cloud and SaaS environments with continuous visibility, configuration assurance, identity security, and threat detection. Managed security for AWS, Azure, GCP, Microsoft 365." />
      <meta property="og:title" content="Cloud & SaaS Security Solution | PurpleGuard" />
      <meta property="og:description" content="Secure your cloud. Control your SaaS. Reduce risk at scale with PurpleGuard's managed cloud security." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <Link href="/solutions">
              <Button variant="ghost" className="text-blue-200 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Solutions
              </Button>
            </Link>
            
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">
              Cloud Security Solution
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud & SaaS Security
            </h1>
            
            <p className="text-2xl text-blue-100 font-medium mb-4">
              Secure your cloud. Control your SaaS. Reduce risk at scale.
            </p>
            
            <p className="text-lg text-blue-200 mb-8 leading-relaxed max-w-3xl">
              PurpleGuard delivers continuous Cloud and SaaS security by protecting identities, configurations, data, and access 
              across public cloud platforms and business-critical SaaS applications. Our managed, compliance-aware approach helps 
              organizations safely adopt cloud services without sacrificing visibility, control, or resilience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Cloud Security Assessment
                </Button>
              </a>
              <a href="/api/whitepapers/cloud-saas-security" download>
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
                The Cloud & SaaS Security Challenge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cloud and SaaS environments introduce speed and flexibility—but also new security risks that traditional tools weren't designed to address.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge, idx) => (
                <Card key={idx} className="border-0 shadow-md bg-blue-50">
                  <CardContent className="p-4 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-lg text-slate-700 font-medium mt-8">
              PurpleGuard addresses these challenges through continuous visibility, configuration assurance, identity security, and threat detection across cloud and SaaS ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Platforms We Secure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive security across major cloud providers and SaaS applications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["AWS", "Microsoft Azure", "Google Cloud", "Microsoft 365", "Google Workspace", "Salesforce", "Slack", "Zoom"].map((platform) => (
              <Badge 
                key={platform} 
                variant="secondary" 
                className="bg-white text-slate-700 border border-slate-200 px-4 py-2 text-sm shadow-sm"
              >
                <Cloud className="h-4 w-4 mr-2 text-blue-500" />
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleGuard's Cloud & SaaS Security Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive security framework that addresses every aspect of cloud and SaaS protection.
            </p>
          </div>
          
          <div className="space-y-6">
            {securityPillars.map((pillar, idx) => (
              <Card key={pillar.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-cyan-600 p-6 flex items-center">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-blue-200 text-sm font-medium">Pillar {idx + 1}</span>
                          <h3 className="text-xl font-bold">{pillar.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 bg-white">
                      <ul className="space-y-3">
                        {pillar.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-20 bg-blue-50">
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
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
              Our cloud security solution integrates these services across Purple X and Managed X.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                        <Cloud className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cloud className="h-16 w-16 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to secure your cloud journey?
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Cloud and SaaS security requires continuous oversight—not periodic reviews. Let PurpleGuard deliver managed, identity-driven, and compliance-aware security that keeps cloud environments resilient as they scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </a>
            <a href="/api/whitepapers/cloud-saas-security" download>
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
