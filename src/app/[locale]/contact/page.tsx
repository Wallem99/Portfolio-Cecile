import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { isLocale, t } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { contactPage } from "@/content/ui";
import { identity } from "@/content/profile";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  return { title: t(contactPage.title, locale) };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <h1 className="font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
        {t(contactPage.title, locale)}
      </h1>
      <p className="mt-3 max-w-xl text-base text-ink-500">
        {t(contactPage.subtitle, locale)}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="flex flex-col gap-4">
          <ContactCard
            icon={<Phone size={18} />}
            label={t(contactPage.phoneLabel, locale)}
            value={identity.phone}
            href={`tel:${identity.phone.replace(/\s+/g, "")}`}
          />
          <ContactCard
            icon={<Mail size={18} />}
            label={t(contactPage.emailLabel, locale)}
            value={identity.email}
            href={`mailto:${identity.email}`}
          />
          <ContactCard
            icon={<MapPin size={18} />}
            label={t(contactPage.addressLabel, locale)}
            value={t(identity.address, locale)}
          />
          <ContactCard
            icon={<InstagramIcon size={18} />}
            label={t(contactPage.socialLabel, locale)}
            value={identity.handle}
            href="https://www.instagram.com/"
          />
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-orange-300">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peach-100 text-orange-600">
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-ink-300">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-ink-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="focus-ring block rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return content;
}
