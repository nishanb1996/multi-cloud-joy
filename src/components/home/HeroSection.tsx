import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-muted section-padding">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
              <Cloud className="h-3 w-3 sm:h-4 sm:w-4" />
              Multi-Cloud & DevOps Experts
            </div>

            <h1 className="text-responsive-xl font-display font-bold leading-tight">
              Accelerate Your
              <span className="gradient-text block">Cloud Journey</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Transform your infrastructure with enterprise-grade cloud solutions
              across GCP, AWS, and Azure. We bring DevOps excellence to every
              deployment.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-gradient w-full sm:w-auto">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">150+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-secondary">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">99.9%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Uptime Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-[280px] sm:h-[350px] lg:h-[500px] animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Cloud */}
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-float">
                  <Cloud className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 text-primary" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Server className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary" />
                </div>

                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>

                <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-secondary" />
                </div>

                <div className="absolute top-0 right-1/4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
