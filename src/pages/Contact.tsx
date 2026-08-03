import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceAreas, site, whatsappConfigured } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title={`Get a quote for plumbing work in ${site.city}`}
        lead={`WhatsApp is the fastest way to reach us. Send a photo of the space, a rough idea of what you want, and your area — we'll come back with honest advice and next steps.`}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">
              WhatsApp
            </h2>
            <p className="mt-4 font-display text-2xl text-navy">
              {whatsappConfigured ? "Message us any time" : "WhatsApp number coming soon"}
            </p>
            {!whatsappConfigured && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The live number is being set up. The button below already works once
                the client's number is added to the site configuration.
              </p>
            )}
            <WhatsAppButton className="mt-6" size="lg" />
          </div>

          <div className="grid gap-6">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">
                Where we work
              </h2>
              <address className="mt-4 space-y-1.5 text-sm not-italic text-muted-foreground">
                <p className="font-medium text-navy">{site.name}</p>
                <p>
                  {site.city}, {site.country}
                </p>
              </address>
              <p className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                Covering {serviceAreas.join(", ")}.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">
                Hours
              </h2>
              <p className="mt-4 text-sm text-navy">{site.hours}</p>
              <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                Messages outside these hours are answered first thing the next
                working day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Before you message"
          title="Questions we're asked most"
        />
        <FAQ />
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </Section>
    </>
  );
}
