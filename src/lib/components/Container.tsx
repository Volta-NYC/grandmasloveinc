import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Narrow width for prose-style pages. */
  size?: "default" | "narrow" | "wide";
  as?: ElementType;
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
