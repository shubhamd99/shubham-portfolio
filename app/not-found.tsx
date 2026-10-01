import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-faint">404</p>
      <h1 className="mt-4 text-[clamp(2.5rem,8vw,4.5rem)] leading-[1] font-semibold tracking-[-0.045em]">
        This page doesn’t exist.
      </h1>
      <p className="mt-6 text-lg text-muted">The link may be broken, or the page may have moved.</p>
      <Link
        href="/"
        className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-ink pr-6 pl-2 font-medium text-bg transition-transform duration-500 ease-fluid hover:-translate-y-0.5"
      >
        <span className="grid size-10 place-items-center rounded-full bg-bg text-ink transition-transform duration-500 ease-fluid group-hover:-translate-x-0.5">
          <ArrowLeft size={16} />
        </span>
        Back home
      </Link>
    </main>
  );
}
