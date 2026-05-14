"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rocket = rocketRef.current;
    if (!rocket) return;

    let mouseX = 0;
    let mouseY = 0;
    let prevX = 0;
    let prevY = 0;
    let firstMove = true;

    // Direction vector — default pointing straight up (dx=0, dy=-1)
    // Using a vector instead of raw angle avoids 360°→0° wrap-around jumps
    let smoothDx = 0;
    let smoothDy = -1;

    const updateTransform = () => {
      // atan2(y, x) = 0° for rightward; +90° shifts so 0° = upward (rocket nose)
      const angle = Math.atan2(smoothDy, smoothDx) * (180 / Math.PI) + 90;
      // transform-origin: 50% 0% (set in CSS) keeps the nose tip
      // at exactly (mouseX, mouseY) regardless of rotation angle
      rocket.style.transform = `translate(${mouseX - 12}px, ${mouseY}px) rotate(${angle}deg)`;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (firstMove) {
        // Skip first event — delta from off-screen would be huge/wrong
        firstMove = false;
        prevX = mouseX;
        prevY = mouseY;
      } else {
        const dx = mouseX - prevX;
        const dy = mouseY - prevY;
        prevX = mouseX;
        prevY = mouseY;

        // Only update direction when actually moving
        if (Math.abs(dx) + Math.abs(dy) > 0.25) {
          // Lerp direction vector: factor 0.18 → smooth but responsive
          smoothDx += (dx - smoothDx) * 0.18;
          smoothDy += (dy - smoothDy) * 0.18;
        }
      }

      // Update transform immediately in the event handler — zero position lag
      updateTransform();
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        rocket.classList.add("cursor-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        rocket.classList.remove("cursor-hover");
      }
    };

    const onMouseDown = () => rocket.classList.add("cursor-click");
    const onMouseUp   = () => rocket.classList.remove("cursor-click");

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout",  onMouseOut,  { passive: true });
    document.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseup",   onMouseUp,   { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout",  onMouseOut);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup",   onMouseUp);
    };
  }, []);

  return (
    <div ref={rocketRef} className="cursor-rocket" aria-hidden="true">
      {/* Rocket tip at top-center (12, 0) — rotates around that point via transform-origin */}
      <svg
        viewBox="0 0 24 42"
        width="24"
        height="42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <path
          d="M 12 0 C 5 6 4 16 4 25 L 4 30 L 20 30 L 20 25 C 20 16 19 6 12 0 Z"
          fill="#111111"
        />
        {/* Highlight streak */}
        <path
          d="M 9 1 C 7 7 6 14 6 23"
          stroke="#2A2A2A"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Porthole */}
        <circle cx="12" cy="17" r="4.5" fill="#CDFF64" />
        <circle cx="12" cy="17" r="2.5" fill="#111111" opacity="0.28" />
        {/* Porthole glint */}
        <circle cx="10.5" cy="15.5" r="1" fill="#FFFFFF" opacity="0.45" />
        {/* Left fin */}
        <path d="M 4 24 L 0 32 L 4 29 Z" fill="#0D0D0D" />
        {/* Right fin */}
        <path d="M 20 24 L 24 32 L 20 29 Z" fill="#0D0D0D" />
        {/* Exhaust nozzle */}
        <rect x="9" y="30" width="6" height="2.5" rx="1.2" fill="#0A0A0A" />
        {/* Flame — lime outer */}
        <path
          d="M 7 32.5 Q 8.5 37 12 41 Q 15.5 37 17 32.5 Q 14 34.5 12 32.5 Q 10 34.5 7 32.5 Z"
          fill="#CDFF64"
        />
        {/* Flame — white-hot core */}
        <path
          d="M 9.5 32.5 Q 10.8 36 12 38.5 Q 13.2 36 14.5 32.5 Q 12.5 34 12 32.5 Q 11.5 34 9.5 32.5 Z"
          fill="#FFFFFF"
          opacity="0.65"
        />
      </svg>
    </div>
  );
}
