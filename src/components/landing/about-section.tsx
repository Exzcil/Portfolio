"use client";

import { motion } from "framer-motion";

const skills = [
  "UX Research",
  "Interaction Design",
  "Visual Design",
  "Prototyping",
];

export function AboutSection() {
  return (
    <section className="bg-neutral-900 text-white border-t border-white/5">
      <div className="px-8 sm:px-16 py-28 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 md:gap-32"
        >
          <div>
            <p className="text-xs text-white/20 tracking-[0.2em] uppercase mb-6">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tighter leading-[1.1]">
              Designed & built
              <br />
              <span className="text-white/30">by 丁彤华</span>
            </h2>
            <div className="mt-8 space-y-1.5">
              <p className="text-sm text-white/20 font-light tracking-wide">
                13752648712
              </p>
              <p className="text-sm text-white/20 font-light tracking-wide">
                2357698737@qq.com
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-base sm:text-lg text-white/40 font-light leading-relaxed">
              专注于产品设计与用户价值创造，在理性分析与感性体验之间寻找平衡。
              相信好的产品来自于对用户的深度理解，以及对需求与细节的持续打磨。
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-white/30 font-light">
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
