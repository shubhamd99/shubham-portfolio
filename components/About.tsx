import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/site";

const facts = [
  { term: "Experience", detail: "7+ years" },
  { term: "Focus", detail: "Mobile and frontend" },
  { term: "Studied", detail: "B.E. Computer Science, RGPV Bhopal" },
  { term: "From", detail: "Jabalpur, Madhya Pradesh" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-40">
      <Reveal>
        <h2 className="max-w-5xl text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
          I like clean, intuitive products <span className="text-faint">with solid engineering underneath.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal className="grid gap-6 text-lg leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <div>
          <Reveal className="shell">
            <dl className="core grid divide-y divide-line overflow-hidden">
              {facts.map((f) => (
                <div key={f.term} className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-7">
                  <dt className="font-mono text-xs text-faint">{f.term}</dt>
                  <dd className="text-right font-medium tracking-tight">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tools I work with">
              {profile.stack.map((s) => (
                <li key={s} className="rounded-full bg-white/[0.04] px-4 py-2 text-sm ring-1 ring-white/[0.08]">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
