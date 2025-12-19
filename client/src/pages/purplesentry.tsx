import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Eye, 
  Radar,
  Shield,
  Brain,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  ArrowLeft,
  Search,
  Users,
  AlertTriangle,
  Globe,
  Lock,
  Target,
  Zap,
  TrendingUp,
  FileSearch,
  ShieldAlert,
  Fingerprint,
  X,
  Check,
  MessageSquare
} from "lucide-react";

const serviceOverviewCards = [
  {
    id: "dark-web-section",
    title: "Dark Web Monitoring",
    description: "Detect and report compromised credentials, stealer logs, and leaked data across marketplaces, forums, and Telegram channels.",
    icon: Eye,
    color: "from-purple-600 to-indigo-700"
  },
  {
    id: "easm-section",
    title: "External Attack Surface Management",
    description: "Identify, map, and monitor public-facing digital assets — domains, IPs, exposed services — reducing blind spots.",
    icon: Radar,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "brand-protection-section",
    title: "Brand & Identity Protection",
    description: "Detect and take down typosquatting domains, social impersonation, malicious brand mentions, and executive targeting campaigns.",
    icon: Shield,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "cti-section",
    title: "Cyber Threat Intelligence",
    description: "Continuously ingest and correlate multi-source intelligence feeds — combining commercial, open-source, and proprietary recon data.",
    icon: Brain,
    color: "from-blue-500 to-cyan-600"
  }
];

const darkWebContent = [
  {
    id: "dwm-advanced",
    title: "Advanced Dark Web Monitoring",
    subtitle: "Illuminate the Hidden Threats Before They Strike",
    description: "Advanced Dark Web Monitoring is vital to your organization's cybersecurity infrastructure, providing a comprehensive overview of potential risks in the dark web ecosystem. This feature offers real-time monitoring capabilities, tracking Personal Identifiable Information (PII) exposures, and identifying threat actors and malicious activities.",
    features: [
      "Be the first to know when your employees' or customers' information is compromised",
      "Gain real-time insights into discussions about your organization on underground forums",
      "Country-specific insights and real-time alerts"
    ],
    icon: Eye
  },
  {
    id: "dwm-fraud",
    title: "Fraud Protection",
    subtitle: "Defense Against Financial Crimes",
    description: "Experience a whole new level of financial security with our Fraud Protection feature! Armed with real-time tracking and cutting-edge alert systems, Fraud Protection enables your company to act with lightning speed against unauthorized transactions and exposures.",
    features: [
      "Stolen Credit Card Tracking - Immediate alerts if your business or customer data is found in illicit credit card dumps",
      "Safeguard against fraud by tracking stolen credentials and financial scams"
    ],
    icon: ShieldAlert
  },
  {
    id: "dwm-vip",
    title: "VIP Protection",
    subtitle: "Safeguard Your Executives' Digital Footprint",
    description: "This service rolls out the red carpet of cybersecurity for your C-level executives with VIP Protection. Your leaders deserve unparalleled protection. Our VIP service tailors tracking and alerts to their specific needs, ensuring the most relevant security for their digital identities.",
    features: [
      "Protect your C-level executives by monitoring their personal information for suspicious activities",
      "Tailored tracking and alerts specific to executive needs"
    ],
    icon: Users
  },
  {
    id: "dwm-search",
    title: "Dark Web Search Engine",
    subtitle: "Ultimate Dark Web Compass",
    description: "Meet Dark Web Search Engine, also known as the 'Google of the Dark Web.' This is our ultimate compass for navigating through the hidden corridors of the internet. Using state-of-the-art search algorithms and highly customizable news feeds tailored to your industry or region, reveal potential threats with laser-like precision.",
    features: [
      "Dark Web News - Curated news feeds about the industry or country-based intelligence you need",
      "Dark Web Search - Search for keywords, IP addresses, emails, domains, hashes, and URLs for simple and effective threat hunting"
    ],
    icon: Search
  }
];

