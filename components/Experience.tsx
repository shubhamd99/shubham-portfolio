import Image from "next/image";
import { Cardholder, CreditCard, HandCoins, PiggyBank } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/site";

const areaIcons = [PiggyBank, Cardholder, CreditCard, HandCoins];

/** Asymmetric bento: the current role gets the large tile, earlier roles stack beside it. */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <h2 className="text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1] font-semibold tracking-[-0.045em]">
          Where I’ve worked.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:grid-rows-2 md:gap-5">
        {experience.map((job, i) => {
          const current = i === 0;
          return (
            <Reveal
              key={job.company}
              delay={i * 0.08}
              className={current ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}
            >
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="shell group block h-full transition-transform duration-700 ease-fluid hover:-translate-y-1"
                style={{ "--tint": job.tint } as React.CSSProperties}
              >
                <div
                  className={`core relative flex h-full flex-col overflow-hidden bg-[radial-gradient(80%_70%_at_100%_0%,rgb(var(--tint)/0.13),transparent_65%)] p-7 sm:p-9 ${
                    current ? "min-h-[24rem]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <Logo job={job} large={current} />
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium ${
                        current ? "bg-accent text-accent-ink" : "text-muted ring-1 ring-white/10"
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>

                  <div className={current ? "mt-12" : "mt-8"}>
                    <h3
                      className={`font-semibold tracking-[-0.04em] ${
                        current ? "text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1]" : "text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.1]"
                      }`}
                    >
                      {job.role}
                      <span className="sr-only"> at {job.company}</span>
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed text-muted ${current ? "max-w-[34rem] text-lg" : "text-[0.95rem]"}`}
                    >
                      {job.summary}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${job.company} focus areas`}>
                      {job.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-muted ring-1 ring-white/[0.06]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {"areas" in job && (
                    <div className="mt-auto pt-10">
                      <p className="font-mono text-xs text-faint">In the app</p>
                      <ul className="mt-4 grid grid-cols-2 gap-2.5">
                        {job.areas.map((area, n) => {
                          const Icon = areaIcons[n % areaIcons.length];
                          return (
                            <li
                              key={area}
                              className="flex items-center gap-3 rounded-[1.25rem] bg-white/[0.03] p-3.5 text-sm leading-snug ring-1 ring-white/[0.06] sm:p-4"
                            >
                              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[rgb(var(--tint)/0.12)] text-[rgb(var(--tint))]">
                                <Icon size={18} weight="light" />
                              </span>
                              {area}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Logo({ job, large }: { job: (typeof experience)[number]; large: boolean }) {
  // Swiggy's logo is a mark only, so it gets the name set beside it to read as a lockup.
  if (job.company === "Swiggy") {
    return (
      <span className="flex items-center gap-2.5">
        <Image src={job.logo.src} alt="" width={job.logo.width} height={job.logo.height} className="h-9 w-auto" />
        <span className="text-2xl font-semibold tracking-[-0.03em] text-[#FC8019]">Swiggy</span>
      </span>
    );
  }
  return (
    <Image
      src={job.logo.src}
      alt={`${job.company} logo`}
      width={job.logo.width}
      height={job.logo.height}
      className={`w-auto ${large ? "h-10 sm:h-12" : "h-7"}`}
    />
  );
}
