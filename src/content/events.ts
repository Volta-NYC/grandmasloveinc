import type { EventItem } from "./types";

/**
 * Events published by Grandma's Love, Inc. All listed events have concluded
 * (registration closed in the source material), so they're presented as a
 * record of community gatherings rather than open registrations.
 */
export const events: EventItem[] = [
  {
    slug: "gargiulos-pizza-garden",
    title: 'Gargiulo\'s "Pizza Garden"',
    date: "2025-07-31",
    time: "6:30 PM – 9:30 PM",
    venue: "Gargiulo's",
    address: "2911 W 15th St, Brooklyn, NY 11224",
    city: "Brooklyn",
    summary:
      "A great evening out with fantastic food and more — all to benefit Grandma's Love!",
    description:
      "Bring your appetite and get ready to be part of something extraordinary! Gargiulo's hosted a benefit night for Grandma's Love, Inc. featuring an appetizer buffet, salad, a pizza station, fruit, Uncle Luigi's Ices, soda, coffee, and tea. The evening was filled with games and music — and kids got to make their own pizza!",
    image: "/images/event-pizza-garden.webp",
    status: "past",
  },
  {
    slug: "rock-for-a-cause-concert",
    title: "Rock for a Cause Concert",
    date: "2025-03-04",
    time: "Evening",
    venue: "Brooklyn Music Hall",
    address: "Ave. S, Brooklyn, NY",
    city: "Brooklyn",
    summary:
      "A charity concert featuring local bands to support childhood literacy and hunger programs.",
    description:
      "A charity concert featuring local bands, with all proceeds going to Grandma's Love, Inc. to support childhood literacy and hunger programs across our community.",
    image: "/images/event-rock.webp",
    status: "past",
  },
  {
    slug: "childrens-storytime-bonanza",
    title: "Children's Storytime Bonanza",
    date: "2025-03-04",
    time: "Afternoon",
    venue: "Grandma's Love Inc. Community Center",
    address: "Brooklyn, NY 11235",
    city: "Brooklyn",
    summary:
      "A day of reading and sharing stories with local authors — stories, fun, and free books!",
    description:
      "A joyful day of reading and sharing stories with local authors. Children received free books and took part in interactive story sessions designed to spark a love of reading.",
    image: "/images/event-storytime.webp",
    status: "past",
  },
  {
    slug: "innovative-literacy-nutrition-workshop",
    title: "Innovative Literacy & Nutrition Workshop",
    date: "2025-03-04",
    time: "Afternoon",
    venue: "Brooklyn Innovation Hub",
    address: "Brooklyn, NY 11235",
    city: "Brooklyn",
    summary:
      "A workshop for educators and volunteers on fresh approaches to literacy and nutrition.",
    description:
      "A hands-on workshop empowering educators and volunteers with innovative strategies for promoting literacy and nutrition in schools.",
    image: "/images/event-workshop.webp",
    status: "past",
  },
];
