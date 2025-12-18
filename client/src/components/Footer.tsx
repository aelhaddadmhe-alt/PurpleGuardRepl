import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Phone, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import purpleGuardLogo from "@assets/Asset_30_1765969755163.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={purpleGuardLogo} 
                alt="PurpleGuard" 
                className="h-10 w-auto brightness-0 invert"
                data-testid="footer-logo-purpleguard"
              />
              <p className="text-sm text-slate-400 mt-2">Smarter Security. Stronger Defense.</p>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Protecting SMBs with enterprise-grade security solutions. 24/7 monitoring, expert support, and complete peace of mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/managed-firewall" className="text-slate-400 hover:text-white transition-colors">
                  ManagedFirewall
                </Link>
              </li>
              <li>
                <Link href="/services/managed-endpoint" className="text-slate-400 hover:text-white transition-colors">
                  ManagedEndpoint
                </Link>
              </li>
              <li>
                <Link href="/services/managed-siem" className="text-slate-400 hover:text-white transition-colors">
                  ManagedSIEM
                </Link>
              </li>
              <li>
                <Link href="/services/managed-backup" className="text-slate-400 hover:text-white transition-colors">
                  ManagedBackup
                </Link>
              </li>
              <li>
                <Link href="/services/managed-compliance" className="text-slate-400 hover:text-white transition-colors">
                  ManagedCompliance
                </Link>
              </li>
              <li>
                <Link href="/services/managed-identity" className="text-slate-400 hover:text-white transition-colors">
                  ManagedIdentity
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Purple[X] Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Whitepapers</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Security Tools</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Support Center</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Partners</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
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
              <Shield className="h-4 w-4 text-secondary-500 mr-2" />
              24/7 SOC Monitoring
            </span>
            <span className="flex items-center">
              <Phone className="h-4 w-4 text-secondary-500 mr-2" />
              +971585159666
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
