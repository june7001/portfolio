import { projects } from "@/data/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-0.5 space-x-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
