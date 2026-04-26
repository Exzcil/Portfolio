"use client";

import { motion } from "framer-motion";

interface Insight {
  number: string;
  title: string;
  description: string;
}

export function A_InsightBlock({ insights }: { insights: Insight[] }) {
  return (
    <div className="space-y-8">
      {insights.map((insight, i) => (
        <motion.div
          key={insight.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex gap-6 items-start"
        >
          <span className="text-2xl font-mono font-semibold text-accent/60 shrink-0 w-12">
            {insight.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{insight.title}</h3>
            <p className="text-muted text-sm mt-1 leading-relaxed">
              {insight.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
