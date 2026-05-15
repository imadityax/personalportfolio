"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Aaruchudar Management System",
    shortTitle: "AMS",
    description:
      "Enterprise internal platform powering attendance tracking, leave approvals, task management, and employee status monitoring. Architected a secure 5-tier RBAC system with Google OAuth2 + JWT auth and IST-based real-time dashboards.",
    tags: ["Next.js", "TypeScript", "Prisma ORM", "MongoDB", "Google OAuth2"],
    github: "https://github.com/imadityax/ams",
    color: "#f5a623",
    type: "Enterprise",
  },
  {
    number: "02",
    title: "Bingo — Real-Time Multiplayer",
    shortTitle: "Bingo",
    description:
      "Scalable multiplayer gaming platform supporting 100+ concurrent users with low-latency WebSocket communication. Deployed on AWS EC2 with optimized socket performance for smooth real-time gameplay and high uptime.",
    tags: ["Next.js", "WebSocket", "AWS EC2", "Node.js"],
    github: "https://github.com/imadityax/bingo",
    color: "#22c55e",
    type: "Game",
  },
  {
    number: "03",
    title: "QuickScan AI",
    shortTitle: "QuickScan",
    description:
      "AI-powered document analysis platform extracting insights, obligations, and risks from PDFs. Integrated Google Gemini API with drag-and-drop uploads and client-side PDF parsing for faster processing.",
    tags: ["Next.js", "Gemini API", "pdfjs-dist", "TypeScript"],
    github: "https://github.com/imadityax/quickscan-ai",
    color: "#818cf8",
    type: "AI Tool",
  },
  {
    number: "04",
    title: "Musubi Earn",
    shortTitle: "Musubi",
    description:
      "Two-sided performance marketing platform for the Indian creator economy. Brands run campaigns, creators complete tasks, earn money — verified via Instagram & YouTube APIs. Razorpay-powered instant payouts.",
    tags: ["Next.js", "TypeScript", "Razorpay", "Instagram API", "YouTube API"],
    github: "https://github.com/imadityax/musubi-earn",

    color: "#f43f5e",
    type: "Musubi Earn — Reward Based Platform",
  },
  {
    number: "05",
    title: "Aaruchudar Mobile App",
    shortTitle: "Mobile App",
    description:
      "Cross-platform mobile application for Aaruchudar built with React Native & Expo. 4-tab layout covering Home, Programs, Quiz, and About. Deployed via EAS Build with APK distribution for Android.",
    tags: ["React Native", "Expo", "EAS Build", "TypeScript"],
    github: "https://github.com/imadityax/aaruchudar-app",
    color: "#06b6d4",
    type: "Mobile",
  },
  {
    number: "06",
    title: "Social Media Management Platform",
    shortTitle: "Social Media",
    description:
      "Web-based social media management platform for handling content workflows, scheduling, and platform organization. Focused on responsive UI, scalable architecture, and streamlined user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/imadityax/socialmediamanagement",
    color: "#3b82f6",
    type: "Web Platform",
  },
  {
    number: "07",
    title: "E-Commerce Recommendation System",
    shortTitle: "Recommendation System",
    description:
      "Machine learning powered recommendation engine for e-commerce platforms using user preferences, ratings, and behavioral filtering techniques to improve product discovery.",
    tags: ["Python", "Machine Learning", "Recommendation System", "Data Analysis"],
    github: "https://github.com/imadityax/E-commerce-Recommendation-system",
    color: "#8b5cf6",
    type: "Machine Learning",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative">
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-amber-glow" />
          <span className="text-xs font-body uppercase tracking-widest text-amber-glow">
            Selected Work
          </span>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display font-800 text-[clamp(2.5rem,5vw,4.5rem)] tracking-tight text-chalk leading-none">
            Things I&apos;ve
            <br />
            <span className="amber-text">Built.</span>
          </h2>
          <p className="font-body text-muted max-w-sm text-sm leading-relaxed">
            From enterprise management systems to AI tools and real-time
            multiplayer games — here&apos;s what I&apos;ve shipped.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} project-card rounded-2xl p-6 md:p-8 group`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Number + title */}
        <div className="flex items-start gap-6 flex-1">
          <span
            className="project-number font-display font-800 text-5xl leading-none transition-colors duration-300"
            style={{ color: "rgba(240,237,230,0.08)" }}
          >
            {project.number}
          </span>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-body uppercase tracking-widest px-2 py-1 rounded-full"
                style={{
                  color: project.color,
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {project.type}
              </span>
            </div>
            <h3 className="font-display font-700 text-xl md:text-2xl text-chalk mb-3 group-hover:text-chalk transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-muted text-sm leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 ml-auto pl-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-chalk hover:border-white/30 transition-all"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
