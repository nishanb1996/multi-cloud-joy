import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GitBranch,
  ArrowRight,
  CheckCircle,
  Container,
  Activity,
  Code,
  Settings,
  Server,
} from "lucide-react";
import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const cloudServices = [
  {
    id: "gcp",
    Logo: GCPLogo,
    title: "Google Cloud Platform",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    description:
      "Leverage Google's world-class infrastructure for your applications with cutting-edge AI/ML capabilities and unmatched data analytics.",
    features: [
      "Compute Engine & Kubernetes Engine",
      "BigQuery for data analytics",
      "Cloud AI & Machine Learning",
      "Cloud Storage & Databases",
      "Networking & Security",
      "App Engine & Cloud Functions",
    ],
  },
  {
    id: "aws",
    Logo: AWSLogo,
    title: "Amazon Web Services",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    description:
      "Build on the world's most comprehensive cloud platform with industry-leading services for compute, storage, and enterprise solutions.",
    features: [
      "EC2, Lambda & ECS",
      "S3 & RDS Databases",
      "CloudFormation & CDK",
      "VPC & Security Services",
      "Machine Learning & Analytics",
      "Enterprise Applications",
    ],
  },
  {
    id: "azure",
    Logo: AzureLogo,
    title: "Microsoft Azure",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    description:
      "Seamlessly integrate with Microsoft ecosystem and leverage hybrid cloud capabilities for enterprise-ready solutions.",
    features: [
      "Virtual Machines & AKS",
      "Azure SQL & Cosmos DB",
      "Azure DevOps & Pipelines",
      "Active Directory Integration",
      "Hybrid Cloud Solutions",
      "AI & Cognitive Services",
    ],
  },
];

const devopsServices = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup",
    description:
      "Automate your software delivery with robust pipelines using tools like Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.",
  },
  {
    icon: Code,
    title: "Infrastructure as Code",
    description:
      "Manage your infrastructure with Terraform, Pulumi, CloudFormation, and ARM templates for reproducible, version-controlled deployments.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Implement comprehensive monitoring with Prometheus, Grafana, Datadog, and cloud-native solutions for full visibility.",
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description:
      "Deploy and manage containerized workloads with Kubernetes, ECS, and Cloud Run for scalable, resilient applications.",
  },
  {
    icon: Settings,
    title: "Configuration Management",
    description:
      "Automate server configuration with Ansible, Chef, and Puppet for consistent, repeatable infrastructure management.",
  },
  {
    icon: Server,
    title: "Site Reliability Engineering",
    description:
      "Apply SRE practices to improve system reliability, implement SLOs, and create effective incident response workflows.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Our Services</p>
            <h1 className="text-responsive-xl font-display font-bold mb-4 sm:mb-6">
              Cloud & DevOps
              <span className="gradient-text block">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive cloud and DevOps services to accelerate your digital
              transformation. From migration to optimization, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
            <p className="text-primary font-medium mb-2 text-sm sm:text-base">Multi-Cloud</p>
            <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
              Cloud Platform Services
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Expert services across all major cloud providers, tailored to your
              business requirements.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {cloudServices.map((service, index) => (
              <Card
                key={service.id}
                id={service.id}
                className="border-0 shadow-lg overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <CardHeader className={`${service.bgColor} p-6 sm:p-8 lg:p-12 flex flex-col justify-center`}>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="w-16 h-12 sm:w-20 sm:h-16 rounded-xl bg-background/80 flex items-center justify-center p-2 sm:p-3">
                        <service.Logo className="w-full h-full" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl font-display">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <Button asChild className="btn-gradient w-full sm:w-fit">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 lg:p-12 flex items-center">
                    <div className="space-y-4 w-full">
                      <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Key Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 sm:gap-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section id="devops" className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
            <p className="text-primary font-medium mb-2 text-sm sm:text-base">DevOps</p>
            <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
              DevOps Excellence
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Accelerate your software delivery with our comprehensive DevOps
              services and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {devopsServices.map((service, index) => (
              <Card
                key={service.title}
                className="border-0 shadow-md card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button asChild size="lg" className="btn-gradient w-full sm:w-auto">
              <Link to="/contact">
                Discuss Your DevOps Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                Need a Custom Solution?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific requirements
                and design a tailored cloud strategy for your organization.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
              >
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
