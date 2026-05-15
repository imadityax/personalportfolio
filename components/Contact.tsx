"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("adityayadav6661@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(245,166,35,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-amber-glow" />
          <span className="text-xs font-body uppercase tracking-widest text-amber-glow">
            Contact
          </span>
          <div className="w-8 h-[1px] bg-amber-glow" />
        </div>

        <h2 className="reveal reveal-delay-1 font-display font-800 text-[clamp(2.8rem,7vw,6rem)] tracking-tight text-chalk leading-[0.95] mb-6">
          Let&apos;s Build
          <br />
          <span className="amber-text italic">Something.</span>
        </h2>

        <p className="reveal reveal-delay-2 font-body text-muted text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          Open to full-time roles, internships, and freelance projects. If
          you&apos;re building something interesting — let&apos;s talk.
        </p>

        {/* Email display */}
        <div className="reveal reveal-delay-3 mb-8">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-glow/30 transition-all duration-300"
          >
            <span className="font-display font-600 text-chalk text-lg md:text-xl">
              adityayadav6661@gmail.com
            </span>
            <span className="text-muted group-hover:text-amber-glow transition-colors">
              {copied ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </span>
          </button>
          <p className="text-xs text-muted mt-2">
            {copied ? "✓ Copied!" : "Click to copy"}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="reveal reveal-delay-4 flex flex-wrap justify-center gap-3 mb-16">
          <a href="mailto:adityayadav6661@gmail.com" className="btn-primary">
            Send Email
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
            href="https://linkedin.com/in/aditya6661"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/imadityax"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="reveal reveal-delay-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted font-body">
          <p>
            Based in{" "}
            <span className="text-chalk">Rajasthan / Punjab, India 🇮🇳</span>
          </p>
          <p>+91-9057516611</p>
          <p>
            Designed & built by{" "}
            <span className="amber-text font-display font-600">
              Aditya Yadav
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
