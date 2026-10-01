import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { SITE_URL, profile } from "@/data/site";
import { structuredData } from "@/lib/structured-data";
import "./globals.css";

const uncut = localFont({
  variable: "--font-uncut",
  display: "swap",
  src: [
    { path: "../public/fonts/uncut-sans/UncutSans-Regular.woff2", weight: "400" },
    { path: "../public/fonts/uncut-sans/UncutSans-Medium.woff2", weight: "500" },
    { path: "../public/fonts/uncut-sans/UncutSans-Semibold.woff2", weight: "600" },
  ],
});

// Mono is only used for small labels below the headline, so it loads without blocking the first paint.
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], preload: false });

const title = `${profile.fullName} | ${profile.role}`;
const description =
  "Senior Mobile Developer at Kotak811, previously SDE-2 at Swiggy. Builds scalable React and React Native apps. Maker of CalMeter, ParkSaathi and Neon Drift Zero.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${profile.fullName}` },
  description,
  applicationName: profile.fullName,
  authors: [{ name: profile.fullName, url: SITE_URL }],
  creator: profile.fullName,
  keywords: [
    "Shubham Dhage",
    "Shubham D",
    "Senior Mobile Developer",
    "React Native developer",
    "Frontend engineer",
    "Kotak811",
    "Swiggy",
    "CalMeter",
    "ParkSaathi",
    "Neon Drift Zero",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  // The share image comes from app/opengraph-image.tsx and app/twitter-image.tsx.
  openGraph: { title, description, url: "/", siteName: profile.fullName, type: "profile", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#050a14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${uncut.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="glass fixed top-4 left-4 z-[60] -translate-y-24 rounded-full px-5 py-3 font-medium transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // Static data from data/site.ts; escape "<" so the JSON can't close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c") }}
        />
        <Nav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
