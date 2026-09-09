import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { isLocale, t, localeHref } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { projectsPage } from "@/content/ui";
import { projects, getProject, type SocialLink } from "@/content/projects";
import { locales } from "@/lib/i18n";
import Lightbox from "@/components/Lightbox";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedStat from "@/components/AnimatedStat";
import FadeInSection from "@/components/FadeInSection";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "@/components/SocialIcons";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projets/[slug]">): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: t(project.summary, locale),
  };
}

const SOCIAL_ICON: Record<SocialLink["platform"], React.ComponentType<{ size?: number }>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

const platformLabel: Record<SocialLink["platform"], string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
};

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/projets/[slug]">) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const images = Array.from({ length: project.imageCount }, (_, i) =>
    `/images/projects/${project.slug}/${String(i + 1).padStart(2, "0")}.webp`
  );

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link
        href={localeHref(locale, "/projets")}
        className="focus-ring inline-flex items-center gap-1 text-sm font-semibold text-ink-500 hover:text-orange-600"
      >
        <ArrowLeft size={16} />
        {t(projectsPage.backToProjects, locale)}
      </Link>

      <header className="mt-6 flex flex-wrap items-center gap-5">
        {project.logo && (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2.5 shadow-sm">
            <Image
              src={project.logo}
              alt={project.name}
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <div>
          <span className="rounded-full bg-peach-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
            {project.category === "social"
              ? t(projectsPage.filterSocial, locale)
              : t(projectsPage.filterDesign, locale)}
          </span>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {project.name}
          </h1>
        </div>
      </header>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
        {t(project.summary, locale)}
      </p>

      {project.socials && project.socials.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-ink-300">
            {t(projectsPage.socialsTitle, locale)}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {project.socials.map((s) => {
              const Icon = SOCIAL_ICON[s.platform];
              return (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-sm transition-colors hover:border-orange-300 hover:text-orange-600"
                >
                  <Icon size={16} />
                  {platformLabel[s.platform]}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {project.caseStudy && (
        <FadeInSection className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-peach-50 to-lilac-100/40 p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {t(projectsPage.caseStudyEyebrow, locale)}
          </p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
            {t(projectsPage.caseStudyTitle, locale)}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <AnimatedCard
              index={0}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <AlertCircle size={20} />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-rose-600">
                {t(projectsPage.problemLabel, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {t(project.caseStudy.problem, locale)}
              </p>
            </AnimatedCard>

            <AnimatedCard
              index={1}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Lightbulb size={20} />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-orange-600">
                {t(projectsPage.solutionLabel, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {t(project.caseStudy.solution, locale)}
              </p>
            </AnimatedCard>

            <AnimatedCard
              index={2}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <TrendingUp size={20} />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-emerald-600">
                {t(projectsPage.resultLabel, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {t(project.caseStudy.result, locale)}
              </p>
            </AnimatedCard>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
            {project.caseStudy.metrics.map((m) => (
              <AnimatedStat key={m.label.fr} value={m.value} label={t(m.label, locale)} />
            ))}
          </div>
        </FadeInSection>
      )}

      <div className="mt-12">
        {images.length > 0 ? (
          <>
            <h2 className="font-heading text-xl font-bold text-ink-900">
              {t(projectsPage.galleryTitle, locale)}
            </h2>
            <div className="mt-5">
              <Lightbox images={images} alt={project.name} />
            </div>
          </>
        ) : (
          <p className="rounded-2xl border border-dashed border-border bg-peach-50 p-6 text-sm text-ink-500">
            {t(projectsPage.noGallery, locale)}
          </p>
        )}
      </div>

      <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
        <Link
          href={localeHref(locale, `/projets/${prev.slug}`)}
          className="focus-ring group flex max-w-[45%] items-center gap-2 text-sm font-semibold text-ink-500 hover:text-orange-600"
        >
          <ArrowLeft size={16} className="shrink-0" />
          <span className="truncate">
            <span className="block text-xs text-ink-300">
              {t(projectsPage.prevProject, locale)}
            </span>
            {prev.name}
          </span>
        </Link>
        <Link
          href={localeHref(locale, `/projets/${next.slug}`)}
          className="focus-ring group flex max-w-[45%] items-center gap-2 text-right text-sm font-semibold text-ink-500 hover:text-orange-600"
        >
          <span className="truncate">
            <span className="block text-xs text-ink-300">
              {t(projectsPage.nextProject, locale)}
            </span>
            {next.name}
          </span>
          <ArrowRight size={16} className="shrink-0" />
        </Link>
      </nav>
    </article>
  );
}
