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
    title: "Bathroom renovations & fit-outs",
    promise:
      "A complete bathroom you're proud of — planned properly, finished cleanly.",
    body: "We strip a tired bathroom back to a blank room and rebuild it: layout, plumbing routes, waterproofing, tiling, fittings and final fit-off. One team, one schedule, one person you phone. Harare's water pressure and cut-offs are designed for from the start, not discovered afterwards.",
    points: [
      "Layout planning and fittings advice before anything is broken out",
      "Correct falls, waterproofing and pipe routing beneath the finish",
      "Wall and floor tiling set out to line up, corner to corner",
      "Fittings sourced locally or imported — whichever gives you better value",
      "Site left clean at the end of every working day",
    ],
  },
  {
    slug: "sanitary-fittings",
    title: "Sanitary fittings & sanitaryware",
    promise:
      "Toilets, basins, baths, showers and taps installed to sit solid for years.",
    body: "Full sanitary fittings supply and installation: water closet sets (pan, cistern and seat), close-coupled and wall-hung WCs, basins and vanities, baths, shower sets, mixers and accessories. Fitted from our supply or from yours — sealed, levelled and tested before we leave.",
    points: [
      "Water closet sets — close-coupled, wall-hung and concealed-cistern",
      "Basins, vanity units, baths and bidets",
      "Shower sets, rainheads, thermostatic and mixer valves",
      "Taps, mixers, traps, wastes and accessories",
      "Repairs and swap-outs: running cisterns, dripping taps, cracked pans",
    ],
  },
  {
    slug: "showers-wet-areas",
    title: "Showers & wet areas",
    promise:
      "A shower that drains properly, stays dry outside, and looks the part.",
    body: "Walk-in showers, glass enclosures, trays and full wet-area builds. The parts you never see — falls, membranes, brackets — are what stop leaks two years later, so that's where the care goes.",
    points: [
      "Walk-in showers, glass enclosures and shower trays",
      "Waterproof membranes and correctly set drainage falls",
      "Thermostatic and mixer valve installation",
      "Low-pressure showers boosted so they actually run",
    ],
  },
  {
    slug: "sewer-drainage",
    title: "Sewer & drainage",
    promise: "Drains that run clean — and stay running.",
    body: "Blocked or collapsed drains, broken sewer lines, soak-aways and septic systems. We find the actual cause instead of rodding the same blockage every three months, repair or re-lay the line properly, and reinstate the ground behind us.",
    points: [
      "Blocked drain clearing, rodding and high-pressure jetting",
      "Sewer line repairs, replacement and re-laying to correct gradient",
      "Manholes, gully traps, inspection chambers and vent pipes",
      "Septic tanks and soak-aways for stands off the council sewer",
      "Storm-water drainage and yard channels",
    ],
  },
  {
    slug: "water-sewer-reticulation",
    title: "Water & sewer reticulation",
    promise: "Full site reticulation, set out and laid to engineering drawings.",
    body: "Reticulation for new stands, cluster developments, flats, schools, clinics and commercial sites: trenching, laying, jointing, bedding, pressure testing and connection to the council main or your borehole. Civil-engineering discipline on the parts that get buried.",
    points: [
      "Water reticulation mains, sub-mains and stand connections",
      "Sewer reticulation laid to gradient with manholes and chambers",
      "Trenching, bedding, jointing and backfill to specification",
      "Pressure and gravity testing before anything is covered up",
      "Council water and sewer connection applications supported",
    ],
  },
  {
    slug: "geysers-hot-water",
    title: "Geysers & hot water",
    promise: "Hot water that survives load-shedding.",
    body: "Geyser installation, replacement and relocation — electric, solar and heat-pump — sized to the household rather than guessed at. Solar and timer set-ups keep hot water coming when ZESA is off; correct safety valving keeps the tank safe when it's on.",
    points: [
      "Electric, solar and heat-pump geyser supply and installation",
      "Burst geyser replacement — usually same or next working day",
      "Safety valves, vacuum breakers, thermostats and elements",
      "Solar geysers and timers to cut ZESA bills and ride out load-shedding",
      "Retrofits and relocations in occupied homes",
    ],
  },
  {
    slug: "water-tanks-pumps",
    title: "Water tank installations & pumps",
    promise: "Water in your taps on the days the council has none.",
    body: "Storage tanks, tank stands, booster pumps, pressure vessels and automatic changeover — engineered so the system runs quietly, holds pressure and doesn't cycle itself to death. The standard fix for a suburb on two days of council water a week.",
    points: [
      "Tank supply and installation — 500L to 10 000L, ground or elevated",
      "Fabricated steel tank stands, erected and plumbed in",
      "Booster pumps and pressure vessels correctly sized",
      "Automatic changeover between council, tank and borehole supply",
      "Borehole pumps, tank fill lines, float valves and filtration",
    ],
  },
  {
    slug: "gutters-rainwater",
    title: "Gutters & rainwater harvesting",
    promise: "Rain off your walls in November — and into your tank instead.",
    body: "Gutters, fascia, downpipes and rainwater harvesting. Sagging or overflowing gutters soak walls and foundations right through the rainy season; sized and set correctly they fill your tank instead and cut what you buy in.",
    points: [
      "New gutter and downpipe installation, PVC and metal",
      "Gutter repairs, re-levelling, sealing and bracket replacement",
      "Cleaning and clearing before the rains",
      "Leaf guards, first-flush diverters and filtered tank feeds",
      "Rainwater harvesting tied into your storage tank system",
    ],
  },
  {
    slug: "commercial-civil",
    title: "Commercial & civil plumbing",
    promise: "Dependable, properly engineered plumbing for business property.",
    body: "For landlords, managing agents, schools, lodges and business owners: new installations, fit-outs, reticulation, drainage and planned maintenance — scheduled around your trading or teaching hours wherever possible.",
    points: [
      "New installations and fit-outs for commercial premises",
      "Ablution blocks, kitchens and staff facilities",
      "Drainage, mains and larger civil plumbing works",
      "Planned preventative maintenance contracts and call-outs",
    ],
  },
];

/** The job sequence is genuinely ordered, so these stay numbered. */
export const processSteps = [
  {
    title: "WhatsApp us",
    body: "Send a photo and a line about the job. We reply with straight advice and book your free consultation.",
  },
  {
    title: "Free consultation",
    body: "We come to you, measure up, check the existing plumbing and talk through options. No call-out fee, no obligation.",
  },
  {
    title: "Written quote",
    body: "Itemised labour, materials and a start-to-finish schedule, priced in USD. You approve before anything begins.",
  },
  {
    title: "Build & hand over",
    body: "Daily clean-down, WhatsApp progress updates, then a walkthrough and pressure test before we invoice.",
  },
];
