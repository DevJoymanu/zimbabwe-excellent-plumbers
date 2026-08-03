import { Check } from "lucide-react";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { processSteps, services } from "@/data/services";
import { site } from "@/data/site";

export default function Services() {
  return (
    <>
      <Hero
        compact
        eyebrow={`${site.city} · Services`}
        title={`Premium bathroom and plumbing services in ${site.city}`}
        lead="Everything below is delivered by the same team, to the same standard: scoped in writing, engineered underneath, finished cleanly. Bathrooms lead — broader civil and commercial plumbing follows."
      />

      <Section>
        <div className="grid gap-12">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <article className="grid gap-6 border-b border-border pb-12 md:grid-cols-[1fr_1.1fr] md:gap-12">
                <div>
                  <h2 className="text-2xl text-navy md:text-3xl">{service.title}</h2>
                  <p className="mt-3 text-base font-medium text-accent-ink">
                    {service.promise}
                  </p>
                </div>
                <div>
                  <p className="measure text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <ul className="mt-5 grid gap-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-navy">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-accent-ink"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    className="mt-6"
                    message={`Hello ${site.name}, I'd like a quote for ${service.title.toLowerCase()} in ${site.city}.`}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How a job runs"
          title="Four steps, no surprises"
          lead="The same sequence on every job, whether it's a single shower or a commercial fit-out."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60}>
              <li>
                <span className="font-display text-3xl text-accent-ink tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>

      <Section tone="navy" center>
        <h2 className="text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          Tell us what you need done.
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          One message is enough to get an honest answer on scope, timing and rough
          cost.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
      </Section>
    </>
  );
}
