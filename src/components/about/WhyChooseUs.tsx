"use client";

import { motion } from "framer-motion";
import { AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const features = [
  {
    title: "Quality First",
    description: "Uncompromising quality in every connection and service we deliver.",
  },
  {
    title: "Customer Focused",
    description: "We prioritize your needs and deliver solutions that work for you.",
  },
  {
    title: "Innovation Driven",
    description: "Continuous R&D to bring new technologies and better experiences.",
  },
  {
    title: "Affordable Pricing",
    description: "High-quality service at affordable prices for everyone.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Choose SL Network
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our commitment to excellence sets us apart in the industry.
          </p>
        </motion.div>
        <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl bg-slate-50 p-6 border border-slate-200"
              whileHover={{ y: -4, borderColor: "rgb(34 211 238)", backgroundColor: "rgb(248 250 252)" }}
            >
              <h3 className="font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
