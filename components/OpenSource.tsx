import { ArrowUpRight, GithubLogo, Package } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { githubProjects, npmModules } from "@/data/site";

const items = [
  ...npmModules.map((m) => ({ kind: "npm package", title: m.name, description: m.description, link: m.link, Icon: Package })),
  ...githubProjects.map((p) => ({ kind: "GitHub repo", title: p.title, description: p.description, link: p.link, Icon: GithubLogo })),
];

export function OpenSource() {
  return (
    <section id="open-source" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1] font-semibold tracking-[-0.045em]">Open source.</h2>
          <p className="mt-6 max-w-[26rem] text-lg leading-relaxed text-muted">
            Libraries for developers building production apps, and projects built to explore ideas and learn deeply.
          </p>
        </Reveal>

        <Reveal className="shell">
          <ul className="core divide-y divide-line overflow-hidden">
            {items.map(({ kind, title, description, link, Icon }) => (
              <li key={title}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-5 p-6 transition-colors duration-500 ease-fluid hover:bg-white/[0.025] sm:p-8"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors duration-500 ease-fluid group-hover:bg-accent group-hover:text-accent-ink group-hover:ring-accent">
                    <Icon size={22} weight="light" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-4">
                      <span className="min-w-0">
                        <span className="block text-lg font-semibold tracking-tight break-words sm:text-xl">{title}</span>
                        <span className="mt-0.5 block font-mono text-xs text-faint">{kind}</span>
                      </span>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/5 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                        <ArrowUpRight size={14} weight="light" />
                      </span>
                    </span>
                    <span className="mt-3 block leading-relaxed text-muted">{description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
