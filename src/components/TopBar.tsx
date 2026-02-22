"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TopBar() {
  return (
    <motion.div
      className="bg-slate-900 text-slate-300 text-sm"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a
            href="tel:+8801600348844"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +88 01600-348844
          </a>
          <a
            href="mailto:sslatifmia@gmail.com"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            sslatifmia@gmail.com
          </a>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-500">
            Support: 24/7
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/portal"
            className="hover:text-cyan-400 transition-colors"
          >
            Portal Login
          </Link>
          <Link
            href="/portal/pay"
            className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            Pay Online
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
