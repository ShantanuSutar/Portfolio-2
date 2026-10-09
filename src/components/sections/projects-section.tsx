import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <ol className="entry-list project-list">
        {projects.map((project) => (
          <li className="entry" key={project.title}>
            <div className="entry__content">
              <div className="project-heading">
                <h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site (opens in a new tab)`}
                  >
                    {project.title}
                    <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
                  </a>
                </h3>
                <a
                  className="project-repository-link"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository (opens in a new tab)`}
                >
                  GitHub
                  <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.7} />
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="technology-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
