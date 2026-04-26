"use client";

import { motion } from "framer-motion";

const moods = [
  { label: "温暖", gradient: "from-orange-500/20 to-rose-500/10", size: "aspect-[4/3]" },
  { label: "沉浸", gradient: "from-blue-600/15 to-indigo-900/20", size: "aspect-[3/4]" },
  { label: "活力", gradient: "from-red-500/20 to-amber-500/10", size: "aspect-square" },
  { label: "静谧", gradient: "from-indigo-500/15 to-violet-900/20", size: "aspect-[16/9]" },
  { label: "怀旧", gradient: "from-amber-500/20 to-yellow-600/10", size: "aspect-square" },
  { label: "律动", gradient: "from-purple-500/20 to-pink-600/15", size: "aspect-[4/3]" },
];

export function B_MoodBoard() {
  return (
    <section className="py-24 sm:py-28 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-14"
        >
          Mood Board
        </motion.p>

        {/* Freeform collage — no grid */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {moods.map((mood, i) => {
            // Varied vertical offsets for rhythm
            const offsets = [0, 24, -8, 16, 32, -4];
            const rotations = [-1, 2, -0.5, 1.5, -2, 0.8];

            return (
              <motion.div
                key={mood.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                viewport={{ once: true }}
                style={{
                  marginTop: `${offsets[i]}px`,
                  rotate: `${rotations[i]}deg`,
                }}
                className={`${mood.size} w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] bg-gradient-to-br ${mood.gradient} flex items-center justify-center select-none`}
              >
                <span className="text-xs text-white/25 tracking-wider">
                  {mood.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
