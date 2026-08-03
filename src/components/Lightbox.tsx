import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

type Props = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!item) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // stop the page behind the overlay from scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/92 p-4"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo"
        className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <figure className="flex max-h-full w-full max-w-3xl flex-col gap-3">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[75vh] w-full rounded-xl object-contain"
        />
        <figcaption className="text-center text-sm text-white/80">
          {item.caption}
        </figcaption>
      </figure>
    </div>
  );
}
