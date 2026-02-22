"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection, AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const plans = [
  {
    name: "Starter",
    speed: "10 MB",
    price: "800",
    popular: false,
    features: [
      "Upto 10 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "Pro",
    speed: "25 MB",
    price: "1,500",
    popular: true,
    features: [
      "Upto 25 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "Business",
    speed: "50 MB",
    price: "2,500",
    popular: false,
    features: [
      "Upto 50 Mb/s Internet",
      "Optical Fiber Connection",
      "Free Real IP",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
];

export function FeaturedPlans() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <AnimateSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Competitive Plans for Every Need
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Choose the perfect plan for your home or business. All plans include
            optical fiber and 24/7 support.
          </p>
        </AnimateSection>
        <AnimateStagger className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-cyan-500 bg-cyan-50/50 shadow-xl shadow-cyan-500/10 scale-105 z-10"
                  : "border-slate-700 bg-slate-800 hover:border-cyan-500/50 hover:shadow-lg"
              }`}
              whileHover={{ y: plan.popular ? 0 : -6 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg text-white">
                  {plan.name}
                </h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">
                    ৳{plan.price}
                  </span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{plan.speed}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-cyan-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                      : "bg-slate-700 text-slate-200"
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
        <AnimateSection className="text-center mt-10">
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 group"
          >
            View All Plans
            <motion.span
              className="inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </AnimateSection>
      </div>
    </section>
  );
}
