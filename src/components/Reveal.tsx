import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  as?: "div" | "li" | "section" | "article";
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  className?: string;
};

/**
 * Fades content up the first time it scrolls into view. Elements that are
 * hidden when the observer runs (a filtered-out gallery tile, say) simply
 * reveal later, when they are shown.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
