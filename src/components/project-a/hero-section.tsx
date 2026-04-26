"use client";

import { motion } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

export function A_HeroSection({
  title,
  subtitle,
  role,
  timeline,
  metrics,
}: {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  metrics: Metric[];
}) {
  return (
    <section className="relative min-h-dvh flex flex-col bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)] pointer-events-none" />

      {/* Decorative blur shape */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-400/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-16 max-w-7xl mx-auto w-full">
        {/* Category + Role row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 text-white/25 text-xs tracking-wider"
        >
          <span className="uppercase tracking-[0.25em]">AI Product Design</span>
          <span className="w-6 h-px bg-white/10" />
          <span>{role}</span>
          <span className="w-6 h-px bg-white/10" />
          <span>{timeline}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tighter mt-14 sm:mt-20"
        >
          <span className="block">AI Agent</span>
          <span className="block text-white/60">{title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base sm:text-lg text-white/30 max-w-xl mt-8 sm:mt-10 leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="origin-left h-px bg-white/10 mt-14 max-w-xs"
        />

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex gap-12 sm:gap-16 mt-10"
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {m.value}
              </div>
              <div className="text-xs text-white/25 mt-1.5 tracking-wide">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll guide */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-8 px-8 sm:px-16 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center gap-3 text-white/10 text-xs tracking-[0.25em] uppercase">
          <span>向下探索</span>
          <div className="w-16 h-px bg-white/10" />
        </div>
      </motion.div>
    </section>
  );
}
