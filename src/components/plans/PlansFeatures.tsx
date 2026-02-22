"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Optical Fiber Connection",
    description: "Pure fiber technology for consistent speeds and reliability.",
  },
  {
    title: "Buffer-less Cached Content",
    description: "Smooth streaming and faster loading for popular content.",
  },
  {
    title: "Connection Ratio 1:8",
    description: "Fair bandwidth sharing for optimal performance.",
  },
  {
    title: "24/7 Customer Service",
    description: "Our support team is always available when you need help.",
  },
];

export function PlansFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            What&apos;s Included in Every Plan
          </h2>
          <p className="mt-4 text-slate-400">
            All our plans come with these core features at no extra cost.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 rounded-xl bg-slate-800 p-6 border border-slate-700"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
