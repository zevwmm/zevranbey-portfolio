"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/zevwmm",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@zevran",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.19 8.19 0 0 0 4.79 1.53V6.82a4.85 4.85 0 0 1-1.02-.13z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:zevwmm@gmail.com",
    icon: <Mail size={16} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6285166658239",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <a
              href="#"
              className="font-heading font-black text-xl text-ink tracking-tight hover:opacity-80 transition-opacity"
            >
              zevranbey<span className="text-accent-dark">.</span>
            </a>
            <p className="text-dim text-sm font-body mt-2 max-w-xs leading-relaxed">
              Web design that makes businesses look like they mean it. Based in Indonesia, working worldwide.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-dim text-sm font-body hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-edge flex items-center justify-center text-dim hover:text-accent-dark hover:border-accent-dark/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-edge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-dim text-xs font-body">
            &copy; {year} ZevranBey. All rights reserved.
          </p>
          <p className="text-dim text-xs font-body flex items-center gap-1.5">
            Based in Indonesia
            <span role="img" aria-label="Indonesia flag">🇮🇩</span>
            · Working worldwide
            <span role="img" aria-label="Globe">🌏</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
