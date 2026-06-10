import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free initial consultation",
  "Custom cloud strategy",
  "24/7 expert support",
];

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] bg-foreground">
          {/* Subtle accent gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/20 via-secondary/10 to-transparent" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: '48px 48px'
            }}
          />

          <div className="relative p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="max-w-3xl space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/15 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-background/80">
                  Start Your Cloud Transformation
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-background leading-[1.05] tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Ready to Ignite Your
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Cloud Journey?
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-background/70 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Let's discuss how Cloudignitia can help you achieve your cloud and
                DevOps goals. Get a free consultation with our experts today.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-background/80">
                    <CheckCircle2 className="h-4 w-4 text-primary" strokeWidth={2} />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold h-12 px-7 text-sm rounded-xl shadow-xl transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border border-background/20 text-background hover:bg-background/10 hover:text-background h-12 px-7 text-sm bg-transparent rounded-xl"
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
