"use client";

import { useEffect, useState } from "react";

import { navigationItems } from "@/data/portfolio";
import type { SectionId } from "@/types/content";

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as SectionId);
        }
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Portfolio sections">
      <ul className="primary-nav">
        {navigationItems.map((item) => {
          const sectionId = item.href.slice(1) as SectionId;
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(sectionId)}
              >
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
