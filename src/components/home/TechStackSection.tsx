import { 
  Container, 
  GitBranch, 
  Monitor, 
  Lock, 
  Database, 
  Workflow 
} from "lucide-react";

const technologies = [
  {
    icon: Container,
    name: "Kubernetes",
    category: "Container Orchestration",
  },
  {
    icon: GitBranch,
    name: "Terraform",
    category: "Infrastructure as Code",
  },
  {
    icon: Monitor,
    name: "Prometheus & Grafana",
    category: "Monitoring & Observability",
  },
  {
    icon: Lock,
    name: "Vault & IAM",
    category: "Security & Compliance",
  },
  {
    icon: Database,
    name: "Cloud SQL & DynamoDB",
    category: "Managed Databases",
  },
  {
    icon: Workflow,
    name: "Jenkins & GitHub Actions",
    category: "CI/CD Pipelines",
  },
];

export const TechStackSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-widest">
            Technology Stack
          </p>
          <h2 className="text-responsive-lg font-display font-bold mb-6">
            Tools We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We leverage industry-leading tools and platforms to build reliable,
            scalable, and secure cloud infrastructure.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto stagger-children">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group card-premium p-5 sm:p-6 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors duration-300">
                <tech.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base mb-1">
                {tech.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
