import Image from "next/image";
import { ArrowLink } from "./ArrowLink";

export function ProjectCard({ project }) {
  return (
    <div className="m-4 rounded-lg bg-white p-4 shadow-lg">
      <div>
        <Image
          src={project.img}
          alt={project.title}
          layout="responsive"
          width={300}
          height={300}
          className="w-1/3"
        />
        <h3 className="mb-2 font-heading text-xl">{project.title}</h3>
        <p className="font-medium">{project.description}</p>
        <div className="mt-3 flex flex-wrap">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="mb-2 mr-2 rounded-full bg-slate-200 px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="space-x-4">
          <ArrowLink href={project.githubLink} newTab>
            Github
          </ArrowLink>
          <ArrowLink href={project.link} newTab>
            Preview
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
