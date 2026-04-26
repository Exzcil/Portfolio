"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Palette,
  Video,
  Cuboid,
  Database,
} from "lucide-react";

const skills = [
  {
    name: "Figma / 墨刀",
    category: "UI/UX 设计",
    icon: PenTool,
    proficiency: 0.92,
    color: "from-purple-500/40 to-purple-500/10",
  },
  {
    name: "Photoshop / After Effects",
    category: "视觉设计",
    icon: Palette,
    proficiency: 0.85,
    color: "from-blue-500/40 to-blue-500/10",
  },
  {
    name: "剪映",
    category: "视频剪辑",
    icon: Video,
    proficiency: 0.88,
    color: "from-green-500/40 to-green-500/10",
  },
  {
    name: "3ds Max / Corona",
    category: "三维渲染",
    icon: Cuboid,
    proficiency: 0.78,
    color: "from-orange-500/40 to-orange-500/10",
  },
  {
    name: "MySQL",
    category: "数据管理",
    icon: Database,
    proficiency: 0.72,
    color: "from-cyan-500/40 to-cyan-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function SkillsSection() {
  return (
    <section className="bg-neutral-900 border-t border-white/5">
      <div className="px-8 sm:px-16 py-28 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs text-white/20 tracking-[0.2em] uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tighter text-white">
            专业技能
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 sm:p-7 hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center mb-5 group-hover:bg-white/[0.08] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                </div>

                {/* Name */}
                <h3 className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-1">
                  {skill.name}
                </h3>

                {/* Category */}
                <p className="text-[11px] text-white/20 tracking-wider mb-5">
                  {skill.category}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

                {/* Percentage label */}
                <span className="block text-[10px] text-white/15 mt-2 tracking-wider font-mono">
                  {Math.round(skill.proficiency * 100)}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
