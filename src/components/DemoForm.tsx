"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pharmacy_name: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

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
          ...formData,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8 shadow-sm">
      <h2 className="font-display text-2xl font-bold text-ink">Create your store</h2>
      <p className="mt-2 text-sm text-ink-soft">Fill in the basics and we&apos;ll spin up your account in seconds.</p>

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-ink">Full name</label>
            <input
              id="full-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Alex Morgan"
              className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@mainstreetpharmacy.com"
              className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label htmlFor="pharmacy-name" className="block text-sm font-medium text-ink">Pharmacy name</label>
            <input
              id="pharmacy-name"
              name="pharmacy_name"
              type="text"
              required
              value={formData.pharmacy_name}
              onChange={(e) => setFormData({ ...formData, pharmacy_name: e.target.value })}
              placeholder="Main Street Pharmacy"
              className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 234-5678"
              className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-focus w-full rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep disabled:opacity-50"
          >
            {status === "loading" ? "Creating store…" : "Start my free trial"}
          </button>
          <p className="text-center text-xs text-ink-soft/70">
            By signing up you agree to our <Link href="/tmc" className="underline hover:text-brand-deep">Terms</Link> and <Link href="/privacy" className="underline hover:text-brand-deep">Privacy Policy</Link>.
          </p>
        </form>
      )}

      {status === "success" && (
        <div className="py-12 text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto text-brand"><path d="M20 6L9 17l-5-5"/></svg>
          <h3 className="mt-4 font-display text-xl font-bold text-ink">You&apos;re in!</h3>
          <p className="mt-2 text-sm text-ink-soft">Check your inbox for your login link. Your store is being set up now.</p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-lg bg-red-50 p-4 text-center text-sm text-red-600 border border-red-200">
          Something went wrong setting up your trial. Please email us directly at <a href="mailto:sales@medishelf.co" className="underline font-semibold">sales@medishelf.co</a>.
        </div>
      )}
    </div>
  );
}
