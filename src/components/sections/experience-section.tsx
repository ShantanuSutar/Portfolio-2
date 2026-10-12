import { ArrowRight } from "lucide-react";

import { ExperienceDetailsDialog } from "@/components/ui/experience-details-dialog";
import { experiences } from "@/data/portfolio";

const experienceDialogId = "experience-details-dialog";

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <ExperienceDetailsDialog
        dialogId={experienceDialogId}
        trigger={
          <ol className="entry-list experience-list">
            {experiences.map((entry, index) => (
              <li className="entry" key={entry.company}>
                <p className="entry__meta">{entry.period}</p>
                <div className="entry__content">
                  <h3>
                    <button
                      className="experience-entry-trigger"
                      type="button"
                      aria-label={`View details for ${entry.role} at ${entry.company}`}
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls={experienceDialogId}
                      data-experience-dialog-trigger
                      data-experience-index={index}
                    >
                      <span className="experience-entry-title">
                        {entry.role} <span>· {entry.company}</span>
                      </span>
                      <span className="entry-action-hint" aria-hidden="true">
                        View details
                        <ArrowRight size={13} strokeWidth={1.7} />
                      </span>
                    </button>
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
        }
      >
        {experiences.map((entry, index) => (
          <section
            className="experience-details__job"
            data-experience-detail={index}
            key={entry.company}
          >
            <h3>
              {entry.role} <span>· {entry.company}</span>
            </h3>
            <p className="experience-details__meta">
              <span>{entry.period}</span>
              <span aria-hidden="true">·</span>
              <span>{entry.details.location}</span>
            </p>
            <ul className="experience-details__highlights">
              {entry.details.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ))}
      </ExperienceDetailsDialog>
    </section>
  );
}