const easmContent = [
  {
    id: "easm-realtime",
    title: "Real-Time Monitoring",
    subtitle: "See What Hackers See in Your Digital Footprint",
    description: "Stay ahead by tracking vulnerable software, exposed assets, and SSL certificates across your infrastructure. You do not want your security posture to be poor when things dynamically change in your organization's digital environment.",
    features: [
      "Track your digital assets in real time and protect them from cyber-attacks",
      "Enhanced visibility and context for your current and future attack surface",
      "No need to manually provide your asset inventory"
    ],
    icon: Radar
  },
  {
    id: "easm-vulnerability",
    title: "Critical Vulnerability Alerts",
    subtitle: "Proactive Defense",
    description: "Get instant alerts on high-risk vulnerabilities linked to your systems, enabling swift remediation. PurpleSentry's EASM advanced continuous monitoring algorithms provide enhanced visibility without manual asset tracking.",
    features: [
      "Instant alerts on high-risk CVEs affecting your infrastructure",
      "Prioritized vulnerability assessment based on exploitability",
      "Context-aware recommendations for remediation"
    ],
    icon: AlertTriangle
  },
  {
    id: "easm-shadow",
    title: "Shadow IT Detection",
    subtitle: "Eliminate Blind Spots",
    description: "Identify and mitigate unauthorized systems and hidden threats before they compromise your security. Discover unknown assets, forgotten services, and rogue applications across your digital footprint.",
    features: [
      "Automatic discovery of unauthorized services and applications",
      "Continuous monitoring for new shadow IT deployments",
      "Risk assessment for discovered unauthorized assets"
    ],
    icon: Globe
  },
  {
    id: "easm-footprint",
    title: "Digital Footprint",
    subtitle: "Comprehensive Asset Visibility",
    description: "Every organization leaves a unique footprint – a trail of digital interactions, assets, and vulnerabilities in the digital world. Your digital footprint is more than just a trace; it's a critical aspect of your cybersecurity profile.",
    features: [
      "Thoroughly explore and secure each component of your digital footprint",
      "Identify exposed assets and hidden vulnerabilities",
      "Coverage across external databases and cloud services"
    ],
    icon: Fingerprint
  }
];

const brandProtectionContent = [
  {
    id: "bp-monitoring",
    title: "24/7 Threat Monitoring",
    subtitle: "Get a Digital Peace of Mind",
    description: "Detect emerging threats, phishing domains, and rogue apps across the web and dark web. Our continuous monitoring ensures you're always aware of potential threats targeting your brand.",
    features: [
      "Continuous scanning for phishing domains",
      "Rogue application detection across app stores",
      "Real-time alerts on emerging brand threats"
    ],
    icon: Eye
  },
  {
    id: "bp-leak",
    title: "Data Leak Prevention",
    subtitle: "Protect Your Sensitive Information",
    description: "Prevent fraud, unauthorized IP use, and data breaches with real-time detection and response capabilities. PurpleSentry's Brand Protection Services helps organizations check the exposure of their sensitive data by regularly monitoring the surface/dark web and other sources like Telegram channels.",
    features: [
      "Real-time detection of data exposure",
      "Source code and intellectual property leak monitoring",
      "Compromised password detection"
    ],
    icon: Lock
  },
  {
    id: "bp-abuse",
    title: "Brand Abuse Protection",
    subtitle: "Uncover the Cyber Risk Landscape",
    description: "Protect your reputation and assets with proactive monitoring for impersonation and misuse. By automatically monitoring black markets, IRC channels, social media, hacker forums, cloud buckets, and more, stay informed about emerging threats.",
    features: [
      "Social media impersonation detection",
      "Fake website and domain monitoring",
      "Executive targeting campaign detection"
    ],
    icon: ShieldAlert
  },
  {
    id: "bp-takedown",
    title: "Integrated Takedown",
    subtitle: "Swift Threat Elimination",
    description: "PurpleSentry's Brand Protection Services proactively guard against phishing scams by detecting suspicious activities concerning your digital assets, identifying compromised credentials, and facilitating the takedown of fraudulent sites.",
    features: [
      "Rapid takedown of fraudulent sites and domains",
      "Coordinated removal of impersonation accounts",
      "Legal support for persistent threat actors"
    ],
    icon: Target
  }
];

