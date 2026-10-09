import { ArrowUpRight } from "lucide-react";

import { resumeLink, socialLinks } from "@/data/portfolio";

type SocialLinksProps = {
  variant: "desktop" | "mobile";
};

export function SocialLinks({ variant }: SocialLinksProps) {
  return (
    <nav className={`social-nav social-nav--${variant}`} aria-label="Social profiles">
      <ul className="social-links">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} profile (opens in a new tab)`}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
            </a>
          </li>
        ))}
      </ul>
      <a
        className="resume-link"
        href={resumeLink.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${resumeLink.label} PDF (opens in a new tab)`}
      >
        {resumeLink.label}
        <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
      </a>
    </nav>
  );
}
