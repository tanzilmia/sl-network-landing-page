import { Metadata } from "next";
import { CoverageHero } from "@/components/coverage/CoverageHero";
import { CheckAvailability } from "@/components/coverage/CheckAvailability";
import { ServedAreas } from "@/components/coverage/ServedAreas";
import { CoverageCTA } from "@/components/coverage/CoverageCTA";

export const metadata: Metadata = {
  title: "Coverage Area | SL Network",
  description:
    "Check if SL Network serves your area. We provide high-speed broadband in Tangail Sadar and surrounding areas. Enter your location to verify availability.",
};

export default function CoveragePage() {
  return (
    <>
      <CoverageHero />
      <CheckAvailability />
      <ServedAreas />
      <CoverageCTA />
    </>
  );
}
