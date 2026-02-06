import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, ArrowRight } from "lucide-react";
import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const services = [
  {
    Logo: GCPLogo,
    title: "Google Cloud Platform",
    description: "Leverage GCP's cutting-edge AI/ML capabilities, BigQuery analytics, and global infrastructure for scalable solutions.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30",
  },
  {
    Logo: AWSLogo,
    title: "Amazon Web Services",
    description: "Build on AWS's comprehensive suite of services, from EC2 to Lambda, with enterprise-grade security and reliability.",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100/50 dark:from-orange-950/40 dark:to-orange-900/20",
    borderColor: "border-orange-200/50 dark:border-orange-800/30",
  },
  {
    Logo: AzureLogo,
    title: "Microsoft Azure",
    description: "Integrate seamlessly with Microsoft ecosystem, hybrid cloud capabilities, and enterprise-ready solutions.",
    bgColor: "bg-gradient-to-br from-sky-50 to-cyan-100/50 dark:from-sky-950/40 dark:to-sky-900/20",
    borderColor: "border-sky-200/50 dark:border-sky-800/30",
  },
  {
    icon: GitBranch,
    title: "DevOps Solutions",
    description: "Accelerate delivery with CI/CD pipelines, Infrastructure as Code, container orchestration, and monitoring.",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-100/50 dark:from-violet-950/40 dark:to-violet-900/20",
    borderColor: "border-violet-200/50 dark:border-violet-800/30",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-4">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-widest">Our Services</p>
          <h2 className="text-responsive-lg font-bold mb-6">
            Multi-Cloud <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We deliver end-to-end cloud solutions tailored to your business needs,
            with expertise across all major cloud platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`card-hover border-2 ${service.borderColor} ${service.bgColor} shadow-lg overflow-hidden group`}
            >
              <CardHeader className="p-6 pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-card shadow-md flex items-center justify-center mb-5 p-3 group-hover:scale-110 transition-transform duration-300`}>
                  {service.Logo ? (
                    <service.Logo className="w-full h-full" />
                  ) : service.icon ? (
                    <service.icon className="w-8 h-8 text-violet-600" />
                  ) : null}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
