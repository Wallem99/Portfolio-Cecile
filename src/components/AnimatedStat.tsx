"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import type { ReactNode } from "react";

export default function AnimatedStat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: ReactNode;
}) {
  // Only values starting with digits (e.g. "9+", "50") get the count-up
  // treatment. Non-numeric placeholders (e.g. "XX%", pending a real figure)
  // are rendered as-is — otherwise they'd show a stray leading "0".
  const match = value.match(/^(\d+)(.*)$/);
  const isNumeric = !!match;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Plain IntersectionObserver instead of the motion library's viewport
  // helper: on a grid of small, closely-packed elements, the library's
  // onViewportEnter was firing unreliably and the counters stayed at 0.
  // Watching the node ourselves is simpler to reason about and always fires.
  //
  // IMPORTANT: the deps here must be stable primitives, not `match` — a
  // fresh array from String.match() on every render. Depending on `match`
  // re-ran this effect on every setDisplay-triggered re-render, spawning a
  // new observer (and a new animate() call) on top of the running one,
  // which is what made the counters jitter instead of counting up cleanly.
  useEffect(() => {
    if (!isNumeric) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate(0, target, {
          duration: 1.4,
          ease: "easeOut",
          onUpdate: (v) => setDisplay(Math.round(v)),
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isNumeric, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {icon && (
        <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          {icon}
        </span>
      )}
      <p className="font-heading text-3xl font-extrabold text-orange-600 sm:text-4xl">
        {match ? (
          <>
            {display}
            {suffix}
          </>
        ) : (
          value
        )}
      </p>
      <p className="mt-1 text-xs font-medium text-ink-500">{label}</p>
    </div>
  );
}
