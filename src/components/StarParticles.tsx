"use client";

// Negative delay = animasi sudah berjalan dari tengah siklus saat halaman dibuka
// Sehingga bintang langsung terlihat, tidak perlu tunggu cycle pertama selesai
const STARS = [
  // Langsung terlihat (negative delay = sudah mid-fall)
  { left: "4%",  delay: "-8s",   duration: "20s", size: 22, color: "#CDFF64" },
  { left: "12%", delay: "-14s",  duration: "23s", size: 18, color: "#CDFF64" },
  { left: "22%", delay: "-5s",   duration: "18s", size: 26, color: "#CDFF64" },
  { left: "31%", delay: "-19s",  duration: "25s", size: 16, color: "#888888" },
  { left: "41%", delay: "-11s",  duration: "21s", size: 24, color: "#CDFF64" },
  { left: "50%", delay: "-3s",   duration: "19s", size: 18, color: "#888888" },
  { left: "60%", delay: "-16s",  duration: "24s", size: 28, color: "#CDFF64" },
  { left: "69%", delay: "-7s",   duration: "20s", size: 20, color: "#CDFF64" },
  { left: "79%", delay: "-12s",  duration: "22s", size: 16, color: "#888888" },
  { left: "90%", delay: "-2s",   duration: "18s", size: 24, color: "#CDFF64" },

  // Gelombang kedua (muncul dalam beberapa detik ke depan)
  { left: "8%",  delay: "2s",    duration: "22s", size: 20, color: "#CDFF64" },
  { left: "28%", delay: "5s",    duration: "20s", size: 18, color: "#888888" },
  { left: "47%", delay: "1.5s",  duration: "23s", size: 22, color: "#CDFF64" },
  { left: "65%", delay: "4s",    duration: "19s", size: 26, color: "#CDFF64" },
  { left: "83%", delay: "3s",    duration: "21s", size: 18, color: "#888888" },
  { left: "96%", delay: "6s",    duration: "18s", size: 22, color: "#CDFF64" },
];

// Sparkle ✦ — 4 sinar utama + 4 sinar diagonal lebih tipis
function StarSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 4 sinar utama (vertikal + horizontal) */}
      <line x1="5" y1="0.3" x2="5" y2="9.7" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="0.3" y1="5" x2="9.7" y2="5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* 4 sinar diagonal lebih tipis */}
      <line x1="1.8" y1="1.8" x2="8.2" y2="8.2" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
      <line x1="8.2" y1="1.8" x2="1.8" y2="8.2" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export default function StarParticles() {
  return (
    <>
      {STARS.map((s, i) => (
        <div
          key={i}
          className="star-particle"
          style={{
            left:              s.left,
            top:               "-4%",
            animationDelay:    s.delay,
            animationDuration: s.duration,
          }}
          aria-hidden="true"
        >
          <StarSVG size={s.size} color={s.color} />
        </div>
      ))}
    </>
  );
}
