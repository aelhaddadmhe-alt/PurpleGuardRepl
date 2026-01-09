import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Cpu, 
  Server, 
  Lock,
  Mail,
  Database,
  KeyRound,
  Globe,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  Target
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const managedXServices = [
  {
    id: "managed-endpoint",
    name: "Managed Endpoint",
    tagline: "Centralized endpoint management, patching, and health monitoring",
    category: "Endpoint Management",
    icon: Cpu,
    description: "Managed Endpoint provides continuous endpoint visibility, automated patching, and policy enforcement for workstations and servers in hybrid environments.",
    pricing: "$6 / endpoint / month",
    bestFor: "Organizations needing endpoint hygiene and compliance posture",
    emailSubject: "Managed Endpoint Inquiry",
    detailLink: "/services/managed-x/managed-endpoint",
    capabilities: [
      "Patch and update management",
      "Endpoint inventory and lifecycle tracking",
      "Configuration and policy enforcement",
      "Device health monitoring",
      "Compliance posture reporting"
    ],
    value: [
      "Reduces IT overhead",
      "Improves endpoint hygiene",
      "Lowers misconfiguration risk",
      "Supports audit readiness"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "managed-edr",
    name: "Managed EDR",
    tagline: "Continuous endpoint threat detection and response",
    category: "Endpoint Security",
    icon: Shield,
    description: "Managed EDR delivers behavioral threat detection, automated containment, and SOC-backed investigation using endpoint telemetry.",
    pricing: "$18 / endpoint / month",
    bestFor: "Organizations needing advanced endpoint protection",
    emailSubject: "Managed EDR Inquiry",
    detailLink: "/services/managed-x/managed-edr",
    capabilities: [
      "Behavioral threat detection",
      "Automated isolation and remediation",
      "Endpoint telemetry correlation",
      "SOC escalation workflows",
      "Incident reporting"
    ],
    value: [
      "Faster threat detection",
      "Reduced ransomware impact",
      "Lower dwell time",
      "Stronger endpoint visibility"
    ],
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "managed-firewall",
    name: "Managed Firewall",
    tagline: "Fully managed perimeter and network firewall security",
    category: "Network Security",
    icon: Server,
    description: "Managed Firewall includes policy management, monitoring, tuning, and lifecycle support for on-prem and cloud firewalls.",
    pricing: "$120 / firewall / month",
    bestFor: "Organizations with complex perimeter security needs",
    emailSubject: "Managed FW Inquiry",
    capabilities: [
      "NGFW & SD-WAN management",
      "Policy configuration and tuning",
      "IDS/IPS monitoring",
      "Log analysis and alerting",
      "Change management"
    ],
    value: [
      "Reduces configuration errors",
      "Improves perimeter security",
      "Frees internal IT resources",
      "Supports regulatory controls"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "managed-waf",
    name: "Managed WAF",
    tagline: "Web application and API protection as a managed service",
    category: "Application Security",
    icon: Globe,
    description: "Managed WAF protects applications and APIs from OWASP Top 10, bots, and volumetric attacks through continuous tuning.",
    pricing: "$95 / application / month",
    bestFor: "Organizations with web applications and APIs to protect",
    emailSubject: "Managed WAF Inquiry",
    capabilities: [
      "OWASP Top 10 protection",
      "API security enforcement",
      "Bot mitigation",
      "DDoS protection",
      "Rule tuning and monitoring"
    ],
    value: [
      "Reduces application attack surface",
      "Protects customer data",
      "Improves uptime",
      "Enables secure digital services"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "managed-email",
    name: "Managed Email Security",
    tagline: "Advanced protection against phishing and email-borne threats",
    category: "Email Security",
    icon: Mail,
    description: "Managed Email Security defends against phishing, BEC, malware, and impersonation with monitoring and response support.",
    pricing: "$4 / mailbox / month",
    bestFor: "Organizations needing protection against email threats",
    emailSubject: "Managed E-mail Security inquiry",
    capabilities: [
      "Phishing and BEC protection",
      "DMARC and spoofing prevention",
      "Malware scanning",
      "Email continuity",
      "Incident response support"
    ],
    value: [
      "Reduces user-driven breaches",
      "Protects brand reputation",
      "Lowers response costs",
      "Improves employee trust"
    ],
    color: "from-red-500 to-pink-600"
  },
  {
    id: "managed-backup",
    name: "Managed Backup & BCDR",
    tagline: "Business-grade backup and disaster recovery management",
    category: "Business Continuity",
    icon: Database,
    description: "Managed Backup delivers monitored backups, ransomware recovery readiness, and compliance-aligned retention policies.",
    pricing: "$35 / workload / month",
    bestFor: "Organizations requiring data protection and recovery",
    emailSubject: "Managed Backup & BCDR inquiry",
    capabilities: [
      "Cloud and on-prem backups",
      "Immutable storage",
      "Ransomware recovery",
      "Recovery testing",
      "Retention management"
    ],
    value: [
      "Minimizes data loss",
      "Improves recovery time",
      "Strengthens ransomware resilience",
      "Supports audits"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "managed-identity",
    name: "Managed Identity",
    tagline: "Centralized identity and access security management",
    category: "Identity & Access",
    icon: KeyRound,
    description: "Managed Identity enforces zero-trust access using MFA, SSO, and conditional access policies.",
    pricing: "$5 / user / month",
    bestFor: "Organizations implementing zero trust access",
    emailSubject: "Managed Identity inquiry",
    detailLink: "/services/managed-x/managed-identity",
    capabilities: [
      "MFA and SSO",
      "Conditional access",
      "Identity monitoring",
      "Access governance",
      "Policy enforcement"
    ],
    value: [
      "Reduces account compromise",
      "Improves access visibility",
      "Simplifies user management",
      "Enables zero trust"
    ],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "managed-sase",
    name: "Managed SASE / ZTNA",
    tagline: "Secure cloud-delivered access for modern workforces",
    category: "Secure Access",
    icon: Lock,
    description: "Managed SASE provides zero-trust access, secure web gateway, and cloud-delivered security for remote users.",
    pricing: "$12 / user / month",
    bestFor: "Organizations with remote or hybrid workforces",
    emailSubject: "Managed SASE/ZTNA inquiry",
    detailLink: "/services/managed-x/managed-sase-ztna",
    capabilities: [
      "Zero Trust Network Access",
      "Secure Web Gateway",
      "CASB",
      "Policy-based access",
      "Encrypted traffic inspection"
    ],
    value: [
      "Secures remote access",
      "Replaces legacy VPNs",
      "Improves user experience",
      "Scales securely"
    ],
    color: "from-slate-600 to-slate-800"
  }
];

export default function ManagedX() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed Security Infrastructure Services | Managed-X by PurpleGuard</title>
      <meta name="description" content="Managed endpoint, firewall, WAF, identity, email, backup, and SASE services with 24/7 monitoring and compliance-ready operations." />
      <meta property="og:title" content="Managed Security Infrastructure Services | Managed-X by PurpleGuard" />
      <meta property="og:description" content="Fully managed security infrastructure services that reduce operational burden while strengthening protection, visibility, and compliance." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-blue-800 to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-6">
              Managed Security Infrastructure
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed Security Infrastructure. Delivered as a Service.
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Fully managed security services that reduce operational burden while strengthening protection, visibility, and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white shadow-md">
                  <Calendar className="h-5 w-5 mr-2" />
                  Talk to an Expert
                </Button>
              </a>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-white/50 bg-white/20 hover:bg-white/30 text-white font-medium">
                  Request Pricing
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Core Objectives */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                "24/7 monitoring and management",
                "Reduce operational security burden",
                "Compliance-ready operations",
                "Predictable monthly pricing"
              ].map((objective, index) => (
                <div key={index} className="flex items-start space-x-2 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
              Managed-X Service Catalog
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Eight specialized managed services designed to protect and optimize your security infrastructure
            </p>
          </div>

          <div className="space-y-16">
            {managedXServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'bg-slate-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">{service.category}</Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-blue-600 font-medium mb-4">{service.tagline}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-slate-700 mb-1">Starting Price</div>
                        <div className="text-2xl font-bold text-blue-600">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-1">Best For</div>
                        <div className="text-slate-600 text-sm">{service.bestFor}</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                      {service.detailLink && (
                        <Link href={service.detailLink}>
                          <Button className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white font-semibold">
                            View More
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      )}
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                          <Phone className="h-4 w-4 mr-2" />
                          Book Discovery Call
                        </Button>
                      </a>
                      <a href={`mailto:mmowafy@purpleguard.io?subject=${encodeURIComponent(service.emailSubject)}`}>
                        <Button variant="outline" className="border-slate-300 text-slate-700 font-medium">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Inquiry
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="grid gap-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-600" />
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

                      <Card className="border-blue-200 bg-blue-50">
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

      {/* Why Managed X */}
      <section className="py-20 bg-gradient-to-br from-[#000033] to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Managed-X?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Let us manage your security infrastructure so you can focus on your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "24/7 Expert Management", description: "Round-the-clock monitoring and management by certified security professionals" },
              { title: "Predictable Costs", description: "Subscription-based pricing with no hidden fees or surprise expenses" },
              { title: "Reduced Complexity", description: "Offload the burden of managing complex security infrastructure" },
              { title: "Compliance Support", description: "Built-in compliance reporting for ISO 27001, SOC 2, NIST and more" },
              { title: "Faster Response", description: "Rapid incident detection, escalation, and coordinated response" },
              { title: "Scalable Services", description: "Easily scale protection as your organization grows" }
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
            Stop managing security tools. Start managing risk.
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss how Managed-X can strengthen your security posture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Consultation
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 font-medium">
                Contact Sales
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              Final pricing depends on scale, SLAs, integrations, and compliance scope.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
