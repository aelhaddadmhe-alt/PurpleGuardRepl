import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, ChevronRight, Calendar, ArrowLeft, Shield, Users, Globe, KeyRound, Cpu, Eye, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Zero Trust & Secure Remote Access — PurpleGuard",
  description: "Replace legacy VPNs with identity-driven zero trust access. Continuously verify users, devices, and context for secure remote and hybrid workforce access.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function ZeroTrustPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/solutions">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Solutions
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-slate-500/30 text-slate-300 border-slate-400/30 mb-6">Security Solution</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Zero Trust & Secure Remote Access
            </h1>
            <p className="text-2xl text-slate-300 font-semibold mb-6">Secure access without trusting the network.</p>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Replace legacy VPNs with identity-driven, policy-based access. Continuously verify users, devices, and context to secure your workforce — anywhere.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["ZTNA", "MFA", "Conditional Access", "Device Trust"].map((fw) => (
                <Badge key={fw} className="bg-white/10 text-white border-white/20 text-sm py-1">{fw}</Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Plan Your Zero Trust Journey
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
              Traditional VPN-based access grants broad network access once connected, making it easy for attackers to move laterally after compromising a single user. Remote and hybrid work has accelerated this risk. Organizations need an access model that never trusts, always verifies — regardless of location.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How PurpleGuard Enables Zero Trust</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zero Trust Network Access", description: "Identity-driven application access that verifies every user and device before granting application-specific access — not broad network access.", icon: Lock, color: "from-slate-600 to-slate-800" },
              { title: "Multi-Factor Authentication", description: "Strong MFA enforcement across all users and applications with phishing-resistant options.", icon: KeyRound, color: "from-slate-700 to-slate-900" },
              { title: "Conditional Access", description: "Risk-based, context-aware access policies that respond to user behavior, device health, and location.", icon: Shield, color: "from-slate-600 to-slate-800" },
              { title: "Device Trust & Compliance", description: "Verify device health and compliance posture before granting access to sensitive resources.", icon: Cpu, color: "from-slate-700 to-slate-900" },
              { title: "Secure Web Gateway", description: "Protect all users from web-based threats regardless of where they work — office, home, or travel.", icon: Globe, color: "from-slate-600 to-slate-800" },
              { title: "Access Monitoring & Analytics", description: "Continuous monitoring of access patterns to detect anomalous behavior and insider threats.", icon: Eye, color: "from-slate-700 to-slate-900" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Services Used in This Solution</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Managed SASE / ZTNA", description: "Zero trust access and secure web gateway", path: "/services/managed-x/managed-sase-ztna" },
              { name: "Managed Identity", description: "MFA, SSO, and conditional access", path: "/services/managed-x/managed-identity" },
              { name: "PurpleSentinel (MDR)", description: "Detect lateral movement and identity abuse", path: "/services/purple-x/purplesentinel" },
              { name: "Managed Endpoint", description: "Device health and compliance verification", path: "/services/managed-x/managed-endpoint" },
            ].map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">{service.name}</div>
                      <div className="text-slate-600 text-sm">{service.description}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-700" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trust nothing. Verify everything.</h2>
          <p className="text-xl text-slate-300 mb-8">PurpleGuard delivers a managed Zero Trust access architecture for modern workforces.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Plan Your Zero Trust Journey
              </Button>
            </a>
            <a href="mailto:hello@purpleguard.io?subject=Zero Trust &amp; ZTNA Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">Contact Sales</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
