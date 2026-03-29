import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ChevronRight, Calendar, ArrowLeft, Globe, Shield, Eye, Search, KeyRound, CheckCircle, Zap, TrendingUp, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "PurpleSentry — Threat Intelligence, EASM & Digital Risk Protection",
  description: "Continuously monitor your external attack surface, dark web exposure, and digital risk. PurpleSentry identifies threats before attackers exploit them.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function PurpleSentryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Purple-X Services
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 mb-6">Purple-X | External Risk & Intelligence</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleSentry — Threat Intelligence, EASM & Digital Risk Protection
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Know what attackers know about you — before they act on it. Continuous monitoring of your external attack surface and digital risk exposure.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["External attack surface discovery", "Dark web & credential monitoring", "Brand & digital risk protection"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Request EASM Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is PurpleSentry?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PurpleSentry focuses on identifying and managing risks outside the traditional perimeter. By continuously monitoring your external attack surface and digital presence, PurpleSentry gives you early warning of exposures, data leaks, brand impersonation, and threat actor interest — before any damage is done.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in PurpleSentry</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "External Attack Surface Management", description: "Continuous discovery and monitoring of all internet-facing assets — known and unknown.", icon: Globe, color: "from-orange-500 to-red-600" },
              { title: "Internet-Facing Asset Discovery", description: "Identifies exposed services, open ports, misconfigured cloud resources, and forgotten assets.", icon: Search, color: "from-red-500 to-orange-600" },
              { title: "Dark Web Monitoring", description: "Monitors underground forums, paste sites, and dark web marketplaces for stolen credentials and data.", icon: Eye, color: "from-orange-600 to-red-700" },
              { title: "Brand & Domain Protection", description: "Detects phishing domains, brand impersonation, and fraudulent use of your identity online.", icon: Shield, color: "from-red-600 to-orange-700" },
              { title: "Credential & Data Leak Monitoring", description: "Early warning when employee credentials or sensitive data appear in breach databases.", icon: KeyRound, color: "from-orange-500 to-red-600" },
              { title: "Threat Intelligence Enrichment", description: "Context-rich intelligence on threat actors, campaigns, and TTPs targeting your industry.", icon: AlertTriangle, color: "from-red-500 to-orange-500" },
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

      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-900 via-red-800 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Value</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Visibility into unknown or unmanaged assets", icon: Globe },
              { title: "Early warning of data leaks and credential exposure", icon: Eye },
              { title: "Reduced risk of brand abuse and impersonation", icon: Shield },
              { title: "Improved external risk posture", icon: TrendingUp },
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Starting at $750/month</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Pricing scales with the number of domains, brands, and coverage depth required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Calendar className="h-5 w-5 mr-2" /> Book a Consultation
              </Button>
            </a>
            <Link href="/pricing">
              <Button size="lg" variant="outline">View Pricing Details <ChevronRight className="h-5 w-5 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-900 via-red-800 to-orange-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See your business the way attackers do.</h2>
          <p className="text-xl text-slate-300 mb-8">PurpleSentry monitors what's exposed so you can act before threats materialize.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Get a Free Exposure Report
              </Button>
            </a>
            <a href="mailto:hello@purpleguard.io?subject=PurpleSentry Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">Contact Sales</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
