import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { SiteNavigation } from "@/components/navigation/site-navigation";
import { personalInformation, socialLinks } from "@/data/portfolio";

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
              <p>{personalInformation.role}</p>
            </a>
            <p className="identity-statement">{personalInformation.intro}</p>
          </header>

          <SiteNavigation />

          <nav aria-label="Social profiles">
            <ul className="social-links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-area">{children}</div>
    </div>
  );
}
