export type Service = {
  slug: string;
  title: string;
  /** One-line promise, shown on both the summary card and the detail block. */
  promise: string;
  body: string;
  /** Detail bullets — only rendered on the Services page. */
  points: string[];
};

export const services: Service[] = [
  {
    slug: "bathroom-renovation",
    title: "Bathroom renovation & design",
    promise:
      "A complete bathroom you're proud of — planned properly, finished cleanly.",
    body: "We take a tired bathroom back to a blank room and rebuild it: layout, plumbing routes, waterproofing, tiling, fittings and final fit-off. One team, one schedule, one point of contact.",
    points: [
      "Layout planning and fittings advice before anything is broken out",
      "Correct falls, waterproofing and pipe routing beneath the finish",
      "Wall and floor tiling set out to line up, corner to corner",
      "Site left clean at the end of every working day",
    ],
  },
  {
    slug: "showers-wet-areas",
    title: "Showers & wet areas",
    promise:
      "A shower that drains properly, stays dry outside, and looks the part.",
    body: "Walk-in showers, enclosures, trays and full wet-area builds. The parts you never see — falls, membranes, brackets — are what stop leaks two years later, so that's where the care goes.",
    points: [
      "Walk-in showers, glass enclosures and shower trays",
      "Waterproof membranes and correctly set drainage falls",
      "Thermostatic and mixer valve installation",
    ],
  },
  {
    slug: "fittings-tapware",
    title: "Fittings, tapware & finishes",
    promise: "Quality fittings, installed so they feel solid for years.",
    body: "Basins, vanities, WCs, baths, mixers and accessories — supplied and fitted, or fitted from your own supply. We'll tell you honestly what's worth the spend.",
    points: [
      "Basins, vanities, WCs, baths and mixers",
      "Supply-and-fit or fit-only from your chosen supplier",
      "Sealed, levelled and pressure-tested before handover",
    ],
  },
  {
    slug: "hot-water-solar",
    title: "Hot water & solar geysers",
    promise: "Reliable hot water, sized correctly for the household or building.",
    body: "Geyser installation, replacement and relocation, including solar systems — sized to actual demand rather than guesswork, with safe valving and correct discharge.",
    points: [
      "Electric and solar geyser supply, install and replacement",
      "Safety valves, vacuum breakers and proper discharge routing",
      "Retrofits and relocations in occupied homes",
    ],
  },
  {
    slug: "water-storage-pumps",
    title: "Water storage & pump systems",
    promise:
      "Consistent pressure and supply, even when the mains isn't reliable.",
    body: "Tank stands, storage tanks, booster pumps, pressure vessels and switching — engineered so the system runs quietly and doesn't cycle itself to death.",
    points: [
      "Tank installation, plumbing-in and changeover valving",
      "Booster pumps and pressure vessels correctly sized",
      "Borehole and municipal supply integration",
    ],
  },
  {
    slug: "commercial-civil",
    title: "Commercial & civil plumbing",
    promise: "Dependable, properly engineered plumbing for business property.",
    body: "For landlords, managing agents and business owners: new installations, drainage, larger works and planned maintenance — scheduled around your operating hours where possible.",
    points: [
      "New installations and fit-outs for commercial premises",
      "Drainage, mains and larger civil plumbing works",
      "Planned preventative maintenance and call-outs",
    ],
  },
];

/** The job sequence is genuinely ordered, so these stay numbered. */
export const processSteps = [
  {
    title: "Message us",
    body: "Send photos and a rough brief on WhatsApp. We'll tell you straight away if it's something we do well.",
  },
  {
    title: "Site visit",
    body: "We measure, check the existing plumbing and talk through options and fittings.",
  },
  {
    title: "Written quote",
    body: "Itemised labour, materials and a start-to-finish schedule. You approve before anything begins.",
  },
  {
    title: "Build & hand over",
    body: "Daily clean-down, progress updates, then a walkthrough and pressure test before we invoice.",
  },
];
