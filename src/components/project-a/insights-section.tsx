"use client";

import { motion } from "framer-motion";

interface Insight {
  number: string;
  title: string;
  description: string;
}

export function A_InsightsSection({ insights }: { insights: Insight[] }) {
  const [first, ...rest] = insights;

  return (
    <div>
      {/* Hero insight — full width, prominent */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative bg-emerald-950/5 px-8 sm:px-12 py-16 sm:py-20 mb-6 sm:mb-8"
      >
        {/* Decorative number */}
        <span className="absolute top-0 right-8 text-[12rem] sm:text-[18rem] font-display font-bold text-emerald-600/5 leading-none pointer-events-none select-none">
          {first.number}
        </span>

        <div className="relative z-10 max-w-3xl">
          <span className="text-xs text-emerald-500/50 tracking-[0.25em] uppercase mb-6 block">
            Key Finding
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-on-surface leading-[1.1] tracking-tight mb-6">
            {first.title}
          </h3>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            {first.description}
          </p>
        </div>
      </motion.div>

      {/* Secondary insights — side by side, rhythmic */}
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {rest.map((insight, i) => (
          <motion.div
            key={insight.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative bg-white px-8 py-12 sm:py-14"
          >
            {/* Decorative number */}
            <span className="absolute top-4 right-6 text-7xl sm:text-8xl font-display font-bold text-emerald-600/5 leading-none pointer-events-none select-none">
              {insight.number}
            </span>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-display font-medium text-on-surface leading-snug mb-4">
                {insight.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {insight.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
