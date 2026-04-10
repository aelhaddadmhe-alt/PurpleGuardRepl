import type { Metadata } from "next";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/json-ld";

const OG = ogImageUrl({
  title: "VAPT Sizing Calculator",
  subtitle: "Estimate your Vulnerability Assessment & Penetration Testing cost",
  category: "Purple X",
  color: "purple",
});

export const metadata: Metadata = {
  title: { absolute: "VAPT Sizing Calculator — Estimate Your PurpleVAPT Cost | PurpleGuard" },
  description:
    "Get an instant VAPT cost estimate. Configure IPs, web apps, AD assessment & compliance — see pricing, effort breakdown & request a formal proposal.",
  alternates: { canonical: "https://www.purpleguard.io/services/purple-x/purplevapt/calculator" },
  openGraph: {
    title: "PurpleVAPT Sizing Calculator | PurpleGuard",
    description: "Instant VAPT pricing estimate for networks, apps & Active Directory. Configure scope and get a quote in seconds.",
    images: [{ url: OG, width: 1200, height: 630, alt: "PurpleVAPT Sizing Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleVAPT Sizing Calculator | PurpleGuard",
    description: "Instant VAPT pricing estimate — configure scope and get a quote in seconds.",
    images: [OG],
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Purple X", url: "/services/purple-x" },
    { name: "PurpleVAPT", url: "/services/purple-x/purplevapt" },
    { name: "Calculator", url: "/services/purple-x/purplevapt/calculator" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
