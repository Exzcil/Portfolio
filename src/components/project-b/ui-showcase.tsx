"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "/images/project-b/推荐界面.png", alt: "推荐界面" },
  { src: "/images/project-b/ui1.png", alt: "播放界面" },
  { src: "/images/project-b/ui2.png", alt: "歌单详情" },
  { src: "/images/project-b/ui3.png", alt: "个人中心" },
];

export function B_UIShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="py-32 sm:py-40 px-8 sm:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-red-500/40 tracking-[0.3em] uppercase mb-20"
        >
          UI Showcase
        </motion.p>

        {/* 2×2 grid — natural aspect ratio */}
        <motion.div
          style={{ y: imageParallax }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-800/40 border border-white/[0.06] rounded-xl overflow-hidden shadow-lg shadow-black/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
