import { serviceAreas, site } from "./site";

export type Faq = { question: string; answer: string };

const areaList = serviceAreas.join(", ");

export const faqs: Faq[] = [
  {
    question: `How much does a bathroom renovation cost in ${site.city}?`,
    answer: `A full bathroom renovation in ${site.city} varies with the size of the room, the fittings you choose and how much of the existing plumbing needs re-routing. ${site.name} quotes each bathroom individually after a site visit, and the written quote itemises labour, materials and timeline so there are no surprises. Message us on WhatsApp with a photo of your bathroom for an initial guide price.`,
  },
  {
    question: `Which areas of ${site.city} do you cover?`,
    answer: `We work across ${site.city} and surrounding suburbs, including ${areaList}. If you are just outside these areas, ask — we usually travel for larger bathroom and commercial projects.`,
  },
  {
    question: "How long does a full bathroom take?",
    answer:
      "A standard bathroom renovation typically takes one to two weeks from strip-out to final fit-off, depending on tiling scope and fitting lead times. We agree the schedule before we start, work to it, and tell you promptly if anything changes.",
  },
  {
    question: "Do you do commercial and larger plumbing work?",
    answer:
      "Yes. Alongside premium bathrooms we handle commercial and civil-engineering-grade plumbing: new installations, water storage and pump systems, hot water and solar geysers, drainage, and planned maintenance for property owners and managing agents.",
  },
  {
    question: "Will you actually turn up on the agreed day?",
    answer:
      "Yes. Reliability is the point of the business. You get a named contact, a confirmed start date, and updates on WhatsApp throughout the job. If something shifts, you hear it from us first.",
  },
  {
    question: "Can I see examples of your finished work?",
    answer:
      `Our Work gallery shows completed bathrooms, showers, tiling, tapware and pipework from real ${site.city} projects. Every photo is our own work — filter by category to see the type of job closest to yours.`,
  },
  {
    question: "Do you supply the fittings, or do I buy them?",
    answer:
      "Either. Many clients prefer us to source fittings so quality and compatibility are our responsibility; others buy their own. We'll advise on what will last and what is worth spending on before you commit.",
  },
];
