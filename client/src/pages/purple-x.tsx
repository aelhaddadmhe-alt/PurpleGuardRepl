import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Search, 
  Eye, 
  AlertTriangle, 
  Target, 
  Settings, 
  Network,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar
} from "lucide-react";

const purpleXServices = [
  {
    id: "purple-vapt",
    name: "PurpleVAPT",
    tagline: "Vulnerability Assessment & Penetration Testing",
    category: "Exposure Identification & Validation",
    icon: Search,
    description: "PurpleVAPT delivers continuous and on-demand vulnerability assessments and penetration testing to identify, validate, and prioritize security weaknesses across your environment.",
    capabilities: [
      "Network vulnerability scanning (internal & external)",
      "Continuous Vulnerability Assessment (VAaaS)",
      "Penetration Testing (PTaaS)",
      "Web application and API security testing",
      "Cloud and SaaS security posture evaluation",
      "Cloud Threat Analytics (CTAaaS)"
    ],
    value: [
      "Early identification of exploitable weaknesses",
      "Risk-based vulnerability prioritization",
      "Compliance-aligned testing methodology",
      "Executive-ready and technical reporting"
    ],
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "purple-soc",
    name: "PurpleSOC",
    tagline: "24/7 Managed SOC & Incident Response",
    category: "Security Operations & Response",
    icon: Eye,
    description: "PurpleSOC provides a fully managed, 24/7 Security Operations Center that monitors, detects, investigates, and responds to security incidents across your environment.",
    capabilities: [
      "Continuous security monitoring",
      "Alert triage and incident investigation",
      "Log ingestion and correlation",
      "Threat detection and escalation",
      "Incident response coordination",
      "Compliance and audit-ready reporting"
    ],
    value: [
      "Always-on security operations without building an internal SOC",
      "Faster detection and response times",
      "Reduced alert fatigue",
      "Improved security maturity"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "purple-sentinel",
    name: "PurpleSentinel",
    tagline: "Managed Detection & Response (MDR / MXDR)",
    category: "Advanced Threat Detection & Containment",
    icon: Shield,
    description: "PurpleSentinel is PurpleGuard's Managed Detection and Response service, delivering deep visibility and rapid response across endpoints, networks, and cloud environments.",
    capabilities: [
      "Endpoint telemetry monitoring",
      "Threat detection and behavioral analysis",
      "Cross-domain correlation (Endpoint, Network, Cloud)",
      "Automated containment and remediation",
      "Risk and threat visibility dashboards",
      "MDR for Endpoint, Network, and Cloud"
    ],
    value: [
      "Proactive threat hunting and response",
      "Reduced dwell time of attackers",
      "Automation-driven containment",
      "Clear insight into active threats and risks"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "purple-sentry",
    name: "PurpleSentry",
    tagline: "Threat Intelligence, EASM & Digital Risk Protection",
    category: "External Risk & Threat Intelligence",
    icon: AlertTriangle,
    description: "PurpleSentry focuses on identifying and managing risks outside the traditional perimeter by continuously monitoring your external attack surface and digital presence.",
    capabilities: [
      "External Attack Surface Management (EASM)",
      "Internet-facing asset discovery",
      "Dark web and underground monitoring",
      "Brand, domain, and identity protection",
      "Threat intelligence enrichment",
      "Vulnerability intelligence and prioritization"
    ],
    value: [
      "Visibility into unknown or unmanaged assets",
      "Early warning of data leaks and credential exposure",
      "Reduced risk of brand abuse and impersonation",
      "Improved external risk posture"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "purple-strike",
    name: "PurpleStrike",
    tagline: "Red Teaming & Breach Attack Simulation",
    category: "Adversary Simulation & Control Validation",
    icon: Target,
    description: "PurpleStrike simulates real-world attacks to test the effectiveness of your security controls, people, and processes.",
    capabilities: [
      "Red Team exercises",
      "Breach & Attack Simulation (BAS)",
      "Adversary emulation based on real threat actors",
      "Continuous security control testing",
      "MITRE ATT&CK-aligned attack scenarios",
      "Purple Team collaboration"
    ],
    value: [
      "Validate real-world security readiness",
      "Identify detection and response gaps",
      "Improve SOC and MDR effectiveness",
      "Measure security improvements over time"
    ],
    color: "from-red-500 to-pink-600"
  },
  {
    id: "purple-config",
    name: "PurpleConfig",
    tagline: "Security Configuration Assessment & Hardening",
    category: "Configuration Security & Hardening",
    icon: Settings,
    description: "PurpleConfig continuously assesses systems and endpoints against industry-recognized security benchmarks and best practices.",
    capabilities: [
      "CIS benchmark assessments",
      "NIST-aligned configuration checks",
      "Windows and Linux endpoint hardening",
      "Misconfiguration detection",
      "Security drift monitoring and alerts",
      "Remediation recommendations"
    ],
    value: [
      "Reduced risk from misconfigurations",
      "Improved baseline security posture",
      "Continuous compliance visibility",
      "Support for audits and regulatory requirements"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "purple-reveal",
    name: "PurpleReveal",
    tagline: "Network Detection & Response (NDR)",
    category: "Network Visibility & Threat Detection",
    icon: Network,
    description: "PurpleReveal provides deep, real-time insight into network traffic to detect advanced threats that bypass traditional security controls.",
    capabilities: [
      "Deep network traffic inspection",
      "East-west traffic visibility",
      "Behavioral and anomaly-based detection",
      "Threat hunting support",
      "Zero Trust and lateral movement detection"
    ],
    value: [
      "Detect stealthy and advanced threats",
      "Improved visibility across on-prem and cloud networks",
      "Enhanced Zero Trust initiatives",
      "Strong complement to EDR and SOC services"
    ],
    color: "from-cyan-500 to-blue-600"
  }
];

export default function PurpleX() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Purple X Services - Advanced Cybersecurity & Exposure Management | PurpleGuard</title>
      <meta name="description" content="Purple X delivers continuous, compliance-aware cybersecurity protection for SMEs. Explore PurpleVAPT, PurpleSOC, PurpleSentinel, PurpleSentry, PurpleStrike, PurpleConfig, and PurpleReveal services." />
      <meta property="og:title" content="Purple X Services - Advanced Cybersecurity & Exposure Management | PurpleGuard" />
      <meta property="og:description" content="Always-on protection with subscription-based, automation-driven security services aligned to real business risk." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-[#6633cc] to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#ff6633]/20 text-[#ff6633] border-[#ff6633]/30 mb-6" data-testid="badge-always-on">
              Always-On Protection
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="heading-purple-x">
              Purple X – Cybersecurity & Exposure Management
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              PurpleGuard's advanced cybersecurity and exposure management service line, purpose-built for SMEs and mid-market organizations. 
              Continuous, compliance-aware protection across infrastructure, endpoints, applications, cloud environments, and external attack surfaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/booking">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white" data-testid="button-book-assessment">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Security Assessment
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-explore-services">
                  Explore Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Core Objectives */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                "Reduce cyber risk through continuous visibility",
                "Detect & respond to threats in real time",
                "Manage internal & external attack surfaces",
                "Support regulatory compliance (ISO 27001, NIST, SOC 2)"
              ].map((objective, index) => (
                <div key={index} className="flex items-start space-x-2 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-[#ff6633] flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Purple X Service Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seven specialized security services designed for comprehensive protection across your entire digital landscape
            </p>
          </div>

          <div className="space-y-16">
            {purpleXServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'bg-slate-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl' : ''}`}
                data-testid={`section-${service.id}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">{service.category}</Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900" data-testid={`heading-${service.id}`}>
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-[#6633cc] font-medium mb-4">{service.tagline}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/booking">
                        <Button className="bg-[#6633cc] hover:bg-[#6633cc]/90" data-testid={`button-discovery-${service.id}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Book Discovery Call
                        </Button>
                      </Link>
                      <Link href="/pricing">
                        <Button variant="outline" data-testid={`button-pricing-${service.id}`}>
                          View Pricing
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="grid gap-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Shield className="h-5 w-5 text-[#6633cc]" />
                            Key Capabilities
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.capabilities.map((capability, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-slate-600 text-sm">{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-[#6633cc]/20 bg-[#6633cc]/5">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Target className="h-5 w-5 text-[#ff6633]" />
                            Business Value
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.value.map((val, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-[#ff6633] flex-shrink-0 mt-1" />
                                <span className="text-slate-700 text-sm font-medium">{val}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Purple X */}
      <section className="py-20 bg-gradient-to-br from-[#000033] to-[#6633cc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Purple X?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Smarter security and stronger defense—continuously
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Built for SMEs", description: "Designed specifically for small and mid-market organizations with enterprise-grade capabilities" },
              { title: "Subscription-Based", description: "Predictable monthly pricing with no hidden fees or surprise costs" },
              { title: "Compliance-Aware", description: "Built-in support for ISO 27001, NIST, CIS, SOC 2 and more" },
              { title: "Automation-First", description: "Leverage automation for faster detection, response, and remediation" },
              { title: "Business-Aligned", description: "Clear connection between cyber risk and business impact" },
              { title: "Always-On Protection", description: "24/7 monitoring and response from our expert security team" }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Elevate Your Security?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call with our security experts to discuss how Purple X can protect your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-[#6633cc] hover:bg-[#6633cc]/90" data-testid="button-cta-discovery">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Discovery Call
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" data-testid="button-cta-pricing">
                View Pricing Plans
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
