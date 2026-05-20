import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Render the title as h1 (default h2). */
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          <span className="h-px w-6 bg-brand/50" aria-hidden />
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "text-balance font-semibold text-ink",
          Tag === "h1"
            ? "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-ink-soft",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
