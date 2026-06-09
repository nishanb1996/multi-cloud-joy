import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
const logoSrc = "/cloudignitia-logo.jpg";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Google Cloud Platform", path: "/services#gcp" },
    { name: "Amazon Web Services", path: "/services#aws" },
    { name: "Microsoft Azure", path: "/services#azure" },
    { name: "DevOps Solutions", path: "/services#devops" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 group">
                <img
                  src={logoSrc}
                  alt="Cloudignitia logo"
                  className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                />
                <span className="text-xl font-display font-bold text-primary">
                  Cloudignitia
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Empowering businesses with cutting-edge cloud solutions and DevOps
                expertise. Your trusted partner for digital transformation.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2.5 rounded-xl bg-muted/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-5">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={(e) => handleServiceClick(e, link.path)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-pointer"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:cloudignitia@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="break-all">cloudignitia@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+918551089743" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span>+91 8551089743</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.app.goo.gl/pKPtTMZJAPRSvX7u9" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span>Civil Line, Bhandara, Maharashtra 441904</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-muted/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Cloudignitia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
