import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <ol className="entry-list">
        {experiences.map((entry) => (
          <li className="entry" key={entry.company}>
            <p className="entry__meta">{entry.period}</p>
            <div className="entry__content">
              <h3>
                {entry.role} <span>· {entry.company}</span>
              </h3>
              <p>{entry.description}</p>
              <ul className="technology-list" aria-label={`${entry.company} technologies`}>
                {entry.technologies.map((technology) => (
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
