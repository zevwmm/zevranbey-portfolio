"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slideEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Respect prefers-reduced-motion — skip instantly
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }

    const duration = 1600; // ms to fill bar
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Brief hold at 100%, then exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => setGone(true), 750);
        }, 280);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (gone) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: exiting ? "-100%" : 0 }}
      transition={{ duration: 0.72, ease: slideEase }}
      className="fixed inset-0 flex flex-col items-center justify-center z-[100000] select-none"
      style={{ background: "#0D0D0D" }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" as const }}
        className="mb-14"
      >
        <span
          className="font-heading font-black tracking-tight leading-none"
          style={{
            fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
            color: "#F5F5F0",
            letterSpacing: "-0.03em",
          }}
        >
          zevranbey
          <span style={{ color: "#CDFF64" }}>.</span>
        </span>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.5 }}
        style={{ width: "clamp(260px, 40vw, 380px)" }}
      >
        {/* Labels */}
        <div className="flex justify-between items-center mb-3">
          <span
            className="font-body text-[10px] tracking-[0.22em] uppercase"
            style={{ color: "#2E2E2E" }}
          >
            Loading
          </span>
          <span
            className="font-body text-[11px] font-semibold tabular-nums"
            style={{ color: "#CDFF64" }}
          >
            {progress}%
          </span>
        </div>

        {/* Track */}
        <div
          style={{
            height: "1px",
            background: "#1E1E1E",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              background: "#CDFF64",
              width: `${progress}%`,
              transition: "width 0.06s linear",
            }}
          />
        </div>
      </motion.div>

      {/* Subtle bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 font-body text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "#1E1E1E" }}
        aria-hidden="true"
      >
        Indonesia · Working Worldwide
      </motion.p>
    </motion.div>
  );
}
