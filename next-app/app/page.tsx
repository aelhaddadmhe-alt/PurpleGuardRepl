import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PurpleGuard — Smarter Security. Stronger Defense.",
  description:
    "PurpleGuard is a managed security services provider (MSSP) delivering subscription-based cybersecurity with 24/7 SOC monitoring for SMEs in Egypt, UAE, and KSA.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000033] flex flex-col items-center justify-center px-4">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(102,51,204,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(102,51,204,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto py-32">
        {/* Phase badge */}
        <div className="inline-flex items-center gap-2 bg-[#6633cc]/10 border border-[#6633cc]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80]" />
          <span className="text-xs text-[#a78bfa] font-mono tracking-widest uppercase">
            Phase 1 Complete — Foundation Established
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Smarter Security.
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #6633cc, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stronger Defense.
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          PurpleGuard is a subscription-based MSSP serving SMEs and mid-market
          organizations in Egypt, UAE, and KSA — combining attack and defense in
          one continuous loop.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#6633cc] text-white font-semibold hover:bg-[#7c3aed] transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#6633cc]/40 text-[#a78bfa] font-semibold hover:bg-[#6633cc]/10 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Quick nav tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16">
          {[
            { label: "Purple X", href: "/services/purple-x", desc: "Advanced security" },
            { label: "Managed X", href: "/services/managed-x", desc: "Managed infrastructure" },
            { label: "Solutions", href: "/solutions", desc: "Use-case bundles" },
            { label: "Pricing", href: "/pricing", desc: "Transparent pricing" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group p-4 rounded-xl border border-[#6633cc]/20 bg-[#6633cc]/5 hover:bg-[#6633cc]/10 hover:border-[#6633cc]/40 transition-all text-left"
            >
              <div className="text-white font-semibold text-sm group-hover:text-[#c084fc] transition-colors">
                {item.label}
              </div>
              <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
