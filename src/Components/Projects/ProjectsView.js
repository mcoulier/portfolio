import "../../App.css";
import Project from "./Project";
import data from "./projects";
import { useMemo } from "react";

export default function ProjectsView() {
  const projects = useMemo(() => Array.from(data).reverse(), [data]);

  return (
    <div className="projectsView">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsRow">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.title}
              url={project.url}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}
