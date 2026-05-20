/**
 * Shared content types for the Grandma's Love, Inc. site.
 *
 * The whole site is data-driven: pages read from the typed objects in this
 * folder rather than hard-coding copy. All factual data here is extracted from
 * the organization's existing material.
 */

export interface Program {
  slug: string;
  title: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Longer description used on detail sections. */
  description: string;
  image: string;
  imageAlt: string;
  /** Lucide-style icon key resolved by the Icon component. */
  icon: IconName;
}

export interface ImpactStat {
  value: string;
  label: string;
  detail?: string;
}

export interface Step {
  label: string;
  title: string;
  body: string;
}

export interface EventItem {
  slug: string;
  title: string;
  /** ISO date (start). */
  date: string;
  /** Human time range as published. */
  time?: string;
  venue: string;
  address: string;
  city: string;
  summary: string;
  description: string;
  image: string;
  status: "past" | "upcoming";
}

export interface PostItem {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  author: string;
  excerpt: string;
  image: string;
  /** Body as discrete paragraphs. */
  body: string[];
}

export interface DonationCampaign {
  title: string;
  description: string;
  href: string;
  /** Optional highlighted callout, e.g. "$40 = 1 family's meal". */
  highlight?: string;
  image?: string;
  featured?: boolean;
}

export interface InvolveWay {
  title: string;
  description: string;
  icon: IconName;
  image?: string;
  cta?: { label: string; href: string };
}

export type IconName =
  | "book"
  | "vending"
  | "meal"
  | "coat"
  | "cereal"
  | "lifebuoy"
  | "heart"
  | "hands"
  | "school"
  | "users"
  | "gift"
  | "sparkle"
  | "leaf"
  | "phone"
  | "mail"
  | "pin"
  | "arrow"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "calendar"
  | "check";
