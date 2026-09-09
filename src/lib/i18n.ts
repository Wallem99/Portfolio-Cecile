import type { L, Locale } from "@/content/types";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Picks the string for the current locale from a localized field. */
export function t(field: L, locale: Locale): string {
  return field[locale] ?? field[defaultLocale];
}

/** Builds an href prefixed with the current locale, e.g. localeHref("fr", "/projets") -> "/fr/projets" */
export function localeHref(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
