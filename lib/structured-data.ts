import { SITE_URL, apps, experience, profile } from "@/data/site";

/** schema.org JSON-LD: the person, the site, and the apps they make. */
export function structuredData() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.fullName,
    alternateName: [profile.name, profile.shortName],
    givenName: "Shubham",
    familyName: "Dhage",
    url: SITE_URL,
    image: `${SITE_URL}/shubham.jpg`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: experience[0].company, url: experience[0].url },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal" },
    knowsAbout: profile.stack,
    sameAs: [profile.github],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: profile.fullName,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      ...apps.map((a) => ({
        "@type": "MobileApplication",
        name: a.name,
        description: a.description,
        url: a.website,
        image: `${SITE_URL}${a.icon}`,
        applicationCategory: a.theme === "neondrift" ? "GameApplication" : a.theme === "calmeter" ? "HealthApplication" : "TravelApplication",
        operatingSystem: "Android, iOS",
        author: { "@id": `${SITE_URL}/#person` },
      })),
    ],
  };
}
