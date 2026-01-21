import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  ChevronRight,
  CheckCircle,
  Calendar,
  ArrowLeft,
  Shield,
  Cloud,
  HardDrive,
  Activity,
  RefreshCcw,
  AlertTriangle,
  Clock,
  FileCheck,
  X,
  Check,
  Mail
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const whatsIncluded = [
  {
    title: "Managed Backup Operations",
    description: "Continuous management of backups for servers, endpoints, cloud workloads, and SaaS data.",
    icon: HardDrive
  },
  {
    title: "Ransomware-Resilient Storage",
    description: "Use of immutable and off-site backup storage to protect against encryption and deletion attacks.",
    icon: Shield
  },
  {
    title: "Disaster Recovery & Restore Support",
    description: "Defined recovery procedures with assisted restores for systems, applications, and data.",
    icon: RefreshCcw
  },
  {
    title: "Recovery Testing & Validation",
    description: "Regular recovery testing to verify backup integrity and recovery objectives.",
    icon: FileCheck
  },
  {
    title: "Monitoring, Alerting & Reporting",
    description: "Ongoing monitoring of backup jobs, failures, and recovery readiness with clear reporting.",
    icon: Activity
  }
];

const businessValue = [
  { title: "Reduces impact of ransomware attacks", icon: Shield },
  { title: "Improves recovery time and confidence", icon: Clock },
  { title: "Protects critical business data", icon: Database },
  { title: "Supports compliance and audit needs", icon: FileCheck }
];

const whoIsFor = [
  "Organizations concerned about ransomware",
  "Businesses with critical data and uptime needs",
  "IT teams without dedicated DR expertise",
  "Compliance-driven environments"
];

export default function ManagedBackup() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>Managed Backup & BCDR Services for SMEs | PurpleGuard</title>
      <meta name="description" content="Managed backup and disaster recovery services protecting against ransomware, data loss, and outages. Secure, tested, and compliance-ready." />
      <meta property="og:title" content="Managed Backup & BCDR Services for SMEs | PurpleGuard" />
      <meta property="og:description" content="Managed backup and disaster recovery services protecting against ransomware, data loss, and outages." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/managed-x">
            <Button variant="ghost" className="text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Managed-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Managed-X | Data Protection
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed Backup & Business Continuity Disaster Recovery (BCDR)
            </h1>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Protect critical data, ensure rapid recovery, and maintain business continuity—fully managed by PurpleGuard.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Ransomware-resilient backups",
                "Tested recovery and continuity planning",
                "Fully managed, compliance-ready service"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#000033] hover:bg-[#000033]/90 text-white shadow-md">
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
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span>Ransomware resilience focus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span>Vendor-agnostic backup platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span>Subscription-based managed service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Managed Backup & BCDR?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managed Backup & BCDR is a fully managed service that ensures critical data is securely backed up, recoverable, and protected against ransomware, system failure, and disasters. PurpleGuard designs, operates, monitors, and tests backup and recovery processes on behalf of the customer.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-amber-600 p-0">
                How Managed-X Works <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What's Included in Managed Backup & BCDR</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-amber-600" />
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vendor-Agnostic Backup Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                PurpleGuard selects and manages industry-standard backup and BCDR technologies based on environment, data criticality, and recovery objectives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fully Managed by PurpleGuard</h3>
              <ul className="space-y-3">
                {[
                  "Backup policy design and tuning",
                  "Job monitoring and failure remediation",
                  "Recovery assistance and testing",
                  "Retention and lifecycle management"
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
      <section className="py-16 bg-gradient-to-br from-amber-500 to-yellow-600">
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
                <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Managed BCDR vs Basic Backup</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  Basic Backup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Untested restores, limited visibility, reactive recovery.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Managed BCDR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Monitored, tested, and supported recovery operations.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-firewall">
              <Button variant="outline">Managed Firewall <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
              Managed Backup & BCDR is priced per workload or per protected system, per month. Pricing depends on data volume, retention requirements, recovery objectives, and storage scope.
            </p>
            <Link href="/pricing">
              <Button variant="link" className="text-amber-600 p-0">
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
            Managed Backup & BCDR integrates with Managed Endpoint, Managed Firewall, and Purple-X services to deliver comprehensive data protection and ransomware resilience across your infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/services/managed-x/managed-endpoint">
              <Button variant="outline">Managed Endpoint <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/managed-x/managed-firewall">
              <Button variant="outline">Managed Firewall <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
            <Link href="/services/purple-x/purplesentinel">
              <Button variant="outline">PurpleSentinel (MDR) <ChevronRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Recover faster. Protect your business.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mmowafy@purpleguard.io?subject=Managed Backup & BCDR Custom Quote">
              <Button size="lg" className="bg-[#000033] hover:bg-[#000033]/90 text-white font-semibold shadow-md">
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
