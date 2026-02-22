"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "5000+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-600 to-teal-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl sm:text-5xl font-bold text-white">
                {stat.value}
              </span>
              <p className="mt-2 text-cyan-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
