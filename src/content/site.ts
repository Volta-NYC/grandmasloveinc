import type { ImpactStat } from "./types";

/**
 * Core organization profile, contact details, and navigation.
 * All values are drawn from Grandma's Love, Inc. published material.
 */
export const site = {
  name: "Grandma's Love, Inc.",
  shortName: "Grandma's Love",
  legal: "501(c)(3) nonprofit organization",
  ein: undefined as string | undefined, // not published in source material
  founded: 2015,
  founder: "Theresa Monforte-Caraballo",
  foundedPlace: "Bay Ridge, Brooklyn",
  tagline: "Nourishing Bodies, Feeding Minds",
  /** Brand line taken from the organization's logo. */
  brandLine:
    "Empowering children by combating childhood hunger and promoting literacy.",
  description:
    "A Brooklyn-based 501(c)(3) nonprofit dedicated to fighting childhood hunger and promoting literacy in underserved New York City communities.",
  url: "https://www.grandmasloveinc.org",

  contact: {
    phone: "347-662-6230",
    phoneHref: "tel:+13476626230",
    email: "info@grandmasloveinc.org",
    addressLines: ["261 68th Street, Ground Floor", "Brooklyn, NY 11220"],
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=261+68th+Street+Brooklyn+NY+11220",
  },

  social: {
    facebook: "https://www.facebook.com/grandmasloveinc2015",
    instagram: "https://www.instagram.com/grandmasloveinc",
    linkedin: "https://www.linkedin.com/company/15453173",
  },

  /** Primary donation link reused across the site for top-level CTAs. */
  donateHref:
    "https://www.zeffy.com/en-US/donation-form/be-a-difference-maker-for-grandmas-love",
} as const;

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Volunteer", href: "/get-involved" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

/** The four impact pillars highlighted on the About page. */
export const impactStats: ImpactStat[] = [
  {
    value: "15,000+",
    label: "Meals a year",
    detail: "Nutritious food provided to local families annually.",
  },
  {
    value: "10,000+",
    label: "Books gifted",
    detail: "Books for children to keep, treasure, and grow with.",
  },
  {
    value: "5,000+",
    label: "Grocery bags",
    detail: "Bags of groceries delivered to families since 2015.",
  },
  {
    value: "2015",
    label: "Serving since",
    detail: "Founded in Bay Ridge, Brooklyn, and growing ever since.",
  },
];

export const missionStatements = {
  mission:
    "Grandma's Love, Inc. mobilizes communities, individuals, and resources to ensure children at risk of hunger are provided with enough food and books to grow into healthy, happy, and active children — emotionally, physically, and educationally.",
  vision:
    "Every school-aged child needs proper nourishment to learn and grow. We strive to ensure children and their families do not go hungry over the weekends and non-school weeks, working alongside individuals and organizations within the communities we serve and beyond. We also empower children with literacy materials to enhance their reading and comprehension skills for a successful future.",
};
