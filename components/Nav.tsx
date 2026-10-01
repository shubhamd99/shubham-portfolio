"use client";

import { useEffect, useRef, useState } from "react";
import { GithubLogo } from "@phosphor-icons/react";
import { profile } from "@/data/site";

const links = [
  { href: "#experience", label: "Work" },
  { href: "#apps", label: "Apps" },
  { href: "#open-source", label: "Open source" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  // Lock scroll while the menu is open, move focus into it, close on Escape, and hand focus back to the toggle.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4 md:top-6">
        <nav
          aria-label="Main"
          className="flex h-14 w-full max-w-md items-center justify-between gap-2 rounded-full bg-core/70 py-1.5 pr-1.5 pl-2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08),inset_0_1px_0_rgb(255_255_255/0.08),0_20px_40px_-20px_rgb(0_0_0/0.6)] backdrop-blur-2xl md:w-max md:max-w-none"
        >
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5 pr-2">
            <span className="glass grid size-10 place-items-center rounded-full text-sm font-semibold tracking-tight">
              SD
            </span>
            <span className="font-medium tracking-tight">{profile.name}</span>
          </a>

          <ul className="hidden items-center md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2.5 text-sm text-muted transition-colors duration-500 ease-fluid hover:bg-white/5 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden size-11 place-items-center rounded-full bg-white/5 transition-colors duration-500 ease-fluid hover:bg-white/10 md:grid"
          >
            <GithubLogo size={20} weight="light" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative grid size-11 place-items-center rounded-full bg-white/5 md:hidden"
          >
            <span
              className={`absolute h-px w-4.5 bg-ink transition-transform duration-500 ease-fluid ${open ? "rotate-45" : "-translate-y-[3.5px]"}`}
            />
            <span
              className={`absolute h-px w-4.5 bg-ink transition-transform duration-500 ease-fluid ${open ? "-rotate-45" : "translate-y-[3.5px]"}`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-30 bg-bg/85 backdrop-blur-3xl transition-opacity duration-500 ease-fluid md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-8">
          {links.map((l, i) => (
            <li key={l.href} className="overflow-hidden">
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                className={`block py-2 text-5xl font-semibold tracking-[-0.04em] transition-all duration-700 ease-fluid ${
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="overflow-hidden pt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              style={{ transitionDelay: open ? "360ms" : "0ms" }}
              className={`inline-flex items-center gap-3 text-lg text-muted transition-all duration-700 ease-fluid ${
                open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <GithubLogo size={22} weight="light" /> github.com/shubhamd99
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
