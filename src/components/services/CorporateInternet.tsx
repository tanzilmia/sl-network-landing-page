"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Dedicated bandwidth and guaranteed speeds",
  "SLA-backed uptime commitments",
  "Free Real IP options available",
  "Dedicated account manager",
  "Priority 24/7 technical support",
];

export function CorporateInternet() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Corporate Internet
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We offer safe, scalable internet access for enterprises. Dedicated
              support, SLA guarantees, and custom solutions for your business
              needs. Whether you run a small office or a large enterprise, we
              have the infrastructure and expertise to support you.
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
                Contact Sales
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </div>
          <div className="rounded-2xl bg-slate-800 p-8 lg:p-12 border border-slate-700">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Best for</p>
            <p className="mt-2 text-xl font-semibold text-white">Enterprises & Large Organizations</p>
            <p className="mt-4 text-slate-400">
              Custom solutions with dedicated bandwidth, SLA guarantees, and
              enterprise-grade support. Scale with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
