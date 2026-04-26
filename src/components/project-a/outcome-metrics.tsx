"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

interface OutcomeItem {
  primary: string;
  description: string;
  sub?: string;
}

export function A_OutcomeMetrics({ items }: { items: OutcomeItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-20">
      {/* Data items */}
      <div className="space-y-5">
        {items.map((item, i) => {
          const match = item.primary.match(/^(\d+)(.*)$/);
          const target = match ? parseInt(match[1], 10) : 0;
          const suffix = match ? match[2] : "";

          return (
            <motion.div
              key={item.primary}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center gap-8 sm:gap-12 py-6 sm:py-7 border-b border-subtle/10 last:border-b-0"
            >
              {/* Large number */}
              <div className="shrink-0 w-28 sm:w-36 text-right">
                <span className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold tracking-tight text-emerald-700 leading-none">
                  <CountUp target={target} suffix={suffix} duration={800} />
                </span>
              </div>

              {/* Description */}
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-on-surface/80 leading-relaxed">
                  {item.description}
                </p>
                {item.sub && (
                  <p className="text-xs text-muted/50 mt-1.5">{item.sub}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Proof image — right side */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true, margin: "-60px" }}
        className="flex items-start md:pt-4"
      >
        <div className="bg-emerald-50/50 border border-subtle/10 w-full">
          <img
            src="/images/project-a/数据证明.png"
            alt="数据证明 — AI Agent 2025 全球专项赛入围"
            className="w-full h-auto block"
          />
        </div>
      </motion.div>
    </div>
  );
}
