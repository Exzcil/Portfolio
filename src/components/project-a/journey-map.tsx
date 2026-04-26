"use client";

interface Stage {
  stage: string;
  description: string;
  emotion: "low" | "medium" | "high";
}

export function A_JourneyMap({ stages }: { stages: Stage[] }) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-10 min-w-[560px]">
        {stages.map((s, i) => (
          <div key={s.stage} className="flex-1 min-w-[130px] space-y-4">
            <span className="block text-xs text-muted/40 font-mono">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-[2px] h-3">
              {Array.from({ length: 10 }).map((_, j) => {
                const filled = j < (s.emotion === "high" ? 9 : s.emotion === "medium" ? 6 : 3);
                return (
                  <div
                    key={j}
                    className={`flex-1 ${filled ? "bg-accent/40" : "bg-subtle/20"}`}
                  />
                );
              })}
            </div>
            <div>
              <h4 className="text-sm font-medium">{s.stage}</h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
