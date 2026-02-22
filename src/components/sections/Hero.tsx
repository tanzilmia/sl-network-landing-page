"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="container mx-auto px-4 py-20 lg:py-28 relative">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Fiber-Powered • 24/7 Support
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Ultra-Fast Internet for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Home & Business
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            Experience buffer-free streaming, lag-free gaming, and reliable
            connectivity. SL Network delivers professional-grade broadband with
            optical fiber and 24/7 customer support.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/portal/register">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-500 px-8 py-4 text-base font-semibold text-white"
                whileHover={{ borderColor: "rgb(34 211 238)", backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
