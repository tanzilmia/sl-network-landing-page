"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contact Form */}
          <div className="rounded-2xl bg-slate-800 shadow-xl border border-slate-700 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-white">
              Send Message
            </h2>
            <p className="mt-2 text-slate-400">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="new-connection">New Connection</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="mt-6 p-6 rounded-xl bg-cyan-950/50 border border-cyan-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-cyan-300 font-semibold">
                  Thank you for your message!
                </p>
                <p className="mt-2 text-cyan-400">
                  We&apos;ve received your inquiry and will get back to you within
                  24 hours. For urgent matters, please call us directly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="mt-4 text-sm text-cyan-400 font-medium hover:text-cyan-300"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office Address</h3>
                    <p className="mt-1 text-slate-400">
                      Bil Muril, Tangail Sadar, Tangail
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-600"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a
                      href="tel:+8801600348844"
                      className="mt-1 text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      +88 01600-348844
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-600"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href="mailto:sslatifmia@gmail.com"
                      className="mt-1 text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      sslatifmia@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Support Hours</h3>
                    <p className="mt-1 text-slate-400">24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/portal">
                  <motion.span
                    className="inline-flex items-center rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Selfcare Portal
                  </motion.span>
                </Link>
                <Link href="/portal/pay">
                  <motion.span
                    className="inline-flex items-center rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quick Pay
                  </motion.span>
                </Link>
                <Link href="/portal/register">
                  <motion.span
                    className="inline-flex items-center rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
