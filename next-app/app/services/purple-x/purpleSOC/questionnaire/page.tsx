import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/json-ld";
import QuestionnaireClient from "./QuestionnaireClient";
import "./questionnaire.css";

const OG = ogImageUrl({
  title: "PurpleSOC Discovery Questionnaire",
  subtitle: "Size your SOC in 5 minutes — LDS, EPS, storage & pricing.",
  category: "PurpleSOC",
  color: "purple",
});

export const metadata: Metadata = {
  title: "PurpleSOC Discovery Questionnaire — Size Your SOC | PurpleGuard",
  description:
    "Interactive SOC sizing tool. Calculate your LDS, EPS, storage, and indicative monthly/annual pricing across all sites — Managed, Co-Managed, or Self-Managed.",
  alternates: {
    canonical:
      "https://www.purpleguard.io/services/purple-x/purpleSOC/questionnaire",
  },
  openGraph: {
    title: "PurpleSOC Discovery Questionnaire — PurpleGuard",
    description:
      "Size your SOC in 5 minutes. LDS, EPS, storage, and indicative pricing.",
    url: "https://www.purpleguard.io/services/purple-x/purpleSOC/questionnaire",
    images: [{ url: OG, width: 1200, height: 630, alt: "PurpleSOC Discovery Questionnaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleSOC Discovery Questionnaire — PurpleGuard",
    description: "Size your SOC in 5 minutes.",
    images: [OG],
  },
};

export default function QuestionnairePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Purple X", url: "/services/purple-x" },
    { name: "PurpleSOC", url: "/services/purple-x/purplesoc" },
    {
      name: "Discovery Questionnaire",
      url: "/services/purple-x/purpleSOC/questionnaire",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000033] via-slate-900 to-[#000033] relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 8% 18%, rgba(127,119,221,0.13) 0%, transparent 60%), radial-gradient(ellipse 45% 38% at 92% 82%, rgba(13,148,136,0.07) 0%, transparent 60%)",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-12 pb-20">
        <div className="mb-6">
          <Link href="/services/purple-x/purplesoc">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to PurpleSOC
            </Button>
          </Link>
        </div>
        <QuestionnaireClient />
      </div>
    </div>
  );
}