const brandRiskChecklist = [
  "Compromised Credentials Risk",
  "Typosquatted Domain Risk",
  "Proactive Credential Stuffing Protection",
  "Social Media Risks",
  "Unknown Data Exposure Risks",
  "Credit Card Fraud Risks",
  "Rogue Mobile Apps",
  "Integrated Takedown"
];

const ctiContent = [
  {
    id: "cti-actionable",
    title: "Actionable Intelligence",
    subtitle: "Your Adaptive Shield Against Cyber Threats",
    description: "Gain contextual, actionable insights from one of the industry's largest threat intelligence databases. Enjoy a streamlined experience with advanced modules tailored for comprehensive CTI coverage.",
    features: [
      "Contextual insights from massive threat intelligence database",
      "Redesigned & enriched features for comprehensive coverage",
      "All-in-One Threat Intel Solution - no juggling multiple platforms"
    ],
    icon: Brain
  },
  {
    id: "cti-hunting",
    title: "Threat Hunting",
    subtitle: "Advanced Threat Hunting: Stay Ahead of Cyber Risks",
    description: "Welcome to the future of cybersecurity, defined by PurpleSentry and led by groundbreaking Threat Hunting module. In an era where cyber threats are more sophisticated than ever, a proactive stance isn't just beneficial; it's essential.",
    features: [
      "Proactive threat anticipation and preparation",
      "Forward-thinking approach to digital domain protection",
      "Shield against known and unknown dangers"
    ],
    icon: Target
  },
  {
    id: "cti-vulnerability",
    title: "Vulnerability Intelligence",
    subtitle: "Win the Race Against Threat Actors",
    description: "This is a contest against time! Research shows that threat actors scan for vulnerable endpoints within 15 minutes of a new CVE being publicly disclosed. Therefore, security analysts need prioritization.",
    features: [
      "Instant alerts on CVEs affecting your infrastructure",
      "Customizable monitoring for specific products and technologies",
      "Prioritized insights aligned with your security requirements"
    ],
    icon: FileSearch
  },
  {
    id: "cti-darkweb",
    title: "Dark Web Intelligence",
    subtitle: "Let Us Be Your Eyes on the Dark Web",
    description: "Cyberattacks often start with planning in hidden corners of the web. Even tiny pieces of information can save your organization from a devastating cyberattack. PurpleSentry acts as your eyes and ears, monitoring hacker forums, Telegram channels, instant messaging platforms, dark web markets, and social media platforms.",
    features: [
      "Monitoring of hacker forums and Telegram channels",
      "Dark web marketplace surveillance",
      "Attack planning detection and early warning"
    ],
    icon: Eye
  }
];

