import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBathroom from "@/assets/img/hero-bathroom.jpg";
import { featuredWork } from "@/data/gallery";
import { services } from "@/data/services";
import { consultMessage, offer, serviceAreas, site } from "@/data/site";

const PROBLEMS = [
  "The plumber who took a deposit and never came back",
  "A drain that gets rodded every three months and blocks again",
  "Leaks and damp appearing months after handover",
  "A quote that quietly grows once the walls are open",
  "No water on the days the council supply is off",
  "Gutters overflowing down the wall every rainy season",
];

/** What the free consultation actually includes — the offer, spelled out. */
const CONSULTATION = [
  "We come to your property in Harare — no call-out fee",
  "We inspect the job properly and tell you the real cause",
  "Honest advice on what needs doing now and what can wait",
  "A written, itemised quote in USD — labour and materials separated",
  "Timeline and start date, in writing, before you commit",
  "No obligation whatsoever to give us the work",
];

const APPROACH = [
  {
    title: "Scoped before we start",
    body: "The free consultation comes first, then a written, itemised quote. You know the price, the sequence and the finish date before anyone lifts a tool.",
  },
  {
    title: "Built for Harare conditions",
    body: "Intermittent council supply, low pressure, load-shedding, a hard rainy season. We design around them — tanks, pumps, changeover, solar, correct falls — instead of pretending they don't exist.",
  },
  {
    title: "We turn up — and we update you",
    body: `${site.yearsExperience}+ years means a named contact, a confirmed start date and progress updates on WhatsApp. If a lead time slips, you hear it from us first.`,
  },
];

const PILLARS = [
  {
    title: "Transparent quoting",
    body: "Itemised labour and materials in USD, agreed before work starts. Variations are priced and approved in writing — never sprung on you at the end.",
  },
  {
    title: "Professional on site",
    body: "Protected floors, contained dust, tools packed away and the site swept daily. Occupied homes and trading premises are treated as such, not as building sites.",
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
        eyebrow={`${site.yearsExperience}+ years · Plumbing, bathrooms, drainage & water systems`}
        title={
          <>
            Plumbing in Harare, done properly the first time.{" "}
            <span className="text-accent">Your consultation is free.</span>
          </>
        }
        lead={`From blocked sewers and burst geysers to full bathrooms, tank and pump systems, gutters and site reticulation — ${site.name} has been getting it right across Harare for over ${site.yearsExperience} years. Send one WhatsApp message and we'll come and look, free of charge.`}
        bullets={[
          "Free consultation, no call-out fee",
          "Written quote in USD before we start",
          `${site.yearsExperience}+ years across Harare`,
          "WhatsApp replies in minutes, not days",
        ]}
        note={offer.reassurance}
        whatsappMessage={consultMessage("work at my property")}
        image={{
          src: heroBathroom,
          alt: `Premium finished bathroom with walk-in shower and stone tiling installed in ${site.city}`,
          width: 1920,
          height: 1280,
        }}
      />

      <StatsBand />

      {/* The offer gets its own section, high on the page, before any pitch. */}
      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our offer to you"
              title="Book a free consultation — and find out exactly what your job costs."
              lead="No call-out fee. No deposit to book. No obligation afterwards. We'd rather come and look properly than guess at a price over the phone and get it wrong — and you'd rather know what you're dealing with before you spend anything."
            />
            <div className="mt-8">
              <WhatsAppButton
                size="lg"
                message={consultMessage("a free consultation at my property")}
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Tap to open WhatsApp — the message is already written for you. Most
                consultations are booked within a day or two.
              </p>
            </div>
          </div>

          <ul className="grid gap-3">
            {CONSULTATION.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-navy"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-accent-ink"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title={`Everything plumbing, under one team in ${site.city}`}
          lead="Bathrooms and sanitary fittings, sewer and drainage, water and sewer reticulation, geysers, water tanks and pumps, and gutters — domestic and commercial. One contractor, one standard, one number to phone."
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

      <Section tone="sand">
        <SectionHeading
          eyebrow="Recent work"
          title={`Completed jobs across ${site.city}`}
          lead="The proof is in the finish. Bathrooms, showers, sanitaryware, solar geysers, tanks and pumps — all our own work, photographed as handed over."
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

      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Most plumbing problems in Harare aren't bad luck. They're bad workmanship."
          lead="If you've been let down once, you're right to be careful about who you let onto your property next. That's precisely why we look first and charge nothing for it — you get to judge us before any money changes hands."
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
        <div className="mt-10">
          <WhatsAppButton size="lg" />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How we work"
          title="Engineered underneath. Considered on the surface."
          lead={`${site.yearsExperience} years of plumbing in ${site.city} teaches you where jobs fail: the buried parts. We get the system right first, then make the finish look effortless.`}
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

      <Section tone="navy">
        <SectionHeading
          onDark
          eyebrow="Is doing it properly worth it?"
          title="You're paying for the parts you can't see."
          lead="Correct falls and waterproofing, sound pipe routing, right-sized pumps, gradients that actually drain, fittings that survive daily use. It's the difference between a job that's still right in five years and one you pay for twice. The consultation is free precisely so we can show you which one you're being offered."
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
          <WhatsAppButton size="lg" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title={`Serving homes and businesses across ${site.city}`}
          lead={`We cover ${site.city} and the surrounding areas. If your suburb isn't listed, ask anyway — we travel for larger bathroom, reticulation and commercial projects.`}
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
          title={`Common questions about plumbing in ${site.city}`}
        />
        <FAQ />
        <div className="mt-10">
          <WhatsAppButton size="lg" />
        </div>
      </Section>

      <Section tone="navy" center>
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {offer.headline}
        </p>
        <h2 className="mt-5 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          Book your free consultation on WhatsApp.
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          One message is all it takes. Send a photo and a line about the job — we'll
          reply with honest advice and arrange a time to come and look, free of
          charge.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
        <p className="mt-4 text-sm text-white/60">
          {site.hours} · {site.city} and surrounding areas · No call-out fee
        </p>
      </Section>
    </>
  );
}
