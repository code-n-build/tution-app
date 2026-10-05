"use client";

import { useState } from "react";

const PROGRAMS = [
  "SEE Preparation",
  "+2 Science",
  "+2 Management",
  "Entrance Preparation",
  "Not sure yet",
];

const CONTACT_EMAIL = "manojhajam3@gmail.com";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
  company: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type ApiError = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-main transition-colors outline-none placeholder:text-text-secondary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card";

const labelClass = "mb-1.5 block text-sm font-medium text-text-main";

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const updateField =
    (field: keyof typeof INITIAL_FORM) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((previous) => ({ ...previous, [field]: event.target.value }));

      if (fieldErrors[field]) {
        setFieldErrors((previous) => {
          const next = { ...previous };
          delete next[field];
          return next;
        });
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response
        .json()
        .catch(() => null)) as ApiError | null;

      if (!response.ok) {
        setStatus("error");
        setFieldErrors(data?.errors ?? {});
        setFeedback(
          data?.message ?? "Something went wrong. Please try again in a moment.",
        );
        return;
      }

      setStatus("success");
      setFeedback(
        "Thanks! Your enquiry has been sent. We'll get back to you shortly.",
      );
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setFeedback(
        "Could not reach the server. Please check your connection and try again.",
      );
    }
  };

  return (
    <section id="contact" className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            Tell us about your goals and our team will get back to you with the
            right program and schedule.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-5 lg:gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-text-main">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Prefer email? Write to us directly and we will reply within one
                working day.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-text-secondary">
                    Address: Putalisadak, Kathmandu, Nepal
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 5a2 2 0 012-2h2l2 5-2 1a13 13 0 006 6l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" />
                  </svg>
                  <span className="text-text-secondary">
                    Phone: +977-1-XXXXXXX
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium break-all text-primary transition-colors hover:text-accent"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField("name")}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={fieldClass}
                    placeholder="Anisha Sharma"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-accent">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField("email")}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={
                      fieldErrors.email ? "email-error" : undefined
                    }
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-accent">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone{" "}
                    <span className="font-normal text-text-secondary">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={updateField("phone")}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={
                      fieldErrors.phone ? "phone-error" : undefined
                    }
                    className={fieldClass}
                    placeholder="+977 98XXXXXXXX"
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-accent">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* Program */}
                <div>
                  <label htmlFor="program" className={labelClass}>
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={updateField("program")}
                    aria-invalid={Boolean(fieldErrors.program)}
                    aria-describedby={
                      fieldErrors.program ? "program-error" : undefined
                    }
                    className={fieldClass}
                  >
                    <option value="">Select a program</option>
                    {PROGRAMS.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.program && (
                    <p id="program-error" className="mt-1.5 text-xs text-accent">
                      {fieldErrors.program}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={updateField("message")}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? "message-error" : undefined
                  }
                  className={`${fieldClass} resize-y`}
                  placeholder="Which subjects do you need help with, and what is your target year?"
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-accent">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* Honeypot */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={updateField("company")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" && (
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {status === "submitting" ? "Sending..." : "Send Enquiry"}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`mt-4 text-sm ${
                  status === "success"
                    ? "text-success"
                    : status === "error"
                      ? "text-accent"
                      : "sr-only"
                }`}
              >
                {feedback}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
