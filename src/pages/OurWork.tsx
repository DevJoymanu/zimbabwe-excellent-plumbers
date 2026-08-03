import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import StatsBand from "@/components/StatsBand";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export default function OurWork() {
  return (
    <>
      <Hero
        compact
        eyebrow={`${site.city} · Our work`}
        title={`Finished bathrooms and plumbing projects in ${site.city}`}
        lead="Real jobs, photographed as handed over. Filter by the type of work closest to yours, and click any image to view it full size."
      />

      <Section>
        <Gallery />
        <div className="mt-12">
          <WhatsAppButton />
        </div>
      </Section>

      <StatsBand />

      <Section tone="navy" center>
        <h2 className="text-3xl text-white md:text-4xl lg:text-[2.75rem]">
          Want a bathroom finished to this standard?
        </h2>
        <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
          Send a photo of your space on WhatsApp and we'll tell you what's possible.
        </p>
        <div className="mt-9">
          <WhatsAppButton size="lg" />
        </div>
      </Section>
    </>
  );
}
