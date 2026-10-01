import Image from "next/image";
import { apps } from "@/data/site";

/**
 * Circular portrait with a soft edge, a slowly spinning light arc, and the three app icons orbiting on a faint ring
 * (each icon counter-rotates so it stays upright). CSS-only; everything stops under reduced motion.
 */
export function Portrait() {
  return (
    <div className="relative size-[220px] [--r:110px] lg:size-[300px] lg:[--r:150px]">
      {/* Pulsing glow in the photo's backdrop navy, lifted with a little ice blue. */}
      <div
        aria-hidden
        className="absolute -inset-[30%] rounded-full bg-[radial-gradient(closest-side,rgb(30_64_140/0.55),rgb(8_21_43/0.5)_55%,transparent)] motion-safe:animate-[breathe_6s_ease-in-out_infinite]"
      />

      {/* Orbit track. */}
      <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-white/10" />

      {/* Spinning light arc, masked down to a thin ring just inside the track. */}
      <div
        aria-hidden
        className="absolute inset-[7%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgb(156_195_255/0.9)_70deg,transparent_140deg,transparent_360deg)] [mask-image:radial-gradient(farthest-side,transparent_calc(100%-2px),#000_calc(100%-1px))] motion-safe:animate-[orbit_7s_linear_infinite]"
      />

      {/* Portrait: soft circular fade instead of a hard border. */}
      <div className="absolute inset-[11%] overflow-hidden rounded-full [mask-image:radial-gradient(closest-side,#000_82%,transparent_100%)]">
        <Image
          src="/shubham.jpg"
          alt="Portrait of Shubham in a grey blazer against a navy backdrop"
          fill
          priority
          sizes="(min-width: 1024px) 234px, 172px"
          className="scale-110 object-cover object-[56%_38%]"
        />
      </div>

      {/* App icons orbiting on the track. */}
      <div aria-hidden className="absolute inset-0 motion-safe:animate-[orbit_36s_linear_infinite]">
        {apps.map((app, i) => (
          <div
            key={app.slug}
            className="absolute top-1/2 left-1/2"
            style={{ transform: `rotate(${i * 120 - 60}deg) translateX(var(--r)) rotate(${60 - i * 120}deg)` }}
          >
            {/* Centered on the orbit point with `translate`, so the counter-spin (a `transform`) turns it about its own center. */}
            <div className="h-9 w-9 -translate-x-1/2 -translate-y-1/2 lg:h-11 lg:w-11 motion-safe:animate-[orbit_36s_linear_infinite_reverse]">
              <Image
                src={app.icon}
                alt=""
                width={44}
                height={44}
                className="size-full rounded-[28%] object-cover shadow-[0_10px_30px_-8px_rgb(0_0_0/0.8)] ring-1 ring-white/15"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
