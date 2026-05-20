import type { SVGProps } from "react";
import type { IconName } from "@/content/types";

/**
 * A small, cohesive line-icon set drawn in a single 24×24 grid with a 1.6
 * stroke. Using one consistent style throughout keeps the UI premium and
 * avoids the mismatched clipart of the original site.
 */
const paths: Record<IconName, React.ReactNode> = {
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h5.5a1.5 1.5 0 0 0 1.5-1.5Z" />
    </>
  ),
  vending: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v18M9 7h6M9 11h6" />
      <path d="M13.5 16.5h2.5v2.5h-2.5z" />
    </>
  ),
  meal: (
    <>
      <path d="M12 3a7 7 0 0 1 7 7c0 3-2 4-3.5 4.5L16 21H8l.5-6.5C7 14 5 13 5 10a7 7 0 0 1 7-7Z" />
      <path d="M9.5 8.5c.7-1 1.6-1.5 2.5-1.5s1.8.5 2.5 1.5" />
    </>
  ),
  coat: (
    <>
      <path d="M12 3 7 5 4 8l2 2 1-1v10h10V9l1 1 2-2-3-3-5-2Z" />
      <path d="M12 3v6" />
    </>
  ),
  cereal: (
    <>
      <path d="M4 9h16l-1.2 9.2A2 2 0 0 1 16.8 20H7.2a2 2 0 0 1-2-1.8Z" />
      <path d="M6 9c0-2.5 2.7-4 6-4s6 1.5 6 4" />
      <path d="M9 13h.01M12 13h.01M15 13h.01" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m6 6 3.5 3.5M14.5 14.5 18 18M18 6l-3.5 3.5M9.5 14.5 6 18" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-9.2-9C1.3 8 2.7 4.8 6 4.8c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.3 0 4.7 3.2 3.2 6.2C19 15.6 12 20 12 20Z" />
  ),
  hands: (
    <>
      <path d="M12 7.5c.6-1.4 1.8-2.5 3.2-2.5 1.6 0 2.6 1.3 2 3-.6 1.6-2.6 3-5.2 4.5C9.4 11 7.4 9.6 6.8 8c-.6-1.7.4-3 2-3 1.4 0 2.6 1.1 3.2 2.5Z" />
      <path d="M4 14l3 3 5 2 7-3 1-3-2-1-3 1.5" />
    </>
  ),
  school: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M7 10.5V15c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.5" />
      <path d="M21 8v5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2A3 3 0 0 1 18 12M16.5 14.2a5.5 5.5 0 0 1 4 4.8" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M2.5 9h19M12 9v11" />
      <path d="M12 9S10.5 4 8 4.5 8 9 12 9Zm0 0s1.5-5 4-4.5S16 9 12 9Z" />
    </>
  ),
  sparkle: (
    <path d="M12 3c.4 3.5 1.5 4.6 5 5-3.5.4-4.6 1.5-5 5-.4-3.5-1.5-4.6-5-5 3.5-.4 4.6-1.5 5-5Z" />
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-13 0 9-5 14-13 14a7 7 0 0 1-1-1Z" />
      <path d="M5 19C8 14 11 11 16 9" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 5 5l1.5-2 4.5 1.5V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-10a6.5 6.5 0 0 1 13 0c0 4.5-6.5 10-6.5 10Z" />
      <circle cx="12" cy="11" r="2.3" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  facebook: (
    <path d="M14 8.5h2.2V5.3c-.4-.05-1.6-.18-3-.18-3 0-5 1.83-5 5.19V13H5.5v3.4H8.2V24h3.5v-7.6h2.7l.4-3.4h-3.1v-2.18c0-1 .27-1.66 1.7-1.66Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V17M8 7.6v.01M12 17v-3.4c0-1.3.8-2.2 2-2.2s2 .9 2 2.2V17" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  /** Set true for solid (filled) glyphs like social marks and heart. */
  filled?: boolean;
}

const FILLED = new Set<IconName>(["facebook"]);

export function Icon({ name, filled, ...props }: IconProps) {
  const solid = filled ?? FILLED.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
