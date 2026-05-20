import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-ink text-paper hover:bg-ink/90 hover:-translate-y-0.5 hover:shadow-lift",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-line hover:bg-cream hover:ring-ink/20",
  white:
    "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  /** External links open in a new tab with safe rel. */
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = external ?? /^https?:\/\//.test(href);

  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/** Convenience re-export for places needing a raw anchor with the same styles. */
export type { Variant as ButtonVariant };
export type AnchorProps = ComponentProps<"a">;
