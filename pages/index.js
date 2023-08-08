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
        <div className=" pt-12 font-main text-xl font-medium ">
          <p>
            I&apos;m a fullstack student at{" "}
            <ArrowLink
              href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
              newTab
            >
              Nackademin
            </ArrowLink>
            currently looking for a frontend internship in Stockholm from
            2023-10-30 to 2024-04-11.{" "}
          </p>
          <p className="mt-6">
            {" "}
            Please <ArrowLink href="/contact">contact me</ArrowLink> if
            you&apos;ve got anything!
          </p>
          <span className="block py-20 ">
            <ArrowLink className="font-extrabold" href="/about">
              Learn more about me
            </ArrowLink>
          </span>
        </div>
      </header>
      <section className="pt-8">
        <h2 className="font-heading text-4xl">Featured Projects</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <section className="py-12">
        <h2 className="font-heading text-4xl">In school I learned:</h2>
        <div className="mt-6 flex">
          <ul className="mr-4 flex-1 list-disc  p-6  text-xl leading-10 ">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <ul className="ml-4 flex-1 list-disc p-6  text-xl leading-10 ">
            <li>Node.js</li>
            <li>Express</li>
            <li>Git</li>
            <li>CMS</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
