"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { profile } from "@/data/site";

/** Primary contact CTA: shows the address and copies it on click. Falls back to mailto if the clipboard is blocked. */
export function CopyEmail({ size = "md" }: { size?: "md" | "lg" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Copy email address ${profile.email}`}
      className={`group inline-flex items-center gap-3 rounded-full bg-ink font-medium whitespace-nowrap text-bg transition-transform duration-500 ease-fluid hover:-translate-y-0.5 active:scale-[0.98] ${
        size === "lg" ? "h-16 pr-2 pl-7 text-base sm:text-lg" : "h-14 pr-2 pl-6 text-[0.95rem]"
      }`}
    >
      <span className="max-w-[58vw] truncate">{copied ? "Copied to clipboard" : profile.email}</span>
      <span
        aria-hidden
        className={`grid place-items-center rounded-full bg-bg text-ink transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${
          size === "lg" ? "size-12" : "size-10"
        }`}
      >
        {copied ? <Check size={18} weight="bold" /> : <Copy size={18} />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}
