"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display value, e.g. "15,000+" or "2015". Digits animate; symbols stay. */
  value: string;
  durationMs?: number;
}

/**
 * Counts up to the numeric portion of `value` when scrolled into view, keeping
 * any non-digit prefix/suffix (commas, "+", etc.). Respects reduced motion.
 */
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => initial(value));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const target = Number(value.replace(/[^0-9]/g, ""));
    if (!target) {
      setDisplay(value);
      return;
    }
    const suffix = value.slice(value.replace(/[^0-9.,]/g, "").length ? value.search(/[^0-9.,]/) : value.length);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(target * eased);
          setDisplay(current.toLocaleString("en-US") + suffix);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return <span ref={ref}>{display}</span>;
}

function initial(value: string) {
  // Start from 0 (with commas/suffix preserved) to avoid layout shift.
  const target = Number(value.replace(/[^0-9]/g, ""));
  if (!target) return value;
  const suffix = value.search(/[^0-9.,]/) >= 0 ? value.slice(value.search(/[^0-9.,]/)) : "";
  return "0" + suffix;
}
