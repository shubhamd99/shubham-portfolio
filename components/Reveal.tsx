"use client";

import { useEffect, useRef } from "react";

/**
 * Heavy fade-up with a short blur as content enters the viewport (styles in globals.css, `.reveal`).
 * The end state has no filter, so glass panels inside keep their backdrop blur. Static under reduced motion or without JS.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.shown = "";
        io.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}
