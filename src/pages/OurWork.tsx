import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import StatsBand from "@/components/StatsBand";
import WhatsAppButton from "@/components/WhatsAppButton";
import { offer, site } from "@/data/site";

export default function OurWork() {
  return (
    <>
      <Hero
        compact
        eyebrow={`${site.city} · Our work`}
        title={`Completed plumbing projects in ${site.city}`}
        lead="Real jobs, photographed as handed over — bathrooms, sanitaryware, showers, solar geysers, tanks and pump systems. Filter by the type of work closest to yours, and click any image to view it full size."
        note={offer.reassurance}
      />

      <Section>
        <Gallery />
        <div className="mt-12">
          <WhatsAppButton size="lg" />
        </div>
      </Section>

      <StatsBand />

      <Section tone="navy" center>
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {offer.headline}
        </p>
        <h2 className="mt-5 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          Want your job finished to this standard?
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          Send a photo of your space on WhatsApp. We'll tell you what's possible and
          book a free consultation — no call-out fee, no obligation.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
      </Section>
    </>
  );
}
