"use client";

interface Persona {
  name: string;
  role: string;
  quote: string;
  tags: string[];
}

export function A_PersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="space-y-6">
      <div className="w-12 h-12 rounded-full bg-subtle/50 flex items-center justify-center text-sm font-medium text-muted">
        {persona.name.charAt(0)}
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">{persona.name}</p>
        <p className="text-xs text-muted">{persona.role}</p>
      </div>
      <blockquote className="text-base text-muted leading-relaxed max-w-md">
        &ldquo;{persona.quote}&rdquo;
      </blockquote>
      <div className="flex flex-wrap gap-3 text-xs text-muted/60">
        {persona.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
