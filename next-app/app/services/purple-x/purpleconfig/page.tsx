import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, ChevronRight, Calendar, ArrowLeft, Shield, CheckCircle, RefreshCw, FileText, AlertTriangle, TrendingUp, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "PurpleConfig — Security Configuration Assessment & Hardening",
  description: "Continuously assess endpoints and systems against CIS benchmarks and NIST controls. Detect misconfigurations and enforce secure baselines.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function PurpleConfigPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Purple-X Services
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 mb-6">Purple-X | Configuration Security</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleConfig — Security Configuration Assessment & Hardening
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Continuously assess your systems against industry benchmarks and enforce secure configurations to eliminate misconfiguration risk.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["CIS benchmark assessments", "Continuous drift monitoring", "Remediation guidance"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Request Configuration Assessment
                </Button>
              </a>
              <Link href="/services/purple-x">
                <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  View Purple-X Services <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is PurpleConfig?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PurpleConfig continuously assesses systems and endpoints against industry-recognized security benchmarks (CIS, NIST, ISO 27001) to identify misconfigurations, enforce secure baselines, and monitor for security drift. It's the foundation of a strong security posture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in PurpleConfig</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CIS Benchmark Assessments", description: "Evaluate systems against CIS Level 1 and Level 2 benchmarks for Windows, Linux, and cloud platforms.", icon: Shield, color: "from-emerald-500 to-teal-600" },
              { title: "NIST-Aligned Configuration Checks", description: "Map configuration security to NIST CSF controls for compliance and risk management.", icon: FileText, color: "from-teal-500 to-emerald-600" },
              { title: "Endpoint Hardening", description: "Windows and Linux endpoint hardening to remove unnecessary attack surface.", icon: Settings, color: "from-emerald-600 to-teal-700" },
              { title: "Misconfiguration Detection", description: "Identify high-risk misconfigurations before they are exploited.", icon: AlertTriangle, color: "from-teal-600 to-emerald-700" },
              { title: "Security Drift Monitoring", description: "Continuous monitoring with alerts when configurations deviate from secure baselines.", icon: RefreshCw, color: "from-emerald-500 to-teal-600" },
              { title: "Remediation Recommendations", description: "Actionable, prioritized remediation guidance with technical and executive views.", icon: Zap, color: "from-teal-500 to-emerald-600" },
            ].map((card) => (
              <Card key={card.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{card.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-slate-600">{card.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Value</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reduced risk from misconfigurations", icon: AlertTriangle },
              { title: "Improved baseline security posture", icon: Shield },
              { title: "Continuous compliance visibility", icon: TrendingUp },
              { title: "Support for audits and regulatory requirements", icon: FileText },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-white font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Starting at $5/endpoint/month</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Simple per-endpoint pricing that scales with your environment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Calendar className="h-5 w-5 mr-2" /> Get Started
              </Button>
            </a>
            <Link href="/pricing">
              <Button size="lg" variant="outline">View Pricing Details <ChevronRight className="h-5 w-5 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Misconfiguration is the #1 cause of cloud breaches. Fix it.</h2>
          <p className="text-xl text-slate-300 mb-8">PurpleConfig gives you continuous visibility and control over your security baseline.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Book a Configuration Assessment
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io?subject=PurpleConfig Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">Contact Sales</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
