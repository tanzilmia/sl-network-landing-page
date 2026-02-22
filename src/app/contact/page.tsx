import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | SL Network",
  description:
    "Get in touch with SL Network. Contact us for new connections, support, or billing inquiries. We're here to help 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
}
