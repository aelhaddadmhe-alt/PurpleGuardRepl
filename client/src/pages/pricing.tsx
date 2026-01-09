import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight,
  CheckCircle,
  Calendar,
  Shield,
  Cpu,
  Eye,
  Target,
  FileText,
  Users,
  Building2,
  Mail,
  HelpCircle,
  Layers,
  TrendingUp
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const pricingFactors = [
  "Number of endpoints, users, applications, or workloads",
  "Required coverage (business hours vs 24/7)",
  "Compliance and reporting requirements",
  "Integration with existing tools or environments"
];

const managedXIncludes = [
  "Platform licensing (where applicable)",
  "Day-to-day operations and tuning",
  "Monitoring and alert handling",
  "Policy management and change control",
  "Standard reporting and health checks"
];

const purpleXIncludes = [
  "24/7 SOC or specialist oversight (where applicable)",
  "Threat analysis and prioritization",
  "Incident response and escalation",
  "Compliance-ready reporting",
  "Continuous validation or monitoring"
];

const complianceFrameworks = [
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "HIPAA",
  "PCI DSS"
];

const bundles = [
  {
    name: "Managed Foundation Bundle",
    bestFor: "Best for small IT teams",
    includes: [
      "Managed Endpoint",
      "Managed EDR",
      "Managed Email Security"
    ],
    outcome: "Baseline protection with minimal overhead.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Secure Infrastructure Bundle",
    bestFor: "Best for growing organizations",
    includes: [
      "Managed Endpoint",
      "Managed EDR",
      "Managed Firewall or SASE",
      "Managed Backup"
    ],
    outcome: "Improved resilience and reduced operational risk.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "PurpleGuard Complete",
    bestFor: "Best for compliance-driven or high-risk organizations",
    subtitle: "Managed-X + Purple-X",
    includes: [
      "Managed-X core services",
      "PurpleSOC or PurpleSentinel (MDR)",
      "PurpleVAPT or PurpleConfig",
      "Threat intelligence and exposure monitoring"
    ],
    outcome: "End-to-end protection, detection, and response under one MSSP.",
    color: "from-[#ff6633] to-orange-600"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Cybersecurity Pricing Explained | PurpleGuard Services</title>
      <meta name="description" content="Understand how PurpleGuard pricing works for managed security, MDR, VAPT, and infrastructure services. Transparent, scalable, SME-focused." />
      <meta property="og:title" content="Cybersecurity Pricing Explained | PurpleGuard Services" />
      <meta property="og:description" content="Understand how PurpleGuard pricing works for managed security, MDR, VAPT, and infrastructure services." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-[#6633cc] to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-6">
              Pricing
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Pricing, Without the Confusion
            </h1>
            
            <p className="text-2xl text-[#ff6633] font-semibold mb-6">
              Clear. Scalable. Built for SMEs.
            </p>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              PurpleGuard pricing is subscription-based, risk-aligned, and designed to scale with your business—without hidden costs or tool sprawl.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mmowafy@purpleguard.io?subject=Custom Quote Request">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  Get a Custom Quote
                </Button>
              </a>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Talk to an Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How PurpleGuard Pricing Works</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
            PurpleGuard pricing is based on what you protect, how critical it is, and the level of operational support required. Services are billed monthly and aligned to real-world risk, not arbitrary licensing.
          </p>
          
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing Factors</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#6633cc] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managed-X Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Pricing for Managed-X Services</h2>
              <p className="text-slate-600">Security Infrastructure</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">What You're Paying For</h3>
              <p className="text-slate-600 mb-6">
                Managed-X pricing covers technology, configuration, continuous management, monitoring, and support—not just access to tools.
              </p>
              
              <h4 className="font-semibold text-slate-900 mb-3">Included by default:</h4>
              <ul className="space-y-2 mb-6">
                {managedXIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle>Typical Pricing Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Per endpoint</div>
                    <div className="text-sm text-slate-600">Managed Endpoint, EDR</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Per user</div>
                    <div className="text-sm text-slate-600">Identity, SASE, Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Layers className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Per application or asset</div>
                    <div className="text-sm text-slate-600">WAF, Firewall, Backup</div>
                  </div>
                </div>
                
                <Link href="/services/managed-x">
                  <Button variant="outline" className="w-full mt-4">
                    View Managed-X Services <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purple-X Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Pricing for Purple-X Services</h2>
              <p className="text-slate-600">Cybersecurity & Exposure Management</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">What Makes Purple-X Different</h3>
              <p className="text-slate-600 mb-6">
                Purple-X services price expertise, automation, and outcomes, not infrastructure. These services actively reduce exposure and respond to threats.
              </p>
              
              <h4 className="font-semibold text-slate-900 mb-3">Included by default:</h4>
              <ul className="space-y-2 mb-6">
                {purpleXIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle>Typical Pricing Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Subscription-based</div>
                    <div className="text-sm text-slate-600">Monthly or annual</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Target className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Scope-based</div>
                    <div className="text-sm text-slate-600">Assets, users, environments</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Engagement-based</div>
                    <div className="text-sm text-slate-600">For Red Teaming or VAPT</div>
                  </div>
                </div>
                
                <Link href="/services/purple-x">
                  <Button variant="outline" className="w-full mt-4">
                    View Purple-X Services <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-16 bg-gradient-to-br from-[#000033] to-[#6633cc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Do You Offer Bundles?</h2>
            <p className="text-xl text-slate-300">
              Yes. PurpleGuard offers bundled security packages.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-white mb-3">Why Bundles Exist</h3>
            <p className="text-slate-300">
              Bundles reduce cost, simplify operations, and eliminate security gaps by combining prevention, detection, and response under one operating model.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle, index) => (
              <Card key={index} className="bg-white border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${bundle.color}`} />
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{bundle.bestFor}</Badge>
                  <CardTitle className="text-xl">{bundle.name}</CardTitle>
                  {bundle.subtitle && (
                    <CardDescription className="text-[#6633cc] font-medium">{bundle.subtitle}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-900 mb-3">Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {bundle.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-medium text-slate-900 mb-1">Business outcome:</div>
                    <div className="text-sm text-slate-600">{bundle.outcome}</div>
                  </div>
                  
                  <a href="mailto:mmowafy@purpleguard.io?subject=Bundle Pricing Request">
                    <Button className="w-full bg-[#6633cc] hover:bg-[#6633cc]/90">
                      Request Bundle Pricing <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Compliance & Pricing</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Compliance requirements influence pricing due to evidence collection, reporting depth, and response SLAs.
              </p>
              
              <h3 className="font-semibold text-slate-900 mb-4">Frameworks supported:</h3>
              <div className="flex flex-wrap gap-3">
                {complianceFrameworks.map((framework, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                    {framework}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Don't Show a Simple Price List</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cybersecurity pricing varies based on environment complexity and risk. Flat pricing often leads to under-protection or surprise costs later.
              </p>
              
              <h3 className="font-semibold text-slate-900 mb-4">What you get instead:</h3>
              <ul className="space-y-3">
                {[
                  "Transparent scoping",
                  "Predictable monthly costs",
                  "No shelfware",
                  "No forced long-term lock-ins"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#000033] to-[#6633cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Know your risk. Pay only for what you need.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mmowafy@purpleguard.io?subject=Custom Quote Request">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Mail className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
