import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <ol className="entry-list project-list">
        {projects.map((project) => (
          <li className="entry" key={project.title}>
            <p className="entry__meta">Featured project</p>
            <div className="entry__content">
              <h3>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
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
