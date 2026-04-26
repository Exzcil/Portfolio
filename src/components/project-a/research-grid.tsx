"use client";

interface Method {
  name: string;
  description: string;
}

export function A_ResearchGrid({ methods }: { methods: Method[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-y-12 gap-x-16">
      {methods.map((m) => (
        <div key={m.name} className="space-y-3">
          <h3 className="text-sm font-medium tracking-wide">{m.name}</h3>
          <p className="text-sm text-muted leading-relaxed">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
