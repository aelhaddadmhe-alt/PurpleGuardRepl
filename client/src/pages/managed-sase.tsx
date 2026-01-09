import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lock, 
  Globe, 
  ChevronRight,
  CheckCircle,
  Calendar,
  ArrowLeft,
  Shield,
  Cloud,
  Users,
  Activity,
  Eye,
  Network,
  Laptop,
  TrendingUp,
  Zap,
  X,
  Check,
  Mail
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncluded = [
  {
    title: "Zero Trust Network Access (ZTNA)",
    description: "Application-level access based on user identity, device posture, and context.",
    icon: Lock
  },
  {
    title: "Secure Web Gateway (SWG)",
    description: "Inspection and control of outbound web traffic to reduce exposure to malicious content.",
    icon: Globe
  },
  {
    title: "Cloud-Based Policy Enforcement",
    description: "Centralized security policies applied consistently across users and locations.",
    icon: Cloud
  },
  {
    title: "Remote & Hybrid Workforce Security",
    description: "Secure access for users regardless of location or network.",
    icon: Users
  },
  {
    title: "Monitoring, Logging & Reporting",
    description: "Visibility into access activity, policy enforcement, and security posture.",
    icon: Activity
  }
];

const businessValue = [
  { title: "Replaces legacy VPN infrastructure", icon: Network },
  { title: "Reduces lateral movement risk", icon: Shield },
  { title: "Improves remote user experience", icon: Laptop },
  { title: "Scales securely with business growth", icon: TrendingUp }
];

const whoIsFor = [
  "Remote and hybrid organizations",
  "Cloud-first environments",
  "Businesses retiring VPNs",
  "Zero Trust adoption initiatives"
];

export default function ManagedSASE() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed SASE & ZTNA Services for SMEs | PurpleGuard</title>
      <meta name="description" content="Secure remote access with Managed SASE and ZTNA. Replace legacy VPNs with zero-trust, cloud-delivered security managed by experts." />
      <meta property="og:title" content="Managed SASE & ZTNA Services for SMEs | PurpleGuard" />
      <meta property="og:description" content="Secure remote access with Managed SASE and ZTNA. Replace legacy VPNs with zero-trust security." />
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
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 mb-6">
              Managed-X | Secure Access
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed SASE & Zero Trust Network Access (ZTNA)
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Secure, cloud-delivered access for modern workforces—without legacy VPN complexity.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Zero Trust access to applications and resources",
                "Cloud-based security enforcement",
                "Fully managed by PurpleGuard"
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
                <Button size="lg" variant="outline" className="border-white/40 hover:bg-white/10 text-white font-medium">
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
              <span>Zero Trust security model</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-600" />
              <span>Vendor-agnostic SASE delivery</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Managed SASE / ZTNA?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managed SASE and ZTNA provide secure, identity-based access to applications and resources using a cloud-delivered security model. PurpleGuard manages policy design, deployment, monitoring, and ongoing optimization.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What's Included in Managed SASE / ZTNA</h2>
          
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vendor-Agnostic Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                PurpleGuard selects and operates SASE platforms based on customer size, geography, and risk profile.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fully Managed by PurpleGuard</h3>
              <ul className="space-y-3">
                {[
                  "Policy design and tuning",
                  "User and application onboarding",
                  "Continuous monitoring",
                  "Change and access management"
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
      <section className="py-16 bg-gradient-to-br from-slate-800 to-[#000033]">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Managed SASE / ZTNA vs VPN</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  Traditional VPN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Network-level access, implicit trust, high attack surface.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  SASE / ZTNA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Application-level access, zero trust, reduced exposure.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-identity">
              <Button variant="outline">Managed Identity <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x">
              <Button variant="outline">Managed Firewall <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
              Managed SASE / ZTNA is priced per user, per month. Pricing varies based on user count, access scope, security features, and geographic coverage.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-cyan-600 p-0">
                View Pricing Explained <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Unified Security Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Part of a Unified Security Model</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
            Managed SASE integrates with Managed Identity, Managed Endpoint, and Purple-X services to deliver consistent zero-trust security across users, devices, and applications.
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
      <section className="py-20 bg-gradient-to-br from-[#000033] to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure access everywhere. Trust nothing by default.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mmowafy@purpleguard.io?subject=Managed SASE/ZTNA Custom Quote">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white font-semibold shadow-md">
                <Mail className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/40 hover:bg-white/10 text-white font-medium">
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
