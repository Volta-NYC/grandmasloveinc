import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  /** Retained for API compatibility; the brand mark renders the same on any tone. */
  tone?: "ink" | "paper";
  /** Display height in Tailwind classes (defaults to header sizing). */
  sizeClass?: string;
}

/**
 * The official Grandma's Love, Inc. heart logo (transparent brand mark).
 */
export function Logo({ className, sizeClass = "h-12 sm:h-14" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Grandma's Love, Inc. — home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src="/images/logo-mark.webp"
        alt="Grandma's Love, Inc."
        width={302}
        height={274}
        priority
        className={cn(
          "w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]",
          sizeClass,
        )}
      />
    </Link>
  );
}
