"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
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
          _subject: "New Contact Form Inquiry — Medishelf POS",
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

  const handleReset = () => {
    setFormData({ name: "", email: "", topic: "", message: "" });
    setStatus("idle");
  };

  return (
    <div className="mt-14 mx-auto max-w-2xl">
      <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8 shadow-sm sm:p-10">
        <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
        <p className="mt-2 text-sm text-ink-soft">Fill this out and we&apos;ll route it to the right person. We reply within an hour.</p>

        {status !== "success" && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-ink">
                  Name <span className="text-brand-deep">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/50 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-ink">
                  Email <span className="text-brand-deep">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@pharmacy.com"
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/50 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-semibold text-ink">Subject</label>
              <select
                id="contact-subject"
                name="topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3.5 text-sm text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="">Select a topic…</option>
                <option value="General inquiry">General inquiry</option>
                <option value="Pricing & plans">Pricing &amp; plans</option>
                <option value="Enterprise / chains">Enterprise / chains</option>
                <option value="Technical support">Technical support</option>
                <option value="Billing & refunds">Billing &amp; refunds</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-ink">
                  Message <span className="text-brand-deep">*</span>
                </label>
                <span className="text-xs text-ink-soft/60">{formData.message.length} / 1000</span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your pharmacy and how we can help…"
                className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/50 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-focus w-full rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Sending message…" : "Send message"}
            </button>
            <p className="text-center text-xs text-ink-soft/70">
              By submitting, you agree to our <Link href="/privacy" className="underline hover:text-brand-deep">Privacy Policy</Link>. We never share this with third parties.
            </p>
          </form>
        )}

        {status === "success" && (
          <div className="py-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-mist text-brand">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-ink">Message sent!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">We&apos;ll get back to you within one business day. Check your inbox for a confirmation.</p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 rounded-lg border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-brand-mist"
            >
              Send another message
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" /><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>Something went wrong sending your message. Please email us directly at <a href="mailto:sales@medishelf.co" className="underline font-semibold">sales@medishelf.co</a>.</span>
          </div>
        )}
      </div>
    </div>
  );
}
