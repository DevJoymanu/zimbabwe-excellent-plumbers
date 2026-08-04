import { Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  /** Background photograph; omit for the shorter inner-page variant. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Short proof points sitting between the lead and the CTA. */
  bullets?: string[];
  note?: string;
  whatsappMessage?: string;
  compact?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  lead,
  image,
  bullets,
  note,
  whatsappMessage,
  compact = false,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      {image && (
        <>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            // React 18 only forwards this attribute spelled lowercase; the
            // camelCase prop is React 19+ and gets dropped with a warning.
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div aria-hidden="true" className="scrim absolute inset-0" />
        </>
      )}

      <div
        className={`relative mx-auto max-w-6xl px-6 ${
          compact ? "py-16 md:py-24" : "py-24 md:py-36"
        }`}
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl text-white md:text-5xl lg:text-6xl">{title}</h1>
          <p className="measure mt-6 text-lg leading-relaxed text-white/85">{lead}</p>

          {bullets && (
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-sm font-medium text-white/85"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9">
            <WhatsAppButton size="lg" message={whatsappMessage} />
            {note && <p className="mt-3 text-sm text-white/65">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
