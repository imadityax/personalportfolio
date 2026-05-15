"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative">
      <div
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-amber-glow" />
          <span className="text-xs font-body uppercase tracking-widest text-amber-glow">
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-6">
          {/* Left — text */}
          <div className="space-y-6">
            <h2 className="reveal reveal-delay-1 font-display font-800 text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-chalk leading-tight">
              I code. I build. 
              <br />
              <span className="amber-text italic">I ship.</span>
            </h2>

            <p className="reveal reveal-delay-2 font-body text-muted leading-relaxed">
              I&apos;m Aditya — a final-year Computer Science student at Lovely
              Professional University and a{" "}
              <span className="text-chalk">Full Stack Developer</span> with real
              experience shipping production apps.
            </p>

            <p className="reveal reveal-delay-3 font-body text-muted leading-relaxed">
              I currently work at{" "}
              <span className="text-chalk font-medium">Aaruchudar</span> — a
              neuroscience & cognitive training company — where I build
              everything from the marketing website to internal enterprise
              systems and mobile apps.
            </p>

            <p className="reveal reveal-delay-4 font-body text-muted leading-relaxed">
              Outside of work, Builder @ Musubi Earn{" "}
              <span className="text-chalk font-medium">Musubi Earn</span>, a
              performance marketing platform connecting brands with creators in
              the Indian creator economy. We handle real Instagram & YouTube
              verification with Razorpay payouts.
            </p>

            <p className="reveal reveal-delay-5 font-body text-muted leading-relaxed">
              When I&apos;m not writing code, you&apos;ll find me at the gym —
              I take training as seriously as I take my projects.
            </p>
          </div>

          {/* Right — cards */}
          <div className="space-y-4">
            {[
              {
                icon: "🏢",
                title: "Web Developer @ Aaruchudar",
                subtitle: "Jun 2025 – Apr 2026",
                desc: "Built the website, internal management system, and mobile app for a neuroscience company.",
              },
              {
                icon: "🚀",
                title: "Builder @ Musubi Earn",
                subtitle: "2025 – Present",
                desc: "Developed a creator economy platform with API-verified campaigns, payout automation, and scalable full stack architecture.",
              },
              {
                icon: "🎓",
                title: "B.Tech CSE @ LPU",
                subtitle: "2022 – 2026 · CGPA 7.32",
                desc: "Specializing in web development, distributed systems, and modern software engineering.",
              },
              {
                icon: "📹",
                title: "DSA Content Creator",
                subtitle: "Jan – May 2025",
                desc: "Created beginner-friendly educational content on Trees, Graphs, and Dynamic Programming.",
              },
            ].map(({ icon, title, subtitle, desc }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-amber-glow/20 transition-all duration-300 flex gap-4`}
              >
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-display font-700 text-chalk text-base mb-0.5">
                    {title}
                  </h3>
                  <p className="text-xs text-amber-glow font-body mb-2">
                    {subtitle}
                  </p>
                  <p className="text-sm text-muted font-body leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
