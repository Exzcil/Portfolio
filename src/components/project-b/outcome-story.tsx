"use client";

import { motion } from "framer-motion";

export function B_OutcomeStory({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="py-32 sm:py-40 px-8 sm:px-16 bg-neutral-950">
      <div className="max-w-5xl mx-auto text-center">
        {/* Red accent line */}
        <div className="w-16 h-0.5 bg-red-500/60 mx-auto mb-12" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold tracking-tight text-white leading-[1.1]"
        >
          {title}
        </motion.h2>

        {/* Body — clean reading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mt-10"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
