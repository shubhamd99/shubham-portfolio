import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { SplitPanel, tint } from "@/components/Apps";
import { Contact } from "@/components/Contact";
import { appsByNewest, profile } from "@/data/site";

const description = `Every app ${profile.fullName} has designed and built end to end, newest first: ${appsByNewest
  .map((a) => a.name)
  .join(", ")}.`;

export const metadata: Metadata = {
  title: "Apps",
  description,
  alternates: { canonical: "/apps" },
  // Setting openGraph/twitter here replaces the root's, so the share images from app/ are named again.
  openGraph: {
    title: `Apps | ${profile.fullName}`,
    description,
    url: "/apps",
    siteName: profile.fullName,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `Apps | ${profile.fullName}`, description, images: ["/twitter-image"] },
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-10-04" → "Oct 2026", parsed by hand so the server's time zone can't shift the month. */
function monthYear(iso: string) {
  const [year, month] = iso.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function AppsPage() {
  const total = appsByNewest.length;
  return (
    <>
      <main id="main" tabIndex={-1} className="outline-none">
        <header className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-44">
          <div className="rise">
            <Link
              href="/#apps"
              className="group glass inline-flex h-10 items-center gap-2 rounded-full pr-4 pl-1.5 text-sm text-muted transition-colors duration-500 ease-fluid hover:text-ink"
            >
              <span className="grid size-7 place-items-center rounded-full bg-white/5 transition-transform duration-500 ease-fluid group-hover:-translate-x-0.5">
                <ArrowLeft size={13} />
              </span>
              Home
            </Link>
          </div>

          <h1 className="rise-soft mt-10 max-w-4xl text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-balance">
            Everything I’ve built, <span className="text-muted">newest first.</span>
          </h1>
          <p className="rise mt-7 max-w-[38rem] text-lg leading-relaxed text-muted" style={{ animationDelay: "80ms" }}>
            {total} apps, each designed, built and run by me alone: native code, backend, store listing and website.
          </p>

          {/* Jump list: one chip per app, in page order. */}
          <nav aria-label="Apps on this page" className="rise mt-12" style={{ animationDelay: "160ms" }}>
            <ul className="no-scrollbar -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {appsByNewest.map((a, i) => (
                <li key={a.slug} className="shrink-0">
                  <a
                    href={`#${a.slug}`}
                    style={{ "--tint": tint[a.theme] } as React.CSSProperties}
                    className="glass group inline-flex h-12 items-center gap-3 rounded-full pr-4 pl-1.5 text-sm transition-colors duration-500 ease-fluid hover:bg-[rgb(var(--tint)/0.1)]"
                  >
                    <Image src={a.icon} alt="" width={36} height={36} className="size-9 rounded-full ring-1 ring-white/10" />
                    <span className="font-medium">{a.name}</span>
                    <span className="font-mono text-[11px] text-faint">{monthYear(a.started)}</span>
                    {i === 0 && <span aria-hidden className="size-1.5 rounded-full bg-[rgb(var(--tint))] shadow-[0_0_10px_rgb(var(--tint))]" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section aria-labelledby="all-apps" className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 md:pb-24">
          <h2 id="all-apps" className="sr-only">
            All apps, newest first
          </h2>
          <ol className="grid gap-12 md:gap-16">
            {appsByNewest.map((app, i) => {
              const latest = i === 0;
              const last = i === total - 1;
              return (
                <li
                  key={app.slug}
                  className="relative grid gap-5 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8"
                  style={{ "--tint": tint[app.theme] } as React.CSSProperties}
                >
                  {/* Timeline rail, fading from this app's tint into the next one. */}
                  {!last && (
                    <span
                      aria-hidden
                      className="absolute top-4 -bottom-16 left-[5px] hidden w-px bg-linear-to-b from-[rgb(var(--tint)/0.55)] to-line lg:block"
                    />
                  )}
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0 lg:pl-8">
                      <span
                        aria-hidden
                        className="size-[11px] shrink-0 rounded-full bg-[rgb(var(--tint))] shadow-[0_0_0_4px_var(--bg),0_0_18px_rgb(var(--tint)/0.8)] lg:absolute lg:top-[11px] lg:left-0"
                      />
                      <p className="font-mono text-sm text-faint lg:text-5xl lg:leading-none lg:font-medium lg:tracking-tight lg:text-ink/90">
                        <span className="sr-only">App </span>
                        {pad(total - i)}
                      </p>
                      <p className="font-mono text-sm text-muted lg:mt-4">{monthYear(app.started)}</p>
                      {latest && (
                        <span className="rounded-full bg-[rgb(var(--tint)/0.14)] px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-[rgb(var(--tint))] uppercase ring-1 ring-[rgb(var(--tint)/0.3)] lg:mt-4">
                          Latest
                        </span>
                      )}
                    </div>
                  </div>
                  <SplitPanel app={app} reverse={i % 2 === 1} />
                </li>
              );
            })}
          </ol>
        </section>
      </main>
      <Contact />
    </>
  );
}
