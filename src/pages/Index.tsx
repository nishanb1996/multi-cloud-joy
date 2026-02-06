import { Layout } from "@/components/layout";
import {
  HeroSection,
  PartnersSection,
  ServicesSection,
  WhyChooseUsSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
