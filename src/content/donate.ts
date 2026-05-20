import type { DonationCampaign } from "./types";

export const donateIntro =
  "At Grandma's Love, Inc., we believe every child deserves the chance to thrive. In underserved communities, many children face hunger and lack access to educational resources. By supporting our mission, you help ensure children receive nutritious meals and books — fostering their physical, intellectual, and emotional growth. Every contribution, no matter the size, helps us reach more children.";

/**
 * Live donation campaigns. Links point to the organization's Zeffy donation
 * forms (Zeffy is a 100%-free fundraising platform for nonprofits).
 */
export const campaigns: DonationCampaign[] = [
  {
    title: "Be a Difference Maker",
    description:
      "Make a general gift to power every Grandma's Love program — from weekend food backpacks to book vending machines and emergency assistance.",
    href: "https://www.zeffy.com/en-US/donation-form/be-a-difference-maker-for-grandmas-love",
    highlight: "Give where it's needed most",
    featured: true,
  },
  {
    title: "2025 Thanksgiving Campaign",
    description:
      "Help a family gather around a full table this Thanksgiving. Your gift provides a complete holiday meal for neighbors facing food insecurity.",
    href: "https://www.zeffy.com/en-US/donation-form/dollar40-1-familys-thanksgiving-meal--2025",
    highlight: "$40 = 1 family's Thanksgiving meal",
  },
  {
    title: "Empower Caregivers with a Moment of Peace",
    description:
      "Help us create thoughtful gift bags for parents and caregivers of children battling cancer or other serious illnesses. Each bag includes a spiritual healing book, a soothing candle, an aromatherapy bracelet, and a warm cup with tea — a moment of peace amid daily challenges.",
    href: "https://www.zeffy.com/donation-form/empower-caregivers-with-a-moment-of-peace",
    image: "/images/qr-caregivers.png",
  },
  {
    title: "Make a Donation",
    description:
      "Prefer to give a one-time or recurring gift directly? Use our general donation form to support children and families across New York City.",
    href: "https://www.zeffy.com/en-US/donation-form/d86149cc-09d1-45a3-8fbc-2048bb0205c4",
  },
];

/** Tangible impact framing for suggested gift amounts. */
export const givingLevels = [
  { amount: "$25", impact: "A week of nutritious weekend meals for a child." },
  { amount: "$40", impact: "A full Thanksgiving meal for a family in need." },
  { amount: "$100", impact: "A stack of brand-new books for kids to keep." },
  { amount: "$250", impact: "Helps stock a school book vending machine." },
];
