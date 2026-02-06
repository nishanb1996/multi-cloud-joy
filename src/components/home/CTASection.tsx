import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const benefits = [
  "Free initial consultation",
  "Custom cloud strategy",
  "24/7 expert support",
];

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem]">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm border border-white/20 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Start Your Cloud Transformation
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Ready to Ignite Your
                <span className="block mt-2">Cloud Journey?</span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Let's discuss how Cloudignitia can help you achieve your cloud and
                DevOps goals. Get a free consultation with our experts today.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-sm sm:text-base font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold h-14 px-8 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-base bg-transparent"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
