/**
 * The public URL, used for canonical links, the sitemap, Open Graph and structured data.
 * Production is shubhamdhage.in. Vercel preview deployments use their own URL so previews don't claim to be canonical.
 * NEXT_PUBLIC_SITE_URL overrides both.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://shubhamdhage.in")
).replace(/\/$/, "");

export const profile = {
  name: "Shubham D",
  /** Used wherever search engines and link previews read the name. */
  fullName: "Shubham Dhage",
  shortName: "Shubh",
  role: "Senior Mobile Developer",
  email: "shubhamdhage930@gmail.com",
  github: "https://github.com/shubhamd99",
  location: "Bengaluru, India",
  summary:
    "Senior Mobile Developer with 7+ years of experience building scalable web and mobile applications, focused on performance, architecture, and AI-powered tooling.",
  about: [
    "Hey there, I’m Shubham, a software engineer with 7+ years of experience building scalable and high-quality products. I’m currently a Senior Mobile Developer at Kotak811. Before that I was an SDE-2 at Swiggy, and a full-stack engineer at Rigbot, crafting reliable, performance-focused systems and user experiences.",
    "I was born and brought up in Jabalpur, Madhya Pradesh, and completed my B.E. in Computer Science from RGPV University, Bhopal. Over the years, I’ve developed a strong interest in building clean, intuitive products that balance great UX with solid engineering foundations.",
    "My core expertise lies in frontend and mobile development, working with React, React Native, Kotlin (Android), and Golang. I enjoy exploring performance optimizations, architecture decisions, and system-level integrations. I’m always excited about learning new things, solving real problems, and collaborating on meaningful products.",
  ],
  stack: ["React", "React Native", "Next.js", "TypeScript", "Kotlin", "Swift", "Golang", "Supabase"],
} as const;

export const experience = [
  {
    company: "Kotak811",
  role: "Senior Mobile Developer",
    period: "Now",
    logo: { src: "/logos/kotak811.svg", width: 113, height: 30 },
    url: "https://www.kotak811.com",
    summary:
      "Kotak Mahindra Bank’s digital-first bank. I build its consumer-facing mobile app, where people open a digital savings account and handle their cards, payments and loans.",
    tags: ["Consumer app", "Mobile", "Fintech"],
    /** What customers do in the app, from Kotak811's public product pages. */
    areas: ["Digital savings account", "Virtual debit cards", "Credit cards", "Instant personal loans"],
    tint: "255 0 73",
  },
  {
    company: "Swiggy",
    role: "SDE-2",
    period: "Previously",
    logo: { src: "/logos/swiggy.svg", width: 24, height: 24 },
    url: "https://www.swiggy.com",
    summary:
      "India’s food delivery and quick-commerce platform. I worked on the B2B side: the apps and dashboards that restaurant and store partners use to run their business on Swiggy.",
    tags: ["B2B", "Partner apps", "Dashboards"],
    tint: "252 128 25",
  },
  {
    company: "Rigbot",
    role: "Full-stack Engineer",
    period: "Before that",
    logo: { src: "/logos/rigbot.png", width: 363, height: 56 },
    url: "https://rigbot.com",
    summary:
      "Fleet software for US trucking companies: electronic logs, asset tracking, load planning, driver rewards and analytics. I worked full stack across the product.",
    tags: ["Automotive", "Full stack", "Logistics"],
    tint: "240 90 40",
  },
] as const;

/** "live" links to the store; "review" and "soon" render as a status pill. */
export type StoreStatus = "live" | "review" | "soon";

export type App = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  website: string;
  icon: string;
  screenshots: { src: string; alt: string; width: number; height: number }[];
  stores: { platform: "Google Play" | "App Store"; status: StoreStatus; url: string }[];
  theme: "calmeter" | "parksaathi" | "neondrift";
};

