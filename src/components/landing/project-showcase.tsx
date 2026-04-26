"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    href: "/project-a",
    number: "01",
    title: "咔智食谱",
    category: "AI Product Design",
    description: "用数据重塑烹饪体验",
    gradient: "from-blue-950/80 via-neutral-900 to-gray-900/80",
    accent: "bg-blue-500/20",
    label: "理性分析",
    align: "left" as const,
  },
  {
    href: "/project-b",
    number: "02",
    title: "网易云音乐",
    category: "Brand Experience",
    description: "让品牌拥有温度",
    gradient: "from-violet-950/60 via-neutral-900 to-rose-950/40",
    accent: "bg-rose-500/20",
    label: "感性体验",
    align: "right" as const,
  },
];

function ProjectBlock({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const isLeft = project.align === "left";

  return (
    <Link href={project.href} className="group block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative h-[70vh] sm:h-[80vh] overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
        />

        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.04),transparent)]" />

        {/* Subtle accent shape */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none ${
            isLeft ? "right-10 sm:right-20" : "left-10 sm:left-20"
          }`}
        />

        {/* Content */}
        <div
          className={`relative z-10 h-full flex flex-col justify-between px-8 sm:px-16 py-12 sm:py-16 ${
            isLeft ? "items-start" : "items-end"
          }`}
        >
          {/* Number */}
          <div
            className={`flex items-center gap-3 text-white/10 text-[10px] tracking-[0.25em] uppercase ${
              isLeft ? "" : "flex-row-reverse"
            }`}
          >
            <span>{project.number}</span>
            <div className="w-8 h-px bg-white/10" />
          </div>

          {/* Bottom content */}
          <div
            className={`flex flex-col ${
              isLeft ? "items-start text-left" : "items-end text-right"
            }`}
          >
            {/* Category pill */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/30 border border-white/10 rounded-full mb-5 transition-colors duration-300 group-hover:text-white/50 group-hover:border-white/20"
            >
              {project.category}
            </motion.span>

            {/* Title */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tighter text-white relative inline-block">
              {project.title}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
                  isLeft ? "origin-left" : "origin-right right-0"
                }`}
              />
            </h2>

            {/* Description + accent */}
            <div
              className={`flex items-center gap-4 mt-4 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="h-px w-8 bg-white/20" />
              <p className="text-sm sm:text-base text-white/30 font-light transition-colors duration-300 group-hover:text-white/50">
                {project.description}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="mt-8 flex items-center gap-2 text-white/15 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span>查看案例</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function ProjectShowcase() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectBlock key={project.number} project={project} />
      ))}
    </section>
  );
}
