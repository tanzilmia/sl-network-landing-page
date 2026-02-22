"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";
import { plans } from "./plans-data";

export function PlansGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-slate-600">
            All plans include optical fiber and 24/7 support. Prices in BDT per month.
          </p>
        </motion.div>
        <AnimateStagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${
                plan.popular
                  ? "border-cyan-500 bg-cyan-50/50 shadow-xl shadow-cyan-500/10 lg:scale-105 z-10"
                  : "border-slate-200 bg-white hover:border-cyan-200 hover:shadow-lg"
              }`}
              whileHover={{ y: plan.popular ? 0 : -4 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg text-slate-900">
                  {plan.speed}
                </h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-slate-900">
                    ৳{plan.price}
                  </span>
                  <span className="text-slate-600">/month</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-cyan-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/portal/register">
                <motion.span
                  className={`block w-full text-center rounded-xl py-3 font-semibold ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
                      : "bg-slate-100 text-slate-800 hover:bg-cyan-100 hover:text-cyan-800"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
