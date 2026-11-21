import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/logos";

const cloudProviders = [
  { name: "AWS", Logo: AWSLogo },
  { name: "Microsoft Azure", Logo: AzureLogo },
  { name: "Google Cloud", Logo: GCPLogo },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[auto] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-accent via-background to-muted">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative py-10 sm:py-14 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Cloud · DevOps · AI Experts
              </span>
            </div>

            <h1 className="text-responsive-xl font-display font-bold leading-[1.05] tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Accelerate Your
              <span className="gradient-text-animated block mt-2">Cloud Journey</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Transform your infrastructure with enterprise-grade cloud, DevOps,
              and AI solutions across GCP, AWS, and Azure — from CI/CD pipelines
              to agentic AI and production-ready LLM apps.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="btn-gradient text-sm h-12 px-7 rounded-xl shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm rounded-xl border-border hover:bg-muted/50">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 pt-6 sm:pt-8 border-t border-border/60 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-2xl font-display font-bold text-foreground tracking-tight">150+</p>
                <p className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center lg:text-left sm:border-l sm:border-border/60 sm:pl-6">
                <p className="text-lg sm:text-2xl font-display font-bold text-foreground tracking-tight">50+</p>
                <p className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mt-1">Clients</p>
              </div>
              <div className="text-center lg:text-left sm:border-l sm:border-border/60 sm:pl-6">
                <p className="text-lg sm:text-2xl font-display font-bold text-foreground tracking-tight">99.9%</p>
                <p className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mt-1">Uptime</p>
              </div>
            </div>
          </div>


          {/* Cloud provider logos */}
          <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.2s" }}>
            <div className="grid h-full w-full grid-cols-3 content-center gap-2 sm:gap-4 lg:gap-5">
              {cloudProviders.map(({ name, Logo }) => (
                <div
                  key={name}
                  className="flex min-h-28 flex-col items-center justify-center gap-4 rounded-xl border border-border/60 bg-card/90 px-2 py-5 shadow-sm sm:min-h-36 sm:rounded-2xl sm:px-4 sm:py-7"
                >
                  <Logo className="h-8 w-auto max-w-full sm:h-12" />
                  <span className="text-center text-[10px] font-semibold text-foreground sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-muted/30"
          />
        </svg>
      </div>
    </section>
  );
};
