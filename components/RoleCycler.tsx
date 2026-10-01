"use client";

import { useEffect, useState } from "react";

const roles = ["Frontend specialist.", "Mobile developer.", "Indie app maker."];

/**
 * Cycles the second headline line through the roles. All roles share one grid cell inside a clipping mask: the current
 * one slides up into view, the previous one slides out the top, and the rest wait below without a transition.
 * Transform only (no opacity), so the text always has full contrast. Static under reduced motion.
 */
export function RoleCycler() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const prev = (i - 1 + roles.length) % roles.length;

  return (
    <span className="relative grid overflow-hidden pb-[0.08em] whitespace-nowrap text-faint max-sm:text-[10vw]">
      <span className="sr-only">{roles.join(" ")}</span>
      {roles.map((role, j) => (
        <span
          key={role}
          aria-hidden
          className={`col-start-1 row-start-1 max-lg:justify-self-center ${
            j === i
              ? "translate-y-0 transition-transform duration-800 ease-fluid"
              : j === prev
                ? "-translate-y-[110%] transition-transform duration-800 ease-fluid"
                : "translate-y-[110%]"
          }`}
        >
          {role}
        </span>
      ))}
    </span>
  );
}
