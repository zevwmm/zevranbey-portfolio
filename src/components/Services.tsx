"use client";

import { motion } from "framer-motion";
import { Check, Clock, RefreshCw, Zap, Layers, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface TierProps {
  badge: string;
  price: string;
  title: string;
  description: string;
  delivery: string;
  revisions: string;
  features: Feature[];
  highlighted?: boolean;
  index: number;
}

function TierCard({
  badge,
  price,
  title,
  description,
  delivery,
  revisions,
  features,
  highlighted = false,
  index,
}: TierProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileTap={{ scale: 0.99 }}
      className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-500 hover:-translate-y-1.5 shadow-sm group cursor-default ${
        highlighted
          ? "bg-surface border-accent/40 hover:border-accent/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          : "bg-surface border-edge hover:border-ink/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
      }`}
    >
      {/* no badge */}

      {/* Header */}
      <div className="mb-7">
        <span
          className={`inline-block text-[10px] font-body font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-5 ${
            highlighted
              ? "bg-accent/20 text-accent-dark border border-accent/30"
              : "bg-edge text-dim"
          }`}
        >
          {badge}
        </span>
        <div className="flex items-end gap-2 mb-3">
          <span className="font-heading font-black text-ink text-4xl tracking-tight">
            {price}
          </span>
          <span className="text-dim text-sm font-body pb-1.5">/ project</span>
        </div>
        <p className="font-heading font-bold text-ink text-xl mb-1">{title}</p>
      </div>

      {/* Description */}
      <p className="text-ink-secondary font-body text-sm leading-relaxed mb-7 flex-1">
        {description}
      </p>

      {/* Meta — delivery & revisions */}
      <div className="flex items-center gap-6 mb-7 pb-7 border-b border-edge">
        <div className="flex items-center gap-2 text-dim text-sm font-body">
          <Clock size={14} className={highlighted ? "text-accent-dark" : "text-dim"} />
          <span>{delivery}</span>
        </div>
        <div className="flex items-center gap-2 text-dim text-sm font-body">
          <RefreshCw size={14} className={highlighted ? "text-accent-dark" : "text-dim"} />
          <span>{revisions}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8" aria-label={`${title} features`}>
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-body">
            <span
              className={`flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${highlighted ? "text-accent-dark" : "text-dim"}`}
            >
              {feature.icon}
            </span>
            <span className="text-dim">{feature.label}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href={`https://wa.me/6285166658239?text=Hi%20ZevranBey%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(title)}%20package`}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-body font-semibold transition-all duration-200 hover:scale-[1.02] ${
          highlighted
            ? "bg-accent text-ink hover:bg-accent-dim hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            : "border border-edge text-ink hover:border-accent/40 hover:bg-accent/5"
        }`}
      >
        Get Started
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>
    </motion.div>
  );
}

export default function Services() {
  const tiers: TierProps[] = [
    {
      index: 0,
      badge: "Basic",
      price: "$80",
      title: "Starter",
      description:
        "A clean single-page website with mobile responsiveness, scroll animations, WhatsApp integration, and Vercel deployment. Three revision rounds included. Delivered in 3 to 5 days.",
      delivery: "3–5 days",
      revisions: "3 revisions",
      features: [
        { icon: <Check size={14} />, label: "Single-page layout" },
        { icon: <Check size={14} />, label: "Mobile responsive" },
        { icon: <Zap size={14} />, label: "Scroll animations" },
        { icon: <Globe size={14} />, label: "WhatsApp integration" },
        { icon: <Layers size={14} />, label: "Vercel deployment" },
        { icon: <Check size={14} />, label: "3 revision rounds" },
      ],
    },
    {
      index: 1,
      badge: "Premium",
      price: "$200",
      title: "Growth",
      description:
        "A multi-section premium page with advanced animations like parallax and GSAP effects, horizontal scroll sections, bento and asymmetric layouts, and full SEO optimization. Five revision rounds. Delivered in 5 to 7 days.",
      delivery: "5–7 days",
      revisions: "5 revisions",
      highlighted: true,
      features: [
        { icon: <Check size={14} />, label: "Everything in Starter" },
        { icon: <Layers size={14} />, label: "Multi-section layout" },
        { icon: <Zap size={14} />, label: "GSAP animations" },
        { icon: <Check size={14} />, label: "Parallax effects" },
        { icon: <Globe size={14} />, label: "Full SEO optimization" },
        { icon: <Check size={14} />, label: "5 revision rounds" },
      ],
    },
    {
      index: 2,
      badge: "Showstopper",
      price: "$500",
      title: "Experience",
      description:
        "The full experience. 3D elements with Three.js, custom cursor and micro-interactions, scroll-driven cinematics, and motion design throughout. Up to 10 revision rounds. Delivered in 7 to 14 days.",
      delivery: "7–14 days",
      revisions: "Up to 10 rounds",
      features: [
        { icon: <Check size={14} />, label: "Everything in Growth" },
        { icon: <Zap size={14} />, label: "Three.js 3D elements" },
        { icon: <Check size={14} />, label: "Custom cursor" },
        { icon: <Layers size={14} />, label: "Scroll cinematics" },
        { icon: <Globe size={14} />, label: "Full motion design" },
        { icon: <RefreshCw size={14} />, label: "Up to 10 revision rounds" },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 border-t border-edge">
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
            Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-ink leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            What I Offer
          </motion.h2>
        </motion.div>

        {/* Tier Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map((tier) => (
            <TierCard key={tier.index} {...tier} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-dim text-sm font-body mt-12"
        >
          Not sure which tier fits? Message me and we&apos;ll figure it out together.{" "}
          <a
            href="https://wa.me/6285166658239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-dark hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
          >
            Start a conversation →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
