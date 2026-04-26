"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-16">
        {/* Top layer — minimal orientation */}
        <div />

        {/* Center content */}
        <div className="max-w-[90rem] w-full mx-auto">
          {/* Layer 1: Main title — dominant */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-7xl sm:text-9xl md:text-[10rem] font-medium leading-[0.85] tracking-tighter"
          >
            <span className="block">个人作品集</span>
          </motion.h1>

          {/* Layer 2: Subtitle — spaced far from title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 sm:mt-16"
          >
            <span className="text-2xl sm:text-4xl md:text-5xl font-light text-white/15 tracking-tight">
              产品设计
            </span>
          </motion.div>

          {/* Divider — wide gap before next layer */}
          <div className="mt-16 sm:mt-24" />

          {/* Layer 3: Intro — width-constrained, discreet */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-sm text-sm sm:text-base text-white/25 leading-relaxed font-light"
          >
            理性分析驱动产品架构，感性体验塑造品牌温度。两种设计语言，一个创作者。
          </motion.p>

          {/* Layer 4: Tags — deliberately subdued */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
          >
            {["用户研究", "交互设计", "品牌体验", "数据可视化"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-white/30 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Layer 5: Scroll guide — stronger presence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pb-10"
        >
          <div className="max-w-[90rem] mx-auto w-full flex items-center gap-4 text-white/30">
            <span className="text-xs tracking-[0.25em] uppercase">
              向下探索
            </span>
            <div className="flex-1 max-w-32 h-px bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
