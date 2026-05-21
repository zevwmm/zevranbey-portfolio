"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-edge border-t-accent animate-spin" />
    </div>
  ),
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16"
      aria-label="Hero"
    >
      {/* Decorative dot grid — top-left */}
      <div
        className="absolute top-28 left-6 md:left-14 pointer-events-none hidden md:grid"
        style={{ gridTemplateColumns: "repeat(5, 20px)", gap: "16px" }}
        aria-hidden="true"
      >
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-ink/10" />
        ))}
      </div>

      {/* Decorative lime line — right edge */}
      <div
        className="absolute top-1/2 right-0 w-36 h-px pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to left, transparent, rgba(205,255,100,0.5))" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Copy ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" aria-hidden="true" />
            <span className="text-ink-secondary text-xs tracking-[0.25em] uppercase font-body font-medium">
              Web Designer &amp; Developer · Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-heading font-black leading-[1.06] tracking-tight text-ink mb-6"
            style={{ fontSize: "clamp(1.9rem, 3vw, 3.2rem)" }}
          >
            I build websites that make businesses look like they{" "}
            <em className="not-italic relative inline">
              <span
                className="absolute bottom-0 left-0 right-0 h-[38%] rounded-sm"
                style={{ background: "rgba(205,255,100,0.55)" }}
                aria-hidden="true"
              />
              <span className="relative">mean it</span>
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-ink-secondary font-body text-base leading-relaxed mb-10 max-w-md"
          >
            Clean, fast, and effective. From landing pages to full creative
            experiences. Based in Indonesia, working worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-accent text-ink px-7 py-3.5 rounded-full font-semibold text-sm font-body hover:bg-accent-dim transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
            >
              See My Work
            </motion.a>
            <motion.a
              href="https://wa.me/6285166658239"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 border border-edge text-ink px-7 py-3.5 rounded-full font-semibold text-sm font-body hover:border-ink/30 hover:bg-ink/5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              WhatsApp Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 md:gap-8 mt-14 pt-8 border-t border-edge"
          >
            <motion.div
              whileHover={{ scale: 1.06, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="cursor-default"
            >
              <div className="font-heading font-black text-2xl text-ink">3+</div>
              <div className="text-dim text-xs font-body tracking-wide mt-0.5">Tiers Available</div>
            </motion.div>
            <div className="w-px h-10 bg-edge" aria-hidden="true" />
            <motion.div
              whileHover={{ scale: 1.06, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="cursor-default"
            >
              <div className="font-heading font-black text-2xl text-ink">$80</div>
              <div className="text-dim text-xs font-body tracking-wide mt-0.5">Starting Price</div>
            </motion.div>
            <div className="w-px h-10 bg-edge" aria-hidden="true" />
            <motion.div
              whileHover={{ scale: 1.06, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="cursor-default"
            >
              <div className="font-heading font-black text-2xl text-ink">14d</div>
              <div className="text-dim text-xs font-body tracking-wide mt-0.5">Max Turnaround</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right: 3D Scene ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" as const }}
          className="hidden lg:block relative"
          style={{ height: "520px" }}
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-dim text-[10px] font-body tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-edge relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            style={{ animation: "float 1.6s ease-in-out infinite" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
