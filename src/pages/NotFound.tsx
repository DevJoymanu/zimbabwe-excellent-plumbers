import { Link } from "react-router-dom";
import Section from "@/components/Section";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <Section tone="navy" center className="min-h-[60vh]">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-5 text-3xl text-white md:text-4xl">
        That page isn't here.
      </h1>
      <p className="measure mx-auto mt-5 text-lg leading-relaxed text-white/75">
        The link may be out of date. Head back to the homepage, or message us and
        we'll point you in the right direction.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Back to home
        </Link>
        <WhatsAppButton />
      </div>
    </Section>
  );
}
