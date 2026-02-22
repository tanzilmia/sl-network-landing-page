"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Introduction",
    content: `SL Network has been operating since 2017 with a commitment to quality internet service at an affordable price. At SL Network, we deeply value your privacy while using our website and services. This policy reflects our commitment to handling your personal information with care to protect your privacy. By using our services, you agree to adhere to this policy.`,
  },
  {
    title: "Personal Information We Collect",
    content: `We collect personal information that you provide when using our services, including:
• Your name
• Phone number
• Email address
• Physical address
• National ID or identification documents

This information is collected through forms on our website, during registration, and when you contact us for support or billing inquiries.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your personal information to:
• Provide and maintain our internet services
• Process your registration and connection requests
• Communicate with you about your account, billing, and support
• Improve our services and user experience
• Comply with legal and regulatory requirements
• Send important updates about our services (with your consent where required)`,
  },
  {
    title: "Data Sharing and Disclosure",
    content: `We do not sell your personal information. We may share your information only in the following circumstances:
• With service providers who assist us in operating our business (under strict confidentiality agreements)
• When required by law or to protect our rights and safety
• With your explicit consent for a specific purpose`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. We may retain certain information as required by law or for legitimate business purposes.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information (subject to legal requirements)
• Withdraw consent where we rely on consent for processing
• Contact us with any privacy-related concerns

To exercise these rights, please contact us using the details below.`,
  },
  {
    title: "Cookies and Tracking",
    content: `Our website may use cookies and similar technologies to improve your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

SL Network
Bil Muril, Tangail Sadar, Tangail
Email: sslatifmia@gmail.com
Phone: +88 01600-348844`,
  },
];

export function PrivacyContent() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h2 className="text-xl font-bold text-white mb-3">
                {section.title}
              </h2>
              <div className="text-slate-400 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
          <motion.div
            className="mt-12 pt-8 border-t border-slate-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="text-cyan-400 font-medium hover:text-cyan-300"
            >
              ← Back to Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
