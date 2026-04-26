"use client";

import { motion } from "framer-motion";

const emotions = [
  { label: "发现新音乐", value: "85" },
  { label: "深夜独处", value: "60" },
  { label: "分享时刻", value: "90" },
  { label: "怀旧老歌", value: "75" },
];

export function B_EmotionMeter() {
  return (
    <section className="py-24 sm:py-28 px-8 sm:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-16"
        >
          情感温度
        </motion.p>

        {/* Emotion list — editorial, not dashboard */}
        <div className="divide-y divide-white/5">
          {emotions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex items-center gap-6 sm:gap-10 py-5 sm:py-6"
            >
              {/* Large number */}
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-red-500/20 w-20 sm:w-24 shrink-0 leading-none">
                {item.value}
              </span>

              {/* Dots indicator — abstract */}
              <div className="flex gap-1.5 flex-1">
                {Array.from({ length: 10 }).map((_, dot) => (
                  <div
                    key={dot}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      dot < Math.round((parseInt(item.value) / 100) * 10)
                        ? "bg-red-400/40"
                        : "bg-white/5"
                    }`}
                  />
                ))}
              </div>

              {/* Label */}
              <span className="text-sm sm:text-base text-white/40 w-24 sm:w-28 shrink-0 text-right leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
