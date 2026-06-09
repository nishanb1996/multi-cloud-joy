import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, ArrowRight, Shield, Zap } from "lucide-react";
import { HeroBackground3D } from "@/components/three/HeroBackground3D";

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

      {/* 3D Background */}
      <HeroBackground3D />


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

          {/* Illustration */}
          <div className="relative h-[400px] sm:h-[450px] lg:h-[600px] animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Rotating Ring */}
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              
              {/* Main Cloud */}
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center animate-float glow-primary">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-card to-muted/50 flex items-center justify-center shadow-2xl border border-border/50">
                    <Cloud className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-primary" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Server className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                </div>

                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Database className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>

                <div className="absolute top-1/2 -right-8 sm:-right-12 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>

                <div className="absolute -top-8 right-1/4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </div>

                {/* Decorative dots */}
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
                <div className="absolute bottom-1/4 -left-8 w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute -bottom-8 left-1/3 w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
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
