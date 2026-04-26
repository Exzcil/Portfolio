"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NextProjectCTAProps {
  href: string;
  label: string;
  title: string;
  variant: "a" | "b";
}

export function NextProjectCTA({
  href,
  label,
  title,
  variant,
}: NextProjectCTAProps) {
  return (
    <section className={`px-8 sm:px-16 ${variant === "b" ? "py-32" : "py-20"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <p className="text-xs text-muted/40 tracking-widest uppercase mb-6">
          {label}
        </p>
        <Link
          href={href}
          className={`inline-block text-3xl sm:text-5xl font-display font-medium tracking-tight border-b ${
            variant === "b"
              ? "text-white border-white/20 hover:border-white/60"
              : "text-on-surface border-current/20 hover:border-current/60"
          } transition-colors pb-1`}
        >
          {title}
        </Link>
      </motion.div>
    </section>
  );
}
