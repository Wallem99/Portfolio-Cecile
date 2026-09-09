import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, t } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { projectsPage } from "@/content/ui";
import { projects } from "@/content/projects";
import ProjectsGrid from "./ProjectsGrid";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projets">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  return { title: t(projectsPage.title, locale) };
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projets">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <h1 className="font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
        {t(projectsPage.title, locale)}
      </h1>
      <p className="mt-3 max-w-xl text-base text-ink-500">
        {t(projectsPage.subtitle, locale)}
      </p>

      <div className="mt-8">
        <ProjectsGrid projects={projects} locale={locale} />
      </div>
    </section>
  );
}
