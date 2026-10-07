import { projectPlaceholders } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <ol className="entry-list project-list">
        {projectPlaceholders.map((project, index) => (
          <li className="entry" key={`${project.name}-${index}`}>
            <p className="entry__meta">{project.meta}</p>
            <div className="entry__content">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
