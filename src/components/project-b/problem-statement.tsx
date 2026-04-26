"use client";

import { motion } from "framer-motion";

export function B_ProblemStatement({
  text,
  source,
  imageSrc,
}: {
  text: string;
  source?: string;
  imageSrc?: string;
}) {
  const [line1, line2] = text.split("。");

  return (
    <section className="py-24 sm:py-28 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Large decorative quote */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="block text-8xl sm:text-9xl font-serif leading-none text-red-500/15 select-none mb-6"
            >
              &ldquo;
            </motion.span>

            {/* Core statement — line 1 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white leading-[1.15] max-w-3xl"
            >
              {line1}
            </motion.p>

            {/* Core statement — line 2 */}
            {line2 && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-80px" }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white/50 leading-[1.15] mt-3 max-w-3xl"
              >
                {line2}
              </motion.p>
            )}

            {/* Source — very subtle */}
            {source && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true, margin: "-80px" }}
                className="text-xs text-white/15 mt-8 tracking-wider"
              >
                {source}
              </motion.p>
            )}
          </div>

          {/* Right: Insight image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-neutral-800/40 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-neutral-900/40 z-10 pointer-events-none" />
              <img
                src={imageSrc}
                alt="洞察"
                className="w-full h-auto block brightness-90"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
