// Table of contents. Order here defines lecture numbering, the sidebar, and
// prev/next links. Each slug must have a matching src/content/<slug>.mdx.

export interface Lecture {
  slug: string;
  title: string;
  summary: string;
}

export interface Part {
  title: string;
  lectures: Lecture[];
}

export const parts: Part[] = [
  {
    title: "Foundations",
    lectures: [
      {
        slug: "introduction",
        title: "What Is Operations Research?",
        summary:
          "The modelling cycle, the core toolkit, and how the rest of these notes are organised.",
      },
    ],
  },
  {
    title: "Logistics & Supply Chain",
    lectures: [
      {
        slug: "transportation",
        title: "The Transportation Problem",
        summary:
          "Shipping goods from supply points to demand points at minimum cost, and what the dual prices tell you.",
      },
      {
        slug: "facility-location",
        title: "Facility Location",
        summary:
          "Choosing which sites to open and which customers each serves, and why two equivalent MIP formulations can differ greatly in strength.",
      },
      {
        slug: "vehicle-routing",
        title: "Vehicle Routing",
        summary:
          "Designing delivery routes for a capacitated fleet: TSP formulations, the Clarke–Wright savings heuristic, and local search.",
      },
      {
        slug: "inventory",
        title: "Inventory Management",
        summary:
          "How much to order and when: the EOQ trade-off, the newsvendor critical ratio, and safety stock under uncertain demand.",
      },
    ],
  },
  {
    title: "Services & Workforce",
    lectures: [
      {
        slug: "staff-scheduling",
        title: "Staff Scheduling",
        summary:
          "Covering staffing requirements with shifts at minimum cost: set covering, the cyclic days-off problem, and the pipeline from forecast to roster.",
      },
      {
        slug: "call-centers",
        title: "Call Centre Staffing",
        summary:
          "Sizing a call centre with the Erlang C queue, service-level targets, and the square-root staffing rule.",
      },
    ],
  },
  {
    title: "Pricing & Finance",
    lectures: [
      {
        slug: "revenue-management",
        title: "Revenue Management",
        summary:
          "Deciding how many seats to protect for high-fare demand, from Littlewood's rule to network bid prices and overbooking.",
      },
    ],
  },
];

export interface NumberedLecture extends Lecture {
  number: number;
  part: string;
}

export const lectures: NumberedLecture[] = parts.flatMap((p) => p.lectures).map(
  (l, i) => ({
    ...l,
    number: i + 1,
    part: parts.find((p) => p.lectures.includes(l))!.title,
  }),
);

export function getLecture(slug: string): NumberedLecture | undefined {
  return lectures.find((l) => l.slug === slug);
}
