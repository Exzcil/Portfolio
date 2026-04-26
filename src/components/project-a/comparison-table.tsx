"use client";

import { motion } from "framer-motion";

interface Row {
  label: string;
  before: string;
  after: string;
}

export function A_ComparisonTable({ rows }: { rows: Row[] }) {
  return (
    <div>
      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-3 gap-3 sm:gap-8 py-6 sm:py-8 border-b border-subtle/10 last:border-b-0 items-center"
        >
          {/* Label */}
          <div className="text-sm sm:text-base text-on-surface font-medium">
            {row.label}
          </div>

          {/* Before */}
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[10px] text-muted/30 uppercase tracking-widest w-12 shrink-0">
              Before
            </span>
            <span className="text-muted/60">{row.before}</span>
          </div>

          {/* After */}
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[10px] text-emerald-500/60 uppercase tracking-widest w-12 shrink-0">
              After
            </span>
            <span className="text-emerald-700 font-medium">{row.after}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
