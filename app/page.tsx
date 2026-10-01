import { About } from "@/components/About";
import { Apps } from "@/components/Apps";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";

export default function HomePage() {
  return (
    <>
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Experience />
        <Apps />
        <OpenSource />
        <About />
      </main>
      <Contact />
    </>
  );
}
