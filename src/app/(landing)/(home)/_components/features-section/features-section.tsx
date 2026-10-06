import { FeaturesSectionProps } from "./features-section-type";

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-8 p-5 lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center gap-3 text-center"
        >
          {/* icon */}
          <div className="text-accent text-[40px]">{feature.icon}</div>
          {/* title */}
          <h3 className="text-primary text-[16px] font-semibold">
            {feature.title}
          </h3>
          {/* description */}
          <p className="text-primary text-[14px] font-light">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}