import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { offer, serviceAreas, site } from "@/data/site";

const VALUES = [
  {
    title: "Engineering first",
    body: "Falls, pressures, gradients, routing and waterproofing are designed, not improvised. It's why our drains keep running and our finishes hold.",
  },
  {
    title: "Straight talk on cost",
    body: "We'll tell you where money is worth spending and where it isn't. Quotes are itemised in USD and variations approved in writing.",
  },
  {
    title: "Respect for your space",
    body: "Floors protected, dust contained, site swept daily. Most of our work happens in occupied homes and trading premises.",
  },
  {
    title: "Local and accountable",
    body: `${site.yearsExperience}+ years working across ${site.city} — ${serviceAreas.slice(0, 4).join(", ")} and beyond. You can see our work, and you reach a real person, not a call centre.`,
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow={`About · ${site.yearsExperience}+ years in ${site.city}`}
        title={`${site.yearsExperience} years of plumbing in ${site.city}, done the hard way round`}
        lead={`${site.name} exists because too much plumbing in ${site.city} is finished to a standard nobody would accept if they could see underneath it. We work the other way round: get the system right, then make the surface look effortless. Two decades on, that's still the whole business.`}
        note={offer.reassurance}
      />

      <Section>
        <SectionHeading
          eyebrow="What we stand for"
          title="A smaller number of jobs, finished properly"
        />
        <div className="measure mt-6 grid gap-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Over {site.yearsExperience} years we've laid water and sewer reticulation
            for developments, rebuilt collapsed sewer lines, hung gutters, installed
            geysers, tanks and pump systems that keep water in the taps when the
            council has none, and finished bathrooms we're happy to photograph. Homes,
            flats, schools, lodges and commercial property, all across {site.city}.
          </p>
          <p>
            Every job runs the same way: a free consultation at your property, an
            itemised written quote in USD, an agreed schedule, and a named contact who
            answers on WhatsApp. No vanishing acts, no quiet price creep, no handover
            until it's genuinely done.
          </p>
          <p>
            We would rather turn a job down than rush it. That's the whole business
            model — fewer jobs, each one finished to a standard that's still holding
            years later.
          </p>
        </div>
        <div className="mt-8">
          <WhatsAppButton size="lg" />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-8 md:grid-cols-2">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={(index % 2) * 60}>
              <h2 className="font-display text-xl text-navy">{value.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {value.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />

      <Section tone="navy" center>
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {offer.headline}
        </p>
        <h2 className="mt-5 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          See the standard for yourself — free of charge
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          Our{" "}
          <Link to="/our-work" className="text-accent underline-offset-4 hover:underline">
            gallery of completed work in {site.city}
          </Link>{" "}
          is the honest version of a testimonial. Then book a free consultation and
          judge us in person before you spend anything.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
        <p className="mt-4 text-sm text-white/60">
          No call-out fee · No obligation · {site.hours}
        </p>
      </Section>
    </>
  );
}
