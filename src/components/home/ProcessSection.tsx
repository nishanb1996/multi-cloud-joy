import { Search, FileCode, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We analyze your current infrastructure, identify bottlenecks, and map out a tailored cloud strategy aligned with your business goals.",
  },
  {
    icon: FileCode,
    step: "02",
    title: "Architecture & Planning",
    description:
      "Our certified architects design a scalable, secure, and cost-optimized cloud architecture using industry best practices.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Migration & Deployment",
    description:
      "We execute seamless migrations with zero downtime, setting up CI/CD pipelines, monitoring, and automated infrastructure.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuous monitoring, performance tuning, cost optimization, and 24/7 support to keep your systems running at peak efficiency.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-widest">
            Our Process
          </p>
          <h2 className="text-responsive-lg font-display font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A proven four-step methodology that delivers results — from
            discovery to continuous optimization.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-children">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative card-premium p-6 sm:p-8 text-center card-hover"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-muted/30 select-none">
                {item.step}
              </span>

              <div className="relative">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
