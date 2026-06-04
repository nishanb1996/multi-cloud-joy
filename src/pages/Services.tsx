import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Cog, Sparkles } from "lucide-react";
import { CloudServicesSection, DevOpsServicesSection, AIServicesSection } from "@/components/services";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-background to-muted relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Cloud, DevOps & AI Solutions
            </div>
            <h1 className="text-responsive-xl font-display font-bold mb-6">
              Transform Your Business with
              <span className="gradient-text block">Cloud, DevOps & AI Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              From cloud migration and DevOps automation to AI-powered intelligence,
              we deliver end-to-end solutions that help you build faster, scale smarter,
              and innovate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="btn-gradient">
                <a href="#cloud-services">
                  <Cloud className="mr-2 h-5 w-5" />
                  Cloud Services
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#devops">
                  <Cog className="mr-2 h-5 w-5" />
                  DevOps Solutions
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#ai-services">
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI Solutions
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
