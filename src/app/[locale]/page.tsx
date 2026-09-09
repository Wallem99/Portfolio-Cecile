import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Megaphone,
  PenTool,
  CheckCircle2,
  Briefcase,
  Building2,
  Image as ImageIcon,
} from "lucide-react";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { t, localeHref } from "@/lib/i18n";
import { home } from "@/content/ui";
import {
  identity,
  heroBio,
  ccma,
  methodIntro,
  stats,
  contributionIntro,
  approach,
  vision,
} from "@/content/profile";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import FloatingBadge from "@/components/FloatingBadge";
import LogosMarquee from "@/components/LogosMarquee";
import HeroPortrait from "@/components/HeroPortrait";
import AnimatedStat from "@/components/AnimatedStat";
import FadeInSection from "@/components/FadeInSection";

const STAT_ICONS = [
  <Briefcase key="briefcase" size={18} />,
  <Building2 key="building" size={18} />,
  <ImageIcon key="image" size={18} />,
];

const clientLogos = [
  { slug: "jogoo-agriculture", name: "Jogoo Agriculture" },
  { slug: "jus-delice", name: "Jus Délice" },
  { slug: "yoomee-cameroun", name: "Yoomee" },
  { slug: "atelier-black-giraffe", name: "Atelier Black Giraffe" },
  { slug: "biserv-cameroon", name: "Biserv Cameroon" },
  { slug: "safvis-sa", name: "Safvis SA" },
];

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const recentProjects = projects.filter((p) => p.imageCount > 0).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-peach-100 via-peach-50 to-lilac-100">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-heading text-lg font-semibold text-orange-600">
              {t(home.heroGreeting, locale)}
            </p>
            <h1 className="mt-2 font-heading text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
              {identity.firstName}
            </h1>
            <p className="mt-3 text-lg font-semibold text-ink-700">
              {t(identity.role, locale)}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              {t(heroBio, locale)}
            </p>
            <Link
              href={localeHref(locale, "/contact")}
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600"
            >
              {t(home.heroCta, locale)}
              <ArrowRight size={16} />
            </Link>
          </div>

          <HeroPortrait
            src="/images/portraits/hero.webp"
            alt={identity.firstName}
            aspect="1086/1448"
          >
            <FloatingBadge
              className="-left-4 top-4 hidden sm:flex"
              delay={0.1}
              floatRange={12}
              duration={3.2}
            >
              <Sparkles size={16} className="text-orange-500" />
              {t(home.badgeMaster, locale)}
            </FloatingBadge>
            <FloatingBadge
              className="-right-6 top-1/2 hidden sm:flex"
              delay={0.4}
              floatRange={14}
              duration={4}
              rotate={-4}
            >
              <Megaphone size={16} className="text-orange-500" />
              {t(home.badgeRole, locale)}
            </FloatingBadge>
            <FloatingBadge
              className="-bottom-2 left-2 flex"
              delay={0.7}
              floatRange={10}
              duration={3.6}
            >
              <PenTool size={16} className="text-orange-500" />
              {t(home.badgeBrands, locale)}
            </FloatingBadge>
          </HeroPortrait>
        </div>
      </section>

      {/* CLIENTS BAND */}
      <section className="border-y border-border bg-white">
        <LogosMarquee logos={clientLogos} />
      </section>

      {/* SERVICES */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="order-2 flex flex-col gap-4 md:order-1">
          <ServiceCard
            icon={<Megaphone size={22} />}
            title={t(home.service1Title, locale)}
            text={t(home.service1Text, locale)}
            highlighted
          />
          <ServiceCard
            icon={<PenTool size={22} />}
            title={t(home.service2Title, locale)}
            text={t(home.service2Text, locale)}
          />
          <ServiceCard
            icon={<Sparkles size={22} />}
            title={t(home.service3Title, locale)}
            text={t(home.service3Text, locale)}
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
            {t(home.servicesEyebrow, locale)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t(home.servicesTitle, locale)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            {t(home.servicesText, locale)}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              home.servicesHighlight1,
              home.servicesHighlight2,
              home.servicesHighlight3,
            ].map((highlight) => (
              <li
                key={t(highlight, locale)}
                className="flex items-center gap-2.5 text-sm font-medium text-ink-700"
              >
                <CheckCircle2 size={18} className="shrink-0 text-orange-500" />
                {t(highlight, locale)}
              </li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, "/profil")}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors hover:bg-orange-600"
          >
            {t(home.cvCta, locale)}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* METHOD (CCMA) */}
      <section className="bg-lilac-100/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              {t(home.methodEyebrow, locale)}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {t(home.methodTitle, locale)}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
              {t(methodIntro, locale)}
            </p>
            <ol className="mt-6 flex flex-col gap-4">
              {ccma.map((step, i) => (
                <li key={step.letter + i} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-heading text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-ink-900">
                      {t(step.title, locale)}
                    </p>
                    <p className="text-sm text-ink-500">
                      {t(step.description, locale)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <HeroPortrait
            src="/images/portraits/side-camera.webp"
            alt={identity.firstName}
            aspect="578/701"
            decorative={false}
          >
            <FloatingBadge
              className="-bottom-3 -left-4 flex sm:flex"
              delay={0.2}
              floatRange={10}
              duration={3.8}
            >
              <Sparkles size={16} className="text-orange-500" />
              {t(home.methodBadge, locale)}
            </FloatingBadge>
          </HeroPortrait>
        </div>
      </section>

      {/* STATS / CONTRIBUTION */}
      <FadeInSection className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center gap-8 rounded-3xl border border-border bg-gradient-to-br from-white to-peach-50 p-8 shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <AnimatedStat
                key={s.value}
                value={s.value}
                label={t(s.label, locale)}
                icon={STAT_ICONS[i]}
              />
            ))}
          </div>
          <div className="h-px bg-border" />
          <p className="text-center text-sm leading-relaxed text-ink-500">
            {t(vision, locale)}
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t(home.contributionTitle, locale)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            {t(home.contributionText, locale)}
          </p>
          <p className="mt-4 text-sm font-semibold text-ink-900">
            {t(contributionIntro, locale)}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {approach.map((step) => (
              <li
                key={t(step.title, locale)}
                className="flex items-start gap-2.5 text-sm text-ink-700"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-orange-500" />
                {t(step.title, locale)}
              </li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, "/profil")}
            className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
          >
            {t(home.contributionCta, locale)}
            <ArrowRight size={16} />
          </Link>
        </div>
      </FadeInSection>

      {/* RECENT PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {t(home.recentTitle, locale)}
          </h2>
          <Link
            href={localeHref(locale, "/projets")}
            className="focus-ring flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            {t(home.recentCta, locale)}
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink-900 py-20 text-white">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/20" />
        <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-lilac-200/10" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            {t(home.ctaTitle, locale)}
          </h2>
          <p className="mt-4 text-white/70">{t(home.ctaText, locale)}</p>
          <Link
            href={localeHref(locale, "/contact")}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition-colors hover:bg-orange-600"
          >
            {t(home.ctaButton, locale)}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  text,
  highlighted = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-transform hover:-translate-y-0.5 ${
        highlighted
          ? "border-orange-300 bg-gradient-to-br from-orange-50 to-peach-100"
          : "border-border bg-white"
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
        {icon}
      </span>
      <div>
        <p className="font-heading text-base font-bold text-ink-900">
          {title}
        </p>
        <p className="mt-1 text-sm text-ink-500">{text}</p>
      </div>
    </div>
  );
}
