"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Chat",
    description:
      "Tell me about your business and what you need via WhatsApp. No cost, no commitment. Just a conversation.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You'll get a clear scope, timeline, and fixed price. What you see is what you pay — no surprises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I design and develop your site. You get a live preview link so you can see progress in real time.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Final polish, domain setup, and your website goes live. Simple as that.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-dim text-xs font-body font-medium tracking-[0.25em] uppercase mb-5"
          >
            Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-ink leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            How It Works
          </motion.h2>
        </motion.div>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[28px] left-[52px] right-[52px] h-px bg-edge"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-col md:items-center"
              >
                {/* Mobile: vertical line connector */}
                {index < steps.length - 1 && (
                  <div
                    className="md:hidden absolute left-[28px] top-[56px] bottom-0 w-px bg-edge"
                    aria-hidden="true"
                  />
                )}

                {/* Step number circle */}
                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 pb-10 md:pb-0">
                  <motion.div
                    className="relative flex-shrink-0 cursor-pointer"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    {/* Glow behind circle */}
                    <div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{ background: "rgba(205,255,100,0.15)" }}
                      aria-hidden="true"
                    />
                    <div className="relative w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="font-heading font-black text-ink text-sm leading-none">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="md:mt-7 md:text-center md:px-2">
                    <h3 className="font-heading font-black text-ink text-xl mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-dim font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA under process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/6285166658239?text=Hi%20ZevranBey%2C%20I'm%20interested%20in%20your%20web%20design%20services"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-accent text-ink px-7 py-3.5 rounded-full font-semibold text-sm font-body hover:bg-accent-dim transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          >
            Start Step One — It&apos;s Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
