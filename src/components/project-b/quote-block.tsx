"use client";

import { motion } from "framer-motion";

export function B_QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role?: string;
}) {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <blockquote>
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-[1.1] tracking-tight text-white"
          >
            &ldquo;{quote}&rdquo;
          </motion.p>
          <footer className="mt-8">
            <motion.cite
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="not-italic text-base text-white/60"
            >
              {author}
              {role && <span className="text-white/30"> — {role}</span>}
            </motion.cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
