"use client";

// libs
import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Mail } from "lucide-react";

// styles
import styles from "./Hero.module.scss";

// components
import { Navbar } from "@/components/layout/Navbar";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const email = "shubhamdhage930@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className={`${styles.hero} relative`}>
      {/* Floating Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Hero Layout */}
      <div className="mx-auto min-h-screen max-w-4xl px-6 flex flex-col text-center">
        {/* Center Content */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Illustration */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/hero-illustration.png"
              alt="Hero Illustration"
              width={280}
              height={280}
              className="opacity-70"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Hi, I’m Shubh <span className="inline-block">👋</span>
          </h1>

          <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight whitespace-nowrap">
            A Frontend Specialist
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-black/60 leading-relaxed">
            Senior Frontend Engineer with 5+ years of experience building
            scalable web and mobile applications, focused on performance,
            architecture, and AI-powered tooling.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleCopy}
              className="group relative h-11 w-[260px] overflow-hidden rounded-full bg-black text-sm font-medium text-white"
            >
              {/* Default state */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                <Mail size={16} />
                {email}
              </div>

              {/* Hover state */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Copy size={16} />
                Copy email
              </div>

              {/* Copied overlay */}
              {copied && (
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black">
                  <Check size={16} />
                  Copied!
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Companies — pinned to bottom */}
        <div className="mt-auto pb-12 flex flex-wrap items-center justify-center gap-12 text-black/50">
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Swiggy
          </span>
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Rigbot
          </span>
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Freelancer
          </span>
        </div>
      </div>
    </section>
  );
}
