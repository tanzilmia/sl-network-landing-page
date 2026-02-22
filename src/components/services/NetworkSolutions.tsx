"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "End-to-end network design and setup",
  "Router and switch configuration",
  "Wi-Fi optimization for office spaces",
  "Ongoing maintenance and monitoring",
  "Cost-effective solutions for SMBs",
];

export function NetworkSolutions() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 lg:order-1 rounded-2xl bg-slate-800 p-8 lg:p-12 border border-slate-700 shadow-sm">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Best for</p>
            <p className="mt-2 text-xl font-semibold text-white">Offices & Small Businesses</p>
            <p className="mt-4 text-slate-400">
              We offer simpler, smarter, and more cost-effective network solutions.
              From initial setup to ongoing maintenance, we handle it all.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Complete Network Solutions
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We offer simpler, smarter, and more cost-effective network solutions
              for offices and small businesses. From design and setup to
              maintenance and support, we provide end-to-end solutions tailored
              to your needs.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 mt-8 text-cyan-400 font-semibold hover:text-cyan-300"
                whileHover={{ x: 4 }}
              >
                Get a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
