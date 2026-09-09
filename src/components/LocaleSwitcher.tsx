"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { locales } from "@/lib/i18n";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-white/70 p-1 text-xs font-semibold">
      {locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`focus-ring rounded-full px-2.5 py-1 uppercase transition-colors ${
            l === locale
              ? "bg-ink-900 text-white"
              : "text-ink-500 hover:text-ink-900"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
