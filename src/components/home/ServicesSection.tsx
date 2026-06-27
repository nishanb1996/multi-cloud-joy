import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, ArrowRight, Sparkles, Check } from "lucide-react";
import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const services = [
  {
    Logo: GCPLogo,
    title: "Google Cloud Platform",
    description: "Scale workloads on GCP with BigQuery, Vertex AI, GKE, and Anthos — engineered for analytics and AI-first enterprises.",
    features: ["BigQuery & Looker", "Vertex AI / MLOps", "GKE & Anthos"],
    accent: "from-blue-500/10 to-transparent",
    hoverBorder: "hover:border-blue-300/60",
    hoverShadow: "hover:shadow-blue-500/10",
    iconBg: "bg-blue-50",
    badge: "Premier Partner",
  },
  {
    Logo: AWSLogo,
    title: "Amazon Web Services",
    description: "Architect resilient AWS environments with EKS, Lambda, and Well-Architected reviews backed by FinOps best practices.",
    features: ["EKS & ECS", "Serverless & Lambda", "Well-Architected"],
    accent: "from-orange-500/10 to-transparent",
    hoverBorder: "hover:border-orange-300/60",
    hoverShadow: "hover:shadow-orange-500/10",
    iconBg: "bg-orange-50",
    badge: "Advanced Tier",
  },
  {
    Logo: AzureLogo,
    title: "Microsoft Azure",
    description: "Modernize Microsoft workloads with AKS, Azure DevOps, and hybrid integration tailored for regulated enterprises.",
    features: ["AKS & App Service", "Azure DevOps", "Hybrid & Arc"],
    accent: "from-sky-500/10 to-transparent",
    hoverBorder: "hover:border-sky-300/60",
    hoverShadow: "hover:shadow-sky-500/10",
    iconBg: "bg-sky-50",
    badge: "Gold Partner",
  },
  {
    icon: GitBranch,
    title: "DevOps Engineering",
    description: "Ship faster with CI/CD, GitOps, Infrastructure as Code, and SRE-grade observability across every environment.",
    features: ["CI/CD & GitOps", "Terraform & IaC", "Observability & SRE"],
    accent: "from-primary/10 to-transparent",
    hoverBorder: "hover:border-primary/40",
    hoverShadow: "hover:shadow-primary/10",
    iconBg: "bg-primary/5",
    iconColor: "text-primary",
    badge: "Core Practice",
  },
  {
    icon: Sparkles,
    title: "AI & GenAI Solutions",
    description: "Operationalize GenAI with agentic systems, RAG copilots, and production LLM platforms on GPT-5, Claude, and Gemini.",
    features: ["Agentic AI & RAG", "LLM Platforms", "MLOps Pipelines"],
    accent: "from-secondary/10 to-transparent",
    hoverBorder: "hover:border-secondary/40",
    hoverShadow: "hover:shadow-secondary/10",
    iconBg: "bg-secondary/5",
    iconColor: "text-secondary",
    badge: "New",
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
            Enterprise-grade cloud, DevOps, and AI engineering — delivered by certified architects with proven outcomes across regulated industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 stagger-children">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`group relative overflow-hidden bg-card border border-border/60 ${service.hoverBorder} shadow-none hover:shadow-xl ${service.hoverShadow} transition-all duration-300 flex flex-col`}
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <CardHeader className="p-5 sm:p-6 pb-3">
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${service.iconBg} flex items-center justify-center p-2.5`}>
                    {service.Logo ? (
                      <service.Logo className="w-full h-full" />
                    ) : service.icon ? (
                      <service.icon className={`w-6 h-6 ${service.iconColor ?? "text-primary"}`} strokeWidth={1.75} />
                    ) : null}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full border border-border/60">
                      {service.badge}
                    </span>
                  )}
                </div>
                <CardTitle className="text-base sm:text-lg font-display font-bold tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 pt-0 flex flex-col flex-1">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mt-auto pt-4 border-t border-border/50">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs sm:text-[13px] text-foreground/80">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
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
