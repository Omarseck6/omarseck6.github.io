import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <div className="eyebrow-row">
        <span className="eyebrow-line" />
        <p className={cn("eyebrow", light && "text-white/55")}>{eyebrow}</p>
      </div>
      <div className="heading-grid">
        <h2 className={cn("display-title", light ? "text-white" : "text-ink")}>{title}</h2>
        {description ? (
          <p className={cn("heading-copy", light ? "text-white/55" : "text-muted")}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}
