"use client";

import { useId, useMemo, useRef, useState } from "react";

interface ComboboxProps {
  id: string;
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  /** Max number of suggestions rendered at once */
  limit?: number;
}

const inputBase =
  "mt-1.5 w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60";

export default function Combobox({
  id,
  name,
  label,
  value,
  options,
  onChange,
  onBlur,
  placeholder,
  error,
  disabled,
  limit = 60,
}: ComboboxProps) {
  const listId = useId();
  const errorId = `${id}-error`;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    const q = value.trim().toLowerCase();
    // Show the full list when the field is empty or already holds an exact option
    if (!q || options.some((o) => o.toLowerCase() === q)) return options.slice(0, limit);
    const starts = options.filter((o) => o.toLowerCase().startsWith(q));
    const contains = options.filter((o) => !o.toLowerCase().startsWith(q) && o.toLowerCase().includes(q));
    return [...starts, ...contains].slice(0, limit);
  }, [value, options, limit]);

  const showList = open && !disabled && filtered.length > 0;

  const select = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const scrollIntoView = (index: number) => {
    const el = listRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) return setOpen(true);
      const next = Math.min(active + 1, filtered.length - 1);
      setActive(next);
      scrollIntoView(next);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = Math.max(active - 1, 0);
      setActive(prev);
      scrollIntoView(prev);
    } else if (e.key === "Enter" && showList) {
      e.preventDefault();
      select(filtered[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const handleBlur = () => {
    setOpen(false);
    // Normalise case-insensitive exact matches to the canonical option
    const match = options.find((o) => o.toLowerCase() === value.trim().toLowerCase());
    if (match && match !== value) onChange(match);
    onBlur?.();
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} <span className="text-red-600" aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        name={name}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList ? `${listId}-${active}` : undefined}
        aria-required="true"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${inputBase} ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500" : "border-line focus:border-brand focus:ring-brand"}`}
      />
      {showList && (
        <ul
          id={listId}
          ref={listRef}
          role="listbox"
          aria-label={label}
          className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-line bg-surface py-1 text-sm shadow-lg"
        >
          {filtered.map((option, i) => (
            <li
              key={option}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              // mousedown fires before the input's blur, so the click registers
              onMouseDown={(e) => {
                e.preventDefault();
                select(option);
              }}
              onMouseEnter={() => setActive(i)}
              className={`cursor-pointer px-4 py-2 ${i === active ? "bg-brand-mist text-brand-deep" : "text-ink"}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
