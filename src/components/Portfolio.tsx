"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

// ── Browser Mockup Illustrations ─────────────────────────────────────────────

function BrewIllustration() {
  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Brew & Co. coffee shop website preview"
    >
      <defs>
        <radialGradient id="brewCupGlow" cx="75%" cy="55%" r="40%">
          <stop offset="0%" stopColor="#8B5A1A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <clipPath id="brewWin">
          <rect x="16" y="20" width="564" height="346" rx="10" />
        </clipPath>
      </defs>

      {/* SVG outer background */}
      <rect width="600" height="380" fill="#EDE5DA" />

      {/* window drop shadow */}
      <rect x="20" y="26" width="564" height="346" rx="12" fill="#0D0B08" opacity="0.18" />

      {/* browser window shell */}
      <rect x="16" y="20" width="564" height="346" rx="10" fill="#2B1F17" />

      {/* chrome bar top */}
      <rect x="16" y="20" width="564" height="42" rx="10" fill="#3D2C1F" />
      {/* square off chrome bottom corners */}
      <rect x="16" y="50" width="564" height="12" fill="#3D2C1F" />

      {/* traffic lights */}
      <circle cx="42" cy="41" r="6" fill="#FF5F57" />
      <circle cx="62" cy="41" r="6" fill="#FEBC2E" />
      <circle cx="82" cy="41" r="6" fill="#28C840" />

      {/* url bar */}
      <rect x="114" y="30" width="364" height="22" rx="11" fill="#1C1209" opacity="0.65" />
      <text x="296" y="45" textAnchor="middle" fill="#6B5040" fontSize="8" fontFamily="monospace">
        brew-andd-co.vercel.app
      </text>

      <g clipPath="url(#brewWin)">
        {/* website background */}
        <rect x="16" y="62" width="564" height="304" fill="#0B0906" />
        {/* warm cup glow */}
        <rect x="16" y="62" width="564" height="304" fill="url(#brewCupGlow)" />

        {/* NAV */}
        <rect x="16" y="62" width="564" height="35" fill="#100D08" />
        <text x="40" y="84" fill="#C8A96E" fontSize="12" fontFamily="Georgia, serif" fontWeight="700" letterSpacing="2">
          BREW &amp; CO.
        </text>
        <text x="434" y="84" fill="#5A4535" fontSize="8.5" fontFamily="sans-serif">Menu</text>
        <text x="474" y="84" fill="#5A4535" fontSize="8.5" fontFamily="sans-serif">About</text>
        <text x="514" y="84" fill="#5A4535" fontSize="8.5" fontFamily="sans-serif">Visit</text>
        <line x1="16" y1="97" x2="580" y2="97" stroke="#1E160E" strokeWidth="0.8" />

        {/* HERO LEFT — editorial typography */}
        <text x="40" y="126" fill="#5A4535" fontSize="7.5" fontFamily="sans-serif" letterSpacing="4">SPECIALTY COFFEE</text>
        <text x="40" y="158" fill="#E8DCC8" fontSize="30" fontFamily="Georgia, serif" fontWeight="700">Crafted for</text>
        <text x="40" y="193" fill="#E8DCC8" fontSize="30" fontFamily="Georgia, serif" fontWeight="700">the Discerning</text>
        <text x="40" y="228" fill="#C8A96E" fontSize="30" fontFamily="Georgia, serif" fontStyle="italic">Palate.</text>
        <text x="40" y="250" fill="#4A3828" fontSize="9" fontFamily="sans-serif">A specialty coffee experience for</text>
        <text x="40" y="263" fill="#4A3828" fontSize="9" fontFamily="sans-serif">those who know the difference.</text>
        {/* CTA button */}
        <rect x="40" y="276" width="114" height="29" rx="14" fill="#C8A96E" />
        <text x="97" y="295" textAnchor="middle" fill="#0B0906" fontSize="9.5" fontFamily="sans-serif" fontWeight="700">
          Order Now →
        </text>

        {/* COFFEE CUP — right side */}
        {/* saucer */}
        <ellipse cx="454" cy="302" rx="78" ry="11" fill="#1A1510" stroke="#2E1D12" strokeWidth="1.5" />
        {/* cup body */}
        <path d="M 382 297 L 370 196 L 538 196 L 526 297 Z" fill="#1A1510" stroke="#2E1D12" strokeWidth="1.5" strokeLinejoin="round" />
        {/* cup rim */}
        <ellipse cx="454" cy="196" rx="84" ry="13" fill="#100D08" stroke="#2E1D12" strokeWidth="1.5" />
        {/* coffee surface */}
        <ellipse cx="454" cy="196" rx="70" ry="10" fill="#2E1508" />
        {/* cream swirl */}
        <path d="M 432 195 Q 454 187 476 195 Q 454 203 432 195 Z" fill="none" stroke="#5A3010" strokeWidth="1" opacity="0.55" />
        {/* steam */}
        <path d="M 430 178 Q 422 162 430 146" stroke="#2E1D12" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 454 174 Q 446 158 454 142" stroke="#2E1D12" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 478 178 Q 470 162 478 146" stroke="#2E1D12" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* handle */}
        <path d="M 526 220 Q 556 220 556 248 Q 556 276 526 276" stroke="#2E1D12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* bean accents */}
        <ellipse cx="340" cy="312" rx="10" ry="7" fill="#4A2E0C" opacity="0.5" transform="rotate(-20 340 312)" />
        <ellipse cx="557" cy="290" rx="8" ry="5" fill="#3A2408" opacity="0.4" transform="rotate(15 557 290)" />

        {/* footer strip */}
        <rect x="16" y="318" width="564" height="48" fill="#080604" />
        <line x1="16" y1="318" x2="580" y2="318" stroke="#1A1208" strokeWidth="0.8" />
        <text x="40" y="346" fill="#3A2A1E" fontSize="7" fontFamily="sans-serif" letterSpacing="4">
          OPEN DAILY · 7AM — 9PM
        </text>
        <text x="540" y="346" textAnchor="end" fill="#3A2A1E" fontSize="7" fontFamily="sans-serif">
          Jakarta, Indonesia
        </text>
      </g>

      {/* window border */}
      <rect x="16" y="20" width="564" height="346" rx="10" stroke="#3D2C1F" strokeWidth="1" />
    </svg>
  );
}

