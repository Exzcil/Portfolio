"use client";

import { motion } from "framer-motion";

interface BrandElementProps {
  label: string;
  children: React.ReactNode;
}

export function B_BrandElement({ label, children }: BrandElementProps) {
  return (
    <section className="py-24 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-white/20 tracking-widest uppercase mb-10">
          {label}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
