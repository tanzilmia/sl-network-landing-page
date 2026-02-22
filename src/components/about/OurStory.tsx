"use client";

import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              SL Network is a home and corporate broadband internet service
              provider that has been operating for over 10 years. We have gained
              an excellent reputation among clients by providing uncompromising
              quality and committed service.
            </p>
            <p>
              Over time, our R&D team has developed and introduced many new
              technologies to meet the requirements of the new millennium. In the
              last several years, SL Network has introduced many new ideas and
              technologies to the internet industry. We are one of the top
              growing Internet Service Providers in our service area.
            </p>
            <p>
              SL Network is the largest provider of broadband service that
              explores the true potential of the Internet. It offers high
              quality, low cost, and easy-to-use internet connection at home and
              office. We keep pace with the new, fast, and ever-changing world of
              Internet needs. With SL Network, you need to expect nothing but the
              best.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
