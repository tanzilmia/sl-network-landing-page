"use client";

import { motion } from "framer-motion";
import { AnimateSection, AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Buffer-less Cached Content",
    description:
      "Stream and browse without interruptions. Our cached content delivery ensures smooth video playback and faster loading.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Optical Fiber Connection",
    description:
      "Pure fiber technology delivers consistent speeds and reliability. No copper, no compromise.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Selfcare Portal",
    description:
      "Manage your connection, pay bills, and track usage anytime from our easy-to-use customer portal.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Our support team is always available. Whether it's technical help or billing questions, we're here for you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimateSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose SL Network
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We combine cutting-edge technology with dedicated service to deliver
            the best internet experience.
          </p>
        </AnimateSection>
        <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group rounded-2xl bg-slate-800 p-6 shadow-sm border border-slate-700 hover:shadow-lg hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mb-4"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold text-lg text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
