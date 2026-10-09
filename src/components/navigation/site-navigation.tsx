import { navigationItems } from "@/data/portfolio";
import type { SectionId } from "@/types/content";

import { NavigationObserver } from "./navigation-observer";

export function SiteNavigation() {
  const sectionIds = navigationItems.map(
    (item) => item.href.slice(1) as SectionId,
  );

  return (
    <nav aria-label="Portfolio sections">
      <ul className="primary-nav">
        {navigationItems.map((item, index) => (
          <li key={item.href}>
            <a href={item.href} aria-current={index === 0 ? "location" : undefined}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <NavigationObserver sectionIds={sectionIds} />
    </nav>
  );
}
