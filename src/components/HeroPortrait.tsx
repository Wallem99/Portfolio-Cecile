"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function HeroPortrait({
  src,
  alt,
  children,
  aspect = "481/616",
  decorative = true,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  /** CSS aspect-ratio value matching the source cutout, e.g. "578/701". */
  aspect?: string;
  /** Set to false to skip the orbiting rings (kept for secondary, smaller portraits). */
  decorative?: boolean;
}) {
  return (
    <div
      className="relative mx-auto w-full max-w-sm"
      style={{ aspectRatio: aspect }}
    >
      {/* Soft glowing blobs behind the cutout, pulsing continuously. */}
      <motion.span
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-6 h-40 w-40 rounded-full bg-orange-400/40 blur-3xl sm:h-56 sm:w-56"
      />
      <motion.span
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-lilac-200/70 blur-3xl sm:h-60 sm:w-60"
      />

      {/* Orbiting decorative rings/dots for extra motion. */}
      {decorative && (
        <>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-[-10%] hidden sm:block"
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400" />
            <span className="absolute bottom-4 left-0 h-2.5 w-2.5 rounded-full border-2 border-ink-900" />
          </motion.span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-[-6%] hidden sm:block"
          >
            <span className="absolute right-2 top-1/3 h-2 w-2 rounded-full bg-orange-300" />
          </motion.span>
        </>
      )}

      {/* The cutout itself: no frame, just a soft drop-shadow, gently bobbing. */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
        style={{ filter: "drop-shadow(0 30px 40px rgba(22, 32, 91, 0.25))" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-contain object-bottom"
        />
      </motion.div>

      {children}
    </div>
  );
}
