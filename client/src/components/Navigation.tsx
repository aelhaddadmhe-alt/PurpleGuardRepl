import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogOut, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import purpleGuardLogo from "@assets/Asset_30_1765969755163.png";

export default function Navigation() {
  const { isAuthenticated, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/blog" },
  ];

  const NavItems = ({ mobile = false }) => (
    <>
      {mobile ? (
        <>
          <Link href="/services">
            <div 
              className="font-semibold text-slate-900 px-3 py-2 text-sm cursor-pointer hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </div>
          </Link>
          <Link href="/services/purple-x">
            <Button 
              variant="ghost" 
              className="w-full justify-start pl-8 text-slate-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Purple X
            </Button>
          </Link>
          <Link href="/services/managed-x">
            <Button 
              variant="ghost" 
              className="w-full justify-start pl-8 text-slate-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Managed X
            </Button>
          </Link>
          <div className="border-b border-slate-200 my-2" />
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link href="/services">
              <Button 
                variant="ghost" 
                className="text-slate-700 hover:text-primary-600 font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </Button>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/services/purple-x" className="cursor-pointer">
                Purple X Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/services/managed-x" className="cursor-pointer">
                Managed X Services
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {navigationItems.map((item) => (
        <Link key={item.label} href={item.href}>
          <Button 
            variant="ghost" 
            className={`${mobile ? 'w-full justify-start' : ''} text-slate-700 hover:text-primary-600 font-medium`}
            onClick={() => mobile && setIsOpen(false)}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={purpleGuardLogo} 
                alt="PurpleGuard" 
                className="h-12 w-auto"
                data-testid="logo-purpleguard"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
          </div>

          {/* Auth & CTA */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="hidden md:block">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      {(user as any)?.profileImageUrl ? (
                        <img 
                          src={(user as any).profileImageUrl} 
                          alt={(user as any).firstName || (user as any).email || ''} 
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-primary-600" />
                        </div>
                      )}
                      <span className="hidden md:block">{(user as any)?.firstName || 'User'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="flex items-center w-full">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a href="/api/logout" className="flex items-center w-full">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <a href="/api/login" className="hidden md:block">
                  <Button variant="ghost">Sign In</Button>
                </a>
                <Link href="/booking">
                  <Button>Book Discovery Call</Button>
                </Link>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems mobile />
                  {isAuthenticated ? (
                    <>
                      <Link href="/dashboard">
                        <Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                          Dashboard
                        </Button>
                      </Link>
                      <a href="/api/logout">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign Out
                        </Button>
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="/api/login">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign In
                        </Button>
                      </a>
                      <Link href="/booking">
                        <Button className="w-full" onClick={() => setIsOpen(false)}>
                          Book Discovery Call
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
