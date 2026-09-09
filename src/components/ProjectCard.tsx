import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Locale } from "@/content/types";
import { t, localeHref } from "@/lib/i18n";
import { projectsPage } from "@/content/ui";

export default function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const cover =
    project.imageCount > 0
      ? `/images/projects/${project.slug}/01-thumb.webp`
      : project.logo;

  return (
    <Link
      href={localeHref(locale, `/projets/${project.slug}`)}
      className="focus-ring group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-peach-100">
        {cover && (
          <Image
            src={cover}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`transition-transform duration-500 group-hover:scale-105 ${
              project.imageCount > 0 ? "object-cover" : "object-contain p-10"
            }`}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-base font-bold text-ink-900">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full bg-peach-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
            {project.category === "social"
              ? t(projectsPage.filterSocial, locale)
              : t(projectsPage.filterDesign, locale)}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-ink-500">
          {t(project.summary, locale)}
        </p>
      </div>
    </Link>
  );
}
