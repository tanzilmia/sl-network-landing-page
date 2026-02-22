"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-white font-bold text-xl">SL</span>
            </motion.div>
            <span className="font-bold text-xl text-white">SL Network</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  className="text-slate-300 hover:text-cyan-400 font-medium transition-colors block"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/portal"
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Selfcare
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Connected
              </motion.span>
            </Link>
          </div>

          <motion.button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <nav className="flex flex-col gap-2 py-4 border-t border-slate-700">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-lg font-medium transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/portal"
                  className="px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg font-medium block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Selfcare
                </Link>
                <Link
                  href="/contact"
                  className="mx-4 mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Connected
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
