import { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { HomeBroadband } from "@/components/services/HomeBroadband";
import { NetworkSolutions } from "@/components/services/NetworkSolutions";
import { CorporateInternet } from "@/components/services/CorporateInternet";
import { ServiceAddons } from "@/components/services/ServiceAddons";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | SL Network",
  description:
    "SL Network offers Home Broadband, Complete Network Solutions, and Corporate Internet. High-speed fiber, 24/7 support, and reliable connectivity.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <HomeBroadband />
      <NetworkSolutions />
      <CorporateInternet />
      <ServiceAddons />
      <ServicesCTA />
    </>
  );
}