function HavenIllustration() {
  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="HAVEN boutique hotel website preview"
    >
      <defs>
        <clipPath id="havenWin">
          <rect x="16" y="20" width="564" height="346" rx="10" />
        </clipPath>
      </defs>

      {/* SVG outer background */}
      <rect width="600" height="380" fill="#EDE8E0" />

      {/* window drop shadow */}
      <rect x="20" y="26" width="564" height="346" rx="12" fill="#8B7355" opacity="0.14" />

      {/* browser window shell */}
      <rect x="16" y="20" width="564" height="346" rx="10" fill="#EDE8DF" />

      {/* chrome bar */}
      <rect x="16" y="20" width="564" height="42" rx="10" fill="#E5DDD1" />
      <rect x="16" y="50" width="564" height="12" fill="#E5DDD1" />

      {/* traffic lights */}
      <circle cx="42" cy="41" r="6" fill="#FF5F57" opacity="0.8" />
      <circle cx="62" cy="41" r="6" fill="#FEBC2E" opacity="0.8" />
      <circle cx="82" cy="41" r="6" fill="#28C840" opacity="0.8" />

      {/* url bar */}
      <rect x="114" y="30" width="364" height="22" rx="11" fill="#FFFFFF" opacity="0.6" />
      <text x="296" y="45" textAnchor="middle" fill="#9B8C78" fontSize="8" fontFamily="monospace">
        haven-hotel-five.vercel.app
      </text>

      <g clipPath="url(#havenWin)">
        {/* website background */}
        <rect x="16" y="62" width="564" height="304" fill="#FDFBF7" />

        {/* NAV */}
        <text x="40" y="90" fill="#2C2018" fontSize="14" fontFamily="Georgia, serif" letterSpacing="3">HAVEN</text>
        <text x="388" y="90" fill="#9B8C78" fontSize="8" fontFamily="sans-serif">Rooms</text>
        <text x="432" y="90" fill="#9B8C78" fontSize="8" fontFamily="sans-serif">About</text>
        <text x="474" y="90" fill="#9B8C78" fontSize="8" fontFamily="sans-serif">Gallery</text>
        <rect x="502" y="78" width="60" height="22" rx="11" fill="#8B7355" />
        <text x="532" y="93" textAnchor="middle" fill="#FDFBF7" fontSize="8" fontFamily="sans-serif" fontWeight="700">
          Reserve
        </text>
        <line x1="16" y1="104" x2="580" y2="104" stroke="#E8E2D6" strokeWidth="0.8" />

        {/* HERO LEFT — editorial typography */}
        <text x="40" y="135" fill="#8B7355" fontSize="7.5" fontFamily="sans-serif" letterSpacing="5">BOUTIQUE HOTEL · BALI</text>
        <text x="40" y="170" fill="#2C2018" fontSize="30" fontFamily="Georgia, serif">Where Stillness</text>
        <text x="40" y="206" fill="#2C2018" fontSize="30" fontFamily="Georgia, serif">Becomes</text>
        <text x="40" y="242" fill="#8B7355" fontSize="30" fontFamily="Georgia, serif" fontStyle="italic">Luxury.</text>
        <line x1="40" y1="258" x2="172" y2="258" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
        <text x="40" y="280" fill="#2C2018" fontSize="10.5" fontFamily="sans-serif">Explore Rooms →</text>

        {/* vertical divider left/right */}
        <line x1="314" y1="104" x2="314" y2="366" stroke="#E8E2D6" strokeWidth="1" />

        {/* HERO RIGHT — stacked room strips */}
        {/* Strip 1 */}
        <rect x="315" y="104" width="265" height="76" fill="#EDE8DF" />
        <rect x="335" y="128" width="80" height="8" rx="4" fill="#D4CFC6" opacity="0.6" />
        <rect x="335" y="142" width="50" height="8" rx="4" fill="#D4CFC6" opacity="0.4" />
        <rect x="520" y="116" width="42" height="52" rx="3" fill="#D4CFC6" opacity="0.5" />
        <text x="335" y="118" fill="#8B7355" fontSize="7.5" fontFamily="sans-serif" letterSpacing="3">DELUXE SUITE 01</text>
        <line x1="315" y1="180" x2="580" y2="180" stroke="#D4CFC6" strokeWidth="0.8" />

        {/* Strip 2 */}
        <rect x="315" y="181" width="265" height="76" fill="#E4DED4" />
        <rect x="335" y="204" width="90" height="8" rx="4" fill="#CCC7BF" opacity="0.5" />
        <rect x="335" y="218" width="60" height="8" rx="4" fill="#CCC7BF" opacity="0.35" />
        <rect x="510" y="193" width="52" height="52" rx="3" fill="#CCC7BF" opacity="0.45" />
        <text x="335" y="196" fill="#8B7355" fontSize="7.5" fontFamily="sans-serif" letterSpacing="3">GARDEN VILLA 02</text>
        <line x1="315" y1="257" x2="580" y2="257" stroke="#CCC7BF" strokeWidth="0.8" />

        {/* Strip 3 */}
        <rect x="315" y="258" width="265" height="108" fill="#EDE8DF" />
        <rect x="335" y="282" width="70" height="8" rx="4" fill="#D4CFC6" opacity="0.6" />
        <rect x="335" y="296" width="100" height="8" rx="4" fill="#D4CFC6" opacity="0.4" />
        <rect x="335" y="310" width="55" height="8" rx="4" fill="#D4CFC6" opacity="0.3" />
        <rect x="478" y="268" width="80" height="68" rx="3" fill="#D4CFC6" opacity="0.4" />
        <text x="335" y="274" fill="#8B7355" fontSize="7.5" fontFamily="sans-serif" letterSpacing="3">OCEAN SUITE 03</text>

        {/* footer bar */}
        <rect x="16" y="352" width="564" height="14" fill="#F5F0E8" />
        <line x1="16" y1="352" x2="580" y2="352" stroke="#E8E2D6" strokeWidth="0.8" />
        <text x="40" y="362" fill="#9B8C78" fontSize="7" fontFamily="sans-serif" letterSpacing="2">© 2024 HAVEN HOTELS</text>
        <text x="540" y="362" textAnchor="end" fill="#9B8C78" fontSize="7" fontFamily="sans-serif">Seminyak, Bali</text>
      </g>

      {/* window border */}
      <rect x="16" y="20" width="564" height="346" rx="10" stroke="#D4CFC6" strokeWidth="1" />
    </svg>
  );
}

