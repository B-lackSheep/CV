import Project from "./Project"
import { projects } from "../../data/project"

export const ProjectList = () => {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  )
}
