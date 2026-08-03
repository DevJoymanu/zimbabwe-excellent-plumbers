import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceAreas, site } from "@/data/site";

const VALUES = [
  {
    title: "Engineering first",
    body: "Falls, pressures, routing and waterproofing are designed, not improvised. It's why our finishes hold.",
  },
  {
    title: "Straight talk on cost",
    body: "We'll tell you where money is worth spending and where it isn't. Quotes are itemised and variations approved in writing.",
  },
  {
    title: "Respect for your space",
    body: "Floors protected, dust contained, site swept daily. Most of our work happens in occupied homes and trading premises.",
  },
  {
    title: "Local and accountable",
    body: `We work across ${site.city} — ${serviceAreas.slice(0, 4).join(", ")} and beyond. You can see our work and reach a real person.`,
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow={`About · ${site.city}`}
        title="Plumbing built with civil-engineering discipline"
        lead={`${site.name} exists because too much plumbing in ${site.city} is finished to a standard nobody would accept if they could see underneath it. We work the other way round: get the system right, then make the surface look effortless.`}
      />

      <Section>
        <SectionHeading eyebrow="What we stand for" title="A smaller number of jobs, finished properly" />
        <div className="measure mt-6 grid gap-4 text-base leading-relaxed text-muted-foreground">
          <p>
            We specialise in premium bathrooms — the room where poor workmanship
            shows up fastest and costs the most to put right. Alongside that, we
            take on commercial and civil plumbing for property owners who need work
            that is properly engineered rather than patched.
          </p>
          <p>
            Every job runs the same way: a site visit, an itemised written quote, an
            agreed schedule, and a named contact who answers on WhatsApp. No
            vanishing acts, no quiet price creep, no handover until it's genuinely
            done.
          </p>
          <p>
            We would rather turn a job down than rush it. That's the whole business
            model — a smaller number of bathrooms, each one finished to a standard we
            are happy to photograph.
          </p>
        </div>
        <div className="mt-8">
          <WhatsAppButton />
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
        <h2 className="text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          See the standard for yourself
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          Our{" "}
          <Link to="/our-work" className="text-accent underline-offset-4 hover:underline">
            gallery of finished bathrooms in {site.city}
          </Link>{" "}
          is the honest version of a testimonial.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
      </Section>
    </>
  );
}