const pricingTiers = [
  {
    name: "Dark Web Monitoring",
    price: "$5,999",
    period: "year",
    description: "Essential dark web visibility",
    darkWeb: [
      { feature: "Covers 1 domain", included: true },
      { feature: "Blackmarket Monitoring", included: true },
      { feature: "Employee Data Breach", included: true },
      { feature: "Stealer Malware Tracking", included: true },
      { feature: "Hacker Discussions Monitoring", included: true },
      { feature: "Dark Web Search Engine", included: true },
      { feature: "Telegram & Discord Channel Monitoring", included: true },
      { feature: "Ransomware Activity Monitoring", included: true },
      { feature: "VIP Monitoring", included: true },
      { feature: "Buyback Blackmarket leads", included: true }
    ],
    brandProtection: [
      { feature: "Brand Abuse Protection", included: false },
      { feature: "Data Leak Prevention", included: false },
      { feature: "Typosquatted Domain Risks", included: false },
      { feature: "Social Media Risks", included: false },
      { feature: "Credit Card Fraud Risks", included: false },
      { feature: "Rogue Mobile Apps", included: false },
      { feature: "Integrated Takedown", included: false }
    ],
    asm: [
      { feature: "Digital Asset Monitoring", included: false },
      { feature: "Critical Vulnerability Alerts", included: false },
      { feature: "Shadow IT Detection", included: false },
      { feature: "Identify Digital Blind Spots", included: false },
      { feature: "Digital Identity Monitoring", included: false },
      { feature: "Actionable Insights", included: false },
      { feature: "Advanced DNS Monitoring", included: false }
    ]
  },
  {
    name: "Digital Risk Protection",
    price: "$8,999",
    period: "year",
    description: "Complete digital risk coverage",
    popular: true,
    darkWeb: [
      { feature: "Covers 1 domain", included: true },
      { feature: "Blackmarket Monitoring", included: true },
      { feature: "Employee Data Breach", included: true },
      { feature: "Stealer Malware Tracking", included: true },
      { feature: "Hacker Discussions Monitoring", included: true },
      { feature: "Dark Web Search Engine", included: true },
      { feature: "Telegram & Discord Channel Monitoring", included: true },
      { feature: "Ransomware Activity Monitoring", included: true },
      { feature: "VIP Monitoring", included: true },
      { feature: "Buyback Blackmarket leads", included: true }
    ],
    brandProtection: [
      { feature: "Brand Abuse Protection", included: true },
      { feature: "Data Leak Prevention", included: true },
      { feature: "Typosquatted Domain Risks", included: true },
      { feature: "Social Media Risks", included: true },
      { feature: "Credit Card Fraud Risks", included: true },
      { feature: "Rogue Mobile Apps", included: true },
      { feature: "Integrated Takedown", included: true }
    ],
    asm: [
      { feature: "Digital Asset Monitoring", included: false },
      { feature: "Critical Vulnerability Alerts", included: false },
      { feature: "Shadow IT Detection", included: false },
      { feature: "Identify Digital Blind Spots", included: false },
      { feature: "Digital Identity Monitoring", included: false },
      { feature: "Actionable Insights", included: false },
      { feature: "Advanced DNS Monitoring", included: false }
    ]
  },
  {
    name: "External Attack Surface Management",
    price: "$15,999",
    period: "year",
    description: "Full EASM + DRP coverage",
    darkWeb: [
      { feature: "Covers 1 domain", included: true },
      { feature: "Blackmarket Monitoring", included: true },
      { feature: "Employee Data Breach", included: true },
      { feature: "Stealer Malware Tracking", included: true },
      { feature: "Hacker Discussions Monitoring", included: true },
      { feature: "Dark Web Search Engine", included: true },
      { feature: "Telegram & Discord Channel Monitoring", included: true },
      { feature: "Ransomware Activity Monitoring", included: true },
      { feature: "VIP Monitoring", included: true },
      { feature: "Buyback Blackmarket leads", included: true }
    ],
    brandProtection: [
      { feature: "Brand Abuse Protection", included: true },
      { feature: "Data Leak Prevention", included: true },
      { feature: "Typosquatted Domain Risks", included: true },
      { feature: "Social Media Risks", included: true },
      { feature: "Credit Card Fraud Risks", included: true },
      { feature: "Rogue Mobile Apps", included: true },
      { feature: "Integrated Takedown", included: true }
    ],
    asm: [
      { feature: "Digital Asset Monitoring", included: true },
      { feature: "Critical Vulnerability Alerts", included: true },
      { feature: "Shadow IT Detection", included: true },
      { feature: "Identify Digital Blind Spots", included: true },
      { feature: "Digital Identity Monitoring", included: true },
      { feature: "Actionable Insights", included: true },
      { feature: "Advanced DNS Monitoring", included: true }
    ]
  }
];

