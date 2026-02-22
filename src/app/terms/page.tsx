import { Metadata } from "next";
import { TermsHero } from "@/components/terms/TermsHero";
import { TermsContent } from "@/components/terms/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | SL Network",
  description:
    "SL Network terms and conditions of service. Read our subscriber agreement, service terms, and policies for broadband internet service.",
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}
