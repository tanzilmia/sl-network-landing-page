import { Metadata } from "next";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | SL Network",
  description:
    "SL Network privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
