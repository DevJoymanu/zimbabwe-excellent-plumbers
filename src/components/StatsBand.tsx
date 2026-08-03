import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/data/site";

const DURATION = 1400;

function useCountUp(target: number) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return { ref, value };
}

function StatItem({ value, suffix, label }: Stat) {
  const counter = useCountUp(value);

  return (
    <div ref={counter.ref} className="text-center sm:text-left">
      <div className="font-display text-4xl leading-none text-accent tabular-nums sm:text-5xl">
        {counter.value}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium tracking-wide text-white/75">
        {label}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <div className="bg-navy-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:py-14">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
