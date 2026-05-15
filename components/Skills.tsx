"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    icon: "⌨️",
    skills: ["TypeScript", "JavaScript (ES6+)", "C/C++"],
  },
  {
    label: "Frontend",
    icon: "🎨",
    skills: [
      "Next.js",
      "React.js",
      "React Native",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "Expo",
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSocket",
      "JWT",
      "OAuth2",
      "Prisma ORM",
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "Database Design"],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS EC2", "Vercel", "Git", "GitHub", "CI/CD"],
  },
  {
    label: "Tools & APIs",
    icon: "🛠️",
    skills: [
      "Postman",
      "VS Code",
      "Figma",
      "Instagram API",
      "YouTube API",
    ],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative">
      {/* bg accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-amber-glow" />
          <span className="text-xs font-body uppercase tracking-widest text-amber-glow">
            Tech Stack
          </span>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display font-800 text-[clamp(2.5rem,5vw,4.5rem)] tracking-tight text-chalk leading-none">
            What I
            <br />
            <span className="amber-text">Work With.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-amber-glow/20 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-700 text-chalk text-lg">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="reveal reveal-delay-3 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "6+", label: "Projects Shipped" },
            { value: "1+", label: "Years Experience" },
            { value: "5-tier", label: "RBAC Systems" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl border border-white/[0.06]"
            >
              <div className="font-display font-800 text-3xl text-amber-glow mb-1">
                {value}
              </div>
              <div className="font-body text-xs text-muted uppercase tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
