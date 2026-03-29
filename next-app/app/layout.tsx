import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "PurpleGuard — Smarter Security. Stronger Defense.",
    template: "%s | PurpleGuard",
  },
  description:
    "PurpleGuard is a managed security services provider (MSSP) delivering subscription-based, compliance-ready cybersecurity with 24/7 SOC monitoring for SMEs and mid-market organizations in Egypt, UAE, and KSA.",
  metadataBase: new URL("https://www.purpleguard.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.purpleguard.io",
    siteName: "PurpleGuard",
    title: "PurpleGuard — Smarter Security. Stronger Defense.",
    description:
      "Subscription-based managed cybersecurity for SMEs. 24/7 SOC, EDR, VAPT, threat intelligence and more — no annual contracts.",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 120,
        alt: "PurpleGuard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleGuard — Smarter Security. Stronger Defense.",
    description:
      "Subscription-based managed cybersecurity for SMEs in Egypt, UAE, and KSA.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
