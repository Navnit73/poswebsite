"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Combobox from "@/components/Combobox";
import { CITIES_BY_COUNTRY, COUNTRIES } from "@/lib/locations";

type Field = "name" | "email" | "pharmacy_name" | "phone" | "country" | "city";
type FormData = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const FIELD_ORDER: Field[] = ["name", "email", "pharmacy_name", "phone", "country", "city"];
const FIELD_IDS: Record<Field, string> = {
  name: "full-name",
  email: "email",
  pharmacy_name: "pharmacy-name",
  phone: "phone",
  country: "country",
  city: "city",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^\+?[\d\s().-]+$/;

function validate(field: Field, data: FormData): string | undefined {
  const value = data[field].trim();
  switch (field) {
    case "name":
      if (!value) return "Please enter your full name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      return;
    case "email":
      if (!value) return "Please enter your work email.";
      if (!EMAIL_RE.test(value)) return "Please enter a valid email address, e.g. alex@pharmacy.com.";
      return;
    case "pharmacy_name":
      if (!value) return "Please enter your pharmacy name.";
      if (value.length < 2) return "Pharmacy name must be at least 2 characters.";
      return;
    case "phone": {
      if (!value) return "Please enter your phone number.";
      const digits = value.replace(/\D/g, "");
      if (!PHONE_CHARS_RE.test(value) || digits.length < 7 || digits.length > 15)
        return "Please enter a valid phone number, including country code.";
      return;
    }
    case "country":
      if (!value) return "Please select your country.";
      if (!COUNTRIES.includes(value)) return "Please choose a country from the list.";
      return;
    case "city":
      if (!value) return "Please enter your city.";
      if (value.length < 2) return "City must be at least 2 characters.";
      return;
  }
}

const inputClass = (hasError: boolean) =>
  `mt-1.5 w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-1 ${
    hasError ? "border-red-400 focus:border-red-500 focus:ring-red-500" : "border-line focus:border-brand focus:ring-brand"
  }`;

const Required = () => (
  <span className="text-red-600" aria-hidden="true">
    *
  </span>
);

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    pharmacy_name: "",
    phone: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const submitting = useRef(false);

  const countryValid = COUNTRIES.includes(formData.country);
  const cityOptions = countryValid ? CITIES_BY_COUNTRY[formData.country] ?? [] : [];

  const update = (field: Field, value: string) => {
    const next = { ...formData, [field]: value };
    // A new country invalidates the previously chosen city
    if (field === "country" && value !== formData.country) next.city = "";
    setFormData(next);
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: validate(field, next) }));
  };

  const markTouched = (field: Field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, formData) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;

    const nextErrors: Errors = {};
    for (const field of FIELD_ORDER) {
      const err = validate(field, formData);
      if (err) nextErrors[field] = err;
    }
    setErrors(nextErrors);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => nextErrors[f]);
    if (firstInvalid) {
      document.getElementById(FIELD_IDS[firstInvalid])?.focus();
      return;
    }

    submitting.current = true;
    setStatus("loading");

    const payload = Object.fromEntries(
      FIELD_ORDER.map((f) => [f, formData[f].trim()])
    ) as FormData;

    try {
      const res = await fetch("https://formsubmit.co/ajax/navnitrai5389@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Free Trial Request — Medishelf POS",
          _template: "table",
          _captcha: "false",
          ...payload,
        }),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  const textField = (
    field: Field,
    label: string,
    type: string,
    placeholder: string,
    autoComplete: string
  ) => {
    const error = touched[field] ? errors[field] : undefined;
    const id = FIELD_IDS[field];
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-ink">
          {label} <Required />
        </label>
        <input
          id={id}
          name={field}
          type={type}
          required
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete={autoComplete}
          value={formData[field]}
          onChange={(e) => update(field, e.target.value)}
          onBlur={() => markTouched(field)}
          placeholder={placeholder}
          className={inputClass(!!error)}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  };

  const errorCount = Object.values(errors).filter(Boolean).length;
  const loading = status === "loading";

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8">
      <h2 className="font-display text-2xl font-bold text-ink">Create your store</h2>
      <p className="mt-2 text-sm text-ink-soft">Fill in the basics and we&apos;ll spin up your account in seconds.</p>

      {status !== "success" && (
        <form onSubmit={handleSubmit} noValidate aria-busy={loading} className="mt-8 space-y-5">
          <p className="text-xs text-ink-soft">
            All fields are required <Required />
          </p>

          {textField("name", "Full name", "text", "Alex Morgan", "name")}
          {textField("email", "Work email", "email", "alex@mainstreetpharmacy.com", "email")}
          {textField("pharmacy_name", "Pharmacy name", "text", "Main Street Pharmacy", "organization")}
          {textField("phone", "Phone number", "tel", "+1 (555) 234-5678", "tel")}

          <div className="grid gap-5 sm:grid-cols-2">
            <Combobox
              id={FIELD_IDS.country}
              name="country"
              label="Country"
              value={formData.country}
              options={COUNTRIES}
              onChange={(v) => update("country", v)}
              onBlur={() => markTouched("country")}
              placeholder="Search country"
              error={touched.country ? errors.country : undefined}
              limit={COUNTRIES.length}
            />
            <Combobox
              id={FIELD_IDS.city}
              name="city"
              label="City"
              value={formData.city}
              options={cityOptions}
              onChange={(v) => update("city", v)}
              onBlur={() => markTouched("city")}
              placeholder={
                !countryValid ? "Select a country first" : cityOptions.length ? "Search or type city" : "Type your city"
              }
              disabled={!countryValid}
              error={touched.city ? errors.city : undefined}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" />
              </svg>
            )}
            {loading ? "Creating store…" : "Start my free trial"}
          </button>

          <p role="status" aria-live="polite" className="sr-only">
            {loading ? "Submitting your request." : errorCount > 0 ? `Please fix ${errorCount} field${errorCount > 1 ? "s" : ""}.` : ""}
          </p>

          <p className="text-center text-xs text-ink-soft">
            By signing up you agree to our <Link href="/tmc" className="underline hover:text-brand-deep">Terms</Link> and <Link href="/privacy" className="underline hover:text-brand-deep">Privacy Policy</Link>.
          </p>
        </form>
      )}

      {status === "success" && (
        <div role="status" aria-live="polite" className="py-12 text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto text-brand"><path d="M20 6L9 17l-5-5"/></svg>
          <h3 className="mt-4 font-display text-xl font-bold text-ink">You&apos;re in!</h3>
          <p className="mt-2 text-sm text-ink-soft">Check your inbox for your login link. Your store is being set up now.</p>
        </div>
      )}

      {status === "error" && (
        <div role="alert" className="mt-4 rounded-lg bg-red-50 p-4 text-center text-sm text-red-600 border border-red-200">
          Something went wrong setting up your trial. Please try again, or email us directly at <a href="mailto:sales@medishelf.co" className="underline font-semibold">sales@medishelf.co</a>.
        </div>
      )}
    </div>
  );
}
