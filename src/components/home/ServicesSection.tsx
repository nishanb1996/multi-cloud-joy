import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, ArrowRight, Sparkles } from "lucide-react";
import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const services = [
  {
    Logo: GCPLogo,
    title: "Google Cloud Platform",
    description: "Leverage GCP's cutting-edge AI/ML capabilities, BigQuery analytics, and global infrastructure for scalable solutions.",
    accent: "from-blue-500/10 to-transparent",
    hoverBorder: "hover:border-blue-300/60",
    hoverShadow: "hover:shadow-blue-500/10",
    iconBg: "bg-blue-50",
  },
  {
    Logo: AWSLogo,
    title: "Amazon Web Services",
    description: "Build on AWS's comprehensive suite of services, from EC2 to Lambda, with enterprise-grade security and reliability.",
    accent: "from-orange-500/10 to-transparent",
    hoverBorder: "hover:border-orange-300/60",
    hoverShadow: "hover:shadow-orange-500/10",
    iconBg: "bg-orange-50",
  },
  {
    Logo: AzureLogo,
    title: "Microsoft Azure",
    description: "Integrate seamlessly with Microsoft ecosystem, hybrid cloud capabilities, and enterprise-ready solutions.",
    accent: "from-sky-500/10 to-transparent",
    hoverBorder: "hover:border-sky-300/60",
    hoverShadow: "hover:shadow-sky-500/10",
    iconBg: "bg-sky-50",
  },
  {
    icon: GitBranch,
    title: "DevOps Solutions",
    description: "Accelerate delivery with CI/CD pipelines, Infrastructure as Code, container orchestration, and monitoring.",
    accent: "from-primary/10 to-transparent",
    hoverBorder: "hover:border-primary/40",
    hoverShadow: "hover:shadow-primary/10",
    iconBg: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Sparkles,
    title: "AI & GenAI Solutions",
    description: "Build agentic AI, RAG copilots, and MLOps pipelines with GPT-5, Claude, and Gemini on your cloud.",
    accent: "from-secondary/10 to-transparent",
    hoverBorder: "hover:border-secondary/40",
    hoverShadow: "hover:shadow-secondary/10",
    iconBg: "bg-secondary/5",
    iconColor: "text-secondary",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-primary font-bold mb-3 text-xs uppercase tracking-[0.2em]">Our Expertise</p>
            <h2 className="text-responsive-lg font-display font-bold tracking-tight leading-[1.1]">
              Multi-Cloud <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
            End-to-end cloud solutions tailored to your business — engineered for reliability, security, and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 stagger-children">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`group relative overflow-hidden bg-card border border-border/60 ${service.hoverBorder} shadow-none hover:shadow-xl ${service.hoverShadow} transition-all duration-300`}
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <CardHeader className="p-5 sm:p-7 pb-3">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 sm:mb-6 p-2.5`}>
                  {service.Logo ? (
                    <service.Logo className="w-full h-full" />
                  ) : service.icon ? (
                    <service.icon className={`w-6 h-6 ${service.iconColor ?? "text-primary"}`} strokeWidth={1.75} />
                  ) : null}
                </div>
                <CardTitle className="text-base font-display font-bold tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 sm:p-7 pt-0">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm rounded-xl border-border hover:border-primary hover:text-primary transition-all duration-300">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
