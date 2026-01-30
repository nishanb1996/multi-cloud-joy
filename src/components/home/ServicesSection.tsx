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
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    Logo: AWSLogo,
    title: "Amazon Web Services",
    description: "Build on AWS's comprehensive suite of services, from EC2 to Lambda, with enterprise-grade security and reliability.",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    Logo: AzureLogo,
    title: "Microsoft Azure",
    description: "Integrate seamlessly with Microsoft ecosystem, hybrid cloud capabilities, and enterprise-ready solutions.",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    icon: GitBranch,
    title: "DevOps Solutions",
    description: "Accelerate delivery with CI/CD pipelines, Infrastructure as Code, container orchestration, and monitoring.",
    bgColor: "bg-secondary/10",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
          <p className="text-primary font-medium mb-2 text-sm sm:text-base">Our Services</p>
          <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
            Multi-Cloud Excellence
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We deliver end-to-end cloud solutions tailored to your business needs,
            with expertise across all major cloud platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-hover border-0 shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-3 sm:mb-4 p-2`}>
                  {service.Logo ? (
                    <service.Logo className="w-full h-full" />
                  ) : service.icon ? (
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                  ) : null}
                </div>
                <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
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
