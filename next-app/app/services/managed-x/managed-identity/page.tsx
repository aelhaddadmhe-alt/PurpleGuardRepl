import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, ChevronRight, Calendar, ArrowLeft, Shield, Lock, Users, Activity, FileText, CheckCircle, TrendingUp, Zap, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Managed Identity — MFA, SSO & Zero Trust Access Management",
  description: "Centralized identity and access management with MFA, SSO, conditional access, and zero trust enforcement. Starting at $5/user/month.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function ManagedIdentityPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/managed-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Managed-X Services
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 mb-6">Managed-X | Identity & Access</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Managed Identity — MFA, SSO & Zero Trust Access Management
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Centralized identity security with MFA enforcement, SSO, conditional access policies, and continuous identity monitoring.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["MFA & SSO management", "Conditional access policies", "Identity threat monitoring"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Get Identity Quote
                </Button>
              </a>
              <Link href="/services/managed-x">
                <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
                  View All Managed-X Services <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Managed Identity?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Managed Identity enforces zero trust access principles through comprehensive identity and access management. PurpleGuard deploys and manages MFA, SSO, conditional access, and identity governance to ensure only the right people access the right resources — with full visibility and control.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MFA & SSO Management", description: "Deployment and management of multi-factor authentication and single sign-on across all applications.", icon: KeyRound, color: "from-cyan-500 to-blue-600" },
              { title: "Conditional Access Policies", description: "Risk-based access policies that enforce context-aware authentication requirements.", icon: Lock, color: "from-blue-500 to-cyan-600" },
              { title: "Identity Threat Monitoring", description: "Continuous monitoring for identity-based threats including account compromise and privilege abuse.", icon: Eye, color: "from-cyan-600 to-blue-700" },
              { title: "Access Governance", description: "User lifecycle management, access reviews, and least-privilege enforcement.", icon: Users, color: "from-blue-600 to-cyan-700" },
              { title: "Policy Enforcement", description: "Automated enforcement of identity policies with real-time blocking of non-compliant access.", icon: Shield, color: "from-cyan-500 to-blue-600" },
              { title: "Identity Reporting", description: "Compliance-ready identity and access reporting for audits and governance.", icon: FileText, color: "from-blue-500 to-cyan-600" },
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

      <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Value</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reduces account compromise and credential attacks", icon: Shield },
              { title: "Improves access visibility and control", icon: Eye },
              { title: "Simplifies user lifecycle management", icon: Users },
              { title: "Enables zero trust security model", icon: TrendingUp },
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">$5 per user per month</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Covers MFA, SSO, conditional access management, and identity monitoring for all users.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Calendar className="h-5 w-5 mr-2" /> Get a Quote
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io?subject=Managed Identity Inquiry">
              <Button size="lg" variant="outline">Contact Sales <ChevronRight className="h-5 w-5 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">80% of breaches involve compromised credentials. Manage identity properly.</h2>
          <p className="text-xl text-slate-300 mb-8">Managed Identity puts zero trust access at the core of your security program.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Secure Your Identities Today
              </Button>
            </a>
            <Link href="/services/managed-x">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">View All Managed-X Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
