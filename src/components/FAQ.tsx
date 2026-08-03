import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="mt-10 divide-y divide-border border-y border-border">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <li key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg text-navy md:text-xl">
                  {faq.question}
                </span>
                <Plus
                  className={`mt-1 size-5 shrink-0 text-accent-ink transition-transform duration-200 ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} hidden={!open} className="pb-6">
              <p className="measure text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
