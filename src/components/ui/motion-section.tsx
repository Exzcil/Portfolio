"use client";

import { motion } from "framer-motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function MotionSection({
  children,
  className,
  as = "section",
}: MotionSectionProps) {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </Tag>
  );
}
