"use client";

import { motion } from "framer-motion";

export function B_ScrollSequence({
  panels,
}: {
  panels: { title: string; body: string; imageLabel: string }[];
}) {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl space-y-32">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-200px" }}
            className="grid md:grid-cols-2 gap-12 items-center h-[80vh]"
          >
            <div className={`space-y-4 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <span className="text-xs text-accent/60 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                {panel.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{panel.body}</p>
            </div>

            <div
              className={`aspect-[4/5] bg-neutral-800 rounded-lg flex items-center justify-center text-white/20 text-lg select-none ${
                i % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              {panel.imageLabel}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
