"use client";

import { motion } from "framer-motion";

const strategies = [
  {
    number: "01",
    text: "用色彩和动态传递音乐情绪，让视觉成为听觉的延伸",
  },
  {
    number: "02",
    text: "以用户为中心的内容组织，让每一次打开都感受到被理解",
  },
  {
    number: "03",
    text: "建立品牌仪式感，从播放到分享的每一个触点都精心设计",
  },
];

export function B_StrategyBlock() {
  return (
    <section className="py-24 sm:py-32 px-8 sm:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-12"
        >
          Strategy
        </motion.p>

        {/* Title with red accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-5 mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-[3px] h-14 bg-red-500/60 shrink-0 origin-top mt-1.5"
          />
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight">
              品牌策略
            </h2>
            <p className="text-white/30 text-sm tracking-[0.25em] uppercase mt-3">
              视觉隐喻 · 情感设计
            </p>
          </div>
        </motion.div>

        {/* Strategy cards — each with a red side accent */}
        <div className="space-y-10 mb-24 sm:mb-32">
          {strategies.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex gap-5 sm:gap-6 items-start"
            >
              {/* Red accent bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                viewport={{ once: true }}
                className="w-[2px] h-12 bg-red-500/40 shrink-0 origin-top mt-1"
              />

              {/* Number */}
              <span className="text-2xl sm:text-3xl font-display font-bold text-red-500/30 w-10 sm:w-12 shrink-0 leading-none mt-1">
                {s.number}
              </span>

              {/* Text */}
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text card with red left accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex gap-5 mt-16 sm:mt-20"
        >
          <div className="w-[3px] bg-red-500/30 shrink-0" />
          <p className="text-sm sm:text-base text-white/40 leading-relaxed max-w-xl">
            好的设计策略不是规则清单，而是一套让品牌与用户持续对话的语言系统。
            每一个视觉决策都在回答同一个问题：这一刻，用户需要怎样的情感陪伴？
          </p>
        </motion.div>
      </div>
    </section>
  );
}
