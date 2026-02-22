"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CoveragePreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-900 p-8 lg:p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Check if we serve your area
              </h2>
              <p className="mt-2 text-slate-300">
                Enter your location to see availability and get connected.
              </p>
            </div>
            <Link href="/coverage">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-8 py-4 font-semibold shrink-0 hover:bg-slate-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Check Coverage
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
