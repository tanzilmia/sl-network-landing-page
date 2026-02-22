"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutCTA() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to Get Connected?
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Join SL Network today and experience ultra-fast, reliable internet for
            your home or business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/portal/register">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl border-2 border-cyan-600 px-8 py-4 font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
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
