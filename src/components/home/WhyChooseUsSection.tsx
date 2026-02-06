import { Shield, Users, Clock, Award, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Multi-Cloud Expertise",
    description: "Certified professionals across GCP, AWS, and Azure for comprehensive cloud solutions.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support to ensure your systems are always running.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "Certified Engineers",
    description: "Team of certified cloud architects and DevOps engineers with proven track records.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Personalized attention with dedicated project managers and technical leads.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Rapid implementation with our proven methodologies and automation frameworks.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Headphones,
    title: "Ongoing Partnership",
    description: "Long-term collaboration focused on your continuous growth and optimization.",
    color: "from-sky-500 to-blue-600",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-widest">Why Choose Us</p>
              <h2 className="text-responsive-lg font-bold mb-6">
                Your Trusted Cloud <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We combine deep technical expertise with a commitment to your
                success. Our team becomes an extension of yours, delivering
                results that matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 stagger-children">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 p-5 rounded-2xl bg-card/50 hover:bg-card border border-transparent hover:border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-secondary/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute inset-16 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: '30s' }} />

              {/* Background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 rounded-full bg-card shadow-2xl border border-border/50">
                  <p className="text-5xl sm:text-6xl font-bold gradient-text mb-2">
                    10+
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 left-8 px-4 py-2 rounded-full glass shadow-lg text-sm font-semibold animate-float border border-white/20">
                🏆 GCP Partner
              </div>
              <div className="absolute bottom-4 right-8 px-4 py-2 rounded-full glass shadow-lg text-sm font-semibold animate-float" style={{ animationDelay: "1s" }}>
                🥇 AWS Partner
              </div>
              <div className="absolute top-1/2 -right-4 px-4 py-2 rounded-full glass shadow-lg text-sm font-semibold animate-float" style={{ animationDelay: "0.5s" }}>
                ⭐ Azure Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
