"use client";

import { useEffect, useRef } from "react";

const experience = [
  {
    role: "Web Developer",
    company: "Aaruchudar",
    period: "Jun 2025 – Present",
    type: "Internship",
    points: [
      "Developed and maintained the official company website and internal enterprise management systems.",
      "Built reusable React and Next.js components improving scalability, maintainability, and UI consistency.",
      "Collaborated with managers and technical teams to deliver responsive, high-performance web applications.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Prisma", "React Native"],
  },
  {
    role: "DSA Content Creator",
    company: "YouTube",
    period: "Jan 2025 – May 2025",
    type: "Freelance",
    points: [
      "Created beginner-friendly educational content on Data Structures, Algorithms, and problem-solving.",
      "Simplified complex concepts including Trees, Graphs, and Dynamic Programming with real code examples.",
    ],
    tech: ["DSA", "Algorithms", "Data Structures"],
  },
];

const certifications = [
  {
    title: "Web Development + DevOps Cohort",
    issuer: "100xDevs (Harkirat Singh)",
    icon: "⚡",
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    icon: "🎓",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-amber-glow" />
          <span className="text-xs font-body uppercase tracking-widest text-amber-glow">
            Experience
          </span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display font-800 text-[clamp(2.5rem,5vw,4.5rem)] tracking-tight text-chalk leading-none mb-16">
          Where I&apos;ve
          <br />
          <span className="amber-text">Been.</span>
        </h2>

        {/* Timeline */}
        <div className="relative space-y-0">
          {/* vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-glow/30 via-white/10 to-transparent hidden md:block" />

          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative md:pl-12 pb-14`}
            >
              {/* Dot */}
              <div
                className="absolute left-[-5px] top-1 w-[11px] h-[11px] rounded-full border-2 border-amber-glow bg-bg hidden md:block"
              />

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Period + type */}
                <div className="shrink-0 md:w-40">
                  <p className="font-body text-xs text-amber-glow uppercase tracking-wider">
                    {exp.period}
                  </p>
                  <span
                    className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "rgba(240,237,230,0.4)",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 border-b border-white/[0.05] last:border-0">
                  <h3 className="font-display font-700 text-xl text-chalk mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="font-body text-muted text-sm mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="font-body text-sm text-muted flex gap-2 leading-relaxed"
                      >
                        <span className="text-amber-glow mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <h3 className="reveal font-display font-700 text-xl text-chalk mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl border border-white/[0.06] flex gap-4 items-start hover:border-amber-glow/20 transition-all`}
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <h4 className="font-display font-600 text-chalk text-sm">
                    {cert.title}
                  </h4>
                  <p className="font-body text-xs text-muted mt-1">
                    {cert.issuer}
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
