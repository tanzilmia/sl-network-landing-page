import { Metadata } from "next";
import { PlansHero } from "@/components/plans/PlansHero";
import { PlansGrid } from "@/components/plans/PlansGrid";
import { PlansFeatures } from "@/components/plans/PlansFeatures";
import { PlansCTA } from "@/components/plans/PlansCTA";

export const metadata: Metadata = {
  title: "Plans & Pricing | SL Network",
  description:
    "View all SL Network broadband plans. Competitive pricing from 5MB to 50MB with optical fiber, buffer-less content, and 24/7 support.",
};

export default function PlansPage() {
  return (
    <>
      <PlansHero />
      <PlansGrid />
      <PlansFeatures />
      <PlansCTA />
    </>
  );
}
