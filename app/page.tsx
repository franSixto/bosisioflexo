import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
import TechnologySection from "@/components/TechnologySection";
import PortfolioPreview from "@/components/PortfolioPreview";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesGrid />
      <TechnologySection />
      <PortfolioPreview />
      <BlogPreview />
    </>
  );
}
