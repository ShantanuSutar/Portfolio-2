import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/data/portfolio";

type SocialLinksProps = {
  variant: "desktop" | "mobile";
};

export function SocialLinks({ variant }: SocialLinksProps) {
  return (
    <nav className={`social-nav social-nav--${variant}`} aria-label="Social profiles">
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
  );
}
