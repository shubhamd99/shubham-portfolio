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
  /** When work on it started (YYYY-MM-DD). The apps page lists newest first. */
  started: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  website: string;
  icon: string;
  screenshots: { src: string; alt: string; width: number; height: number }[];
  stores: { platform: "Google Play" | "App Store"; status: StoreStatus; url: string }[];
  theme: "calmeter" | "parksaarthi" | "neondrift" | "galacticrock" | "lumiflit" | "ondora";
  /** schema.org applicationCategory. */
  schemaCategory: "GameApplication" | "HealthApplication" | "TravelApplication" | "UtilitiesApplication";
};

export const apps: App[] = [
  {
    slug: "ondora",
    started: "2026-10-20",
    name: "Ondora",
    category: "Productivity · Documents",
    tagline: "Everything important. Nothing uploaded.",
    description:
      "A privacy-first document vault. Ondora finds IDs, passports, insurance policies, bills, tickets, warranties and prescriptions in your photo gallery, keeps them in an encrypted vault by category and family member, pulls out expiry dates and policy numbers, and reminds you before anything runs out. No account, no cloud, and the app has no internet permission.",
    highlights: [
      "Native Android in Kotlin and Jetpack Compose: on-device OCR with ML Kit and rule-based extractors for dates, passport MRZ, amounts and PNRs across 18 document categories",
      "A fully offline Private AI (Qwen3.5 0.8B through llama.cpp, built from source with the NDK) that summarizes documents and answers questions with the source page",
      "Encrypted vault with Room, SQLCipher and Tink, local reminders, claim-pack PDFs with redaction, and password-protected backups",
    ],
    stack: ["Kotlin", "Jetpack Compose", "ML Kit", "llama.cpp", "SQLCipher"],
    website: "https://ondora-sooty.vercel.app",
    icon: "/apps/ondora/icon.png",
    screenshots: [
      { src: "/apps/ondora/1.jpg", alt: "Ondora home screen with a car insurance renewal countdown and a wallet of documents", width: 539, height: 1200 },
      { src: "/apps/ondora/2.jpg", alt: "Ondora Ask screen answering questions about a car claim and a passport, offline", width: 539, height: 1200 },
      { src: "/apps/ondora/3.jpg", alt: "Ondora vault sorted into IDs, insurance, health, travel, bills and warranties", width: 539, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "soon", url: "https://play.google.com/store/apps/details?id=com.ondora.app" },
      { platform: "App Store", status: "soon", url: "https://apps.apple.com" },
    ],
    theme: "ondora",
    schemaCategory: "UtilitiesApplication",
  },
  {
    slug: "lumiflit",
    started: "2026-10-17",
    name: "Lumiflit",
    category: "Game · Arcade",
    tagline: "Tap to glow. Drift through a moonlit forest.",
    description:
      "A calm one-tap arcade game. Tap to lift a glowing firefly through a moonlit forest, between vines strung with paper lanterns. Six painted forests, each with its own music, a new one every 20 points, medals up to the Moon, and firefly colours to unlock. No ads, and it works offline.",
    highlights: [
      "Written natively twice: Kotlin with Jetpack Compose menus and a hardware-canvas renderer on its own thread on Android, Swift with SpriteKit on Metal and SwiftUI on iPhone and iPad",
      "A fixed 120 Hz physics step in pure Kotlin and pure Swift engines, checked against shared fixtures so both platforms play the same, bit for bit",
      "Six forests with their own music and pillars, unlockable firefly colours, and leaderboards and achievements on Play Games and Game Center",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "SpriteKit"],
    website: "https://lumiflit.vercel.app",
    icon: "/apps/lumiflit/icon.png",
    screenshots: [
      { src: "/apps/lumiflit/1.jpg", alt: "Lumiflit home screen with the glowing firefly in a misty forest", width: 552, height: 1200 },
      { src: "/apps/lumiflit/2.jpg", alt: "Lumiflit firefly flying past a full moon over a lake at a score of 50", width: 552, height: 1200 },
      { src: "/apps/lumiflit/3.jpg", alt: "Lumiflit purple forest with shooting stars at a score of 92", width: 552, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "soon", url: "https://play.google.com/store/apps/details?id=com.lumiflit.app" },
      { platform: "App Store", status: "soon", url: "https://apps.apple.com/app/id6824343928" },
    ],
    theme: "lumiflit",
    schemaCategory: "GameApplication",
  },
  {
    slug: "galacticrock",
    started: "2026-10-04",
    name: "Galactic Rock",
    category: "Game · Arcade",
    tagline: "Hold to orbit. Release to fly. Climb the galaxy.",
    description:
      "A one-touch space arcade climber. Hold anywhere to tether your burning rock to the nearest star and swing around it, then let go to slingshot off along the tangent. Chain perfect releases to a x5 combo through endless worlds of lasers, asteroids and black holes.",
    highlights: [
      "Written natively twice: Kotlin with a single Jetpack Compose canvas on Android, Swift with a custom Metal renderer on iPhone and iPad",
      "Seeded levels that always leave a way through, checked by an autopilot bot that plays full runs in the unit tests",
      "Five worlds that loop forever, planet power-ups, and leaderboards and achievements on Play Games and Game Center",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Metal"],
    website: "https://galactic-rock.vercel.app",
    icon: "/apps/galacticrock/icon.png",
    screenshots: [
      { src: "/apps/galacticrock/1.jpg", alt: "Galactic Rock orbiting a star past a black hole at a x5 combo", width: 552, height: 1200 },
      { src: "/apps/galacticrock/2.jpg", alt: "Galactic Rock 5x Godlike combo between pink lasers", width: 552, height: 1200 },
      { src: "/apps/galacticrock/3.jpg", alt: "Galactic Rock level 3, Toxic Grid, with green lasers", width: 552, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "live", url: "https://play.google.com/store/apps/details?id=com.galacticrock.app" },
      { platform: "App Store", status: "live", url: "https://apps.apple.com/app/id6821276759" },
    ],
    theme: "galacticrock",
    schemaCategory: "GameApplication",
  },
  {
    slug: "calmeter",
    started: "2026-09-27",
    name: "KcalRing",
    category: "Health · AI",
    tagline: "Snap your meal. Know your calories.",
    description:
      "An AI calorie tracker for every cuisine. Photograph a meal, confirm the foods in a tap, and see calories and macros against your daily goal. Recognition runs on the phone where it can, and photos are never stored.",
    highlights: [
      "Written natively twice: Kotlin + Jetpack Compose on Android, Swift + SwiftUI on iPhone",
      "On-device food recognition with Gemini Nano and Apple Foundation Models, with a cloud fallback",
      "Offline food catalog of 10,000 foods with full-text search, and an encrypted on-device cache",
      "Calories, protein, carbs and fat at a glance, plus streaks and progress",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Supabase", "Gemini"],
    website: "https://kcalring.vercel.app",
    icon: "/apps/calmeter/icon.png",
    screenshots: [
      { src: "/apps/calmeter/1.jpg", alt: "KcalRing today screen with calorie ring and meals", width: 675, height: 1200 },
      { src: "/apps/calmeter/2.jpg", alt: "KcalRing scanning a meal with the camera", width: 675, height: 1200 },
      { src: "/apps/calmeter/3.jpg", alt: "KcalRing weekly progress chart", width: 675, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "live", url: "https://play.google.com/store/apps/details?id=com.calmeter.app" },
      { platform: "App Store", status: "review", url: "https://apps.apple.com/app/id6817736047" },
    ],
    theme: "calmeter",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "parksaarthi",
    started: "2026-09-22",
    name: "ParkSaarthi",
    category: "Marketplace · Mobility",
    tagline: "Park stress-free. Earn from empty space.",
    description:
      "A peer-to-peer parking marketplace for India. Neighbours list their spare driveway or society slot, drivers find a verified spot nearby, book it, and pay the host directly by UPI on arrival. Launching first in Bengaluru.",
    highlights: [
      "Rebuilt natively from React Native: Kotlin and Jetpack Compose on Android, keeping the same package, backend and Play listing",
      "One app for both drivers and hosts, in English and Hindi, with map search over PostGIS and vehicle-size filters",
      "Hand-verified hosts and listings, booking requests and push notifications",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Supabase", "PostGIS", "Firebase"],
    website: "https://parksaarthi.vercel.app",
    icon: "/apps/parksaarthi/icon.png",
    screenshots: [
      { src: "/apps/parksaarthi/1.jpg", alt: "ParkSaarthi list of verified parking spots nearby", width: 675, height: 1200 },
      { src: "/apps/parksaarthi/2.jpg", alt: "ParkSaarthi parking spot details with photos and ratings", width: 675, height: 1200 },
      { src: "/apps/parksaarthi/3.jpg", alt: "ParkSaarthi account screen with daily and weekly host earnings", width: 675, height: 1200 },
    ],
    stores: [
      { platform: "Google Play", status: "live", url: "https://play.google.com/store/apps/details?id=com.parksaathi.app" },
      { platform: "App Store", status: "soon", url: "" },
    ],
    theme: "parksaarthi",
    schemaCategory: "TravelApplication",
  },
  {
    slug: "neondrift",
    started: "2026-09-25",
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
      { platform: "App Store", status: "live", url: "https://apps.apple.com/app/id6817610594" },
    ],
    theme: "neondrift",
    schemaCategory: "GameApplication",
  },
];

/** Every app, newest first (the order of the apps page). */
export const appsByNewest = [...apps].sort((a, b) => b.started.localeCompare(a.started));

/** The three apps the home page shows, in its order. The rest are on /apps. */
export const featuredApps = (["calmeter", "parksaarthi", "neondrift"] as const).map(
  (slug) => apps.find((a) => a.slug === slug)!,
);

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
