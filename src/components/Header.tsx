"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/content/types";
import { t, localeHref } from "@/lib/i18n";
import { nav } from "@/content/ui";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: localeHref(locale, "/"), label: t(nav.home, locale) },
    { href: localeHref(locale, "/profil"), label: t(nav.profile, locale) },
    { href: localeHref(locale, "/projets"), label: t(nav.projects, locale) },
    { href: localeHref(locale, "/contact"), label: t(nav.contact, locale) },
  ];

  function isActive(href: string) {
    if (href === localeHref(locale, "/")) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href={localeHref(locale, "/")}
          className="focus-ring rounded font-heading text-lg font-extrabold tracking-tight text-ink-900"
        >
          Cécile Claude
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-orange-600"
                  : "text-ink-700 hover:text-orange-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher locale={locale} />
          <Link
            href={localeHref(locale, "/contact")}
            className="focus-ring rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors hover:bg-orange-600"
          >
            {t(nav.contactCta, locale)}
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring rounded-full border border-border p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-cream px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`focus-ring rounded-lg px-2 py-2.5 text-base font-semibold ${
                  isActive(link.href) ? "text-orange-600" : "text-ink-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LocaleSwitcher locale={locale} />
            <Link
              href={localeHref(locale, "/contact")}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t(nav.contactCta, locale)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