function VoidIllustration() {
  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="VOID Studio creative agency website preview"
    >
      <defs>
        <radialGradient id="voidMockGlow" cx="55%" cy="50%" r="35%">
          <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.11" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <clipPath id="voidWin">
          <rect x="16" y="20" width="564" height="346" rx="10" />
        </clipPath>
      </defs>

      {/* SVG outer background */}
      <rect width="600" height="380" fill="#080808" />

      {/* subtle orange ambient behind window */}
      <rect x="20" y="26" width="564" height="346" rx="12" fill="#FF4D00" opacity="0.04" />

      {/* browser window shell */}
      <rect x="16" y="20" width="564" height="346" rx="10" fill="#0F0F0F" />

      {/* chrome bar */}
      <rect x="16" y="20" width="564" height="42" rx="10" fill="#1A1A1A" />
      <rect x="16" y="50" width="564" height="12" fill="#1A1A1A" />

      {/* traffic lights */}
      <circle cx="42" cy="41" r="6" fill="#FF5F57" opacity="0.65" />
      <circle cx="62" cy="41" r="6" fill="#FEBC2E" opacity="0.65" />
      <circle cx="82" cy="41" r="6" fill="#28C840" opacity="0.65" />

      {/* url bar */}
      <rect x="114" y="30" width="364" height="22" rx="11" fill="#242424" />
      <text x="296" y="45" textAnchor="middle" fill="#3A3A3A" fontSize="8" fontFamily="monospace">
        void-studio-wine.vercel.app
      </text>

      <g clipPath="url(#voidWin)">
        {/* website background */}
        <rect x="16" y="62" width="564" height="304" fill="#030303" />
        {/* orange glow */}
        <rect x="16" y="62" width="564" height="304" fill="url(#voidMockGlow)" />

        {/* diagonal decoration */}
        <line x1="180" y1="62" x2="580" y2="366" stroke="#161616" strokeWidth="1" />
        <line x1="100" y1="62" x2="500" y2="366" stroke="#111111" strokeWidth="0.5" />

        {/* NAV */}
        <text x="40" y="92" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="700" letterSpacing="4">VOID</text>
        <text x="96" y="92" fill="#FF4D00" fontSize="13" fontFamily="sans-serif" fontWeight="700">.</text>
        <text x="418" y="92" fill="#3A3A3A" fontSize="8" fontFamily="sans-serif">Work</text>
        <text x="460" y="92" fill="#3A3A3A" fontSize="8" fontFamily="sans-serif">About</text>
        <text x="502" y="92" fill="#3A3A3A" fontSize="8" fontFamily="sans-serif">Contact</text>
        <line x1="16" y1="104" x2="580" y2="104" stroke="#1A1A1A" strokeWidth="0.8" />

        {/* MASSIVE "VOID" HEADING */}
        <text
          x="297"
          y="222"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="148"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          opacity="0.88"
        >
          VOID
        </text>

        {/* STUDIO subtitle */}
        <text x="40" y="248" fill="#FF4D00" fontSize="12" fontFamily="sans-serif" fontWeight="700" letterSpacing="6">
          STUDIO
        </text>

        {/* orange geometric circle */}
        <circle cx="502" cy="178" r="52" stroke="#FF4D00" strokeWidth="1.5" opacity="0.55" />
        <circle cx="502" cy="178" r="34" stroke="#FF4D00" strokeWidth="0.6" opacity="0.25" />

        {/* dot grid — top right */}
        {Array.from({ length: 4 }, (_, r) =>
          Array.from({ length: 5 }, (_, c) => (
            <circle
              key={`voidGrid-${r}-${c}`}
              cx={436 + c * 16}
              cy={116 + r * 16}
              r="1.2"
              fill="#252525"
            />
          ))
        )}

        {/* orange accent line */}
        <line x1="40" y1="262" x2="210" y2="262" stroke="#FF4D00" strokeWidth="1" opacity="0.65" />

        {/* tagline */}
        <text x="40" y="284" fill="#2A2A2A" fontSize="9" fontFamily="sans-serif">
          We build things that make people stop scrolling.
        </text>

        {/* custom cursor dot — visible in scene */}
        <circle cx="312" cy="198" r="7" fill="#FFFFFF" opacity="0.88" />
        <circle cx="312" cy="198" r="19" stroke="#FF4D00" strokeWidth="1.5" opacity="0.55" />

        {/* plus marker */}
        <line x1="545" y1="276" x2="557" y2="276" stroke="#FF4D00" strokeWidth="1" opacity="0.45" />
        <line x1="551" y1="270" x2="551" y2="282" stroke="#FF4D00" strokeWidth="1" opacity="0.45" />

        {/* SELECT WORKS section */}
        <rect x="16" y="308" width="564" height="58" fill="#070707" />
        <line x1="16" y1="308" x2="580" y2="308" stroke="#FF4D00" strokeWidth="0.8" opacity="0.3" />
        <text x="40" y="342" fill="#3A3A3A" fontSize="8" fontFamily="sans-serif" letterSpacing="4">SELECT WORKS</text>
        <text x="540" y="342" textAnchor="end" fill="#FF4D00" fontSize="10" fontFamily="sans-serif">↓</text>
        {/* small work preview tiles */}
        <rect x="198" y="318" width="60" height="34" rx="3" fill="#111111" stroke="#1E1E1E" strokeWidth="1" />
        <rect x="268" y="318" width="60" height="34" rx="3" fill="#0F0F0F" stroke="#1A1A1A" strokeWidth="1" />
        <rect x="338" y="318" width="60" height="34" rx="3" fill="#111111" stroke="#1E1E1E" strokeWidth="1" />
        <text x="228" y="339" textAnchor="middle" fill="#2A2A2A" fontSize="7" fontFamily="sans-serif">01</text>
        <text x="298" y="339" textAnchor="middle" fill="#2A2A2A" fontSize="7" fontFamily="sans-serif">02</text>
        <text x="368" y="339" textAnchor="middle" fill="#2A2A2A" fontSize="7" fontFamily="sans-serif">03</text>
      </g>

      {/* window border */}
      <rect x="16" y="20" width="564" height="346" rx="10" stroke="#1E1E1E" strokeWidth="1" />
    </svg>
  );
}

