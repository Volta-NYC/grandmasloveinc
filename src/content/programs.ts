import type { Program, Step } from "./types";

/**
 * Programs run by Grandma's Love, Inc. Descriptions for the flagship programs
 * (Book Vending Machines, Food Distribution) are drawn directly from published
 * material; the seasonal drives are described faithfully to their titles
 * without inventing specific figures.
 */
export const programs: Program[] = [
  {
    slug: "food-distribution",
    title: "Food Distribution Programs",
    summary:
      "Discreet weekend food backpacks so no child goes hungry when school meals stop.",
    description:
      "Our Weekend Food Backpack program ensures children from food-insecure households have nutritious meals when school meals aren't available. Children are identified quietly by school social workers and parent coordinators, and families receive their food packages discreetly each week — so kids return to school on Monday ready to learn.",
    image: "/images/grass-reading.webp",
    imageAlt: "A child resting on the grass, reading a book in the sunshine",
    icon: "meal",
  },
  {
    slug: "book-vending-machines",
    title: "Book Vending Machines",
    summary:
      "Free book vending machines that let children choose books to keep and treasure.",
    description:
      "Placed in schools and community spaces in underserved neighborhoods, our book vending machines give children the joy of choosing a book to take home and keep. By making books easy and exciting to access, we nurture a lifelong love of reading and set children up for academic success.",
    image: "/images/young-reader.webp",
    imageAlt: "A young student looking thoughtfully ahead",
    icon: "book",
  },
  {
    slug: "winter-coat-giveaway",
    title: "Winter Coat Giveaway",
    summary: "Warm coats that carry local children through New York winters.",
    description:
      "When temperatures drop, our coat giveaways help keep children in our community warm and comfortable through the coldest months — one more way we look after the whole child, not just a single need.",
    image: "/images/homework-help.webp",
    imageAlt: "A young girl being helped with her homework",
    icon: "coat",
  },
  {
    slug: "cereal-drive",
    title: "Cereal Drive",
    summary: "Breakfast staples collected to start every school day fueled.",
    description:
      "Our cereal drives gather breakfast staples for families we serve, helping make sure children begin the day nourished and ready to focus, learn, and play.",
    image: "/images/child-portrait.webp",
    imageAlt: "A young child looking forward hopefully",
    icon: "cereal",
  },
  {
    slug: "emergency-assistance",
    title: "Emergency Assistance",
    summary: "Rapid help for families when an unexpected challenge arises.",
    description:
      "When a challenge arises in our community, we are there to help. Our emergency assistance meets families in moments of urgent need with food, essentials, and connection to the right resources.",
    image: "/images/children-circle.webp",
    imageAlt: "A group of children gathered in a circle, smiling",
    icon: "lifebuoy",
  },
  {
    slug: "community-connections",
    title: "Community Connections",
    summary:
      "Building bridges with schools and partners to help wherever we're needed.",
    description:
      "We work hand in hand with local schools, educators, businesses, and community leaders to identify needs and respond where it matters most — creating connections and bridges to help wherever we are needed.",
    image: "/images/students-group.webp",
    imageAlt: "A group of students together",
    icon: "users",
  },
];

/** "Why Grandma's Love feeds" — the Need / Solution / Impact story. */
export const howItWorks: Step[] = [
  {
    label: "01",
    title: "The Need",
    body: "When school dismisses on Friday afternoons, more than 16 million children across America leave their classrooms not knowing if they or their family will have food to eat over the weekend.",
  },
  {
    label: "02",
    title: "The Solution",
    body: "Children are chosen quietly by school social workers and parent coordinators. Parents are then contacted and offered our program. If accepted, our children are discreetly given their food packages each week.",
  },
  {
    label: "03",
    title: "The Impact",
    body: "Our weekend food backpacks help children return to school on Monday mornings ready to learn — with more focus and concentration, leading to grade improvement, less absenteeism, and fewer sick days.",
  },
];
