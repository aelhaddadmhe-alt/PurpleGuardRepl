import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Phone, MapPin, Mail } from "lucide-react";
import purpleGuardLogo from "@assets/Asset_30_1765969755163.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000033] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* About PurpleGuard */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="mb-6 cursor-pointer">
                <img
                  src={purpleGuardLogo}
                  alt="PurpleGuard"
                  className="h-10 w-auto brightness-0 invert"
                  data-testid="footer-logo-purpleguard"
                />
                <p className="text-sm text-purple-300 mt-2 font-medium">
                  Smarter Security. Stronger Defense.
                </p>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              PurpleGuard is a managed security services provider (MSSP) focused on SMEs and mid-market organizations. We deliver subscription-based, compliance-ready cybersecurity with 24/7 SOC monitoring and expert support.
            </p>
            
            {/* NAP Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-[#6633cc]" />
                <span>CAI | DXB</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="h-4 w-4 text-[#6633cc]" />
                <a href="tel:+971585159666" className="hover:text-white transition-colors">+971 58 515 9666</a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-4 w-4 text-[#6633cc]" />
                <a href="mailto:mmowafy@purpleguard.io" className="hover:text-white transition-colors">mmowafy@purpleguard.io</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/purpleguard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#6633cc] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#6633cc] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#6633cc] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services - Purple X */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Purple X</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/purple-x/purplevapt"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleVAPT
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x/purplesoc"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleSOC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x/purplesentinel"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleSentinel
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x/purplesentry"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleSentry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x/purplestrike"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleStrike
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleConfig
                </Link>
              </li>
              <li>
                <Link
                  href="/services/purple-x/purplereveal"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PurpleReveal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Managed X */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Managed X</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/managed-x/managed-endpoint"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed Endpoint
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-edr"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed EDR
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-identity"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-sase-ztna"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed SASE
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-firewall"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed Firewall
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-waf"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed WAF
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-email-security"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed Email
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-x/managed-backup-bcdr"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Managed Backup
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Compliance */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-lg mb-4 text-white">Compliance & Trust</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © {currentYear} PurpleGuard. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <span className="flex items-center">
              CIS | NIST | ISO Aligned
            </span>
            <span className="flex items-center">
              MITRE ATT&CK Operations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
