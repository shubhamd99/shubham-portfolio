import { Hero } from "@/components/sections/Hero";
import { NpmModules } from "@/components/sections/NpmModules";
import { GitHubProjects } from "@/components/sections/GitHubProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NpmModules />
      <GitHubProjects />
    </>
  );
}
