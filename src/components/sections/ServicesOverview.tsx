"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection, AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const services = [
  {
    title: "Home Broadband Internet",
    description:
      "Get affordable and reliable high-speed internet for your home. Perfect for streaming, gaming, remote work, and connecting all your devices.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Complete Network Solutions",
    description:
      "We offer simpler, smarter, and more cost-effective network solutions for offices and small businesses. From setup to maintenance.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Corporate Internet",
    description:
      "Safe, scalable internet access for enterprises. Dedicated support, SLA guarantees, and custom solutions for your business needs.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimateSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From home to enterprise, we have the right solution for your
            connectivity needs.
          </p>
        </AnimateSection>
        <AnimateStagger className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl bg-slate-800 p-8 shadow-sm border border-slate-700 hover:shadow-lg hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mb-6"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="font-semibold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <motion.span
                  className="inline-flex items-center gap-1"
                  whileHover={{ x: 4 }}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
