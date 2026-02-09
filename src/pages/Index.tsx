import { Layout } from "@/components/layout";
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
