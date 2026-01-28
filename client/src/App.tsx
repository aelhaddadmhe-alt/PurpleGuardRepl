import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import PurpleX from "@/pages/purple-x";
import ManagedX from "@/pages/managed-x";
import PurpleSentry from "@/pages/purplesentry";
import PurpleSentinel from "@/pages/purplesentinel";
import PurpleSOC from "@/pages/purplesoc";
import PurpleVAPT from "@/pages/purplevapt";
import PurpleStrike from "@/pages/purplestrike";
import PurpleReveal from "@/pages/purplereveal";
import ManagedEndpoint from "@/pages/managed-endpoint";
import ManagedEDR from "@/pages/managed-edr";
import ManagedSASE from "@/pages/managed-sase";
import ManagedIdentity from "@/pages/managed-identity";
import ManagedFirewall from "@/pages/managed-firewall";
import ManagedEmail from "@/pages/managed-email";
import ManagedWAF from "@/pages/managed-waf";
import ManagedBackup from "@/pages/managed-backup";
import Pricing from "@/pages/pricing";
import Subscribe from "@/pages/subscribe";
import Dashboard from "@/pages/dashboard";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Booking from "@/pages/booking";
import NotFound from "@/pages/not-found";
import PurpleConfig from "@/pages/purpleconfig";
import WhatsAppButton from "@/components/WhatsAppButton";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <>
          <Route path="/" component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/services/purple-x" component={PurpleX} />
          <Route path="/services/managed-x" component={ManagedX} />
          <Route path="/services/purple-x/purplesentry" component={PurpleSentry} />
          <Route path="/services/purple-x/purplesentinel" component={PurpleSentinel} />
          <Route path="/services/purple-x/purplesoc" component={PurpleSOC} />
          <Route path="/services/purple-x/purplevapt" component={PurpleVAPT} />
          <Route path="/services/purple-x/purplestrike" component={PurpleStrike} />
          <Route path="/services/purple-x/purplereveal" component={PurpleReveal} />
          <Route path="/services/purple-x/purpleconfig" component={PurpleConfig} />
          <Route path="/services/managed-x/managed-endpoint" component={ManagedEndpoint} />
          <Route path="/services/managed-x/managed-edr" component={ManagedEDR} />
          <Route path="/services/managed-x/managed-sase-ztna" component={ManagedSASE} />
          <Route path="/services/managed-x/managed-identity" component={ManagedIdentity} />
          <Route path="/services/managed-x/managed-firewall" component={ManagedFirewall} />
          <Route path="/services/managed-x/managed-email-security" component={ManagedEmail} />
          <Route path="/services/managed-x/managed-waf" component={ManagedWAF} />
          <Route path="/services/managed-x/managed-backup-bcdr" component={ManagedBackup} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/subscribe/:serviceId" component={Subscribe} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/booking" component={Booking} />
        </>
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/purple-x" component={PurpleX} />
          <Route path="/services/managed-x" component={ManagedX} />
          <Route path="/services/purple-x/purplesentry" component={PurpleSentry} />
          <Route path="/services/purple-x/purplesentinel" component={PurpleSentinel} />
          <Route path="/services/purple-x/purplesoc" component={PurpleSOC} />
          <Route path="/services/purple-x/purplevapt" component={PurpleVAPT} />
          <Route path="/services/purple-x/purplestrike" component={PurpleStrike} />
          <Route path="/services/purple-x/purplereveal" component={PurpleReveal} />
          <Route path="/services/purple-x/purpleconfig" component={PurpleConfig} />
          <Route path="/services/managed-x/managed-endpoint" component={ManagedEndpoint} />
          <Route path="/services/managed-x/managed-edr" component={ManagedEDR} />
          <Route path="/services/managed-x/managed-sase-ztna" component={ManagedSASE} />
          <Route path="/services/managed-x/managed-identity" component={ManagedIdentity} />
          <Route path="/services/managed-x/managed-firewall" component={ManagedFirewall} />
          <Route path="/services/managed-x/managed-email-security" component={ManagedEmail} />
          <Route path="/services/managed-x/managed-waf" component={ManagedWAF} />
          <Route path="/services/managed-x/managed-backup-bcdr" component={ManagedBackup} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/subscribe/:serviceId" component={Subscribe} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/booking" component={Booking} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
