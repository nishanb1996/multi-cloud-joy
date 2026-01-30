import { Shield, Users, Clock, Award, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Multi-Cloud Expertise",
    description: "Certified professionals across GCP, AWS, and Azure for comprehensive cloud solutions.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support to ensure your systems are always running.",
  },
  {
    icon: Award,
    title: "Certified Engineers",
    description: "Team of certified cloud architects and DevOps engineers with proven track records.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Personalized attention with dedicated project managers and technical leads.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Rapid implementation with our proven methodologies and automation frameworks.",
  },
  {
    icon: Headphones,
    title: "Ongoing Partnership",
    description: "Long-term collaboration focused on your continuous growth and optimization.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center lg:text-left">
              <p className="text-primary font-medium mb-2 text-sm sm:text-base">Why Choose Us</p>
              <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
                Your Trusted Cloud Partner
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0">
                We combine deep technical expertise with a commitment to your
                success. Our team becomes an extension of yours, delivering
                results that matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-12 sm:inset-16 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-1 sm:mb-2">
                    10+
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Floating badges - hidden on very small screens */}
              <div className="hidden sm:block absolute top-6 sm:top-8 left-4 sm:left-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card shadow-lg text-xs sm:text-sm font-medium animate-float">
                GCP Partner
              </div>
              <div className="hidden sm:block absolute bottom-6 sm:bottom-8 right-4 sm:right-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card shadow-lg text-xs sm:text-sm font-medium animate-float" style={{ animationDelay: "1s" }}>
                AWS Partner
              </div>
              <div className="hidden sm:block absolute top-1/2 -right-2 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card shadow-lg text-xs sm:text-sm font-medium animate-float" style={{ animationDelay: "0.5s" }}>
                Azure Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
