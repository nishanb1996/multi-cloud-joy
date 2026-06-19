import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import {
  HeroSection,
  PartnersSection,
  ServicesSection,
  ProcessSection,
  WhyChooseUsSection,
  TechStackSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Cloudignitia — Cloud & DevOps Solutions | AWS, GCP, Azure Experts"
        description="Enterprise cloud and DevOps consulting across AWS, GCP, and Azure. Cloud migration, Kubernetes, CI/CD, and 24/7 managed support by certified architects."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Cloudignitia",
          url: "https://cloudignitia.com/",
        }}
      />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
