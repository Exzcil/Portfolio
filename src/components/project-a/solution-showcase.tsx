"use client";

import { motion } from "framer-motion";

interface Annotation {
  x: number;
  y: number;
  label: string;
}

export function A_SolutionShowcase({
  annotations,
  description,
}: {
  description: string;
  annotations: Annotation[];
}) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Lede — intro paragraph as reading entry */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-lg sm:text-xl text-on-surface/80 leading-relaxed font-light"
      >
        {description}
      </motion.p>

      {/* Divider */}
      <div className="my-16 h-px bg-subtle/20" />

      {/* Image area — editorial spread */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-60px" }}
        className="relative"
      >
        {/* Product main screen */}
        <div className="bg-emerald-50 border border-subtle/20 aspect-[4/3] flex items-center justify-center">
          <img
            src="/images/project-a/食谱产品主界面.png"
            alt="产品主界面"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Annotations as figure captions */}
        <div className="mt-8 space-y-4">
          {annotations.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 text-sm"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-medium shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-muted leading-relaxed">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
