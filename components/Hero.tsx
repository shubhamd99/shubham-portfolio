import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Portrait } from "@/components/Portrait";
import { RoleCycler } from "@/components/RoleCycler";
import { apps, profile } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[100dvh] max-w-7xl items-center px-4 pt-24 pb-16 sm:px-6 lg:pt-24 lg:pb-20">
      <div className="grid w-full items-center gap-4 max-lg:text-center lg:gap-16 lg:grid-cols-[1fr_420px] xl:gap-24">
        <div>
          <div className="rise">
            <span className="glass inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
              Senior Mobile Developer at Kotak811
            </span>
          </div>
          <h1
            className="rise-soft mt-6 lg:mt-8 text-[clamp(2.75rem,10vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] lg:text-[clamp(3.5rem,5.4vw,5.25rem)]"
            style={{ animationDelay: "80ms" }}
          >
            Hi, I’m {profile.shortName}.
            <RoleCycler />
          </h1>
          <p
            className="rise-soft mt-6 max-w-[33rem] lg:mt-8 text-lg max-lg:mx-auto leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            7+ years building fast, scalable apps for the web and mobile. Lately, shipping my own on Android and iOS.
          </p>
          <div className="rise mt-9 flex flex-wrap lg:mt-12 items-center gap-3 max-lg:justify-center" style={{ animationDelay: "240ms" }}>
            <a
              href="#experience"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-ink pr-2 pl-6 font-medium whitespace-nowrap text-bg transition-transform duration-500 ease-fluid hover:-translate-y-0.5 active:scale-[0.98]"
            >
              See my work
              {/* Two stacked arrows: on hover the first slides out below and the second drops in from above. */}
              <span className="relative grid size-10 place-items-center overflow-hidden rounded-full bg-bg text-ink">
                <ArrowDown
                  size={16}
                  className="transition-transform duration-500 ease-fluid group-hover:translate-y-8"
                />
                <ArrowDown
                  size={16}
                  aria-hidden
                  className="absolute -translate-y-8 transition-transform duration-500 ease-fluid group-hover:translate-y-0"
                />
              </span>
            </a>
            <a
              href="#apps"
              className="group inline-flex h-14 items-center gap-4 glass rounded-full pr-2 pl-6 font-medium whitespace-nowrap transition-all duration-500 ease-fluid hover:bg-white/5 active:scale-[0.98]"
            >
              See my apps
              {/* The three app icons sit stacked and splay apart on hover. */}
              <span className="flex items-center">
                {apps.map((a, i) => (
                  <Image
                    key={a.slug}
                    src={a.icon}
                    alt=""
                    width={40}
                    height={40}
                    className={`relative size-10 rounded-[0.75rem] ring-[3px] ring-bg transition-transform duration-500 ease-fluid ${
                      ["group-hover:-translate-x-1 group-hover:-rotate-8", "-ml-2.5 group-hover:-translate-y-1", "-ml-2.5 group-hover:translate-x-1 group-hover:rotate-8"][i]
                    }`}
                  />
                ))}
              </span>
            </a>
          </div>
        </div>

        <div
          className="rise flex justify-center py-4 max-lg:order-first lg:p-0"
          style={{ animationDelay: "160ms" }}
        >
          <Portrait />
        </div>
      </div>
    </section>
  );
}
