import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ChevronRight,
  Calendar,
  ArrowLeft,
  Construction
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/mmowafy-purpleguard/30min";

export default function PurpleVAPT() {
  return (
    <div className="min-h-screen bg-slate-50">
      <title>PurpleVAPT - Vulnerability Assessment & Penetration Testing | PurpleGuard</title>
      <meta name="description" content="PurpleVAPT delivers continuous and on-demand vulnerability assessments and penetration testing to identify and prioritize security weaknesses." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000033] via-purple-800 to-[#000033] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/services/purple-x">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Purple-X Services
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-6">
              Purple-X | Exposure Identification
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PurpleVAPT
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Vulnerability Assessment & Penetration Testing - Continuous and on-demand testing to identify, validate, and prioritize security weaknesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff6633] hover:bg-[#ff6633]/90 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  Request a Consultation
                </Button>
              </a>
              <Link href="/services/purple-x">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                  View Purple-X Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-8">
            <Construction className="h-10 w-10 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Detailed Content Coming Soon</h2>
          <p className="text-lg text-slate-600 mb-8">
            We're preparing comprehensive information about PurpleVAPT service. In the meantime, schedule a consultation to learn more.
          </p>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Talk to an Expert
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
