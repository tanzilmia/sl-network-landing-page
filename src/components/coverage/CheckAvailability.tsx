"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CheckAvailability() {
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (area.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl bg-white shadow-xl border border-slate-200 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Check Availability
            </h2>
            <p className="mt-2 text-slate-600">
              Enter your area, address, or post code to see if we serve your
              location.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. Bil Muril, Tangail Sadar..."
                    className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Check
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div
                className="mt-6 p-4 rounded-xl bg-cyan-50 border border-cyan-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-cyan-800 font-medium">
                  Thanks for checking! We&apos;ll verify availability for your area.
                </p>
                <p className="mt-2 text-sm text-cyan-700">
                  Our team will contact you shortly. Or call us directly at{" "}
                  <a href="tel:+8801600348844" className="font-semibold underline">
                    +88 01600-348844
                  </a>{" "}
                  for immediate assistance.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-cyan-600 font-medium hover:text-cyan-700"
                >
                  Check another area
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
