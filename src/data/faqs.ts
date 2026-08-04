import { serviceAreas, site } from "./site";

export type Faq = { question: string; answer: string };

const areaList = serviceAreas.join(", ");

export const faqs: Faq[] = [
  {
    question: "Is the consultation really free?",
    answer: `Yes — genuinely free. We come to your property in ${site.city}, look at the job properly, advise you on what actually needs doing, and follow up with a written quote. No call-out fee, no deposit to book it, and no obligation to give us the work afterwards. Message us on WhatsApp and we'll find a slot, usually within a day or two.`,
  },
  {
    question: `How much does plumbing work cost in ${site.city}?`,
    answer: `It depends on the job, and anyone who quotes you over the phone without seeing it is guessing. A blocked drain, a burst geyser, a tank-and-pump set-up and a full bathroom are four very different prices. That is exactly what the free consultation is for: we see the job, then quote in writing and in USD, itemised into labour and materials so you can see where every dollar goes. Send a photo on WhatsApp and we'll give you a ballpark before we even come out.`,
  },
  {
    question: `Which areas of ${site.city} do you cover?`,
    answer: `We work across ${site.city} and surrounding areas, including ${areaList}. If you're just outside, ask anyway — we travel for larger bathroom, reticulation and commercial projects.`,
  },
  {
    question: "My drain keeps blocking every few months. Can you actually fix it?",
    answer:
      "Usually, yes. A drain that blocks repeatedly has a cause — roots, a collapsed section, a bad gradient, or a soak-away that has stopped soaking. Rodding it clears the symptom for a while. We look for the cause at the consultation and quote to fix it properly: line repair, re-laying to correct gradient, a new manhole or gully, or a rebuilt soak-away.",
  },
  {
    question: "Can you sort out water when the council supply is off?",
    answer:
      "That's one of our most common jobs. A correctly sized storage tank on a fabricated stand, a booster pump and pressure vessel, and automatic changeover between council, tank and borehole means your taps, showers and toilets keep working on the days nothing comes through the mains. We size it to your household's actual usage so you're not paying for capacity you'll never fill.",
  },
  {
    question: "My geyser has burst. How fast can you come?",
    answer:
      "Burst geysers get priority — in most cases we're there same or next working day. WhatsApp us immediately, close the geyser isolator and mains stopcock if you can, and we'll talk you through it while we're on the way. We fit electric, solar and heat-pump geysers, and we'll tell you honestly whether yours needs replacing or just an element, thermostat or valve.",
  },
  {
    question: "Do you do gutters as well as plumbing?",
    answer:
      "Yes — gutters, fascia, downpipes and rainwater harvesting. It's the same discipline as drainage: get the fall and the sizing right and water goes where you want it. Best booked before the rains, and it pairs well with a storage tank, since a roof in a Harare rainy season can fill a lot of tank for free.",
  },
  {
    question: "Do you handle full water and sewer reticulation for a new development?",
    answer:
      "Yes. We lay water and sewer reticulation for new stands, cluster developments, flats, schools, clinics and commercial sites — trenching, bedding, jointing, manholes and chambers, pressure and gravity testing, then connection to the council main or your borehole. We work to engineering drawings and we test before anything gets covered up.",
  },
  {
    question: "How long does a full bathroom take?",
    answer:
      "A standard bathroom renovation typically runs one to two weeks from strip-out to final fit-off, depending on tiling scope and how quickly fittings can be sourced. We agree the schedule before we start, work to it, and tell you promptly on WhatsApp if anything shifts.",
  },
  {
    question: "Will you actually turn up on the agreed day?",
    answer: `Yes. After ${site.yearsExperience}+ years in the trade, reliability is the whole reputation. You get a named contact, a confirmed start date, and updates on WhatsApp throughout the job. If something shifts, you hear it from us first — not after you've phoned three times.`,
  },
  {
    question: "Do you supply the fittings, or do I buy them?",
    answer:
      "Either. Many clients prefer us to source sanitaryware and fittings so quality and compatibility are our responsibility; others buy their own. We'll tell you at the consultation which brands hold up here, what's worth spending on, and where you can save without regretting it in two years.",
  },
  {
    question: "Can I see examples of your finished work?",
    answer: `Our Work gallery shows completed bathrooms, showers, sanitaryware, geysers, tanks, pumps and pipework from real ${site.city} projects. Every photo is our own work — filter by category to find the job closest to yours.`,
  },
];
