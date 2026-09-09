"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import type { Locale } from "@/content/types";
import { t } from "@/lib/i18n";
import { contactPage } from "@/content/ui";

type Status = "idle" | "sending" | "success" | "error" | "rate-limited";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setStatus("rate-limited");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it in. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t(contactPage.formName, locale)}
          name="name"
          required
        />
        <Field
          label={t(contactPage.formEmail, locale)}
          name="email"
          type="email"
          required
        />
      </div>

      <Field label={t(contactPage.formSubject, locale)} name="subject" />

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
        {t(contactPage.formMessage, locale)}
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className="focus-ring rounded-2xl border border-border bg-white px-4 py-3 text-sm font-normal text-ink-900 outline-none placeholder:text-ink-300"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors hover:bg-orange-600 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 size={16} className="animate-spin" />}
        {status === "sending"
          ? t(contactPage.formSending, locale)
          : t(contactPage.formSubmit, locale)}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          <CheckCircle2 size={18} /> {t(contactPage.formSuccess, locale)}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={18} /> {t(contactPage.formError, locale)}
        </p>
      )}
      {status === "rate-limited" && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={18} /> {t(contactPage.formRateLimited, locale)}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="focus-ring rounded-full border border-border bg-white px-4 py-3 text-sm font-normal text-ink-900 outline-none placeholder:text-ink-300"
      />
    </label>
  );
}
