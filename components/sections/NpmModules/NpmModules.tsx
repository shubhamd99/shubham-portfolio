// libs
import Image from "next/image";
import { Package, ExternalLink } from "lucide-react";

// components
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// constants
import { npmModules } from "@/data/npm-modules";

export default function NpmModules() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Illustration + Heading */}
        <div className="mb-20 text-center">
          {/* Illustration */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/npm-illustration.png"
              alt="NPM Modules Illustration"
              width={280}
              height={280}
              className="opacity-90"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Open Source Packages
          </h2>

          <p className="mt-4 text-black/60">
            Libraries crafted for developers to build scalable, production-ready
            apps.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {npmModules.map((mod) => (
            <Card
              key={mod.name}
              className="transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{mod.name}</div>
                    <div className="text-sm text-black/50">npm package</div>
                  </div>
                </div>

                <Badge variant="secondary">★ {mod.stars}</Badge>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-black/70 leading-relaxed">
                  {mod.description}
                </p>

                <div className="mt-6">
                  <Button variant="default" className="rounded-full" asChild>
                    <a href={mod.link} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Package
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
