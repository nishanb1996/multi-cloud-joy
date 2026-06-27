import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Cog, Sparkles } from "lucide-react";
import { CloudServicesSection, DevOpsServicesSection, AIServicesSection } from "@/components/services";

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Cloud, DevOps & AI Services | Cloudignitia"
        description="End-to-end cloud, DevOps, and AI services: multi-cloud migration on AWS/GCP/Azure, Kubernetes, CI/CD, observability, and AI/ML enablement."
        path="/services"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-background to-muted relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Cloud, DevOps & AI Solutions
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Transform Your Business with
              <span className="gradient-text block mt-1">Cloud, DevOps & AI Excellence</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              From cloud migration and DevOps automation to AI-powered intelligence,
              we deliver end-to-end solutions that help you build faster, scale smarter,
              and innovate with confidence.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <Button asChild size="sm" className="btn-gradient text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6">
                <a href="#cloud-services">
                  <Cloud className="mr-1.5 h-4 w-4" />
                  Cloud
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6">
                <a href="#devops">
                  <Cog className="mr-1.5 h-4 w-4" />
                  DevOps
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6">
                <a href="#ai-services">
                  <Sparkles className="mr-1.5 h-4 w-4" />
                  AI
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <CloudServicesSection />

      {/* DevOps Services Section */}
      <DevOpsServicesSection />

      {/* AI Services Section */}
      <AIServicesSection />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                Ready to Modernize Your Infrastructure?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific requirements
                and design a tailored cloud and DevOps strategy for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