export const apps: App[] = [
  {
    slug: "calmeter",
    name: "CalMeter",
    category: "Health · AI",
    tagline: "Snap your meal. Know your calories.",
    description:
      "An AI calorie tracker for every cuisine. Photograph a meal, confirm the foods in a tap, and see calories and macros against your daily goal. Recognition runs on the phone where it can, and photos are never stored.",
    highlights: [
      "On-device food recognition with Gemini Nano and Apple Foundation Models, with a cloud fallback",
      "Offline food catalog with full-text search in encrypted SQLite",
      "Calories, protein, carbs and fat at a glance, plus streaks and progress",
    ],
    stack: ["React Native", "Expo", "Native modules", "Supabase", "Gemini"],
    website: "https://calmeter.app",
    icon: "/apps/calmeter/icon.png",
    screenshots: [
      { src: "/apps/calmeter/1.jpg", alt: "CalMeter today screen with calorie ring and meals", width: 675, height: 1200 },
      { src: "/apps/calmeter/2.jpg", alt: "CalMeter scanning a meal with the camera", width: 675, height: 1200 },
      { src: "/apps/calmeter/3.jpg", alt: "CalMeter weekly progress chart", width: 675, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "soon", url: "https://play.google.com/store/apps/details?id=com.calmeter.app" },
      { platform: "App Store", status: "review", url: "https://apps.apple.com/app/id6817736047" },
    ],
    theme: "calmeter",
  },
  {
    slug: "parksaathi",
    name: "ParkSaathi",
    category: "Marketplace · Mobility",
    tagline: "Park stress-free. Earn from empty space.",
    description:
      "A peer-to-peer parking marketplace for India. Neighbours list their spare driveway or society slot, drivers find a verified spot nearby, book it, and pay the host directly by UPI on arrival. Launching first in Bengaluru.",
    highlights: [
      "One app for both drivers and hosts, in English and Hindi",
      "Map search over PostGIS with vehicle-size filters, from two-wheelers to SUVs",
      "Hand-verified hosts and listings, booking requests and push notifications",
    ],
    stack: ["React Native", "Expo", "Supabase", "PostGIS", "Firebase"],
    website: "https://parksaathi.app",
    icon: "/apps/parksaathi/icon.png",
    screenshots: [
      { src: "/apps/parksaathi/1.jpg", alt: "ParkSaathi list of verified parking spots nearby", width: 670, height: 1200 },
      { src: "/apps/parksaathi/2.jpg", alt: "ParkSaathi parking spot details", width: 670, height: 1200 },
      { src: "/apps/parksaathi/3.jpg", alt: "ParkSaathi host earnings screen", width: 670, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "soon", url: "" },
      { platform: "App Store", status: "soon", url: "" },
    ],
    theme: "parksaathi",
  },
  {
    slug: "neondrift",
    name: "Neon Drift Zero",
    category: "Game · Arcade",
    tagline: "Dodge an endless storm of neon cubes. One hit ends it.",
    description:
      "An endless 3D neon obstacle dodger. Steer left and right through a field of glowing cubes; your score is how long you survive. The colors shift and the speed climbs with a new level every 30 seconds. Plays fully offline.",
    highlights: [
      "Custom 3D renderer: OpenGL ES 3.0 on Android, Metal on iPhone and iPad",
      "Written natively twice, in Kotlin + Jetpack Compose and Swift + SwiftUI",
      "Seeded obstacle fields, level phases and achievements shared across both",
    ],
    stack: ["Kotlin", "Jetpack Compose", "OpenGL ES", "Swift", "Metal"],
    website: "https://neondriftzero.vercel.app",
    icon: "/apps/neondrift/icon.png",
    screenshots: [
      { src: "/apps/neondrift/1.jpg", alt: "Neon Drift Zero level 1, Violet Drift", width: 552, height: 1200 },
      { src: "/apps/neondrift/2.jpg", alt: "Neon Drift Zero level 2, Cyan Current", width: 552, height: 1200 },
      { src: "/apps/neondrift/3.jpg", alt: "Neon Drift Zero level 3, Solar Rush", width: 552, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "live", url: "https://play.google.com/store/apps/details?id=com.neondriftzero.app" },
      { platform: "App Store", status: "review", url: "https://apps.apple.com/app/id6817610594" },
    ],
    theme: "neondrift",
  },
];

export const npmModules = [
  {
    name: "modern-patch-package",
    description:
      "A modern patch package that works with Yarn (all versions), pnpm, and npm. Create and apply patches to npm dependencies instantly, without waiting for upstream fixes.",
    link: "https://www.npmjs.com/package/modern-patch-package",
  },
  {
    name: "react-native-background-timer-workmanager",
    description: "Emit event periodically in both foreground and background.",
    link: "https://www.npmjs.com/package/react-native-background-timer-workmanager",
  },
] as const;

export const githubProjects = [
  {
    title: "React Native Projects",
    description:
      "A collection of React Native apps and experiments built to explore performance, native integrations, background tasks, and real-world mobile app patterns.",
    link: "https://github.com/shubhamd99/react_native",
  },
  {
    title: "Android Projects",
    description:
      "Native Android projects focused on background work, system services, performance optimizations, and platform-level integrations using Kotlin and modern Android APIs.",
    link: "https://github.com/shubhamd99/full_android",
  },
] as const;
