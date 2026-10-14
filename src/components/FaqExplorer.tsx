"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export interface FaqEntry {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqEntry[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export default function FaqExplorer({ categories }: { categories: FaqCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const totalCount = categories.reduce((sum, c) => sum + c.items.length, 0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (item) =>
            !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [categories, activeCategory, query]);

  const resultCount = filtered.reduce((sum, c) => sum + c.items.length, 0);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${totalCount} answers — try “FEFO”, “refund” or “export”`}
          className="w-full rounded-full border border-line bg-surface py-3.5 pl-11 pr-4 text-[15px] text-ink outline-none transition placeholder:text-ink-soft/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
      </div>

      {/* Category chips */}
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        {[{ id: "all", label: "All topics" }, ...categories].map((c) => {
          const isActive = activeCategory === c.id;
          return (
            <button
              key={c.id}
              id={`faq-filter-${c.id}`}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              aria-pressed={isActive}
              className={`btn-focus rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                isActive
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-ink-soft hover:border-brand/40 hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-ink-soft" aria-live="polite">
        Showing {resultCount} of {totalCount} questions
      </p>

      {/* Results */}
      <div className="mt-8 space-y-12">
        {filtered.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{category.label}</h2>
            <div className="mt-5 space-y-3">
              {category.items.map((item) => {
                const id = `${category.id}-${slugify(item.question)}`;
                const isOpen = openIds.has(id) || query.trim().length > 2;
                return (
                  <div
                    key={id}
                    id={id}
                    className={`scroll-mt-24 overflow-hidden rounded-[var(--radius-card)] border bg-surface transition ${
                      isOpen ? "border-brand/30" : "border-line hover:border-brand/30"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        id={`${id}-trigger`}
                        aria-expanded={isOpen}
                        aria-controls={`${id}-panel`}
                        onClick={() => toggle(id)}
                        className="btn-focus flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-ink transition hover:text-brand-deep sm:px-6 sm:text-lg"
                      >
                        <span>{item.question}</span>
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                            isOpen ? "rotate-45 bg-brand text-white" : "bg-brand-mist text-brand"
                          }`}
                          aria-hidden="true"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`${id}-panel`}
                      role="region"
                      aria-labelledby={`${id}-trigger`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-line/60 px-5 pb-5 pt-4 text-[15px] leading-relaxed text-ink-soft sm:px-6">
                          <p>{item.answer}</p>
                          {item.link && (
                            <Link href={item.link.href} className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-deep">
                              {item.link.label} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {resultCount === 0 && (
          <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-surface p-10 text-center">
            <p className="font-display text-lg font-semibold text-ink">No answers match “{query}”.</p>
            <p className="mt-2 text-sm text-ink-soft">
              Ask us directly at{" "}
              <a href="mailto:support@medishelf.co" className="font-medium text-brand-deep hover:underline">support@medishelf.co</a>
              {" "}— we add the best questions to this page.
            </p>
            <button
              type="button"
              onClick={() => { setQuery(""); setActiveCategory("all"); }}
              className="btn-focus mt-5 rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink hover:border-brand/40"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
