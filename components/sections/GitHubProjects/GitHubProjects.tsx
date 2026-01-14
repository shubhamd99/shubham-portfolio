import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { githubProjects } from "@/data/github-projects";

export default function GitHubProjects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-24 text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/shubham-portfolio/github-illustration.png"
              alt="GitHub Projects"
              width={300}
              height={200}
              className="opacity-90"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Github projects
          </h2>

          <p className="mt-4 text-black/60">
            Projects built to explore ideas, learn deeply, and solve real
            problems.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {githubProjects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={project.title}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  reverse ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={reverse ? "md:col-start-2" : ""}>
                  <div className="overflow-hidden rounded-xl border bg-black/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-semibold">{project.title}</h3>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-8 flex gap-4">
                    {/* Docs */}
                    <Button
                      variant="outline"
                      className="rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                      asChild
                    >
                      <a href={project.link} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Docs
                      </a>
                    </Button>

                    {/* GitHub */}
                    <Button
                      className="rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                      asChild
                    >
                      <a href={project.link} target="_blank">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
