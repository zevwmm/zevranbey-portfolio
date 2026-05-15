"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contacts = [
  {
    icon: <MessageCircle size={18} />,
    label: "Chat on WhatsApp",
    value: "+62 851 6665 8239",
    href: "https://wa.me/6285166658239",
  },
  {
    icon: <Mail size={18} />,
    label: "Send an Email",
    value: "zevwmm@gmail.com",
    href: "mailto:zevwmm@gmail.com",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@zevwmm",
    href: "https://instagram.com/zevwmm",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 border-t border-edge relative overflow-hidden">
      {/* Ambient lime glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(205,255,100,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-dim text-xs font-body font-medium tracking-[0.25em] uppercase mb-5"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-ink leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Ready to stand out{" "}
            <em className="text-accent-dark not-italic">online?</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-dim font-body text-lg leading-relaxed max-w-xl"
          >
            Free consultation. Fixed pricing. No hidden fees. Let&apos;s figure out what your business needs and build something worth showing off.
          </motion.p>
        </motion.div>

        {/* Contact methods + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-4"
          >
            {contacts.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                variants={fadeUp}
                className="group flex items-center gap-5 p-5 rounded-xl border border-edge bg-surface hover:border-accent/30 hover:bg-surface transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edge flex items-center justify-center text-ink-secondary group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                  {c.icon}
                </div>
                <div>
                  <div className="text-dim text-xs font-body uppercase tracking-[0.15em] mb-0.5">
                    {c.label}
                  </div>
                  <div className="text-ink font-body font-medium text-sm">
                    {c.value}
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto text-dim group-hover:text-accent-dark transition-colors duration-200"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col gap-6"
          >
            {/* CTA card */}
            <div className="relative p-8 md:p-10 rounded-2xl border border-accent/20 bg-surface overflow-hidden">
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(205,255,100,0.12) 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              <p className="font-heading font-black text-ink text-xl md:text-2xl tracking-tight mb-3 relative">
                Step one is always free.
              </p>
              <p className="text-dim font-body text-sm leading-relaxed mb-8 relative max-w-sm">
                No forms, no sales calls. Just message me on WhatsApp and tell me what you&apos;re building. I&apos;ll get back within a few hours.
              </p>

              <a
                href="https://wa.me/6285166658239?text=Hi%20ZevranBey%2C%20I'm%20interested%20in%20your%20web%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2.5 bg-accent text-ink px-8 py-4 rounded-full font-heading font-black text-sm hover:bg-accent-dim transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
              >
                Start a Project via WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust note */}
            <p className="text-dim text-xs font-body text-left px-1">
              Typically responds within 3 hours · Indonesian timezone (UTC+7) · English &amp; Bahasa Indonesia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
