"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeSegment {
  title: string;
  body: string;
  imageLabel: string;
  imageSrc?: string;
  imageSrc2?: string;
  arrowLabel?: string;
}

export function B_NarrativePanel({
  segment,
  index,
}: {
  segment: NarrativeSegment;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textParallax = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const reveal = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  const isEven = index % 2 === 0;

  // Subtle directional hints — opposite sides for alternating layouts
  const imageEntryX = isEven ? -15 : 15;
  const textEntryX = isEven ? 15 : -15;

  return (
    <motion.section
      ref={ref}
      style={{ opacity: reveal }}
      className="py-28 sm:py-36 px-8 sm:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image — dominant side (7 cols) */}
          <motion.div
            style={{ y: imageParallax }}
            className={`md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <motion.div
              initial={{ opacity: 0, x: imageEntryX }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {segment.imageSrc2 ? (
                /* Two images side-by-side */
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  {/* First image */}
                  <div className="flex-1 aspect-[9/16] bg-neutral-800/60 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20 flex items-center justify-center">
                    <img
                      src={segment.imageSrc}
                      alt={segment.imageLabel}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Arrow — only when arrowLabel is set */}
                  {segment.arrowLabel && (
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <motion.svg
                        initial={{ x: -4, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          d="M8 20H28M28 20L20 12M28 20L20 28"
                          stroke="rgba(239,68,68,0.5)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                      <span className="text-[10px] text-red-500/30 tracking-[0.2em] whitespace-nowrap">
                        {segment.arrowLabel}
                      </span>
                    </div>
                  )}

                  {/* Second image */}
                  <div className="flex-1 aspect-[9/16] bg-neutral-800/60 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20 flex items-center justify-center">
                    <img
                      src={segment.imageSrc2}
                      alt={segment.imageLabel}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ) : segment.imageSrc ? (
                /* Single real image */
                <div className="bg-neutral-800/40 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20">
                  <img
                    src={segment.imageSrc}
                    alt={segment.imageLabel}
                    className="w-full h-auto block"
                  />
                </div>
              ) : (
                /* Placeholder */
                <div className="aspect-[4/3] bg-neutral-800 flex items-center justify-center text-white/15 text-base select-none">
                  {segment.imageLabel}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Gap column */}
          <div className="hidden md:block md:col-span-1" />

          {/* Text — anchored side (4 cols), appears after image */}
          <motion.div
            style={{ y: textParallax }}
            className={`md:col-span-4 ${isEven ? "md:order-3" : "md:order-1"}`}
          >
            <motion.div
              initial={{ opacity: 0, x: textEntryX }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <div className="space-y-5">
                {/* Number */}
                <span className="text-[10px] text-red-500/40 tracking-[0.3em] uppercase block">
                  Chapter {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white leading-tight tracking-tight">
                  {segment.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/40 leading-relaxed">
                  {segment.body}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
