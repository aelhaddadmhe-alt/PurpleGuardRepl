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
  Lock, 
  Cloud, 
  Globe, 
  FileCheck,
  Calendar,
  CheckCircle
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/purpleguard/consultation";

const solutions = [
  {
    id: "compliance-audit-readiness",
    name: "Compliance & Audit Readiness",
    tagline: "Be audit-ready. Stay compliant. Reduce risk.",
    description: "PurpleGuard helps organizations achieve and maintain compliance through continuous security monitoring, control validation, and audit-ready documentation. Our compliance-aware services align security operations with frameworks such as ISO 27001, SOC 2, NIST CSF, CIS, HIPAA, PCI DSS, and GDPR—reducing audit friction while strengthening real-world security.",
    icon: FileCheck,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    frameworks: ["ISO 27001", "SOC 2", "NIST CSF", "HIPAA", "PCI DSS", "GDPR"]
  },
  {
    id: "ransomware-defense",
    name: "Ransomware Defense",
    tagline: "Stop ransomware before it stops your business.",
    description: "PurpleGuard delivers layered, ransomware-focused defense that prevents attacks, detects malicious behavior early, and enables rapid containment and recovery. By combining continuous monitoring, exposure management, hardened configurations, and resilient backup strategies, PurpleGuard reduces ransomware risk across endpoints, identities, networks, cloud, and applications.",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    frameworks: ["Prevention", "Detection", "Response", "Recovery"]
  },
  {
    id: "cloud-saas-security",
    name: "Cloud & SaaS Security",
    tagline: "Secure your cloud. Control your SaaS. Reduce risk at scale.",
    description: "PurpleGuard delivers continuous Cloud and SaaS security by protecting identities, configurations, data, and access across public cloud platforms and business-critical SaaS applications. Our managed, compliance-aware approach helps organizations safely adopt cloud services without sacrificing visibility, control, or resilience.",
    icon: Cloud,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    frameworks: ["AWS", "Azure", "GCP", "Microsoft 365", "Google Workspace"]
  },
  {
    id: "external-attack-surface-management",
    name: "External Attack Surface Management",
    tagline: "Know what attackers see—before they exploit it.",
    description: "PurpleGuard's External Attack Surface Management (EASM) continuously discovers, monitors, and reduces your internet-facing exposure. We identify unknown, unmanaged, and misconfigured external assets and help organizations proactively close attack paths before they are weaponized.",
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    frameworks: ["Asset Discovery", "Exposure Detection", "Threat Intelligence", "Risk Prioritization"]
  },
  {
    id: "zero-trust-secure-remote-access",
    name: "Zero Trust & Secure Remote Access",
    tagline: "Secure access without trusting the network.",
    description: "PurpleGuard delivers Zero Trust and secure remote access services that replace legacy VPNs with identity-driven, policy-based access. By continuously verifying users, devices, and context, PurpleGuard ensures employees, partners, and contractors can securely access applications and data—anywhere, without expanding your attack surface.",
    icon: Lock,
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    frameworks: ["ZTNA", "MFA", "Conditional Access", "Device Trust"]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Security Solutions - Compliance, Ransomware, Cloud, EASM, Zero Trust | PurpleGuard</title>
      <meta name="description" content="Outcome-focused security solutions for compliance, ransomware defense, cloud security, attack surface management, and zero trust access. Tailored to your challenges." />
      <meta property="og:title" content="Security Solutions | PurpleGuard" />
      <meta property="og:description" content="Outcome-focused security solutions tailored to your specific challenges and industry requirements." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-[#6633cc] to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#ff6633]/20 text-[#ff6633] border-[#ff6633]/30 mb-6">
              Outcome-Focused Security
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Security Solutions That Solve Real Problems
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              From compliance readiness to ransomware defense, PurpleGuard delivers tailored security solutions 
              that address your specific challenges and industry requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Security Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each solution combines PurpleGuard's Purple-X cybersecurity services and Managed-X infrastructure 
              to deliver comprehensive protection tailored to your specific needs.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, idx) => (
              <Card key={solution.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Icon/Visual Side */}
                    <div className={`lg:w-1/3 bg-gradient-to-br ${solution.color} p-8 lg:p-12 flex flex-col items-center justify-center text-white`}>
                      <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                        <solution.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">{solution.name}</h3>
                      <p className="text-white/80 text-center text-sm">{solution.tagline}</p>
                    </div>
                    
                    {/* Content Side */}
                    <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      {/* Frameworks/Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {solution.frameworks.map((framework) => (
                          <Badge 
                            key={framework} 
                            variant="secondary" 
                            className={`${solution.bgColor} text-slate-700 border-0`}
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {framework}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link href={`/solutions/${solution.id}`}>
                        <Button className={`bg-gradient-to-r ${solution.color} hover:opacity-90 text-white`}>
                          Learn More
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#000033] via-[#6633cc] to-[#000033]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which solution fits your needs?
          </h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Our security experts can help you identify the right combination of services to address 
            your specific challenges and compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white min-w-[200px]">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Call
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30 min-w-[200px]">
                View All Services
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
