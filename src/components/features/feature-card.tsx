interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue-500/30 pointer-events-none transition-colors" />

      {/* Gradient glow on hover */}
      <div className="absolute -inset-2 bg-blue-500/5 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
