import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, ChevronRight, Calendar, ArrowLeft, Shield, Target, Bell, Activity, FileText, CheckCircle, Clock, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "PurpleSOC — 24/7 Managed Security Operations Center",
  description: "Fully managed 24/7 SOC with threat detection, incident investigation, and compliance-ready reporting. No internal SOC overhead.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function PurpleSOCPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Purple-X Services
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-6">Purple-X | Security Operations</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleSOC — 24/7 Managed Security Operations Center
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Always-on threat monitoring, detection, and incident response — without building an internal SOC.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["24/7 continuous monitoring", "Alert triage & incident investigation", "Compliance and audit-ready reporting"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Book a SOC Consultation
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

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
            {[{ icon: Clock, label: "24/7 expert coverage" }, { icon: Shield, label: "MITRE ATT&CK aligned" }, { icon: FileText, label: "Compliance-ready reporting" }].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-slate-600">
                <item.icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is PurpleSOC?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PurpleSOC is PurpleGuard's fully managed Security Operations Center service. We provide continuous, around-the-clock monitoring, threat detection, alert triage, and incident response across your environment — so you get enterprise-grade security operations without building or staffing an internal SOC.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in PurpleSOC</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Continuous Monitoring", description: "24/7 security monitoring across your entire environment — network, endpoints, cloud, and applications.", icon: Eye, color: "from-blue-500 to-cyan-600" },
              { title: "Alert Triage & Investigation", description: "Expert analysts triage every alert, reduce noise, and investigate suspicious events in real time.", icon: Bell, color: "from-cyan-500 to-blue-600" },
              { title: "Log Ingestion & Correlation", description: "Centralized log collection and SIEM-backed correlation to detect multi-stage attack patterns.", icon: Activity, color: "from-blue-600 to-cyan-700" },
              { title: "Threat Detection & Escalation", description: "Automated and manual detection with clear escalation playbooks and response procedures.", icon: Shield, color: "from-cyan-600 to-blue-700" },
              { title: "Incident Response Coordination", description: "Hands-on support for containment, eradication, and recovery when incidents occur.", icon: Target, color: "from-blue-500 to-indigo-600" },
              { title: "Compliance-Ready Reporting", description: "Regular reporting aligned to ISO 27001, SOC 2, NIST, and other frameworks.", icon: FileText, color: "from-indigo-500 to-blue-600" },
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

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Value</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Always-on operations without internal SOC overhead", icon: Clock },
              { title: "Faster detection and response times", icon: Zap },
              { title: "Reduced alert fatigue for your team", icon: Bell },
              { title: "Improved security maturity and compliance posture", icon: TrendingUp },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Who PurpleSOC is For</h2>
            <div className="space-y-4">
              {["Organizations lacking 24/7 internal security coverage", "Teams overwhelmed by alert volumes and false positives", "Businesses preparing for compliance certifications", "Organizations that have experienced security incidents and want to strengthen monitoring"].map((item) => (
                <div key={item} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pricing</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600">
                <CardTitle className="text-xl text-white">PurpleSOC</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$1,500<span className="text-xl text-slate-500">/month</span></div>
                <p className="text-slate-600 mb-6">Starting price — final pricing depends on environment size, log volumes, and SLA requirements.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-5 w-5 mr-2" /> Get a Quote
                    </Button>
                  </a>
                  <Link href="/pricing" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full">View Pricing Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your security never sleeps. Neither do we.</h2>
          <p className="text-xl text-slate-300 mb-8">Start your 24/7 managed security operations today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Book a Consultation
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io?subject=PurpleSOC Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