// ── Shared components ────────────────────────────────────────────────────────

const techTag = (label: string) => (
  <span
    key={label}
    className="inline-block border border-edge text-dim text-xs font-body px-3 py-1 rounded-full"
  >
    {label}
  </span>
);

// ── Main component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-36">
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
            Selected Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-ink leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Three tiers. One standard:{" "}
            <em className="text-accent-dark not-italic">exceptional.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink-secondary font-body text-lg max-w-xl">
            Every project gets the same obsessive attention to detail. The scope is what changes.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">

          {/* ── Card 1: Brew & Co. ─────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" as const }}
            className="group relative rounded-2xl border border-edge bg-surface overflow-hidden hover:border-ink/15 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%]">
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <BrewIllustration />
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block bg-edge text-ink-secondary text-[10px] font-body font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                      Basic
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-ink text-3xl tracking-tight mb-1">
                    Brew &amp; Co.
                  </h3>
                  <p className="text-dim text-sm font-body mb-5">Coffee Shop · Landing Page</p>
                  <p className="text-ink-secondary font-body text-base leading-relaxed mb-7">
                    A warm, minimal landing page for a specialty coffee brand. Clean
                    typography, smooth scroll animations, and a palette that feels
                    like your favorite corner café.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Next.js", "Tailwind CSS", "Framer Motion"].map(techTag)}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-edge">
                  <span className="text-ink-secondary text-sm font-body">
                    Starting from <span className="text-accent-dark font-semibold">$80</span>
                  </span>
                  <a
                    href="https://brew-andd-co.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-dark text-sm font-body font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
                    aria-label="Visit Brew & Co. live site"
                  >
                    Visit Live Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── Card 2: HAVEN ──────────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
            className="group relative rounded-2xl border border-edge bg-surface overflow-hidden hover:border-ink/15 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
              {/* Info — left on desktop, below on mobile */}
              <div className="flex flex-col justify-between p-8 md:p-10 order-2 md:order-1">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block bg-accent/15 text-accent-dark text-[10px] font-body font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-accent/25">
                      Premium
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-ink text-3xl tracking-tight mb-1">HAVEN</h3>
                  <p className="text-dim text-sm font-body mb-5">Boutique Hotel · Premium Landing Page</p>
                  <p className="text-ink-secondary font-body text-base leading-relaxed mb-7">
                    A luxury editorial website built around the idea of quiet
                    sophistication. Parallax scrolling, horizontal room showcase,
                    bento grid layouts, and transitions that feel cinematic.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Next.js", "Tailwind CSS", "GSAP", "Parallax"].map(techTag)}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-edge">
                  <span className="text-ink-secondary text-sm font-body">
                    Starting from <span className="text-accent-dark font-semibold">$200</span>
                  </span>
                  <a
                    href="https://haven-hotel-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-dark text-sm font-body font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
                    aria-label="Visit HAVEN hotel live site"
                  >
                    Visit Live Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Thumbnail — right on desktop, top on mobile */}
              <div className="relative overflow-hidden h-64 md:h-auto min-h-[300px] order-1 md:order-2">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <HavenIllustration />
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── Card 3: VOID Studio ─────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" as const }}
            className="group relative rounded-2xl border border-ink/10 bg-surface overflow-hidden hover:border-ink/20 transition-all duration-500 hover:shadow-[0_16px_64px_rgba(0,0,0,0.1)] shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%]">
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-72 md:h-auto min-h-[360px]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <VoidIllustration />
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block bg-ink text-bg text-[10px] font-body font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full" style={{ color: "#F5F5F0" }}>
                      Showstopper
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-ink text-4xl tracking-tight mb-1">VOID Studio</h3>
                  <p className="text-dim text-sm font-body mb-6">Creative Agency · Interactive Experience</p>
                  <p className="text-ink-secondary font-body text-base leading-relaxed mb-8">
                    This one pushes boundaries. Interactive 3D objects powered by
                    Three.js, scroll-driven horizontal galleries, a custom cursor
                    that follows your every move, and a manifesto section that hits
                    different. Built to impress.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {["Three.js", "GSAP", "3D", "WebGL", "Custom Cursor"].map(techTag)}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-edge">
                  <span className="text-ink-secondary text-sm font-body">
                    Starting from <span className="text-ink font-bold text-base">$500</span>
                  </span>
                  <a
                    href="https://void-studio-wine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-ink text-bg px-5 py-2.5 rounded-full text-sm font-body font-semibold hover:bg-ink/80 hover:gap-3 transition-all duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    aria-label="Visit VOID Studio live site"
                    style={{ color: "#F5F5F0" }}
                  >
                    Visit Live Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
