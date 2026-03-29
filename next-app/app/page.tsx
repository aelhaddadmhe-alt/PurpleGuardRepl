import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield, ChevronRight, Calendar, Mail, Target, Eye, Zap, Lock, Server,
  Globe, Building2, Stethoscope, Landmark, Code, Briefcase, Factory,
  CheckCircle, ShieldCheck, Cpu, FileCheck, Handshake, AlertTriangle,
  Cloud, Radar, KeyRound
} from "lucide-react";

export const metadata: Metadata = {
  title: "PurpleGuard — Smarter Security. Stronger Defense.",
  description:
    "Next-generation managed cybersecurity and exposure management for SMEs and mid-market organizations in Egypt, UAE, and KSA. 24/7 SOC, MDR, VAPT, subscription-based.",
};

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

const purpleXServices = [
  { name: "PurpleVAPT", description: "Vulnerability Assessment & Pen Testing", icon: Target, href: "/services/purple-x/purplevapt" },
  { name: "PurpleSOC", description: "24/7 SOC & Incident Response", icon: Eye, href: "/services/purple-x/purplesoc" },
  { name: "PurpleSentinel", description: "Managed Detection & Response (MDR)", icon: Shield, href: "/services/purple-x/purplesentinel" },
  { name: "PurpleSentry", description: "Threat Intelligence & EASM", icon: Radar, href: "/services/purple-x/purplesentry" },
  { name: "PurpleStrike", description: "Red Teaming & BAS", icon: Zap, href: "/services/purple-x/purplestrike" },
  { name: "PurpleConfig", description: "Security Configuration & Hardening", icon: Lock, href: "/services/purple-x/purpleconfig" },
  { name: "PurpleReveal", description: "Network Detection & Response", icon: Globe, href: "/services/purple-x/purplereveal" },
];

const managedXServices = [
  { name: "Managed Endpoint", description: "Endpoint management & patching", icon: Cpu, href: "/services/managed-x/managed-endpoint" },
  { name: "Managed EDR", description: "Endpoint threat detection & response", icon: Shield, href: "/services/managed-x/managed-edr" },
  { name: "Managed Firewall", description: "Network perimeter protection", icon: Server, href: "/services/managed-x/managed-firewall" },
  { name: "Managed WAF", description: "Web application & API protection", icon: Globe, href: "/services/managed-x/managed-waf" },
  { name: "Managed Email Security", description: "Phishing & email-borne threat defense", icon: Mail, href: "/services/managed-x/managed-email-security" },
  { name: "Managed Backup & BCDR", description: "Business continuity & disaster recovery", icon: Server, href: "/services/managed-x/managed-backup-bcdr" },
];

const whyPurpleGuard = [
  { title: "Built for SMEs", description: "No enterprise bloat — predictable monthly pricing", icon: Building2 },
  { title: "Automation-Driven", description: "SOAR, telemetry correlation, continuous validation", icon: Cpu },
  { title: "Compliance-Ready", description: "Audit-friendly reporting and evidence collection", icon: FileCheck },
  { title: "Single Partner Model", description: "One MSSP, full security lifecycle — no tool sprawl", icon: Handshake },
];

const useCases = [
  { name: "Compliance & Audit Readiness", icon: FileCheck, href: "/solutions/compliance-audit-readiness" },
  { name: "Ransomware Defense", icon: AlertTriangle, href: "/solutions/ransomware-defense" },
  { name: "Cloud & SaaS Security", icon: Cloud, href: "/solutions/cloud-saas-security" },
  { name: "External Attack Surface Management", icon: Radar, href: "/solutions/external-attack-surface-management" },
  { name: "Zero Trust & Secure Remote Access", icon: KeyRound, href: "/solutions/zero-trust-secure-remote-access" },
];

const industries = [
  { name: "Healthcare", icon: Stethoscope },
  { name: "Financial Services", icon: Landmark },
  { name: "SaaS & Technology", icon: Code },
  { name: "Professional Services", icon: Briefcase },
  { name: "Manufacturing", icon: Factory },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#000033] via-slate-900 to-[#000033] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smarter Security. Stronger Defense.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Next-generation managed cybersecurity and exposure management for SMEs and mid-market organizations.
            </p>
            <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-slate-300">
              {["24/7 SOC, MDR, and Exposure Management", "Subscription-based, compliance-aware", "Built for scale and automation"].map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#6633cc] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#6633cc] hover:bg-[#5522bb] text-white px-8">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request a Security Assessment
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/50 text-white bg-white/20 hover:bg-white/30 px-8">
                  View Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {[
              { icon: ShieldCheck, label: "Compliance-aligned (CIS, NIST, ISO-ready)" },
              { icon: Target, label: "MITRE ATT&CK aligned operations" },
              { icon: Building2, label: "SME & Mid-Market Focused MSSP" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 text-[#6633cc]" />
                <span className="text-slate-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purple X */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Cybersecurity & Exposure Management
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Purple X Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Always-on security services covering prevention, detection, response, and exposure reduction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {purpleXServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <Card className="h-full hover:shadow-lg hover:border-[#6633cc]/30 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#6633cc] transition-colors">{service.name}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services/purple-x">
                <Button variant="outline" className="border-[#6633cc] text-[#6633cc] hover:bg-[#6633cc] hover:text-white">
                  Explore Purple X Services <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Managed X */}
          <div>
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                Managed Security Infrastructure
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Managed X Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fully managed security infrastructure with continuous monitoring and policy enforcement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {managedXServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <Card className="h-full hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services/managed-x">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Explore Managed X Services <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why PurpleGuard */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why PurpleGuard</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Security built for your business, not enterprise complexity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyPurpleGuard.map((item) => (
              <Card key={item.title} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#6633cc] to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Use Cases & Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Outcome-focused security solutions tailored to your specific challenges and industry requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {useCases.map((useCase) => (
              <Link key={useCase.name} href={useCase.href}>
                <Card className="h-full hover:shadow-lg hover:border-[#6633cc]/30 transition-all cursor-pointer group text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#ff6633] to-orange-400 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#6633cc] transition-colors text-sm">{useCase.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/solutions">
              <Button variant="outline" className="border-[#ff6633] text-[#ff6633] hover:bg-[#ff6633] hover:text-white">
                View All Solutions <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-specific security expertise for regulated and high-risk sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <Link key={industry.name} href="/services">
                <Card className="h-full hover:shadow-lg hover:border-[#6633cc]/30 transition-all cursor-pointer group text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#6633cc] transition-colors">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#000033] via-[#6633cc] to-[#000033]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Know your risk. Control your exposure.</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a comprehensive security assessment from our experts and discover how PurpleGuard can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#6633cc] hover:bg-slate-100 px-8">
                <Calendar className="h-5 w-5 mr-2" />
                Book a Free Security Consultation
              </Button>
            </a>
            <a href="mailto:mmowafy@purpleguard.io">
              <Button size="lg" variant="outline" className="border-white/50 text-white bg-white/20 hover:bg-white/30 px-8">
                <Mail className="h-5 w-5 mr-2" />
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
