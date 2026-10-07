import { experiencePlaceholders } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <ol className="entry-list">
        {experiencePlaceholders.map((entry, index) => (
          <li className="entry" key={`${entry.role}-${index}`}>
            <p className="entry__meta">{entry.period}</p>
            <div className="entry__content">
              <h3>
                {entry.role} <span>· {entry.company}</span>
              </h3>
              <p>{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
