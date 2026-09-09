import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { isLocale, t } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { servicesPage } from "@/content/ui";
import { services } from "@/content/services";
import { identity } from "@/content/profile";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCard from "@/components/AnimatedCard";

function whatsappHref(message: string) {
  const digits = identity.phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  return { title: t(servicesPage.title, locale) };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const whatsappMessage = t(servicesPage.whatsappMessage, locale);

  return (
    <>
      <section className="bg-gradient-to-br from-peach-100 via-peach-50 to-lilac-100">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
            {t(servicesPage.eyebrow, locale)}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t(servicesPage.title, locale)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            {t(servicesPage.subtitle, locale)}
          </p>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1fb959]"
          >
            <MessageCircle size={18} />
            {t(servicesPage.whatsappCta, locale)}
          </a>
        </div>
      </section>

      <FadeInSection className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedCard
              key={service.slug}
              index={i}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={service.image}
                  alt={t(service.title, locale)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-lg font-bold text-ink-900">
                  {t(service.title, locale)}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {t(service.tagline, locale)}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.items.map((item) => (
                    <li
                      key={t(item, locale)}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-orange-500"
                      />
                      {t(item, locale)}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(
                    t(servicesPage.whatsappServiceMessage, locale).replace(
                      "{service}",
                      t(service.title, locale)
                    )
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#25D366]/30 transition-colors hover:bg-[#1fb959]"
                >
                  <MessageCircle size={16} />
                  {t(servicesPage.whatsappServiceCta, locale)}
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="border-t border-border bg-white py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
            {t(servicesPage.ctaTitle, locale)}
          </h2>
          <p className="text-base text-ink-500">{t(servicesPage.ctaText, locale)}</p>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1fb959]"
          >
            <MessageCircle size={18} />
            {t(servicesPage.whatsappCta, locale)}
          </a>
        </div>
      </FadeInSection>
    </>
  );
}
