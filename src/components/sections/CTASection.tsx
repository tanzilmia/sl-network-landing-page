"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-600 to-teal-700 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Get Connected?
        </h2>
        <p className="mt-4 text-lg text-cyan-100 max-w-xl mx-auto">
          Join SL Network today and experience ultra-fast, reliable internet for
          your home or business.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/portal/register">
            <motion.span
              className="inline-flex items-center justify-center rounded-xl bg-white text-cyan-700 px-8 py-4 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white px-8 py-4 font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