const faqItems = [
  {
    question: "What is Cyber Threat Intelligence?",
    answer: "According to Gartner, 'threat intelligence is evidence-based knowledge, including context, mechanism, indicators, implications, and actionable advice, about an existing or emerging menace or hazard to assets that can be used to inform decisions regarding the subject's response to that menace or hazard'. In simple terms, CTI helps you understand who might attack you, how they might do it, and how you can stop them. Cyber Threat Intelligence turns raw threat data into actionable insights — helping organizations stay ahead of attackers and build smarter, more adaptive defenses."
  },
  {
    question: "What is the purpose of Cyber Threat Intelligence (CTI)?",
    answer: "Cyber threat intelligence aims to help institutions and organizations understand the risks of cyber attacks or cyber threats. These attacks can range from zero-day attacks, crypto viruses, APTs (Advanced Persistent Threats), botnets, or exploits. These threats are reported with the intelligence activities after being reviewed by CTI analysts to provide special protection methods to assist in an active defense in your organization."
  },
  {
    question: "Why do you need Cyber Threat Intelligence?",
    answer: "In today's evolving cyber landscape, defending without intelligence is like flying blind. Cyber Threat Intelligence (CTI) gives organizations the insights they need to anticipate, detect, and respond to threats faster and smarter. To develop a defense strategy against attackers, organizations need to know how hackers operate, how they function, and what techniques they use. CTI allows companies to identify the dynamics and consequences of risks, improve security plans and structures, and reduce their attack potential to minimize damage and defend their network."
  },
  {
    question: "Why is Cyber Threat Intelligence so important?",
    answer: "CTI is important for several reasons: Focus on actionable alarms rather than just feeds and IOCs; Collect, verify, and prioritize external threats with enriched intelligence; Detect forgotten assets and monitor attack surface in real-time; Prevent data loss by detecting cyber threats before security breaches occur. Organizations need the latest intelligence about threats targeting them, including real-time intelligence on threat actors, botnets, malware, and data from the dark web."
  },
  {
    question: "What are the types of Cyber Threat Intelligence (CTI)?",
    answer: "There are three main types of CTI: Strategic Intelligence provides high-level analysis for executives and decision-makers about threat trends and business risks. Tactical Intelligence offers technical details about threat actor TTPs (Tactics, Techniques, and Procedures) for security teams. Operational Intelligence delivers real-time, actionable information about specific threats and attacks, including IOCs, malware signatures, and threat actor activities."
  }
];

const darkWebFaqItems = [
  {
    question: "What is the Dark Web?",
    answer: "The Dark Web refers to a part of the internet deliberately hidden and inaccessible through standard web browsers. Due to its encrypted nature, it is often associated with anonymous and illicit activities. While the Dark Web serves legitimate purposes, such as protecting users' privacy, it can also host illegal marketplaces, forums, and communication channels for cybercriminals. For businesses, the dark web is where stolen credentials, leaked data, malware, and hacking services are traded or shared, often months before breaches become public."
  },
  {
    question: "How does the Advanced Dark Web Monitoring process work?",
    answer: "Advanced Dark Web monitoring works by continuously scanning hidden corners of the internet that aren't indexed by traditional search engines. The monitoring service gathers information from various sources. The collected data is then analyzed to identify mentions of your organization, ultimately alerting you of any concerning findings."
  },
  {
    question: "Why is Dark Web Monitoring important?",
    answer: "Dark Web Monitoring helps organizations proactively detect cyber threats. To minimize risks such as identity theft, financial fraud, and data breaches, continuous monitoring of dark web activity is essential. Without dark web monitoring, businesses are blind to early warning signs that they are exposed or targeted."
  },
  {
    question: "Who needs Dark Web Monitoring?",
    answer: "Dark Web Monitoring is crucial for businesses of all sizes, from enterprises to small businesses, as well as individuals, government agencies, and financial institutions. If your business has users, customers, employees, or sensitive data online, Dark Web Monitoring is no longer optional — it's a critical part of modern cybersecurity defense."
  },
  {
    question: "Can Dark Web Monitoring detect ransomware threats?",
    answer: "Dark Web Monitoring can help detect early warning signs associated with ransomware attacks, but it doesn't directly detect ransomware infections on your network. Ransomware groups often operate on dark web forums, where they share stolen data or discuss upcoming attacks. Advanced Dark Web Monitoring helps identify these threats early, providing organizations with crucial insights to mitigate ransomware risks before they escalate."
  }
];

