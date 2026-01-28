import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Shield,
  CheckCircle,
  Calendar,
  ArrowLeft,
  Zap,
  FileSearch,
  Layers,
  ChevronRight,
  Check,
  X,
  MessageSquare,
  ShieldCheck,
  Activity,
  BarChart3,
  Cloud,
  RefreshCw,
  FileText,
  Monitor
} from "lucide-react";

const whatsIncludedCards = [
  {
    title: "Security Configuration Assessment",
    description: "Evaluation of systems against CIS, NIST, and security best-practice benchmarks.",
    icon: FileSearch,
    color: "from-teal-500 to-cyan-600"
  },
  {
    title: "Endpoint & Server Hardening",
    description: "Assessment and guidance for Windows and Linux endpoint and server configurations.",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Cloud & Platform Configuration Review",
    description: "Identification of insecure settings across cloud and virtualized environments.",
    icon: Cloud,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Configuration Drift Detection",
    description: "Ongoing monitoring to identify deviations from approved secure baselines.",
    icon: RefreshCw,
    color: "from-teal-600 to-emerald-700"
  },
  {
    title: "Compliance Mapping & Reporting",
    description: "Clear reporting mapped to compliance frameworks and audit requirements.",
    icon: FileText,
    color: "from-cyan-600 to-teal-700"
  }
];

const businessValueItems = [
  {
    title: "Reduces misconfiguration-driven breaches",
    icon: ShieldCheck
  },
  {
    title: "Improves security baseline consistency",
    icon: Activity
  },
  {
    title: "Detects configuration drift early",
    icon: RefreshCw
  },
  {
    title: "Supports audit and compliance readiness",
    icon: BarChart3
  }
];

const whoThisIsFor = [
  "Organizations preparing for audits",
  "Businesses with complex or hybrid environments",
  "IT teams lacking configuration visibility",
  "Compliance-driven organizations"
];

const deliveryOptions = [
  {
    title: "One-time configuration assessment",
    description: "Point-in-time evaluation of your security configurations"
  },
  {
    title: "Scheduled recurring assessments",
    description: "Regular assessments to maintain compliance and security posture"
  },
  {
    title: "Continuous configuration monitoring",
    description: "Subscription-based ongoing monitoring for drift detection"
  }
];

const complianceFrameworks = [
  "CIS Benchmarks",
  "NIST CSF / NIST 800-53",
  "ISO 27001",
  "SOC 2"
];

const relatedServices = [
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt" },
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc" },
  { name: "PurpleSentinel (MDR)", path: "/services/purple-x/purplesentinel" },
  { name: "PurpleStrike", path: "/services/purple-x/purplestrike" }
];

export default function PurpleConfig() {
  return (
    <div className="min-h-screen bg-slate-900">
      <title>Security Configuration & Hardening | PurpleConfig</title>
      <meta name="description" content="Continuous security configuration assessment and hardening aligned to CIS and NIST. Detect drift, reduce misconfigurations, and stay compliant." />
      <meta property="og:title" content="Security Configuration & Hardening | PurpleConfig" />
      <meta property="og:description" content="Continuous security configuration assessment and hardening aligned to CIS and NIST. Detect drift, reduce misconfigurations, and stay compliant." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple-X Services
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 mb-4">
                Configuration & Hardening
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                PurpleConfig — Security Configuration & Hardening
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Identify misconfigurations, enforce secure baselines, and maintain compliance—continuously.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">CIS and NIST-aligned assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">Continuous configuration drift detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">Endpoint, server, and cloud coverage</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    Request a Configuration Assessment
                  </Button>
                </Link>
                <Link href="/services/purple-x">
                  <Button size="lg" variant="outline" className="border-slate-400 bg-slate-700/50 text-white hover:bg-slate-700">
                    View Purple-X Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Secure Configuration Management
                </h3>
                <p className="text-slate-300 text-center">
                  Continuously assess and harden your systems against recognized security benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-800 py-6 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span>Misconfiguration risk reduction</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle className="h-5 w-5 text-cyan-400" />
              <span>Compliance-aware security controls</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="h-5 w-5 text-cyan-400" />
              <span>Subscription-based or assessment-driven delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is PurpleConfig */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            What is PurpleConfig?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-center mb-8">
            PurpleConfig is PurpleGuard's security configuration assessment and hardening service that continuously evaluates systems against recognized security benchmarks. It identifies misconfigurations, configuration drift, and weak controls that increase breach and compliance risk.
          </p>
          <div className="text-center">
            <Link href="/services/purple-x">
              <Button variant="link" className="text-cyan-400 hover:text-cyan-300">
                How Purple-X Works
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What's Included in PurpleConfig
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive configuration assessment and hardening capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncludedCards.map((card, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How PurpleConfig is Delivered */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How PurpleConfig is Delivered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4">
                  <FileSearch className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Benchmark-Driven Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  PurpleConfig assessments are aligned to recognized standards such as CIS Benchmarks and NIST guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {complianceFrameworks.map((framework, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Vendor-Agnostic Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  PurpleGuard evaluates configurations across environments without forcing specific tooling or platforms.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-cyan-400 hover:text-cyan-300">
                Compliance Solutions
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Value
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessValueItems.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-white font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who PurpleConfig is For
            </h2>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <ul className="space-y-4">
              {whoThisIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-cyan-400 hover:text-cyan-300">
                Industries We Serve
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              PurpleConfig vs One-Time Hardening
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Aspect</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">One-Time Hardening</th>
                  <th className="text-left py-4 px-6 text-cyan-400 font-medium">PurpleConfig</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Approach</td>
                  <td className="py-4 px-6">Static, point-in-time assessment</td>
                  <td className="py-4 px-6 text-white">Continuous assessment and monitoring</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Drift Detection</td>
                  <td className="py-4 px-6">
                    <X className="h-5 w-5 text-red-400" />
                  </td>
                  <td className="py-4 px-6">
                    <Check className="h-5 w-5 text-green-400" />
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Compliance Mapping</td>
                  <td className="py-4 px-6">Basic or manual</td>
                  <td className="py-4 px-6 text-white">Automated framework alignment</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Frequency</td>
                  <td className="py-4 px-6">Once</td>
                  <td className="py-4 px-6 text-white">Continuous or scheduled</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/services/purple-x/purplevapt">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                PurpleVAPT
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/services/purple-x/purplestrike">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                PurpleStrike
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Delivery Options
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryOptions.map((option, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                  <p className="text-slate-400 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="link" className="text-cyan-400 hover:text-cyan-300">
                View Pricing Explained
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Continuous Exposure Management */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Part of Continuous Exposure Management
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            PurpleConfig integrates with PurpleVAPT, PurpleSOC, PurpleSentinel, and PurpleStrike to reduce exposure caused by misconfigurations across the attack surface.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service, idx) => (
              <Link key={idx} href={service.path}>
                <Button variant="outline" className="border-slate-500 bg-slate-700/50 text-white hover:bg-slate-700">
                  {service.name}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Eliminate misconfigurations. Maintain secure baselines.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stay ahead of compliance requirements and reduce your attack surface with continuous configuration assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 shadow-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                <MessageSquare className="h-5 w-5 mr-2" />
                Talk to a Security Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
