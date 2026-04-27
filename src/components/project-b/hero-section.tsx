"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function B_HeroSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative h-dvh flex items-center overflow-hidden bg-neutral-950"
    >
      {/* Background ambient — subtle scale-in on load */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_40%,rgba(220,38,38,0.15),transparent)]" />
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-rose-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-700/10 blur-[120px]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-8 sm:px-16"
      >
        {/* Category */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-8 sm:mb-12"
        >
          Brand Experience
        </motion.p>

        {/* Title — massive, dominant */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold leading-[0.85] tracking-tighter text-white"
        >
          {title}
        </motion.h1>

        {/* Accent bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-20 h-1 bg-red-500/60 mt-8 sm:mt-10 mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-base sm:text-lg text-white/30 max-w-xl leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* Unofficial rebrand tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base sm:text-lg text-white/20 max-w-xl leading-relaxed font-light mt-3"
        >
          非官方概念重塑
        </motion.p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-8 sm:left-16 text-white/15 text-xs tracking-[0.3em] uppercase flex items-center gap-3"
      >
        <span>向下探索</span>
        <div className="w-12 h-px bg-white/15" />
      </motion.div>
    </section>
  );
}
