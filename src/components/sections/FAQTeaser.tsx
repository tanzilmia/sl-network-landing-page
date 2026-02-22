"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateSection } from "@/components/ui/AnimateSection";

const faqs = [
  {
    q: "How do I register for a new connection?",
    a: "Visit our portal and fill out the registration form. Our team will contact you within 24 hours to schedule installation.",
  },
  {
    q: "What is the installation process?",
    a: "After registration, our technician will visit your location to install the connection. Installation typically takes 1-2 hours.",
  },
  {
    q: "How can I pay my bill?",
    a: "You can pay online through our Quick Pay portal, or visit our office. We also accept mobile banking and bank transfer.",
  },
  {
    q: "Do you offer 24/7 support?",
    a: "Yes! Our support team is available round the clock. Call us anytime for technical assistance or billing queries.",
  },
];

export function FAQTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Quick answers to common questions.
            </p>
          </AnimateSection>
          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-xl border border-slate-200 overflow-hidden"
              >
                <motion.button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  {faq.q}
                  <motion.svg
                    className="w-5 h-5 text-slate-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
