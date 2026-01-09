import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  KeyRound, 
  Shield, 
  ChevronRight,
  CheckCircle,
  Calendar,
  ArrowLeft,
  Lock,
  Users,
  Activity,
  Fingerprint,
  UserCheck,
  Eye,
  Cloud,
  Building2,
  X,
  Check,
  Mail
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncluded = [
  {
    title: "Multi-Factor Authentication (MFA)",
    description: "Strong authentication policies to protect against credential theft and phishing.",
    icon: Lock
  },
  {
    title: "Single Sign-On (SSO)",
    description: "Centralized access to applications with fewer credentials and reduced user friction.",
    icon: Fingerprint
  },
  {
    title: "Conditional Access Policies",
    description: "Context-aware access decisions based on user, device, location, and risk.",
    icon: Shield
  },
  {
    title: "Identity Lifecycle Management",
    description: "Provisioning, deprovisioning, and role-based access aligned with joiner/mover/leaver processes.",
    icon: UserCheck
  },
  {
    title: "Monitoring, Logging & Reporting",
    description: "Visibility into authentication events, access patterns, and policy enforcement.",
    icon: Activity
  }
];

const businessValue = [
  { title: "Reduces account takeover risk", icon: Shield },
  { title: "Enforces least-privilege access", icon: Lock },
  { title: "Simplifies user access management", icon: Users },
  { title: "Strengthens zero-trust posture", icon: KeyRound }
];

const whoIsFor = [
  "Organizations with cloud and SaaS applications",
  "Remote and hybrid workforces",
  "Businesses adopting zero trust",
  "Compliance-driven environments"
];

export default function ManagedIdentity() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed Identity & Access Management (IAM) | PurpleGuard</title>
      <meta name="description" content="Managed identity and access management with MFA, SSO, and conditional access. Reduce account compromise and enforce zero trust." />
      <meta property="og:title" content="Managed Identity & Access Management (IAM) | PurpleGuard" />
      <meta property="og:description" content="Managed identity and access management with MFA, SSO, and conditional access." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-cyan-900 to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/managed-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Managed-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 mb-6">
              Managed-X | Identity & Access
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed Identity & Access Management
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Secure user access with zero-trust identity controls—fully managed by PurpleGuard.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Identity-first security model",
                "MFA, SSO, and conditional access",
                "Continuous policy management and monitoring"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-200">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
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
              <CheckCircle className="h-4 w-4 text-cyan-600" />
              <span>Zero Trust–aligned identity model</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-600" />
              <span>Vendor-agnostic IAM delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-600" />
              <span>Subscription-based managed service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Managed Identity?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managed Identity is a fully managed identity and access management service that controls who can access systems, applications, and data. PurpleGuard designs, operates, and monitors identity controls to reduce account compromise and enforce least privilege.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-cyan-600 p-0">
                How Managed-X Works <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What's Included in Managed Identity</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-cyan-600" />
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vendor-Agnostic Identity Platforms</h3>
              <p className="text-slate-600 leading-relaxed">
                PurpleGuard selects and manages industry-standard identity platforms based on customer environment, compliance needs, and scale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fully Managed by PurpleGuard</h3>
              <ul className="space-y-3">
                {[
                  "Policy design and tuning",
                  "User and role management",
                  "Access reviews and optimization",
                  "Ongoing monitoring and support"
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
      <section className="py-16 bg-gradient-to-br from-cyan-900 to-[#000033]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Value</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValue.map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-cyan-300" />
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
                <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Managed Identity vs Traditional Access Control</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  Traditional IAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Static access, manual administration, higher risk of compromise.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Managed Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Continuous policy enforcement, monitoring, and governance.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-endpoint">
              <Button variant="outline">Managed Endpoint <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x/managed-sase-ztna">
              <Button variant="outline">Managed SASE / ZTNA <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
              Managed Identity is priced per user, per month. Pricing depends on user count, applications integrated, and access policy complexity.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-cyan-600 p-0">
                View Pricing Explained <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Zero Trust Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Part of a Zero Trust Security Model</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
            Managed Identity integrates with Managed Endpoint, Managed SASE, and Purple-X services to deliver consistent identity-driven security across the environment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-endpoint">
              <Button variant="outline">Managed Endpoint <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x/managed-sase-ztna">
              <Button variant="outline">Managed SASE / ZTNA <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/purple-x/purplesentinel">
              <Button variant="outline">PurpleSentinel (MDR) <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#000033] to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Control access. Reduce risk. Enable trust.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mmowafy@purpleguard.io?subject=Managed Identity Custom Quote">
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
