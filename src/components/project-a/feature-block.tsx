interface FeatureBlockProps {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

export function A_FeatureBlock({
  icon,
  title,
  description,
  metric,
}: FeatureBlockProps) {
  return (
    <div>
      {/* Numbered icon */}
      <span className="text-2xl block mb-5">{icon}</span>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-display font-medium text-on-surface leading-tight mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-muted leading-relaxed">
        {description}
      </p>

      {/* Metric — as a subtle inline stat */}
      {metric && (
        <div className="mt-6 pt-4 border-t border-subtle/20">
          <span className="text-xs text-accent font-medium tracking-wide">
            {metric}
          </span>
        </div>
      )}
    </div>
  );
}
