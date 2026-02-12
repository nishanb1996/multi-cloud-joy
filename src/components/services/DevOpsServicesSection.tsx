import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GitBranch,
  ArrowRight,
  Code2,
  Activity,
  Container,
  Settings,
  Server,
  Shield,
  Workflow,
  Gauge,
} from "lucide-react";
import kubernetesLogo from "@/assets/logos/kubernetes.svg";
import terraformLogo from "@/assets/logos/terraform.svg";
import prometheusLogo from "@/assets/logos/prometheus.svg";
import grafanaLogo from "@/assets/logos/grafana.svg";
import jenkinsLogo from "@/assets/logos/jenkins.svg";
import githubLogo from "@/assets/logos/github.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import ansibleLogo from "@/assets/logos/ansible.svg";

const toolLogos = [
  { name: "Kubernetes", logo: kubernetesLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Terraform", logo: terraformLogo },
  { name: "Jenkins", logo: jenkinsLogo },
  { name: "GitHub Actions", logo: githubLogo },
  { name: "Prometheus", logo: prometheusLogo },
  { name: "Grafana", logo: grafanaLogo },
  { name: "Ansible", logo: ansibleLogo },
];

const devopsServices = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup",
    description: "Automate your entire software delivery lifecycle with robust, scalable pipelines.",
    details: [
      "Jenkins, GitLab CI, GitHub Actions",
      "Azure DevOps Pipelines",
      "Automated testing integration",
      "Deployment automation",
    ],
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    description: "Manage your infrastructure through version-controlled, reproducible configurations.",
    details: [
      "Terraform & Pulumi",
      "CloudFormation & CDK",
      "ARM Templates",
      "Ansible playbooks",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description: "Gain complete visibility into your systems with comprehensive monitoring solutions.",
    details: [
      "Prometheus & Grafana",
      "Datadog & New Relic",
      "ELK Stack logging",
      "Custom dashboards & alerts",
    ],
    gradient: "from-emerald-500/10 to-green-500/10",
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description: "Deploy and manage containerized workloads at scale with industry-leading platforms.",
    details: [
      "Kubernetes (EKS, AKS, GKE)",
      "Docker containerization",
      "Helm chart management",
      "Service mesh (Istio)",
    ],
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Settings,
    title: "Configuration Management",
    description: "Automate server configuration for consistent, repeatable infrastructure management.",
    details: [
      "Ansible automation",
      "Chef & Puppet",
      "Salt Stack",
      "Desired state configuration",
    ],
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Server,
    title: "Site Reliability Engineering",
    description: "Apply SRE practices to improve system reliability and operational excellence.",
    details: [
      "SLO/SLI implementation",
      "Incident management",
      "Capacity planning",
      "Chaos engineering",
    ],
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Gauge,
    title: "Assess",
    description: "We analyze your current infrastructure, workflows, and pain points to identify optimization opportunities.",
  },
  {
    step: "02",
    icon: Workflow,
    title: "Design",
    description: "Our experts design a tailored DevOps strategy aligned with your business goals and technical requirements.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Implement",
    description: "We implement the solution incrementally, ensuring minimal disruption and maximum value at each stage.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Optimize",
    description: "Continuous monitoring and optimization to ensure your systems remain efficient, secure, and scalable.",
  },
];

export const DevOpsServicesSection = () => {
  return (
    <section id="devops" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <p className="text-primary font-medium mb-2 text-sm sm:text-base">DevOps Excellence</p>
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Accelerate Your Software Delivery
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Transform your development and operations with our comprehensive DevOps services. 
            We help you build faster, deploy safer, and operate smarter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {devopsServices.map((service, index) => (
            <Card
              key={service.title}
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${service.gradient} p-5 sm:p-6`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-background">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-xs sm:text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4">
              Our DevOps Process
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              A proven methodology to transform your development and operations workflow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg sm:text-xl mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools We Use */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Tools & Technologies We Use
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {toolLogos.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-xl bg-background shadow-sm border border-border/50 flex items-center justify-center group-hover:shadow-md group-hover:scale-110 transition-all">
                  <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="btn-gradient w-full sm:w-auto">
            <Link to="/contact">
              Start Your DevOps Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
