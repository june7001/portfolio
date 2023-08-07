// pages/index.js
import Image from "next/image";
import { headers } from "next/dist/client/components/headers";
import { ArrowLink } from "@/components/ArrowLink";
import { projects } from "@/data/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured);
  return (
    <div>
      <header>
        <h1 className="font-heading  text-7xl">Hi, I&apos;m June </h1>
        <h2 className="pt-3 font-main text-xl font-medium">
          I&apos;m a fullstack student at{" "}
          <ArrowLink
            href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
            newTab
          >
            Nackademin
          </ArrowLink>
          currently looking for a frontend internship in Stockholm from
          2023-10-30 to 2024-04-11. Please{" "}
          <ArrowLink href="/contact">contact me</ArrowLink> if you&apos;ve got
          anything!
          <br />
          <br />
          <ArrowLink href="/about">Learn more about me</ArrowLink>
        </h2>
      </header>
      <section className="pt-8">
        <h2 className="font-heading text-2xl">Featured Projects</h2>

        <div className="mt-6 grid space-x-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
