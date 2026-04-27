"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-neutral-950 pt-24 pb-16 sm:pt-32 sm:pb-20 px-8 sm:px-16"
    >
      {/* Small end marker */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Signature */}
        <div className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl font-display font-medium text-white/70 tracking-tight">
            Designed &amp; built by{" "}
            <span className="text-white">丁彤华</span>
          </p>
          <p className="text-sm text-white/20 tracking-wide">
            15727397642
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
