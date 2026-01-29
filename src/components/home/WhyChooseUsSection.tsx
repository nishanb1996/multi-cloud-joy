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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Your Trusted Cloud Partner
              </h2>
              <p className="text-muted-foreground max-w-lg">
                We combine deep technical expertise with a commitment to your
                success. Our team becomes an extension of yours, delivering
                results that matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                    10+
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 left-8 px-4 py-2 rounded-full bg-card shadow-lg text-sm font-medium animate-float">
                GCP Partner
              </div>
              <div className="absolute bottom-8 right-8 px-4 py-2 rounded-full bg-card shadow-lg text-sm font-medium animate-float" style={{ animationDelay: "1s" }}>
                AWS Partner
              </div>
              <div className="absolute top-1/2 -right-4 px-4 py-2 rounded-full bg-card shadow-lg text-sm font-medium animate-float" style={{ animationDelay: "0.5s" }}>
                Azure Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
