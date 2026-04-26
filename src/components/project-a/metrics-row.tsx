"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface MetricItem {
  end: number;
  suffix: string;
  label: string;
}

export function A_MetricsRow({ items }: { items: MetricItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
      {items.map((item) => (
        <MetricItem key={item.label} {...item} />
      ))}
    </div>
  );
}

function MetricItem({ end, suffix, label }: MetricItem) {
  const { ref, count } = useCountUp({ end, duration: 2000 });

  return (
    <div ref={ref}>
      <div className="text-4xl sm:text-5xl font-semibold tracking-tight font-display text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}
