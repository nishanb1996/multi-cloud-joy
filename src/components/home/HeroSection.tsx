import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-muted section-padding">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Cloud className="h-4 w-4" />
              Multi-Cloud & DevOps Experts
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Accelerate Your
              <span className="gradient-text block">Cloud Journey</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Transform your infrastructure with enterprise-grade cloud solutions
              across GCP, AWS, and Azure. We bring DevOps excellence to every
              deployment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-gradient">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative lg:h-[500px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Cloud */}
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-float">
                  <Cloud className="w-32 h-32 md:w-40 md:h-40 text-primary" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Server className="w-8 h-8 text-secondary" />
                </div>

                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Database className="w-8 h-8 text-primary" />
                </div>

                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-4 h-4 rounded-full bg-secondary" />
                </div>

                <div className="absolute top-0 right-1/4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
