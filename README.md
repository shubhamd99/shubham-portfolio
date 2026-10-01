# Shubham D: portfolio

Personal site: hero, the apps I've shipped (CalMeter, ParkSaathi, Neon Drift Zero), open source, about and contact.

Built with **Next.js 16** (App Router, fully static), **Tailwind CSS 4** and **Phosphor icons**. No animation library:
scroll reveals use `IntersectionObserver` + CSS. Dark theme only, by design.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Deploy on Vercel

Import the repo in Vercel; the Next.js preset is detected and no settings are needed. Add `shubhamdhage.in` as the
production domain.

The site URL defaults to `https://shubhamdhage.in` (canonical links, sitemap, Open Graph, structured data, llms.txt).
Preview deployments use their own URL and are blocked in `robots.txt`. `NEXT_PUBLIC_SITE_URL` overrides both.

## SEO, sharing and accessibility

| What | Where |
|---|---|
| Title, description, canonical, Open Graph, Twitter tags | `app/layout.tsx` (`metadata`) |
| Share image (1200x630, generated at build) | `app/opengraph-image.tsx`, `app/twitter-image.tsx` |
| schema.org JSON-LD (Person, WebSite, ProfilePage, MobileApplication) | `lib/structured-data.ts` |
| `/llms.txt` for AI assistants | `lib/llms.ts`, `app/llms.txt/route.ts` |
| `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` | `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` |
| Security headers | `next.config.ts` |

Accessibility: skip link, landmarks, one `h1` and ordered headings, focus moved into and out of the mobile menu
(Escape closes it), visible focus rings, AA contrast on every text color, alt text, and `prefers-reduced-motion`
turns off every animation.

Lighthouse (production build): desktop 100 / 100 / 100 / 100, mobile 93 / 100 / 100 / 100.

## Editing content

All copy lives in [`data/site.ts`](data/site.ts):

- `profile`: name, summary, about paragraphs, stack.
- `apps`: each app's copy, screenshots and store links. When an app goes live, set its store `status` to `"live"`
  (the badge becomes a link); `"review"` and `"soon"` show as status pills.
- `npmModules`, `githubProjects`: open source list.

App images are in `public/apps/<app>/` (`icon.png` and `1.jpg` to `3.jpg`, resized from each app's store screenshots).

## Structure

```
app/          layout (fonts, metadata), page, icons, sitemap, robots
components/   Nav, Hero, Apps, OpenSource, About, Contact, plus CopyEmail and Reveal client islands
data/         site content
public/       photo, app images, Uncut Sans font files
```
