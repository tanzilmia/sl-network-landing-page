"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const areas = [
  { name: "Bil Muril", description: "Primary service area" },
  { name: "Post-Gala", description: "Full coverage" },
  { name: "Tangail Sadar", description: "P.S. Tangail Sadar" },
  { name: "Tangail Town", description: "Central areas" },
  { name: "Kashil", description: "Expanded coverage" },
  { name: "Bhuapur", description: "Adjacent areas" },
  { name: "Delduar", description: "Extended network" },
  { name: "Ghatail", description: "Nearby upazila" },
];

export function ServedAreas() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Areas We Serve
          </h2>
          <p className="mt-4 text-slate-600">
            SL Network provides high-speed broadband in the following areas. We
            are continuously expanding our coverage.
          </p>
        </motion.div>
        <AnimateStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {areas.map((area, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-4 rounded-xl bg-white p-4 border border-slate-200 shadow-sm"
              whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{area.name}</h3>
                <p className="text-sm text-slate-500">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimateStagger>
        <motion.p
          className="text-center mt-8 text-slate-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don&apos;t see your area?{" "}
          <Link href="/contact" className="text-cyan-600 font-medium hover:text-cyan-700">
            Contact us
          </Link>{" "}
          — we may be expanding to your location soon.
        </motion.p>
      </div>
    </section>
  );
}
