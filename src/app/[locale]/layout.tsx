import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { poppins, jakarta } from "@/fonts";
import { isLocale, locales } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Cécile Claude Ngo Ntonga — Portfolio",
    template: "%s · Cécile Claude Ngo Ntonga",
  },
  description:
    "Community Manager, Designer & Copywriter à Yaoundé, Cameroun. Découvrez mon profil, mes projets et contactez-moi.",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-cream text-ink-900">
        <a
          href="#main-content"
          className="focus-ring sr-only rounded bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Aller au contenu
        </a>
        <Header locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
