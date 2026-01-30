import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Start Your Cloud Transformation
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Ready to Ignite Your Cloud Journey?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Let's discuss how Clouignitia can help you achieve your cloud and
              DevOps goals. Get a free consultation with our experts today.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
