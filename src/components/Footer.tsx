import Link from "next/link";

const footerLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/plans", label: "Plans" },
    { href: "/coverage", label: "Coverage" },
    { href: "/contact", label: "Contact" },
  ],
  portal: [
    { href: "/portal", label: "Selfcare" },
    { href: "/portal/pay", label: "Quick Pay" },
    { href: "/support", label: "Support" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Return & Refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SL</span>
              </div>
              <span className="font-bold text-xl text-white">SL Network</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional broadband internet service provider. Ultra-fast fiber
              connection for home and business since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Portal</h4>
            <ul className="space-y-2">
              {footerLinks.portal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
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
                <span>Gala Bazar, Post-Gala, P.S. Tangail Sadar, Tangail</span>
              </li>
              <li>
                <a
                  href="mailto:sslatifmia@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  sslatifmia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801600348844"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +88 01600-348844
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SL Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
