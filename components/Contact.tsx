import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/site";

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 md:pt-24">
      <Reveal className="shell">
        <div className="core relative overflow-hidden px-6 py-20 text-center sm:px-12 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(156_195_255/0.14),transparent_70%),radial-gradient(40%_50%_at_50%_100%,rgb(30_64_140/0.35),transparent_70%)]"
          />
          <h2 className="relative mx-auto max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-balance">
            Have an idea worth building? <span className="text-accent">Let’s talk.</span>
          </h2>
          <p className="relative mx-auto mt-7 max-w-md text-lg text-muted">
            Open to interesting problems in web, mobile and AI tooling.
          </p>
          <div className="relative mt-12 flex justify-center">
            <CopyEmail size="lg" />
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 px-2 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors duration-500 ease-fluid hover:text-ink"
        >
          <GithubLogo size={18} weight="light" /> shubhamd99
        </a>
      </div>
    </footer>
  );
}
