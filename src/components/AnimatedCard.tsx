"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** A card that fades/slides into view on scroll, staggered by `index`. */
export default function AnimatedCard({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
