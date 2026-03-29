export const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";
export const CONTACT_EMAIL = "hello@purpleguard.io";

export interface PurpleXService {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  pricing: string;
  bestFor: string;
  detailLink: string;
  capabilities: string[];
  value: string[];
  color: string;
}

export interface ManagedXService {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  pricing: string;
  bestFor: string;
  emailSubject: string;
  detailLink: string;
  capabilities: string[];
  value: string[];
  color: string;
}

export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  frameworks: string[];
}

export const purpleXServices: PurpleXService[] = [
  {
    id: "purple-vapt",
    name: "PurpleVAPT",
    tagline: "Vulnerability Assessment & Penetration Testing",
    category: "Exposure Identification & Validation",
    description: "PurpleVAPT delivers continuous and on-demand vulnerability assessments and penetration testing to identify, validate, and prioritize security weaknesses across your environment.",
    pricing: "$500/month (VAaaS) or $3,000/test (PTaaS)",
    bestFor: "Organizations needing vulnerability visibility & compliance testing",
    detailLink: "/services/purple-x/purplevapt",
    capabilities: [
      "Network vulnerability scanning (internal & external)",
      "Continuous Vulnerability Assessment (VAaaS)",
      "Penetration Testing (PTaaS)",
      "Web application and API security testing",
      "Cloud and SaaS security posture evaluation",
      "Cloud Threat Analytics (CTAaaS)",
    ],
    value: [
      "Early identification of exploitable weaknesses",
      "Risk-based vulnerability prioritization",
      "Compliance-aligned testing methodology",
      "Executive-ready and technical reporting",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "purple-soc",
    name: "PurpleSOC",
    tagline: "24/7 Managed SOC & Incident Response",
    category: "Security Operations & Response",
    description: "PurpleSOC provides a fully managed, 24/7 Security Operations Center that monitors, detects, investigates, and responds to security incidents across your environment.",
    pricing: "$1,500/month",
    bestFor: "24/7 monitoring without internal SOC overhead",
    detailLink: "/services/purple-x/purplesoc",
    capabilities: [
      "Continuous security monitoring",
      "Alert triage and incident investigation",
      "Log ingestion and correlation",
      "Threat detection and escalation",
      "Incident response coordination",
      "Compliance and audit-ready reporting",
    ],
    value: [
      "Always-on security operations without building an internal SOC",
      "Faster detection and response times",
      "Reduced alert fatigue",
      "Improved security maturity",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "purple-sentinel",
    name: "PurpleSentinel",
    tagline: "Managed Detection & Response (MDR / MXDR)",
    category: "Advanced Threat Detection & Containment",
    description: "PurpleSentinel is PurpleGuard's Managed Detection and Response service, delivering deep visibility and rapid response across endpoints, networks, and cloud environments.",
    pricing: "$25/endpoint/month",
    bestFor: "Endpoint, network & cloud threat detection",
    detailLink: "/services/purple-x/purplesentinel",
    capabilities: [
      "Endpoint telemetry monitoring",
      "Threat detection and behavioral analysis",
      "Cross-domain correlation (Endpoint, Network, Cloud)",
      "Automated containment and remediation",
      "Risk and threat visibility dashboards",
      "MDR for Endpoint, Network, and Cloud",
    ],
    value: [
      "Proactive threat hunting and response",
      "Reduced dwell time of attackers",
      "Automation-driven containment",
      "Clear insight into active threats and risks",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "purple-sentry",
    name: "PurpleSentry",
    tagline: "Threat Intelligence, EASM & Digital Risk Protection",
    category: "External Risk & Threat Intelligence",
    description: "PurpleSentry focuses on identifying and managing risks outside the traditional perimeter by continuously monitoring your external attack surface and digital presence.",
    pricing: "$750/month",
    bestFor: "External attack surface & digital risk protection",
    detailLink: "/services/purple-x/purplesentry",
    capabilities: [
      "External Attack Surface Management (EASM)",
      "Internet-facing asset discovery",
      "Dark web and underground monitoring",
      "Brand, domain, and identity protection",
      "Threat intelligence enrichment",
      "Vulnerability intelligence and prioritization",
    ],
    value: [
      "Visibility into unknown or unmanaged assets",
      "Early warning of data leaks and credential exposure",
      "Reduced risk of brand abuse and impersonation",
      "Improved external risk posture",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "purple-strike",
    name: "PurpleStrike",
    tagline: "Red Teaming & Breach Attack Simulation",
    category: "Adversary Simulation & Control Validation",
    description: "PurpleStrike simulates real-world attacks to test the effectiveness of your security controls, people, and processes.",
    pricing: "$1,500/month (BAS) or $8,000/engagement",
    bestFor: "Security control validation & readiness testing",
    detailLink: "/services/purple-x/purplestrike",
    capabilities: [
      "Red Team exercises",
      "Breach & Attack Simulation (BAS)",
      "Adversary emulation based on real threat actors",
      "Continuous security control testing",
      "MITRE ATT&CK-aligned attack scenarios",
      "Purple Team collaboration",
    ],
    value: [
      "Validate real-world security readiness",
      "Identify detection and response gaps",
      "Improve SOC and MDR effectiveness",
      "Measure security improvements over time",
    ],
    color: "from-red-500 to-pink-600",
  },
  {
    id: "purple-config",
    name: "PurpleConfig",
    tagline: "Security Configuration Assessment & Hardening",
    category: "Configuration Security & Hardening",
    description: "PurpleConfig continuously assesses systems and endpoints against industry-recognized security benchmarks and best practices.",
    pricing: "$5/endpoint/month",
    bestFor: "Secure configuration & compliance baselining",
    detailLink: "/services/purple-x/purpleconfig",
    capabilities: [
      "CIS benchmark assessments",
      "NIST-aligned configuration checks",
      "Windows and Linux endpoint hardening",
      "Misconfiguration detection",
      "Security drift monitoring and alerts",
      "Remediation recommendations",
    ],
    value: [
      "Reduced risk from misconfigurations",
      "Improved baseline security posture",
      "Continuous compliance visibility",
      "Support for audits and regulatory requirements",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "purple-reveal",
    name: "PurpleReveal",
    tagline: "Network Detection & Response (NDR)",
    category: "Network Visibility & Threat Detection",
    description: "PurpleReveal provides deep, real-time insight into network traffic to detect advanced threats that bypass traditional security controls.",
    pricing: "$1,500/month",
    bestFor: "Deep network visibility & advanced threat detection",
    detailLink: "/services/purple-x/purplereveal",
    capabilities: [
      "Deep network traffic inspection",
      "East-west traffic visibility",
      "Behavioral and anomaly-based detection",
      "Threat hunting support",
      "Zero Trust and lateral movement detection",
    ],
    value: [
      "Detect stealthy and advanced threats",
      "Improved visibility across on-prem and cloud networks",
      "Enhanced Zero Trust initiatives",
      "Strong complement to EDR and SOC services",
    ],
    color: "from-cyan-500 to-blue-600",
  },
];

export const managedXServices: ManagedXService[] = [
  {
    id: "managed-endpoint",
    name: "Managed Endpoint",
    tagline: "Centralized endpoint management, patching, and health monitoring",
    category: "Endpoint Management",
    description: "Managed Endpoint provides continuous endpoint visibility, automated patching, and policy enforcement for workstations and servers in hybrid environments.",
    pricing: "$6 / endpoint / month",
    bestFor: "Organizations needing endpoint hygiene and compliance posture",
    emailSubject: "Managed Endpoint Inquiry",
    detailLink: "/services/managed-x/managed-endpoint",
    capabilities: [
      "Patch and update management",
      "Endpoint inventory and lifecycle tracking",
      "Configuration and policy enforcement",
      "Device health monitoring",
      "Compliance posture reporting",
    ],
    value: [
      "Reduces IT overhead",
      "Improves endpoint hygiene",
      "Lowers misconfiguration risk",
      "Supports audit readiness",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "managed-edr",
    name: "Managed EDR",
    tagline: "Continuous endpoint threat detection and response",
    category: "Endpoint Security",
    description: "Managed EDR delivers behavioral threat detection, automated containment, and SOC-backed investigation using endpoint telemetry.",
    pricing: "$18 / endpoint / month",
    bestFor: "Organizations needing advanced endpoint protection",
    emailSubject: "Managed EDR Inquiry",
    detailLink: "/services/managed-x/managed-edr",
    capabilities: [
      "Behavioral threat detection",
      "Automated isolation and remediation",
      "Endpoint telemetry correlation",
      "SOC escalation workflows",
      "Incident reporting",
    ],
    value: [
      "Faster threat detection",
      "Reduced ransomware impact",
      "Lower dwell time",
      "Stronger endpoint visibility",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "managed-firewall",
    name: "Managed Firewall",
    tagline: "Fully managed perimeter and network firewall security",
    category: "Network Security",
    description: "Managed Firewall includes policy management, monitoring, tuning, and lifecycle support for on-prem and cloud firewalls.",
    pricing: "$120 / firewall / month",
    bestFor: "Organizations with complex perimeter security needs",
    emailSubject: "Managed FW Inquiry",
    detailLink: "/services/managed-x/managed-firewall",
    capabilities: [
      "NGFW & SD-WAN management",
      "Policy configuration and tuning",
      "IDS/IPS monitoring",
      "Log analysis and alerting",
      "Change management",
    ],
    value: [
      "Reduces configuration errors",
      "Improves perimeter security",
      "Frees internal IT resources",
      "Supports regulatory controls",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "managed-waf",
    name: "Managed WAF",
    tagline: "Web application and API protection as a managed service",
    category: "Application Security",
    description: "Managed WAF protects applications and APIs from OWASP Top 10, bots, and volumetric attacks through continuous tuning.",
    pricing: "$95 / application / month",
    bestFor: "Organizations with web applications and APIs to protect",
    emailSubject: "Managed WAF Inquiry",
    detailLink: "/services/managed-x/managed-waf",
    capabilities: [
      "OWASP Top 10 protection",
      "API security enforcement",
      "Bot mitigation",
      "DDoS protection",
      "Rule tuning and monitoring",
    ],
    value: [
      "Reduces application attack surface",
      "Protects customer data",
      "Improves uptime",
      "Enables secure digital services",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "managed-email",
    name: "Managed Email Security",
    tagline: "Advanced protection against phishing and email-borne threats",
    category: "Email Security",
    description: "Managed Email Security defends against phishing, BEC, malware, and impersonation with monitoring and response support.",
    pricing: "$4 / mailbox / month",
    bestFor: "Organizations needing protection against email threats",
    emailSubject: "Managed E-mail Security Inquiry",
    detailLink: "/services/managed-x/managed-email-security",
    capabilities: [
      "Phishing and BEC protection",
      "DMARC and spoofing prevention",
      "Malware scanning",
      "Email continuity",
      "Incident response support",
    ],
    value: [
      "Reduces user-driven breaches",
      "Protects brand reputation",
      "Lowers response costs",
      "Improves employee trust",
    ],
    color: "from-red-500 to-pink-600",
  },
  {
    id: "managed-backup",
    name: "Managed Backup & BCDR",
    tagline: "Business-grade backup and disaster recovery management",
    category: "Business Continuity",
    description: "Managed Backup delivers monitored backups, ransomware recovery readiness, and compliance-aligned retention policies.",
    pricing: "$35 / workload / month",
    bestFor: "Organizations requiring data protection and recovery",
    emailSubject: "Managed Backup & BCDR Inquiry",
    detailLink: "/services/managed-x/managed-backup-bcdr",
    capabilities: [
      "Cloud and on-prem backups",
      "Immutable storage",
      "Ransomware recovery",
      "Recovery testing",
      "Retention management",
    ],
    value: [
      "Minimizes data loss",
      "Improves recovery time",
      "Strengthens ransomware resilience",
      "Supports audits",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "managed-identity",
    name: "Managed Identity",
    tagline: "Centralized identity and access security management",
    category: "Identity & Access",
    description: "Managed Identity enforces zero-trust access using MFA, SSO, and conditional access policies.",
    pricing: "$5 / user / month",
    bestFor: "Organizations implementing zero trust access",
    emailSubject: "Managed Identity Inquiry",
    detailLink: "/services/managed-x/managed-identity",
    capabilities: [
      "MFA and SSO",
      "Conditional access",
      "Identity monitoring",
      "Access governance",
      "Policy enforcement",
    ],
    value: [
      "Reduces account compromise",
      "Improves access visibility",
      "Simplifies user management",
      "Enables zero trust",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "managed-sase",
    name: "Managed SASE / ZTNA",
    tagline: "Secure cloud-delivered access for modern workforces",
    category: "Secure Access",
    description: "Managed SASE provides zero-trust access, secure web gateway, and cloud-delivered security for remote users.",
    pricing: "$12 / user / month",
    bestFor: "Organizations with remote or hybrid workforces",
    emailSubject: "Managed SASE/ZTNA Inquiry",
    detailLink: "/services/managed-x/managed-sase-ztna",
    capabilities: [
      "Zero Trust Network Access",
      "Secure Web Gateway",
      "CASB",
      "Policy-based access",
      "Encrypted traffic inspection",
    ],
    value: [
      "Secures remote access",
      "Replaces legacy VPNs",
      "Improves user experience",
      "Scales securely",
    ],
    color: "from-slate-600 to-slate-800",
  },
];

export const solutions: Solution[] = [
  {
    id: "compliance-audit-readiness",
    name: "Compliance & Audit Readiness",
    tagline: "Be audit-ready. Stay compliant. Reduce risk.",
    description: "PurpleGuard helps organizations achieve and maintain compliance through continuous security monitoring, control validation, and audit-ready documentation. Our compliance-aware services align security operations with frameworks such as ISO 27001, SOC 2, NIST CSF, CIS, HIPAA, PCI DSS, and GDPR—reducing audit friction while strengthening real-world security.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    frameworks: ["ISO 27001", "SOC 2", "NIST CSF", "HIPAA", "PCI DSS", "GDPR"],
  },
  {
    id: "ransomware-defense",
    name: "Ransomware Defense",
    tagline: "Stop ransomware before it stops your business.",
    description: "PurpleGuard delivers layered, ransomware-focused defense that prevents attacks, detects malicious behavior early, and enables rapid containment and recovery. By combining continuous monitoring, exposure management, hardened configurations, and resilient backup strategies, PurpleGuard reduces ransomware risk across endpoints, identities, networks, cloud, and applications.",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    frameworks: ["Prevention", "Detection", "Response", "Recovery"],
  },
  {
    id: "cloud-saas-security",
    name: "Cloud & SaaS Security",
    tagline: "Secure your cloud. Control your SaaS. Reduce risk at scale.",
    description: "PurpleGuard delivers continuous Cloud and SaaS security by protecting identities, configurations, data, and access across public cloud platforms and business-critical SaaS applications. Our managed, compliance-aware approach helps organizations safely adopt cloud services without sacrificing visibility, control, or resilience.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    frameworks: ["AWS", "Azure", "GCP", "Microsoft 365", "Google Workspace"],
  },
  {
    id: "external-attack-surface-management",
    name: "External Attack Surface Management",
    tagline: "Know what attackers see—before they exploit it.",
    description: "PurpleGuard's External Attack Surface Management (EASM) continuously discovers, monitors, and reduces your internet-facing exposure. We identify unknown, unmanaged, and misconfigured external assets and help organizations proactively close attack paths before they are weaponized.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    frameworks: ["Asset Discovery", "Exposure Detection", "Threat Intelligence", "Risk Prioritization"],
  },
  {
    id: "zero-trust-secure-remote-access",
    name: "Zero Trust & Secure Remote Access",
    tagline: "Secure access without trusting the network.",
    description: "PurpleGuard delivers Zero Trust and secure remote access services that replace legacy VPNs with identity-driven, policy-based access. By continuously verifying users, devices, and context, PurpleGuard ensures employees, partners, and contractors can securely access applications and data—anywhere, without expanding your attack surface.",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    frameworks: ["ZTNA", "MFA", "Conditional Access", "Device Trust"],
  },
];
