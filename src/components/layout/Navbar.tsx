import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container-custom">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="relative">
              <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-secondary" />
            </div>
            <span className="text-lg sm:text-xl font-display font-bold gradient-text">
              Cloudignitia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-gradient">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-3 px-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="btn-gradient mt-3">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
