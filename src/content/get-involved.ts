import type { InvolveWay } from "./types";

export const involveIntro =
  "Join us in creating a positive impact in the lives of children in underserved communities. Find out how your group, school, or organization can partner with Grandma's Love.";

export const involveWays: InvolveWay[] = [
  {
    title: "Volunteer",
    description:
      "We welcome individuals passionate about making a difference. Volunteers help organize food drives, assist with literacy programs, and join community outreach events.",
    icon: "hands",
    image: "/images/grass-reading.webp",
    cta: { label: "Apply to volunteer", href: "/contact" },
  },
  {
    title: "Host a Food or Book Drive",
    description:
      "Rally your school, workplace, or community group to host a food drive, book drive, or fundraising drive that directly supports local children and families.",
    icon: "gift",
    image: "/images/students-group.webp",
    cta: { label: "Start a drive", href: "/contact" },
  },
  {
    title: "Educators & Schools",
    description:
      "Teachers and administrators play a crucial role in shaping a better future. Partner with us to bring our programs and events to your school community.",
    icon: "school",
    image: "/images/homework-help.webp",
    cta: { label: "Partner with us", href: "/contact" },
  },
];

/** Quick partnership options surfaced as chips/cards. */
export const partnershipOptions = [
  "Food Drives",
  "Book Drives",
  "Fundraising Drives",
] as const;

/** Interest areas offered on the contact form. */
export const interestAreas = [
  "Volunteering",
  "School Pantry Program",
  "Author Sponsorships",
  "Literacy Program",
  "Upcoming Events",
  "Nutrition Program",
  "Students' Community Service",
  "Other",
] as const;
