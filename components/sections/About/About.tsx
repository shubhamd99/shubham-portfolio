import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[520px] md:h-[620px] w-full">
              <Image
                src="/shubham-portfolio/me.jpg"
                alt="About me"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              What I&apos;m bout.
            </h1>

            <div className="space-y-6 text-black/80 leading-relaxed text-base md:text-lg">
              <p>
                Hey there, I&apos;m Shubham, a software engineer with 5+ years
                of experience building scalable and high-quality products.
                I&apos;m currently working as an SDE-2 at Swiggy in Bengaluru,
                and previously worked at Rigbot, where I spent my time crafting
                reliable, performance-focused systems and user experiences.
              </p>

              <p>
                I was born and brought up in Jabalpur, Madhya Pradesh, and
                completed my B.E. in Computer Science from RGPV University,
                Bhopal. Over the years, I&apos;ve developed a strong interest in
                building clean, intuitive products that balance great UX with
                solid engineering foundations.
              </p>

              <p>
                My core expertise lies in frontend and mobile development —
                working with React, React Native, Kotlin (Android), and Golang —
                and I enjoy exploring performance optimizations, architecture
                decisions, and system-level integrations. I&apos;m always
                excited about learning new things, solving real problems, and
                collaborating on meaningful products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