const brandProtectionFaqItems = [
  {
    question: "What is Brand Protection (BP)?",
    answer: "Brand Protection is a cybersecurity strategy that focuses on identifying, monitoring, and mitigating digital risks that can impact an organization's information security and business operations. These risks can include data breaches, phishing threats, brand impersonation, data leakage, exposed credentials, cyber fraud, and many more. BP involves the use of various tools and technologies to constantly scan the digital landscape — the web, social media platforms, deep and dark web, mobile apps, and other digital channels — for potential risks to an organization's digital assets."
  },
  {
    question: "Why is Brand Protection (BP) important for businesses?",
    answer: "As businesses continue to expand their digital footprint, they expose themselves to increased risk. BP helps businesses proactively identify and manage these risks, protect their reputation, maintain customer trust, and avoid potential regulatory fines. In today's digital world, your brand isn't just a logo — it's your identity, reputation, and trust in the eyes of customers, partners, and investors. Without Brand Protection, businesses are blind to external risks that can harm customers, damage reputation, and drain revenue. Brand Protection (BP) helps businesses safeguard that trust from online threats, abuse, and misuse."
  },
  {
    question: "What types of threats does Brand Protection cover?",
    answer: "Brand Protection covers multiple threat types including: Typosquatted and fake domains, Phishing sites and email scams, Rogue mobile apps, Brand impersonation on social media, Counterfeit products in online marketplaces, and Dark web mentions and data leaks."
  },
  {
    question: "How does Brand Protection (BP) contribute to Threat Intelligence?",
    answer: "Brand Protection (BP) platforms gather and analyze information about potential threats that could harm the organization's digital assets. This intelligence is then used to strengthen the organization's cybersecurity defenses. Brand Protection doesn't just protect your name — it equips you with real-world, outside-in intelligence to strengthen your entire cybersecurity posture."
  }
];

const easmFaqItems = [
  {
    question: "What is External Attack Surface Management (EASM)?",
    answer: "The attack surface is the point or vector through which an attacker enters the environment and is merely a list of all possible ways in which the attacker can enter a device or network and extract data. Attack surface refers to any asset such as domain infrastructure, website services, cloud technologies, etc. that is open to the Internet and can be exploited by the attacker. External Attack Surface Management (EASM) is the continuous process of discovering, monitoring, and managing all internet-facing assets an organization has — to identify exposures before attackers do. In simple terms, it's like putting a spotlight on everything outsiders can see about your organization online — and making sure it's secured."
  },
  {
    question: "Why is External Attack Surface Management (EASM) so important?",
    answer: "Today's organizations are constantly expanding their digital presence — across cloud services, web apps, APIs, remote access, and third-party integrations. But every external asset you own is a potential doorway for attackers. EASM gives you the outside-in visibility you need to stay ahead of cyber threats. Without EASM, you're blind to external risks attackers can see. With it, you gain a proactive, always-on early warning system that helps you reduce exposures, strengthen defenses, and stay ahead of cyber threats."
  },
  {
    question: "What constitutes an organization's external attack surface?",
    answer: "An organization's external attack surface is everything connected to the internet that an attacker can see, probe, and potentially exploit. This can include websites, email servers, cloud storage and services, web applications, APIs, Internet of Things (IoT) devices, and all public-facing assets, services, and exposures — whether known or unknown — that could become entry points into your organization. Attackers only need one weak spot to break in."
  },
  {
    question: "What is Digital Footprint?",
    answer: "A digital footprint is the complete record of all the online assets, activities, and traces an organization leaves across the internet — both intentionally and unintentionally. To manage the attack surface, it is necessary to first identify all assets open to the Internet. The digital footprint is important because companies have many assets that they do not know or forget, as well as assets they know and manage. Your digital footprint defines how you appear to the outside world — including customers, partners, and attackers. Managing it is essential to reducing risk and improving your security posture."
  }
];

