"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Optical fiber connection for consistent speeds",
  "Buffer-less cached content for smooth streaming",
  "Perfect for streaming, gaming, and remote work",
  "Connect multiple devices without lag",
  "24/7 customer support",
];

export function HomeBroadband() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Home Broadband Internet
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Get affordable and reliable high-speed internet for your home.
              Perfect for streaming your favorite shows, lag-free gaming, remote
              work, and connecting all your smart devices. Our fiber-powered
              connection ensures you never miss a moment.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/plans">
              <motion.span
                className="inline-flex items-center gap-2 mt-8 text-cyan-600 font-semibold hover:text-cyan-700"
                whileHover={{ x: 4 }}
              >
                View Plans
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </div>
          <div className="rounded-2xl bg-slate-100 p-8 lg:p-12 border border-slate-200">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Best for</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Families & Home Users</p>
            <p className="mt-4 text-slate-600">
              Whether you&apos;re working from home, streaming 4K, or gaming online,
              our home broadband delivers the speed and reliability you need.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
