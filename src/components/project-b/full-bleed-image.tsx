"use client";

import { motion } from "framer-motion";

export function B_FullBleedImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="w-screen relative -mx-6" style={{ width: "100vw" }}>
      <div className="aspect-video sm:h-[80vh] bg-neutral-800 flex items-center justify-center text-white/20 text-lg select-none">
        {alt}
      </div>
      {caption && (
        <figcaption className="text-xs text-muted mt-3 px-6 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
