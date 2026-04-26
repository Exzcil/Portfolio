"use client";

import { useEffect, useState } from "react";
import { useInView } from "./use-in-view";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  threshold?: number;
}

export function useCountUp({ end, duration = 2000, threshold = 0.3 }: UseCountUpOptions) {
  const { ref, isInView } = useInView({ threshold, once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return { ref, count };
}