export default function PurpleSentry() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>PurpleSentry - Threat Intelligence & Digital Risk Protection | PurpleGuard</title>
      <meta name="description" content="PurpleSentry provides External Attack Surface Management (EASM), Dark Web Monitoring, Brand Protection, and Cyber Threat Intelligence to identify and manage risks outside your traditional perimeter." />
      <meta property="og:title" content="PurpleSentry - Threat Intelligence & Digital Risk Protection | PurpleGuard" />
      <meta property="og:description" content="See Beyond Your Perimeter. Threat Intelligence & Digital Risk Protection starting at $5,999/year." />
      <meta property="og:type" content="website" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-[#1a1a4e] to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6 -ml-2" data-testid="button-back-purple-x">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple X Services
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6" data-testid="badge-category">
              Threat Intelligence & Digital Risk Protection
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="heading-purplesentry">
              See Beyond Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Perimeter</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-300 font-medium mb-4">
              Threat Intelligence & Digital Risk Protection
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              PurpleSentry focuses on identifying and managing risks outside the traditional perimeter by continuously monitoring your external attack surface and digital presence. See what attackers see before they strike.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-[#6633cc] hover:bg-[#5522bb] text-white" data-testid="button-book-consultation">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <a href="#pricing-section">
                <Button size="lg" variant="outline" className="border-white/30 text-[#000033] hover:bg-white/10" data-testid="button-view-pricing">
                  View Pricing
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PurpleSentry Modules
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four integrated capabilities for comprehensive external threat visibility and digital risk protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceOverviewCards.map((card) => (
              <a
                key={card.id}
                href={`#${card.id}`}
                className="block group"
                data-testid={`card-${card.id}`}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-[#6633cc]/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center flex-shrink-0`}>
                        <card.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#6633cc] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {card.description}
                        </p>
                        <div className="mt-3 flex items-center text-[#6633cc] font-medium text-sm">
                          Learn More <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Web Monitoring Section */}
      <section id="dark-web-section" className="scroll-mt-20">
        <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your One-Stop <span className="text-[#000033]">Dark Web Solution</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={darkWebContent[0].id} className="w-full" data-testid="tabs-dark-web">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-slate-800 border border-slate-700 mb-6">
                {darkWebContent.map((item) => (
                  <TabsTrigger 
                    key={item.id} 
                    value={item.id}
                    className="text-xs md:text-sm"
                    data-testid={`tab-trigger-${item.id}`}
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {darkWebContent.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                  data-testid={`tab-content-${item.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-purple-300">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* EASM Section */}
      <section id="easm-section" className="scroll-mt-20">
        <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Think Like a <span className="text-[#000033]">Hacker,</span> Defend Like a <span className="text-[#000033]">Pro</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={easmContent[0].id} className="w-full" data-testid="tabs-easm">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-slate-800 border border-slate-700 mb-6">
                {easmContent.map((item) => (
                  <TabsTrigger 
                    key={item.id} 
                    value={item.id}
                    className="text-xs md:text-sm"
                    data-testid={`tab-trigger-${item.id}`}
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {easmContent.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                  data-testid={`tab-content-${item.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-orange-300">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Brand Protection Section */}
      <section id="brand-protection-section" className="scroll-mt-20">
        <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Guard Your <span className="text-[#000033]">Brand,</span> Strengthen Your <span className="text-[#000033]">Trust</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={brandProtectionContent[0].id} className="w-full" data-testid="tabs-brand-protection">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-slate-800 border border-slate-700 mb-6">
                {brandProtectionContent.map((item) => (
                  <TabsTrigger 
                    key={item.id} 
                    value={item.id}
                    className="text-xs md:text-sm"
                    data-testid={`tab-trigger-${item.id}`}
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {brandProtectionContent.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6"
                  data-testid={`tab-content-${item.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-emerald-300">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>

            {/* Brand Risk Checklist */}
            <div className="mt-12 bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Brand Threat Intelligence & Protection</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {brandRiskChecklist.map((risk, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTI Section */}
      <section id="cti-section" className="scroll-mt-20">
        <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Dynamic <span className="text-[#000033]">Shield</span> Against Cyber <span className="text-[#000033]">Adversaries</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={ctiContent[0].id} className="w-full" data-testid="tabs-cti">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-slate-800 border border-slate-700 mb-6">
                {ctiContent.map((item) => (
                  <TabsTrigger 
                    key={item.id} 
                    value={item.id}
                    className="text-xs md:text-sm"
                    data-testid={`tab-trigger-${item.id}`}
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {ctiContent.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                  data-testid={`tab-content-${item.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-blue-300">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that fits your organization's security needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <Card 
                key={idx} 
                className={`relative overflow-hidden ${tier.popular ? 'border-2 border-[#6633cc] shadow-xl' : 'border border-slate-200'}`}
                data-testid={`pricing-card-${idx}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-[#6633cc] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <p className="text-sm text-slate-500 mb-1">Starting at:</p>
                  <div className="text-4xl font-bold text-[#000033]">{tier.price}</div>
                  <p className="text-slate-500">/ {tier.period}</p>
                  <CardTitle className="text-lg mt-2">{tier.name}</CardTitle>
                  <p className="text-sm text-slate-600">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${tier.popular ? 'bg-[#6633cc] hover:bg-[#5522bb]' : 'bg-slate-800 hover:bg-slate-700'}`}
                      data-testid={`button-start-${idx}`}
                    >
                      Start Now
                    </Button>
                  </Link>

                  {/* Dark Web Monitoring */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Dark Web Monitoring</h4>
                    <ul className="space-y-1.5">
                      {tier.darkWeb.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          {item.included ? (
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                          )}
                          <span className={item.included ? 'text-slate-700' : 'text-slate-400'}>{item.feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brand Protection */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Brand Protection</h4>
                    <ul className="space-y-1.5">
                      {tier.brandProtection.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          {item.included ? (
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                          )}
                          <span className={item.included ? 'text-slate-700' : 'text-slate-400'}>{item.feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Attack Surface Management */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Attack Surface Management</h4>
                    <ul className="space-y-1.5">
                      {tier.asm.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          {item.included ? (
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                          )}
                          <span className={item.included ? 'text-slate-700' : 'text-slate-400'}>{item.feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="px-6 pb-6 text-center">
                  <p className="text-xs text-slate-500">Instant setup, satisfied or reimbursed.</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 italic">
              All pricing shown is indicative. Final pricing depends on environment size, complexity, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Something More Customized?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our security experts can help you find the best solution for your organization. No matter your size or industry, we have a solution for your needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#6633cc] hover:bg-slate-100" data-testid="button-custom-solution">
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      {/* CTI FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-200 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#6633cc] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-700">Here are some common questions about</p>
              <p className="text-xl font-bold text-[#6633cc]">Cyber Threat Intelligence.</p>
            </div>
            
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq-cti">
                {faqItems.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`faq-cti-${idx}`}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden"
                    data-testid={`accordion-item-faq-cti-${idx}`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-left" data-testid={`accordion-trigger-faq-cti-${idx}`}>
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Web FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-200 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#6633cc] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-700">Here are some common questions about</p>
              <p className="text-xl font-bold text-[#6633cc]">Dark Web.</p>
            </div>
            
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq-darkweb">
                {darkWebFaqItems.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`faq-dw-${idx}`}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden"
                    data-testid={`accordion-item-faq-dw-${idx}`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-left" data-testid={`accordion-trigger-faq-dw-${idx}`}>
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Protection FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-200 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#6633cc] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-700">Here are some common questions about</p>
              <p className="text-xl font-bold text-[#6633cc]">Brand Protection.</p>
            </div>
            
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq-brand">
                {brandProtectionFaqItems.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`faq-bp-${idx}`}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden"
                    data-testid={`accordion-item-faq-bp-${idx}`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-left" data-testid={`accordion-trigger-faq-bp-${idx}`}>
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* EASM FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-200 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#6633cc] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-700">Here are some common questions about</p>
              <p className="text-xl font-bold text-[#6633cc]">External Attack Surface Management.</p>
            </div>
            
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq-easm">
                {easmFaqItems.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`faq-easm-${idx}`}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden"
                    data-testid={`accordion-item-faq-easm-${idx}`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-left" data-testid={`accordion-trigger-faq-easm-${idx}`}>
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to See Beyond Your Perimeter?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call to understand your organization's external exposure and digital risk posture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-[#6633cc] hover:bg-[#5522bb]" data-testid="button-cta-discovery">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Discovery Call
              </Button>
            </Link>
            <Link href="/services/purple-x">
              <Button size="lg" variant="outline" data-testid="button-cta-all-services">
                View All Purple X Services
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              All pricing shown is indicative. Final pricing depends on environment size, complexity, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
