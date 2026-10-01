import Image from "next/image";
import { AppleLogo, ArrowUpRight, GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { apps, type App } from "@/data/site";

/** Each app tints its own panel with its brand color; the page palette stays the same. */
const tint: Record<App["theme"], string> = {
  calmeter: "34 195 142",
  parksaathi: "92 190 140",
  neondrift: "63 200 255",
};

const statusLabel = { live: "Live", review: "In review", soon: "Coming soon" } as const;

export function Apps() {
  const [first, second, third] = apps;
  return (
    <section id="apps" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-40">
      <Reveal className="max-w-3xl">
        <span className="glass inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
          Apps
        </span>
        <h2 className="mt-7 text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1] font-semibold tracking-[-0.045em]">
          Three products, built end to end.
        </h2>
        <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted">
          I design, build and run each one myself, from the native code to the backend and the store listing.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:mt-24 md:gap-10">
        <SplitPanel app={first} />
        <SplitPanel app={second} reverse />
        <WidePanel app={third} />
      </div>
    </section>
  );
}

function Panel({ app, children }: { app: App; children: React.ReactNode }) {
  return (
    <Reveal>
      <article id={app.slug} className="shell" style={{ "--tint": tint[app.theme] } as React.CSSProperties}>
        <div className="core relative overflow-hidden bg-[radial-gradient(90%_70%_at_100%_0%,rgb(var(--tint)/0.14),transparent_60%),radial-gradient(70%_60%_at_0%_100%,rgb(var(--tint)/0.06),transparent_70%)]">
          {children}
        </div>
      </article>
    </Reveal>
  );
}

function SplitPanel({ app, reverse = false }: { app: App; reverse?: boolean }) {
  return (
    <Panel app={app}>
      <div className="grid items-center lg:grid-cols-2">
        <div className={`p-7 sm:p-12 lg:p-14 ${reverse ? "lg:order-2" : ""}`}>
          <AppHeader app={app} />
          <p className="mt-6 max-w-[34rem] leading-relaxed text-muted">{app.description}</p>
          <Highlights items={app.highlights} />
          <Stack items={app.stack} />
          <Links app={app} />
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <Fan app={app} />
        </div>
      </div>
    </Panel>
  );
}

function WidePanel({ app }: { app: App }) {
  return (
    <Panel app={app}>
      <div className="p-7 sm:p-12 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <AppHeader app={app} />
            <p className="mt-6 leading-relaxed text-muted">{app.description}</p>
            <Links app={app} />
          </div>
          <div className="lg:pt-2">
            <Highlights items={app.highlights} first />
            <Stack items={app.stack} />
          </div>
        </div>

        <div className="no-scrollbar -mx-7 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 sm:-mx-12 sm:px-12 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {app.screenshots.map((s, i) => (
            <div
              key={s.src}
              className={`w-[62%] max-w-[260px] shrink-0 snap-center transition-transform duration-700 ease-fluid hover:-translate-y-2 md:w-auto md:max-w-none ${
                i === 1 ? "md:-translate-y-6 md:hover:-translate-y-8" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(min-width: 1280px) 360px, (min-width: 768px) 30vw, 62vw"
                className="h-auto w-full rounded-[1.5rem] ring-1 ring-white/10"
              />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function AppHeader({ app }: { app: App }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image src={app.icon} alt="" width={64} height={64} className="size-14 rounded-[1.1rem] ring-1 ring-white/10 sm:size-16" />
        <div>
          <p className="text-xl font-semibold tracking-tight">{app.name}</p>
          <p className="mt-0.5 font-mono text-xs text-faint">{app.category}</p>
        </div>
      </div>
      <h3 className="mt-8 text-[clamp(1.85rem,3.6vw,2.75rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance">
        {app.tagline}
      </h3>
    </>
  );
}

function Highlights({ items, first = false }: { items: string[]; first?: boolean }) {
  return (
    <ul className={`grid gap-4 border-t border-line pt-7 ${first ? "" : "mt-8"}`}>
      {items.map((h) => (
        <li key={h} className="flex gap-4 text-[0.95rem] leading-relaxed text-ink/85">
          <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-[rgb(var(--tint))]" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 flex flex-wrap gap-2" aria-label="Built with">
      {items.map((s) => (
        <li key={s} className="rounded-full bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-muted ring-1 ring-white/[0.06]">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Links({ app }: { app: App }) {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-2.5">
      {app.stores.map((store) => {
        const Icon = store.platform === "Google Play" ? GooglePlayLogo : AppleLogo;
        const live = store.status === "live";
        const content = (
          <>
            <Icon size={18} weight={live ? "fill" : "light"} />
            <span>{store.platform}</span>
            <span className={live ? "text-bg/60" : "text-faint"}>{statusLabel[store.status]}</span>
          </>
        );
        return live ? (
          <a
            key={store.platform}
            href={store.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium whitespace-nowrap text-bg transition-transform duration-500 ease-fluid hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {content}
          </a>
        ) : (
          <span
            key={store.platform}
            className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-medium whitespace-nowrap text-ink/90 ring-1 ring-white/10"
          >
            {content}
          </span>
        );
      })}
      <a
        href={app.website}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 items-center gap-2.5 rounded-full pr-1.5 pl-4 text-sm font-medium whitespace-nowrap transition-colors duration-500 ease-fluid hover:bg-white/5"
      >
        {app.website.replace(/^https:\/\//, "")}
        <span className="grid size-9 place-items-center rounded-full bg-white/5 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
          <ArrowUpRight size={14} weight="light" />
        </span>
      </a>
    </div>
  );
}

/** Three screenshots fanned out on desktop (they spread on hover); a swipeable row on smaller screens. */
function Fan({ app }: { app: App }) {
  const [a, b, c] = app.screenshots;
  const card = "absolute top-1/2 left-1/2 w-[38%] max-w-[240px] transition-transform duration-1000 ease-fluid";
  const img = "h-auto w-full rounded-[1.5rem] ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]";
  return (
    <>
      <div className="group relative hidden h-[640px] lg:block">
        <div className={`${card} -translate-x-[115%] -translate-y-[46%] -rotate-6 scale-90 group-hover:-translate-x-[132%] group-hover:-rotate-9`}>
          <Image src={b.src} alt={b.alt} width={b.width} height={b.height} sizes="240px" className={img} />
        </div>
        <div className={`${card} translate-x-[15%] -translate-y-[46%] rotate-6 scale-90 group-hover:translate-x-[32%] group-hover:rotate-9`}>
          <Image src={c.src} alt={c.alt} width={c.width} height={c.height} sizes="240px" className={img} />
        </div>
        <div className={`${card} -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[55%]`}>
          <Image src={a.src} alt={a.alt} width={a.width} height={a.height} sizes="240px" className={img} />
        </div>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-10 sm:px-12 lg:hidden">
        {app.screenshots.map((s) => (
          <div key={s.src} className="w-[62%] max-w-[260px] shrink-0 snap-center">
            <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 640px) 260px, 62vw" className={img} />
          </div>
        ))}
      </div>
    </>
  );
}
