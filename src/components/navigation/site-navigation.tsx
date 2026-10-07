import { navigationItems } from "@/data/portfolio";

export function SiteNavigation() {
  return (
    <nav aria-label="Portfolio sections">
      <ul className="primary-nav">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
