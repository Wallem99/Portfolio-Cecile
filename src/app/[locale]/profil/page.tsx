import Image from "next/image";
import {
  Download,
  Cpu,
  Languages as LanguagesIcon,
  Heart,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, t } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { profilePage } from "@/content/ui";
import { identity, parcours, values } from "@/content/profile";
import {
  education,
  experiences,
  competencies,
  software,
  languages,
  interests,
  engagements,
  birth,
} from "@/content/cv";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCard from "@/components/AnimatedCard";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/profil">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  return { title: t(profilePage.title, locale) };
}

export default async function ProfilPage({
  params,
}: PageProps<"/[locale]/profil">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <>
      <section className="bg-gradient-to-br from-peach-100 via-peach-50 to-lilac-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 md:flex-row md:text-left">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="/images/portraits/front-camera.webp"
              alt={identity.firstName}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {identity.firstName} {identity.lastName}
            </h1>
            <p className="mt-1 text-lg font-semibold text-ink-700">
              {t(identity.role, locale)}
            </p>
            <p className="mt-1 text-sm text-ink-500">{t(birth, locale)}</p>
            <a
              href="/api/cv"
              download
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors hover:bg-orange-600"
            >
              <Download size={16} />
              {t(profilePage.downloadCv, locale)}
            </a>
          </div>
        </div>
      </section>

      {/* BIO — text + quick-facts card, using the full section width */}
      <FadeInSection className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.7fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-ink-900">
              {t(profilePage.bioTitle, locale)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              {t(parcours, locale)}
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-peach-50 p-6">
            <QuickFact icon={<Calendar size={17} />} text={t(birth, locale)} />
            <QuickFact icon={<MapPin size={17} />} text={t(identity.address, locale)} />
            <QuickFact icon={<Mail size={17} />} text={identity.email} />
            <QuickFact
              icon={<LanguagesIcon size={17} />}
              text={languages.map((l) => t(l.name, locale)).join(" · ")}
            />
          </div>
        </div>
      </FadeInSection>

      {/* EXPERIENCE — full-width card grid instead of a narrow single column */}
      <FadeInSection className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-ink-900">
          {t(profilePage.experienceTitle, locale)}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <AnimatedCard
              key={exp.company + exp.period.fr}
              index={i}
              className="flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Briefcase size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                    {t(exp.period, locale)}
                  </p>
                  <h3 className="font-heading text-base font-bold text-ink-900">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-ink-500">
                    {t(exp.role, locale)} · {t(exp.location, locale)}
                  </p>
                </div>
              </div>
              <p className="mb-1 mt-4 text-xs font-bold uppercase tracking-wide text-ink-300">
                {t(profilePage.tasksLabel, locale)}
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ink-700">
                {exp.tasks.map((task) => (
                  <li key={t(task, locale)}>{t(task, locale)}</li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </FadeInSection>

      {/* EDUCATION — same full-width card treatment */}
      <FadeInSection className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-ink-900">
          {t(profilePage.educationTitle, locale)}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <AnimatedCard
              key={edu.school + edu.years}
              index={i}
              className="flex items-start gap-3 rounded-3xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lilac-100 text-ink-900">
                <GraduationCap size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                  {edu.years}
                </p>
                <h3 className="font-heading text-base font-bold text-ink-900">
                  {t(edu.degree, locale)}
                </h3>
                <p className="text-sm font-medium text-ink-500">
                  {edu.school} · {t(edu.location, locale)}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          <InfoCard
            icon={<Cpu size={20} />}
            title={t(profilePage.competenciesTitle, locale)}
          >
            <ul className="flex flex-wrap gap-2">
              {competencies.map((c) => (
                <Pill key={t(c, locale)}>{t(c, locale)}</Pill>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={<Cpu size={20} />}
            title={t(profilePage.softwareTitle, locale)}
          >
            <ul className="flex flex-wrap gap-2">
              {software.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={<LanguagesIcon size={20} />}
            title={t(profilePage.languagesTitle, locale)}
          >
            <ul className="flex flex-col gap-2 text-sm text-ink-500">
              {languages.map((l) => (
                <li key={t(l.name, locale)}>
                  <span className="font-semibold text-ink-900">
                    {t(l.name, locale)}
                  </span>{" "}
                  — {t(l.level, locale)}
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={<Heart size={20} />}
            title={t(profilePage.interestsTitle, locale)}
          >
            <ul className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <Pill key={t(i, locale)}>{t(i, locale)}</Pill>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={<Heart size={20} />}
            title={t(profilePage.engagementsTitle, locale)}
          >
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-ink-500">
              {engagements.map((e) => (
                <li key={t(e, locale)}>{t(e, locale)}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </FadeInSection>

      <FadeInSection className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-ink-900">
          {t(profilePage.valuesTitle, locale)}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <AnimatedCard
              key={t(v.title, locale)}
              index={i}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              <p className="font-heading text-base font-bold text-orange-600">
                {t(v.title, locale)}
              </p>
              <p className="mt-2 text-sm text-ink-500">
                {t(v.description, locale)}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </FadeInSection>
    </>
  );
}

function QuickFact({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2.5 text-sm text-ink-700">
      <span className="mt-0.5 shrink-0 text-orange-600">{icon}</span>
      {text}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-ink-900">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-peach-100 text-orange-600">
          {icon}
        </span>
        <h3 className="font-heading text-base font-bold">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-peach-100 px-3 py-1.5 text-xs font-semibold text-ink-700">
      {children}
    </li>
  );
}
