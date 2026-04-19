import type { Metadata } from "next";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/json-ld";
import PrivacyContent from "./PrivacyContent";

const OG = ogImageUrl({
  title: "Privacy Policy",
  subtitle: "Your data. Your rights. Our commitment.",
  category: "Legal",
  color: "purple",
});

export const metadata: Metadata = {
  title: "Privacy Policy — PurpleGuard",
  description:
    "How PurpleGuard collects, uses, and protects your personal data — aligned with UAE PDPL, Egyptian Data Protection Law, and Saudi Arabia PDPL.",
  alternates: { canonical: "https://www.purpleguard.io/privacy" },
  openGraph: {
    title: "Privacy Policy — PurpleGuard",
    description:
      "Your data. Your rights. Our commitment. PurpleGuard's privacy practices for UAE, Egypt, and KSA.",
    url: "https://www.purpleguard.io/privacy",
    images: [{ url: OG, width: 1200, height: 630, alt: "PurpleGuard Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — PurpleGuard",
    description: "Your data. Your rights. Our commitment.",
    images: [OG],
  },
};

export default function PrivacyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PrivacyContent />
    </>
  );
}
