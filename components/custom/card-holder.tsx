import { projectList } from "@/data/projects";
import ProjectCard from "./project-card";

export default function CardHolder() {
  return (
    <>
      {/* Mobile view */}
      <div className="lg:hidden flex flex-col gap-4 w-full">
        {projectList.map((project) => (
          <ProjectCard project={project} key={`${project.title} card`} />
        ))}
      </div>
      {/* Desktop view */}
      <div className="hidden lg:grid grid-cols-2 gap-4 w-full">
        {projectList.map((project) => (
          <ProjectCard project={project} key={`${project.title} card`} />
        ))}
      </div>
    </>
  );
}
