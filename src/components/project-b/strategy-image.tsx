"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function B_StrategyImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="py-24 sm:py-32 px-8 sm:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-16 sm:mb-20"
        >
          Data
        </motion.p>

        {/* Strategy image */}
        <motion.div
          style={{ y: imageParallax }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-neutral-800/40 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20"
        >
          <img
            src="/images/project-b/项目2数据.png"
            alt="策略数据"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
}
