import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Cpu, Database, Shield, Zap, Globe, BarChart3 } from "lucide-react";
import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const cloudProviders = [
  {
    id: "aws",
    name: "AWS",
    fullName: "Amazon Web Services",
    Logo: AWSLogo,
    tagline: "Build on the world's most comprehensive cloud platform",
    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. We help you leverage AWS's 200+ fully featured services to build sophisticated applications with increased flexibility, scalability, and reliability.",
    bgGradient: "from-orange-500/10 via-orange-400/5 to-transparent",
    accentColor: "text-orange-500",
    borderColor: "border-orange-500/20",
    features: [
      {
        icon: Cpu,
        title: "Compute Services",
        items: ["EC2 Instances", "Lambda Serverless", "ECS & EKS Containers", "Elastic Beanstalk"],
      },
      {
        icon: Database,
        title: "Database & Storage",
        items: ["RDS & Aurora", "DynamoDB", "S3 Storage", "ElastiCache"],
      },
      {
        icon: Shield,
        title: "Security & Identity",
        items: ["IAM Management", "AWS WAF", "KMS Encryption", "Security Hub"],
      },
      {
        icon: Globe,
        title: "Networking",
        items: ["VPC Design", "CloudFront CDN", "Route 53 DNS", "API Gateway"],
      },
    ],
    benefits: [
      "Global infrastructure with 99.99% SLA",
      "Pay-as-you-go pricing model",
      "Industry-leading security certifications",
      "Extensive partner ecosystem",
      "24/7 enterprise support available",
      "Continuous innovation with new services",
    ],
  },
  {
    id: "azure",
    name: "Azure",
    fullName: "Microsoft Azure",
    Logo: AzureLogo,
    tagline: "Seamlessly integrate with Microsoft ecosystem",
    description: "Microsoft Azure provides a comprehensive set of cloud services that developers and IT professionals use to build, deploy, and manage applications. We specialize in Azure's hybrid capabilities and enterprise-grade solutions.",
    bgGradient: "from-sky-500/10 via-sky-400/5 to-transparent",
    accentColor: "text-sky-500",
    borderColor: "border-sky-500/20",
    features: [
      {
        icon: Cpu,
        title: "Compute & Containers",
        items: ["Virtual Machines", "Azure Functions", "AKS Kubernetes", "App Service"],
      },
      {
        icon: Database,
        title: "Data Services",
        items: ["Azure SQL", "Cosmos DB", "Blob Storage", "Synapse Analytics"],
      },
      {
        icon: Shield,
        title: "Identity & Security",
        items: ["Azure AD", "Key Vault", "Sentinel SIEM", "Defender for Cloud"],
      },
      {
        icon: Zap,
        title: "DevOps & Integration",
        items: ["Azure DevOps", "Logic Apps", "Service Bus", "Event Grid"],
      },
    ],
    benefits: [
      "Native Microsoft 365 integration",
      "Hybrid cloud capabilities",
      "Enterprise Active Directory",
      "Compliance across 90+ certifications",
      "Windows workload optimization",
      "Power Platform integration",
    ],
  },
  {
    id: "gcp",
    name: "GCP",
    fullName: "Google Cloud Platform",
    Logo: GCPLogo,
    tagline: "Leverage Google's innovation and infrastructure",
    description: "Google Cloud Platform lets you build, deploy, and scale applications on the same infrastructure that runs Google. We help you harness GCP's cutting-edge AI/ML capabilities and world-class data analytics tools.",
    bgGradient: "from-blue-500/10 via-green-400/5 to-transparent",
    accentColor: "text-blue-500",
    borderColor: "border-blue-500/20",
    features: [
      {
        icon: Cpu,
        title: "Compute Engine",
        items: ["Compute Engine VMs", "Cloud Functions", "GKE Kubernetes", "Cloud Run"],
      },
      {
        icon: BarChart3,
        title: "Data & Analytics",
        items: ["BigQuery", "Dataflow", "Looker", "Pub/Sub"],
      },
      {
        icon: Zap,
        title: "AI & Machine Learning",
        items: ["Vertex AI", "AutoML", "Vision AI", "Natural Language"],
      },
      {
        icon: Database,
        title: "Storage & Database",
        items: ["Cloud SQL", "Firestore", "Cloud Storage", "Spanner"],
      },
    ],
    benefits: [
      "Best-in-class data analytics",
      "Leading AI/ML capabilities",
      "Sustainable cloud infrastructure",
      "Live migration technology",
      "Custom machine types",
      "Committed use discounts",
    ],
  },
];

export const CloudServicesSection = () => {
  return (
    <section id="cloud-services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <p className="text-primary font-medium mb-2 text-sm sm:text-base">Multi-Cloud Expertise</p>
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Cloud Platform Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            We deliver end-to-end cloud solutions across all major providers. 
            Our certified engineers help you choose, migrate, and optimize your cloud infrastructure.
          </p>
        </div>

        <Tabs defaultValue="aws" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8 sm:mb-12">
            {cloudProviders.map((provider) => (
              <TabsTrigger
                key={provider.id}
                value={provider.id}
                className="flex items-center gap-2 data-[state=active]:bg-background py-2 sm:py-3"
              >
                <provider.Logo className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline font-medium">{provider.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {cloudProviders.map((provider) => (
            <TabsContent key={provider.id} value={provider.id} className="mt-0">
              <div className={`rounded-2xl sm:rounded-3xl border ${provider.borderColor} bg-gradient-to-br ${provider.bgGradient} overflow-hidden`}>
                {/* Header */}
                <div className="p-6 sm:p-8 md:p-12 border-b border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-xl bg-background/80 flex items-center justify-center p-2 sm:p-3 shadow-sm">
                      <provider.Logo className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
                        {provider.fullName}
                      </h3>
                      <p className={`${provider.accentColor} font-medium text-sm sm:text-base`}>
                        {provider.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                    {provider.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="p-6 sm:p-8 md:p-12">
                  <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Our {provider.name} Services</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {provider.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-background/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 sm:mb-4`}>
                          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">{feature.title}</h5>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {feature.items.map((item) => (
                            <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-background/40 rounded-xl p-4 sm:p-6 md:p-8">
                    <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Why Choose {provider.name}?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {provider.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <Button asChild className="btn-gradient">
                      <Link to="/contact">
                        Get Started with {provider.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/contact">Schedule a Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
