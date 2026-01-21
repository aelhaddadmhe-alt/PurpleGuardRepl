import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Shield,
  Crosshair,
  CheckCircle,
  Phone,
  Calendar,
  ArrowLeft,
  Users,
  AlertTriangle,
  Zap,
  TrendingUp,
  FileSearch,
  Eye,
  Layers,
  ChevronRight,
  Check,
  X,
  MessageSquare,
  ShieldCheck,
  Activity,
  BarChart3,
  Building2
} from "lucide-react";

const whatsIncludedCards = [
  {
    title: "Red Teaming",
    description: "Expert-led adversary simulations designed to test people, processes, and technology.",
    icon: Target,
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Breach & Attack Simulation (BAS)",
    description: "Automated, repeatable simulations to continuously validate security control effectiveness.",
    icon: Crosshair,
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "MITRE ATT&CK Alignment",
    description: "Attack scenarios mapped to known adversary tactics, techniques, and procedures (TTPs).",
    icon: Layers,
    color: "from-amber-500 to-yellow-600"
  },
  {
    title: "Control Validation & Gap Identification",
    description: "Identification of detection, prevention, and response gaps across the kill chain.",
    icon: Eye,
    color: "from-red-600 to-rose-700"
  },
  {
    title: "Actionable Reporting & Recommendations",
    description: "Clear findings with prioritized remediation guidance for security and IT teams.",
    icon: FileSearch,
    color: "from-orange-600 to-red-700"
  }
];

const businessValueItems = [
  {
    title: "Validates real-world security effectiveness",
    icon: ShieldCheck
  },
  {
    title: "Identifies blind spots before attackers do",
    icon: Eye
  },
  {
    title: "Improves detection and response maturity",
    icon: Activity
  },
  {
    title: "Strengthens security investment ROI",
    icon: BarChart3
  }
];

const whoThisIsFor = [
  "Organizations with mature security controls",
  "Compliance-driven or regulated businesses",
  "SOC and MDR customers validating effectiveness",
  "Teams preparing for audits or threat campaigns"
];

const deliveryOptions = [
  {
    title: "One-time Red Team engagement",
    description: "Focused adversary simulation for point-in-time validation"
  },
  {
    title: "Continuous BAS subscription",
    description: "Ongoing automated simulations for continuous security validation"
  },
  {
    title: "Hybrid Red Team + BAS programs",
    description: "Combining expert-led and automated testing for comprehensive coverage"
  }
];

const relatedServices = [
  { name: "PurpleSOC", path: "/services/purple-x/purplesoc" },
  { name: "PurpleSentinel (MDR)", path: "/services/purple-x/purplesentinel" },
  { name: "PurpleVAPT", path: "/services/purple-x/purplevapt" },
  { name: "PurpleSentry", path: "/services/purple-x/purplesentry" }
];

export default function PurpleStrike() {
  return (
    <div className="min-h-screen bg-slate-900">
      <title>Red Teaming & Breach Attack Simulation | PurpleStrike</title>
      <meta name="description" content="Red Teaming and Breach & Attack Simulation to test real-world defenses. Validate controls using MITRE ATT&CK-aligned adversary tactics." />
      <meta property="og:title" content="Red Teaming & Breach Attack Simulation | PurpleStrike" />
      <meta property="og:description" content="Test your defenses against real-world adversary behavior with PurpleStrike Red Team and BAS services." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-orange-950 pt-20">
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
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 mb-4">
                Red Teaming & BAS
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                PurpleStrike — Red Teaming & Breach Attack Simulation
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Test your defenses against real-world adversary behavior—before attackers do.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-slate-200">Red Team engagements and adversary simulation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-slate-200">Continuous Breach & Attack Simulation (BAS)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-slate-200">MITRE ATT&CK-aligned validation</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    Request a PurpleStrike Engagement
                  </Button>
                </Link>
                <Link href="/services/purple-x">
                  <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-800">
                    View Purple-X Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Advanced Security Validation
                </h3>
                <p className="text-slate-300 text-center">
                  Test your defenses the way real attackers operate using proven adversary techniques.
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
              <Target className="h-5 w-5 text-orange-400" />
              <span>Adversary-focused security testing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Users className="h-5 w-5 text-orange-400" />
              <span>Purple Team-friendly approach</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="h-5 w-5 text-orange-400" />
              <span>Engagement or subscription-based delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is PurpleStrike */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            What is PurpleStrike?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-center mb-8">
            PurpleStrike is PurpleGuard's advanced security validation service combining Red Teaming and Breach & Attack Simulation (BAS). It emulates real attacker techniques to test whether security controls detect, prevent, and respond to threats across the environment.
          </p>
          <div className="text-center">
            <Link href="/services/purple-x">
              <Button variant="link" className="text-orange-400 hover:text-orange-300">
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
              What's Included in PurpleStrike
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive adversary simulation and security validation capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncludedCards.map((card, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
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

      {/* How PurpleStrike is Delivered */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How PurpleStrike is Delivered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Safe, Controlled Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  All simulations are conducted in a controlled manner to avoid production disruption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Collaborative Purple Team Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  PurpleStrike can be delivered collaboratively with internal teams to improve detection and response maturity.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services/purple-x">
              <Button variant="link" className="text-orange-400 hover:text-orange-300">
                PurpleGuard Operating Model
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
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
              Who PurpleStrike is For
            </h2>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <ul className="space-y-4">
              {whoThisIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-orange-400 hover:text-orange-300">
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
              PurpleStrike vs Traditional Pen Testing
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Aspect</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Traditional Pen Testing</th>
                  <th className="text-left py-4 px-6 text-orange-400 font-medium">PurpleStrike</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Approach</td>
                  <td className="py-4 px-6">Point-in-time vulnerability exploitation</td>
                  <td className="py-4 px-6 text-white">Continuous adversary simulation and control validation</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Focus</td>
                  <td className="py-4 px-6">Finding vulnerabilities</td>
                  <td className="py-4 px-6 text-white">Testing detection & response effectiveness</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-4 px-6 font-medium">Methodology</td>
                  <td className="py-4 px-6">Exploitation-focused</td>
                  <td className="py-4 px-6 text-white">MITRE ATT&CK-aligned TTPs</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Frequency</td>
                  <td className="py-4 px-6">Annual or quarterly</td>
                  <td className="py-4 px-6 text-white">Continuous or on-demand</td>
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
            <Link href="/services/purple-x/purplesoc">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                PurpleSOC
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
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
              <Button variant="link" className="text-orange-400 hover:text-orange-300">
                View Pricing Explained
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Part of Continuous Security Validation */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Part of Continuous Security Validation
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            PurpleStrike integrates with PurpleSOC, PurpleSentinel (MDR), PurpleVAPT, and PurpleSentry to continuously test and improve detection, response, and exposure management.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service, idx) => (
              <Link key={idx} href={service.path}>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  {service.name}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Test your defenses the way attackers will.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Validate your security controls against real adversary tactics before they're used against you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 shadow-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Get a Custom Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
