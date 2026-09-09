"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n";
import { projectsPage } from "@/content/ui";
import ProjectCard from "@/components/ProjectCard";

type Filter = "all" | "social" | "design";

export default function ProjectsGrid({
  projects,
  locale,
}: {
  projects: Project[];
  locale: Locale;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t(projectsPage.filterAll, locale) },
    { key: "social", label: t(projectsPage.filterSocial, locale) },
    { key: "design", label: t(projectsPage.filterDesign, locale) },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f.key
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-border bg-white text-ink-700 hover:border-orange-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}
