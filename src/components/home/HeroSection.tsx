import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, ArrowRight } from "lucide-react";
import { Hero3DScene } from "./Hero3DScene";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-accent via-background to-muted">
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

      <div className="container-custom relative py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold animate-fade-in border border-primary/20">
              <Cloud className="h-4 w-4" />
              Cloud · DevOps · AI Experts
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <h1 className="text-responsive-xl font-display font-bold leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Accelerate Your
              <span className="gradient-text-animated block mt-2">Cloud Journey</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Transform your infrastructure with enterprise-grade cloud, DevOps,
              and AI solutions across GCP, AWS, and Azure — from CI/CD pipelines
              to agentic AI and production-ready LLM apps.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="btn-gradient text-base h-14 px-8">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-2 hover:bg-muted/50">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">99.9%</p>
                <p className="text-sm text-muted-foreground mt-1">Uptime Guaranteed</p>
              </div>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="relative h-[400px] sm:h-[480px] lg:h-[600px] animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-full">
              {/* Glow backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent blur-3xl" />
              {/* Glass frame */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl">
                <Hero3DScene />
              </div>
              {/* Corner accent dots */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-primary animate-pulse z-10" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-secondary animate-pulse z-10" style={{ animationDelay: "0.6s" }} />
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
