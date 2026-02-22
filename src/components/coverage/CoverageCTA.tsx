"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CoverageCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-600 to-teal-700">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Get Connected?
          </h2>
          <p className="mt-4 text-cyan-100 max-w-xl mx-auto">
            If we serve your area, register now and enjoy ultra-fast internet.
            Our team will get you connected quickly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/portal/register">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl bg-white text-cyan-700 px-8 py-4 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
