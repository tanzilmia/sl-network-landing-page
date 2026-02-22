"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "5000+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-2xl bg-slate-800 shadow-xl shadow-black/30 border border-slate-700 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="text-2xl sm:text-3xl font-bold text-cyan-600">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-slate-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
