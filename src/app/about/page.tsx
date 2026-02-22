import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { Stats } from "@/components/about/Stats";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | SL Network",
  description:
    "Learn about SL Network - our story, mission, vision, and commitment to delivering quality broadband internet service since 2014.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <Stats />
      <AboutCTA />
    </>
  );
}
