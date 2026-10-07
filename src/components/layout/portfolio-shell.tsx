import type { ReactNode } from "react";

import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SocialLinks } from "@/components/navigation/social-links";
import { personalInformation } from "@/data/portfolio";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="portfolio-frame" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <aside className="identity-area" aria-label="Portfolio identity">
        <div className="identity-area__inner">
          <header>
            <a
              className="identity"
              href="#top"
              aria-label={`${personalInformation.name}, home`}
            >
              <h1>{personalInformation.name}</h1>
            </a>
            <p className="identity-meta">
              <span>{personalInformation.role}</span>
              <span aria-hidden="true">·</span>
              <span>{personalInformation.location}</span>
            </p>
            <p className="identity-statement">{personalInformation.intro}</p>
          </header>

          <SiteNavigation />
          <SocialLinks variant="desktop" />
        </div>
      </aside>

      <div className="content-area">{children}</div>
    </div>
  );
}
