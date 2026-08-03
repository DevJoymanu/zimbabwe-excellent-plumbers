import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBathroom from "@/assets/img/hero-bathroom.jpg";
import { featuredWork } from "@/data/gallery";
import { services } from "@/data/services";
import { serviceAreas, site } from "@/data/site";

const PROBLEMS = [
  "No-shows and jobs left half-finished",
  "Leaks that appear months after handover",
  "Quotes that quietly grow once work starts",
  "Finishes that look fine until you look closely",
];

const APPROACH = [
  {
    title: "Scoped before we start",
    body: "A site visit, then a written, itemised quote. You know the price, the sequence and the finish date before anyone lifts a tool.",
  },
  {
    title: "Built to last, not to pass a glance",
    body: "Correct falls, proper waterproofing, pressure-tested joints. The parts you'll never see are the ones we're most careful with.",
  },
  {
    title: "We turn up — and we update you",
    body: "A named contact, a confirmed start date and progress updates on WhatsApp. If a lead time slips, you hear it from us first.",
  },
];

const PILLARS = [
  {
    title: "Transparent quoting",
    body: "Itemised labour and materials, agreed before work starts. Variations are priced and approved in writing — never sprung on you at the end.",
  },
  {
    title: "Professional on site",
    body: "Protected floors, contained dust, tools packed away and the site swept daily. Occupied homes are treated as homes, not building sites.",
  },
  {
    title: "Finished properly",
    body: "Pressure-tested, sealed, cleaned and walked through with you before we invoice. Snags get fixed, not argued about.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={`${site.city} · Premium bathrooms & plumbing`}
        title={`A bathroom you'll be proud of — built right, first time, in ${site.city}.`}
        lead="Civil-engineering-grade plumbing behind a finish that looks considered. We agree the scope in writing, arrive when we say we will, and hand back a clean, working bathroom — not a list of excuses."
        note="No-pressure quote. Send a photo of your bathroom to start."
        whatsappMessage={`Hello ${site.name}, I'd like a quote for a bathroom in ${site.city}.`}
        image={{
          src: heroBathroom,
          alt: `Premium finished bathroom with walk-in shower and stone tiling in ${site.city}`,
          width: 1920,
          height: 1280,
        }}
      />

      <StatsBand />

      <Section>
        <SectionHeading
          eyebrow="Recent work"
          title={`Finished bathrooms across ${site.city}`}
          lead="The proof is in the finish. Here's a sample of recent projects — tiling, showers, fittings and the pipework underneath."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featuredWork.map((item, index) => (
            <Reveal as="li" key={item.src} delay={index * 60}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/our-work"
            className="text-sm font-semibold text-accent-ink underline-offset-4 hover:underline"
          >
            See the full Our Work gallery
          </Link>
          <WhatsAppButton />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="The problem"
          title="Most bad bathrooms aren't a taste problem. They're a workmanship problem."
          lead="Tiles that don't line up. A shower that pools in the wrong corner. A trade that starts strong, disappears for a fortnight, then asks for more money. If you've had that once, you're right to be cautious about who you let back in."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <li
              key={problem}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
            >
              {problem}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="Engineered underneath. Considered on the surface."
          lead="We approach plumbing the way a civil engineer would: get the system right, then make it look effortless. That's why our finishes hold up."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {APPROACH.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <h3 className="font-display text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="What we do"
          title={`Bathroom and commercial plumbing services in ${site.city}`}
          lead="Premium bathrooms first, then the broader plumbing that keeps homes and business property running properly."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 60}>
              <article className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-navy">{service.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent-ink">
                  {service.promise}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton />
          <Link
            to="/services"
            className="text-sm font-semibold text-accent-ink underline-offset-4 hover:underline"
          >
            See full service details
          </Link>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          onDark
          eyebrow="Is premium worth it?"
          title="You're paying for the parts you can't see."
          lead="Premium isn't a markup on the same job. It's correct waterproofing, sound pipe routing, level setting-out and fittings chosen to survive daily use — the difference between a bathroom that still looks new in five years and one that needs redoing."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title}>
              <h3 className="font-display text-xl text-white">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title={`Serving homes and businesses across ${site.city}`}
          lead={`We work throughout ${site.city} and the surrounding suburbs. If your area isn't listed, ask — we regularly travel for larger bathroom and commercial projects.`}
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-navy"
            >
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Questions, answered"
          title={`Common questions about bathrooms and plumbing in ${site.city}`}
        />
        <FAQ />
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>

      <Section tone="navy" center>
        <h2 className="text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          Ready for a bathroom that's actually finished properly?
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          Send us a photo and a rough idea of what you want. We'll come back with
          honest advice and a clear price — no pressure either way.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
      </Section>
    </>
  );
}
