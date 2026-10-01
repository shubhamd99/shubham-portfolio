import { SITE_URL, apps, experience, githubProjects, npmModules, profile } from "@/data/site";

const statusText = { live: "available", review: "in App Store review", soon: "coming soon" } as const;

/** Plain-text summary of the site for LLMs and AI assistants (https://llmstxt.org). Built from the same data as the page. */
export function buildLlmsTxt() {
  const lines = [
    `# ${profile.fullName}`,
    "",
    `> ${profile.role} at Kotak811 with 7+ years building web and mobile apps. Previously SDE-2 at Swiggy and full-stack engineer at Rigbot. Builds and ships his own apps: CalMeter, ParkSaathi and Neon Drift Zero.`,
    "",
    `- Website: ${SITE_URL}`,
    `- Email: ${profile.email}`,
    `- GitHub: ${profile.github}`,
    `- Stack: ${profile.stack.join(", ")}`,
    "",
    "## About",
    "",
    ...profile.about.flatMap((p) => [p, ""]),
    "## Experience",
    "",
    ...experience.map((j) => `- ${j.role}, ${j.company} (${j.period.toLowerCase()}): ${j.summary}`),
    "",
    "## Apps",
    "",
    ...apps.flatMap((a) => [
      `### ${a.name}`,
      "",
      `${a.tagline} ${a.description}`,
      "",
      ...a.highlights.map((h) => `- ${h}`),
      `- Built with: ${a.stack.join(", ")}`,
      `- Website: ${a.website}`,
      ...a.stores.map((s) => `- ${s.platform}: ${statusText[s.status]}${s.status === "live" ? ` (${s.url})` : ""}`),
      "",
    ]),
    "## Open source",
    "",
    ...npmModules.map((m) => `- [${m.name}](${m.link}) (npm): ${m.description}`),
    ...githubProjects.map((p) => `- [${p.title}](${p.link}) (GitHub): ${p.description}`),
    "",
  ];
  return lines.join("\n");
}
