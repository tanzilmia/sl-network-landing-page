"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Introduction",
    content: `SL Network has been operating since 2017 with a commitment to quality internet service at an affordable price. These terms and conditions outline the agreement between SL Network and the subscriber. By subscribing to our services, you agree to be bound by these terms.`,
  },
  {
    title: "Subscriber Identification",
    content: `The subscriber must provide the necessary documents and information to establish identification, legal status, and business capacity. SL Network reserves the right to examine such documents.

SL Network reserves the right to temporarily disconnect, suspend, or terminate services if the subscriber provides false information in any document or on the subscription form. If any information provided earlier changes, the subscriber must notify SL Network promptly.`,
  },
  {
    title: "Service Provision",
    content: `SL Network shall provide services to the subscriber within the agreed timeline. In case of any delay, SL Network will notify the subscriber as soon as reasonably practicable.

We strive to maintain consistent service quality and uptime. Scheduled maintenance will be communicated in advance where possible.`,
  },
  {
    title: "Ownership of Equipment",
    content: `SL Network retains ownership of all connections, equipment, and infrastructure provided to the subscriber. This includes but is not limited to modems, routers, cables, and related hardware.

Subscribers must not modify, relocate, or tamper with SL Network equipment without prior written consent. Equipment must be returned in good condition upon termination of service.`,
  },
  {
    title: "Data Privacy and Security",
    content: `While SL Network implements security measures to protect our network and your data, subscribers are encouraged to use their own security software (such as antivirus and firewall) on their devices.

Subscribers are responsible for securing their local network and devices. SL Network is not liable for security breaches resulting from subscriber negligence.`,
  },
  {
    title: "Connection Fee",
    content: `Connection fees are determined by package type, service type, and location. Fees are subject to change by SL Network. Current fees will be communicated at the time of registration.

Installation and activation fees may apply. Payment terms will be specified in your subscription agreement.`,
  },
  {
    title: "Payment and Billing",
    content: `Subscribers must pay all charges by the due date specified on the bill. Failure to pay may result in service suspension or termination.

We accept payment through our Quick Pay portal, office visit, mobile banking, and bank transfer. Late payment may incur additional charges.`,
  },
  {
    title: "Acceptable Use",
    content: `Subscribers must use our services in accordance with applicable laws and regulations. Prohibited activities include but are not limited to:
• Illegal activities or content
• Spam or unsolicited communications
• Unauthorized access to networks or systems
• Activities that harm or overload our network
• Resale of service without authorization

Violation may result in immediate service termination.`,
  },
  {
    title: "Service Termination",
    content: `Either party may terminate the service as per the subscription agreement. Upon termination, the subscriber must return all SL Network equipment. Outstanding balances remain payable.

SL Network may terminate service for breach of these terms, non-payment, or at our discretion with reasonable notice.`,
  },
  {
    title: "Limitation of Liability",
    content: `SL Network's liability is limited to the extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from use of our services.

Our total liability shall not exceed the amount paid by the subscriber in the preceding twelve months.`,
  },
  {
    title: "Changes to Terms",
    content: `SL Network may modify these terms from time to time. Material changes will be communicated via email or notice on our website. Continued use of services after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "Contact Us",
    content: `For questions about these Terms & Conditions, please contact us:

SL Network
Bil Muril, Tangail Sadar, Tangail
Email: sslatifmia@gmail.com
Phone: +88 01600-348844`,
  },
];

export function TermsContent() {
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
