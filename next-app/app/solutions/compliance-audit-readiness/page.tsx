import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, ChevronRight, Calendar, ArrowLeft, Shield, CheckCircle, FileText, Activity, Settings, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Audit Readiness — PurpleGuard Security Solution",
  description: "Achieve and maintain compliance with ISO 27001, SOC 2, NIST, HIPAA, PCI DSS, and GDPR through continuous monitoring and audit-ready documentation.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function ComplianceAuditReadinessPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/solutions">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Solutions
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 mb-6">Security Solution</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Compliance & Audit Readiness
            </h1>
            <p className="text-2xl text-emerald-300 font-semibold mb-6">Be audit-ready. Stay compliant. Reduce risk.</p>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              PurpleGuard helps organizations achieve and maintain compliance through continuous security monitoring, control validation, and audit-ready documentation.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["ISO 27001", "SOC 2", "NIST CSF", "HIPAA", "PCI DSS", "GDPR"].map((fw) => (
                <Badge key={fw} className="bg-white/10 text-white border-white/20 text-sm py-1">{fw}</Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Book Compliance Consultation
                </Button>
              </a>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  View All Solutions <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Compliance frameworks like ISO 27001, SOC 2, NIST CSF, HIPAA, PCI DSS, and GDPR require ongoing security operations, continuous monitoring, and documented evidence — not just a point-in-time assessment. Many organizations struggle to maintain compliance between audits, leading to gaps, findings, and escalating remediation costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How PurpleGuard Helps</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">PurpleGuard's compliance-aware services combine security operations with continuous evidence collection</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Continuous Control Monitoring", description: "Ongoing monitoring of security controls aligned to your compliance framework, with real-time visibility into control status.", icon: Activity, color: "from-emerald-500 to-teal-600" },
              { title: "Configuration Compliance", description: "CIS benchmark assessments and continuous drift monitoring to maintain secure, compliant system configurations.", icon: Settings, color: "from-teal-500 to-emerald-600" },
              { title: "Vulnerability Management", description: "Continuous vulnerability assessment with compliance-aligned prioritization and remediation tracking.", icon: Shield, color: "from-emerald-600 to-teal-700" },
              { title: "Audit-Ready Documentation", description: "Automated evidence collection and compliance reports ready for auditor review at any time.", icon: FileText, color: "from-teal-600 to-emerald-700" },
              { title: "Security Operations", description: "24/7 SOC monitoring with compliance-aware alerting and incident tracking for audit evidence.", icon: Eye, color: "from-emerald-500 to-teal-600" },
              { title: "Gap Assessment & Remediation", description: "Identify compliance gaps, prioritize remediation, and track progress toward compliance objectives.", icon: FileCheck, color: "from-teal-500 to-emerald-600" },
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frameworks Supported</h2>
              <div className="space-y-4">
                {[
                  { name: "ISO 27001", description: "Information security management system controls and continuous monitoring" },
                  { name: "SOC 2", description: "Trust service criteria for security, availability, and confidentiality" },
                  { name: "NIST CSF", description: "Cybersecurity framework identify, protect, detect, respond, recover functions" },
                  { name: "HIPAA", description: "Healthcare data protection, access controls, and audit logging" },
                  { name: "PCI DSS", description: "Payment card data protection, network segmentation, and vulnerability management" },
                  { name: "GDPR", description: "Data privacy, breach notification, and privacy by design requirements" },
                ].map((fw) => (
                  <div key={fw.name} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">{fw.name}</div>
                      <div className="text-slate-600 text-sm">{fw.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Services Used in This Solution</h2>
              <div className="grid gap-4">
                {[
                  { name: "PurpleVAPT", description: "Compliance-aligned vulnerability testing", path: "/services/purple-x/purplevapt" },
                  { name: "PurpleSOC", description: "24/7 monitoring with audit-ready reporting", path: "/services/purple-x/purplesoc" },
                  { name: "PurpleConfig", description: "CIS benchmark and configuration compliance", path: "/services/purple-x/purpleconfig" },
                  { name: "Managed EDR", description: "Endpoint security and event logging", path: "/services/managed-x/managed-edr" },
                  { name: "Managed Identity", description: "Access controls and identity governance", path: "/services/managed-x/managed-identity" },
                ].map((service) => (
                  <Link key={service.name} href={service.path}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-900">{service.name}</div>
                          <div className="text-slate-600 text-sm">{service.description}</div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-emerald-600" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for your next audit? We'll make sure you are.</h2>
          <p className="text-xl text-slate-300 mb-8">PurpleGuard turns compliance from a once-a-year scramble into a continuous, evidence-backed operation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Book Compliance Consultation
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io?subject=Compliance &amp; Audit Readiness Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">Contact Sales</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
