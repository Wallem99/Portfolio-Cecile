"use client";

import { useState } from "react";
import { motion, animate } from "motion/react";
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
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  function start() {
    if (started || !match) return;
    setStarted(true);
    animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
  }

  return (
    <motion.div
      onViewportEnter={start}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center text-center"
    >
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
    </motion.div>
  );
}
