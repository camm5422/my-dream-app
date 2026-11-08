export type Zone = "kids" | "students" | "pros";

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; links: NavLink[] };

/** Header menu. Groups become dropdowns on desktop and headed lists in the phone menu. */
export const navGroups: NavGroup[] = [
  {
    label: "Learn by age",
    links: [
      { href: "/kids", label: "Kids 8-11" },
      { href: "/students", label: "Students 12-15" },
      { href: "/pros", label: "Pros 16+" },
    ],
  },
  {
    label: "Explore",
    links: [
      { href: "/learn", label: "Lessons" },
      { href: "/play", label: "Play" },
      { href: "/classroom", label: "Classroom" },
    ],
  },
];

export const aboutLink: NavLink = { href: "/about", label: "About" };
export const bookLink: NavLink = { href: "/book", label: "Book a session" };

export const footerLinks: NavLink[][] = [
  [
    { href: "/learn", label: "Lessons" },
    { href: "/play", label: "Play" },
    { href: "/classroom", label: "Classroom" },
    { href: "/book", label: "Book a session" },
  ],
  [
    { href: "/about", label: "About" },
    { href: "/sources", label: "Sources" },
    { href: "/privacy", label: "Privacy" },
  ],
];

export const zones: { zone: Zone; href: string; age: string; title: string; blurb: string }[] = [
  {
    zone: "kids",
    href: "/kids",
    age: "8-11",
    title: "Kids zone",
    blurb:
      "Meet Cori and explore how electricity and power plants work through stories and cause and effect.",
  },
  {
    zone: "students",
    href: "/students",
    age: "12-15",
    title: "Students zone",
    blurb:
      "Take on game-like challenges and earn badges while learning real units, like volts and hertz.",
  },
  {
    zone: "pros",
    href: "/pros",
    age: "16+",
    title: "Pros zone",
    blurb:
      "Control-room style deep dives into instrumentation and control, IAEA and IEC standards, and regulators.",
  },
];
