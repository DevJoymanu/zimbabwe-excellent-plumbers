type Tone = "background" | "sand" | "navy";

const TONES: Record<Tone, string> = {
  background: "bg-background text-foreground",
  sand: "bg-sand text-foreground",
  navy: "bg-navy text-white",
};

type SectionProps = {
  children: React.ReactNode;
  tone?: Tone;
  center?: boolean;
  className?: string;
};

export default function Section({
  children,
  tone = "background",
  center = false,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`px-6 py-20 md:py-28 ${TONES[tone]} ${center ? "text-center" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Light type for the navy sections. */
  onDark?: boolean;
};

export function SectionHeading({ eyebrow, title, lead, onDark = false }: HeadingProps) {
  return (
    <div>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase ${
            onDark ? "text-accent" : "text-accent-ink"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl md:text-4xl lg:text-[2.75rem] ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`measure mt-5 text-lg leading-relaxed ${
            onDark ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
