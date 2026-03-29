import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ChevronRight, Calendar, ArrowLeft, Shield, Eye, AlertTriangle, Search, Target, Activity, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "External Attack Surface Management (EASM) — PurpleGuard",
  description: "Continuously discover, monitor, and reduce your internet-facing attack surface. Identify unknown assets and close attack paths before they are weaponized.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function EASMPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/solutions">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Solutions
            </Button>
          </Link>
          <div className="max-w-4xl">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-6">Security Solution</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              External Attack Surface Management
            </h1>
            <p className="text-2xl text-purple-300 font-semibold mb-6">Know what attackers see — before they exploit it.</p>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Continuously discover, monitor, and reduce your internet-facing exposure. Identify unknown, unmanaged, and misconfigured external assets before they are weaponized.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Asset Discovery", "Exposure Detection", "Threat Intelligence", "Risk Prioritization"].map((fw) => (
                <Badge key={fw} className="bg-white/10 text-white border-white/20 text-sm py-1">{fw}</Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" /> Get a Free Exposure Report
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
              Organizations often don't know what's visible from the outside. Forgotten subdomains, misconfigured cloud services, exposed APIs, third-party connections, and legacy systems create an external attack surface that grows with every change. Attackers actively scan for these exposures. You should too.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How PurpleGuard Manages Your External Surface</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Continuous Asset Discovery", description: "Automated discovery of all internet-facing assets — domains, IP ranges, cloud services, APIs, and third-party exposures.", icon: Search, color: "from-purple-500 to-indigo-600" },
              { title: "Exposure Detection", description: "Identify open ports, misconfigurations, expired certificates, and exposed sensitive data.", icon: Eye, color: "from-indigo-500 to-purple-600" },
              { title: "Vulnerability Intelligence", description: "Map discovered assets to known vulnerabilities and exploitation attempts from threat intelligence feeds.", icon: AlertTriangle, color: "from-purple-600 to-indigo-700" },
              { title: "Risk Prioritization", description: "Prioritize exposures based on exploitability, business impact, and active threat actor interest.", icon: Target, color: "from-indigo-600 to-purple-700" },
              { title: "Dark Web Monitoring", description: "Monitor underground forums and dark web markets for mentions of your assets and brand.", icon: Shield, color: "from-purple-500 to-indigo-600" },
              { title: "Continuous Monitoring", description: "Ongoing alerting when new exposures are discovered or existing ones change state.", icon: Activity, color: "from-indigo-500 to-purple-600" },
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
              { name: "PurpleSentry", description: "EASM and threat intelligence", path: "/services/purple-x/purplesentry" },
              { name: "PurpleVAPT", description: "External penetration testing and validation", path: "/services/purple-x/purplevapt" },
              { name: "PurpleReveal", description: "Network-level detection of external threats", path: "/services/purple-x/purplereveal" },
              { name: "PurpleStrike", description: "External attack simulation", path: "/services/purple-x/purplestrike" },
            ].map((service) => (
              <Link key={service.name} href={service.path}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">{service.name}</div>
                      <div className="text-slate-600 text-sm">{service.description}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Attackers are scanning your perimeter right now. Are you?</h2>
          <p className="text-xl text-slate-300 mb-8">PurpleGuard's EASM solution gives you the attacker's view of your external exposure — continuously.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                <Calendar className="h-5 w-5 mr-2" /> Get a Free Exposure Report
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io?subject=EASM Solution Inquiry">
              <Button size="lg" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">Contact Sales</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
