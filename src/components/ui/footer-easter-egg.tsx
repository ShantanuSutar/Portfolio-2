import { previousPortfolioLink } from "@/data/portfolio";

export function FooterEasterEgg() {
  return (
    <a
      className="footer-portal-link"
      href={previousPortfolioLink.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${previousPortfolioLink.label} (opens in a new tab)`}
    >
      <span className="footer-portal" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </span>
      <span>{previousPortfolioLink.label}</span>
      <span className="footer-portal-link__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
