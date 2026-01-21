import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  ChevronRight,
  CheckCircle,
  Calendar,
  ArrowLeft,
  Shield,
  ShieldAlert,
  Users,
  Activity,
  FileWarning,
  Lock,
  TrendingUp,
  AlertTriangle,
  X,
  Check,
  Lightbulb
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncluded = [
  {
    title: "Anti-Phishing & BEC Protection",
    description: "Detection of credential harvesting, impersonation, and social-engineering attacks.",
    icon: ShieldAlert
  },
  {
    title: "Malware & Attachment Scanning",
    description: "Inspection of links and attachments to block malicious payloads.",
    icon: FileWarning
  },
  {
    title: "Impersonation & Spoofing Defense",
    description: "Protection against domain, brand, and executive impersonation attempts.",
    icon: Users
  },
  {
    title: "DMARC & Domain Protection",
    description: "Policy configuration and monitoring to prevent email spoofing and domain abuse.",
    icon: Lock
  },
  {
    title: "Monitoring, Response & Reporting",
    description: "Alert triage, investigation support, and clear security reporting.",
    icon: Activity
  }
];

const businessValue = [
  { title: "Reduces phishing-driven breaches", icon: Shield },
  { title: "Protects users and brand reputation", icon: Users },
  { title: "Lowers incident response costs", icon: TrendingUp },
  { title: "Improves overall security awareness", icon: Lightbulb }
];

const whoIsFor = [
  "Organizations using cloud email platforms",
  "Businesses targeted by phishing and BEC",
  "Remote and distributed teams",
  "Compliance-driven environments"
];

export default function ManagedEmail() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed Email Security Services for SMEs | PurpleGuard</title>
      <meta name="description" content="Fully managed email security protecting against phishing, BEC, malware, and spoofing. Reduce human risk with 24/7 oversight." />
      <meta property="og:title" content="Managed Email Security Services for SMEs | PurpleGuard" />
      <meta property="og:description" content="Fully managed email security protecting against phishing, BEC, malware, and spoofing." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-slate-800 to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/managed-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Managed-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-rose-500/20 text-rose-300 border-rose-400/30 mb-6">
              Managed-X | Email Security
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed Email Security & Threat Protection
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Protect users and inboxes from phishing, impersonation, and malware—fully managed by PurpleGuard.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Advanced phishing and BEC protection",
                "Continuous monitoring and response",
                "Designed for Microsoft 365 and cloud email"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-200">
                  <CheckCircle className="h-5 w-5 text-rose-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white shadow-md">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request a Consultation
                </Button>
              </a>
              <Link href="/services/managed-x">
                <Button size="lg" variant="outline" className="border-white/50 bg-white/20 hover:bg-white/30 text-white font-medium">
                  View Managed-X Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Context Strip */}
      <section className="bg-slate-100 border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-600" />
              <span>Human-risk focused security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-600" />
              <span>Vendor-agnostic email protection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-600" />
              <span>Subscription-based managed service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Managed Email Security?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managed Email Security is a fully managed service that protects inbound and outbound email from phishing, business email compromise (BEC), malware, and spoofing. PurpleGuard operates and tunes email security controls to reduce user-driven breaches.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-rose-600 p-0">
                How Managed-X Works <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What's Included in Managed Email Security</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Delivered Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How the Service is Delivered</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vendor-Agnostic Email Security Platforms</h3>
              <p className="text-slate-600 leading-relaxed">
                PurpleGuard selects and manages industry-standard email security technologies based on environment, threat profile, and scale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fully Managed by PurpleGuard</h3>
              <ul className="space-y-3">
                {[
                  "Policy configuration and tuning",
                  "Threat monitoring and alert handling",
                  "Incident response coordination",
                  "Ongoing optimization and reporting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-16 bg-gradient-to-br from-rose-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Value</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValue.map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-white font-medium">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Who This Is For</h2>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {whoIsFor.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-rose-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Managed Email Security vs Basic Email Filtering</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  Basic Filtering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Signature-based, limited visibility, reactive.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Managed Email Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Behavioral detection, monitoring, and response.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-identity">
              <Button variant="outline">Managed Identity <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x/managed-endpoint">
              <Button variant="outline">Managed Endpoint <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Model</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managed Email Security is priced per mailbox, per month. Pricing depends on mailbox count, threat protection scope, and response requirements.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-rose-600 p-0">
                View Pricing Explained <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Unified Security Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Part of a Human-Centric Security Model</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
            Managed Email Security integrates with Managed Identity, Managed Endpoint, and Purple-X services to reduce user-based attack vectors across the organization.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-identity">
              <Button variant="outline">Managed Identity <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x/managed-endpoint">
              <Button variant="outline">Managed Endpoint <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/purple-x/purplesentinel">
              <Button variant="outline">PurpleSentinel (MDR) <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect your inboxes. Reduce human risk.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mmowafy@purpleguard.io?subject=Managed Email Security Custom Quote">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white font-semibold shadow-md">
                <Mail className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/50 bg-white/20 hover:bg-white/30 text-white font-medium">
                <Calendar className="h-5 w-5 mr-2" />
                Talk to an Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
