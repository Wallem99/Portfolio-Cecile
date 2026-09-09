import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import type { Locale } from "@/content/types";
import { t, localeHref } from "@/lib/i18n";
import { nav, footer } from "@/content/ui";
import { identity } from "@/content/profile";

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  const links = [
    { href: localeHref(locale, "/"), label: t(nav.home, locale) },
    { href: localeHref(locale, "/profil"), label: t(nav.profile, locale) },
    { href: localeHref(locale, "/projets"), label: t(nav.projects, locale) },
    { href: localeHref(locale, "/contact"), label: t(nav.contact, locale) },
  ];

  return (
    <footer className="border-t border-border bg-ink-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-extrabold">Cécile Claude</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            {t(identity.role, locale)}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-white/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring w-fit rounded transition-colors hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-white/80">
          <a
            href={`mailto:${identity.email}`}
            className="focus-ring flex w-fit items-center gap-2 rounded transition-colors hover:text-orange-400"
          >
            <Mail size={16} /> {identity.email}
          </a>
          <a
            href={`tel:${identity.phone.replace(/\s+/g, "")}`}
            className="focus-ring flex w-fit items-center gap-2 rounded transition-colors hover:text-orange-400"
          >
            <Phone size={16} /> {identity.phone}
          </a>
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            {t(identity.address, locale)}
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex w-fit items-center gap-2 rounded transition-colors hover:text-orange-400"
          >
            <InstagramIcon size={16} /> {identity.handle}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50 sm:px-8">
        © {year} {identity.firstName} {identity.lastName} — {t(footer.rights, locale)}
      </div>
    </footer>
  );
}
