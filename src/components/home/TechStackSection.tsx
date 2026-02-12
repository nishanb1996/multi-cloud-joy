import kubernetesLogo from "@/assets/logos/kubernetes.svg";
import terraformLogo from "@/assets/logos/terraform.svg";
import prometheusLogo from "@/assets/logos/prometheus.svg";
import grafanaLogo from "@/assets/logos/grafana.svg";
import jenkinsLogo from "@/assets/logos/jenkins.svg";
import githubLogo from "@/assets/logos/github.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import ansibleLogo from "@/assets/logos/ansible.svg";
import mlopsLogo from "@/assets/logos/mlops.svg";
import llmopsLogo from "@/assets/logos/llmops.svg";
import aiopsLogo from "@/assets/logos/aiops.svg";

const technologies = [
  { logo: kubernetesLogo, name: "Kubernetes", category: "Container Orchestration" },
  { logo: terraformLogo, name: "Terraform", category: "Infrastructure as Code" },
  { logo: prometheusLogo, name: "Prometheus", category: "Monitoring" },
  { logo: grafanaLogo, name: "Grafana", category: "Observability" },
  { logo: dockerLogo, name: "Docker", category: "Containerization" },
  { logo: jenkinsLogo, name: "Jenkins", category: "CI/CD Pipelines" },
  { logo: githubLogo, name: "GitHub Actions", category: "CI/CD Automation" },
  { logo: ansibleLogo, name: "Ansible", category: "Configuration Management" },
  { logo: mlopsLogo, name: "MLOps", category: "ML Lifecycle Management" },
  { logo: llmopsLogo, name: "LLMOps", category: "LLM Deployment & Ops" },
  { logo: aiopsLogo, name: "AIOps", category: "AI-Driven Operations" },
];

export const TechStackSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto stagger-children">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group card-premium p-5 sm:p-6 text-center card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
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
