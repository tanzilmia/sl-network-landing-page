import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedPlans } from "@/components/sections/FeaturedPlans";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CoveragePreview } from "@/components/sections/CoveragePreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQTeaser } from "@/components/sections/FAQTeaser";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <FeaturedPlans />
      <ServicesOverview />
      <CoveragePreview />
      <Testimonials />
      <FAQTeaser />
      <CTASection />
    </>
  );
}
