"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function FloatingBadge({
  children,
  className = "",
  delay = 0,
  floatRange = 10,
  duration = 3.5,
  rotate = 3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How far (px) the badge drifts up/down while idling. */
  floatRange?: number;
  /** Seconds for one full float cycle. */
  duration?: number;
  /** Degrees of gentle rotation while idling. */
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatRange, 0, floatRange * 0.5, 0],
        rotate: [0, rotate, 0, -rotate, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={{ scale: 1.08, rotate: 0 }}
      className={`absolute flex items-center gap-2 rounded-2xl border border-border bg-white/95 px-4 py-2.5 text-xs font-semibold text-ink-900 shadow-lg shadow-orange-900/15 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
