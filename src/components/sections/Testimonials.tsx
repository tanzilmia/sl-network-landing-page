"use client";

import { motion } from "framer-motion";
import { AnimateSection, AnimateStagger, fadeInUp } from "@/components/ui/AnimateSection";

const testimonials = [
  {
    name: "Rohim",
    text: "Have been using it for the last two months. Consistent service with very low ping. 24-26 Mbps download speed with less than 5 ping.",
    rating: 5,
  },
  {
    name: "Md. Rabbi",
    text: "This is my second time with SL Network. And I must say, you guys have improved a lot. Always prioritizing the client's need. Keep it up!",
    rating: 5,
  },
  {
    name: "Salauddin",
    text: "This is really a cool ISP. Wonderful server speed. I like SL Network too much. Best of luck you guys.",
    rating: 5,
  },
  {
    name: "Sourav",
    text: "Reliable connection and great customer support. The selfcare portal makes managing my account so easy.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join thousands of satisfied customers who trust SL Network for their
            internet needs.
          </p>
        </AnimateSection>
        <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-slate-900">— {t.name}</p>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
