"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const taglineRef = useRef<HTMLSpanElement>(null);

  // Typewriter effect for tagline
  useEffect(() => {
    const phrases = [
      "Full Stack Developer.",
      "Builder of Real Things.",
      "Next.js Enthusiast.",
      "Startup Founder.",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const el = taglineRef.current;
    if (!el) return;

    const type = () => {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        el.textContent = current.slice(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 400);
          return;
        }
      } else {
        el.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 1800);
          return;
        }
      }
      setTimeout(type, isDeleting ? 50 : 80);
    };

    setTimeout(type, 800);
  }, []);

  const marqueeText = Array(6).fill("ADITYA YADAV  ·  ");
  const marqueeTextReverse = Array(6).fill("FULL STACK DEV  ·  ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(245,166,35,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top spacer for nav */}
      <div className="h-24" />

      {/* Marquee row 1 */}
      <div className="overflow-hidden py-2 -rotate-1 mb-2">
        <div className="marquee-track">
          {marqueeText.concat(marqueeText).map((text, i) => (
            <span
              key={i}
              className="font-display font-800 text-[clamp(3rem,10vw,8rem)] whitespace-nowrap pr-4"
              style={{
                color: i % 4 === 1 ? "#f5a623" : "rgba(240,237,230,0.08)",
                letterSpacing: "-0.02em",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* CENTER — photo + intro text */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">
          {/* Left text */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
              <div className="status-dot" />
              <span className="text-xs font-body text-muted uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>

            <div>
              <h1 className="font-display font-800 text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight text-chalk">
                Building things
                <br />
                that{" "}
                <span className="amber-text amber-glow italic font-display">
                  actually
                </span>
                <br />
                work.
              </h1>
            </div>

            <p className="font-body text-muted text-lg leading-relaxed max-w-md">
              <span ref={taglineRef} className="amber-text" />
              <span className="animate-cursor-blink">|</span>
              <br />
              <br />
              Final-year CS student at LPU. I build scalable web apps,
              real-time platforms, and AI tools. Currently working at{" "}
              <span className="text-chalk">Aaruchudar</span> & founding{" "}
              <span className="text-chalk">Musubi Earn</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="/CVAPPLY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 pt-2">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/imadityax",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/imadityax",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  href: "mailto:adityayadav6661@gmail.com",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-amber-glow transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative animate-float">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-[28px] opacity-20"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, #f5a623 60deg, transparent 120deg)",
                  animation: "spin 8s linear infinite",
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

              {/* Photo */}
              <div className="photo-frame relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] rounded-[24px] overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Aditya Yadav"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating badge — LPU */}
              <div
                className="absolute -bottom-4 -left-8 px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md"
                style={{ background: "rgba(17,17,17,0.9)" }}
              >
                <p className="font-display font-700 text-sm text-chalk">
                  LPU, Punjab
                </p>
                <p className="text-xs text-muted">B.Tech CSE · 2026</p>
              </div>

              {/* Floating badge — experience */}
              <div
                className="absolute -top-4 -right-8 px-4 py-3 rounded-2xl border border-amber-glow/20 backdrop-blur-md"
                style={{ background: "rgba(17,17,17,0.9)" }}
              >
                <p className="font-display font-700 text-lg text-amber-glow leading-none">
                  1+
                </p>
                <p className="text-xs text-muted">Years building</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee row 2 */}
      <div className="overflow-hidden py-2 rotate-1 mt-2">
        <div className="marquee-track-reverse">
          {marqueeTextReverse.concat(marqueeTextReverse).map((text, i) => (
            <span
              key={i}
              className="font-display font-800 text-[clamp(2rem,7vw,5.5rem)] whitespace-nowrap pr-4"
              style={{
                color:
                  i % 3 === 0 ? "rgba(245,166,35,0.15)" : "rgba(240,237,230,0.05)",
                letterSpacing: "-0.02em",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center pb-8 pt-4 gap-2 opacity-40">
        <span className="text-xs font-body uppercase tracking-widest text-muted">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
