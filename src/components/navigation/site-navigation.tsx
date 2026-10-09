"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { navigationItems } from "@/data/portfolio";
import type { SectionId } from "@/types/content";

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const activeSectionRef = useRef<SectionId>("about");

  const updateActiveSection = useCallback((sectionId: SectionId) => {
    if (activeSectionRef.current === sectionId) {
      return;
    }

    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);
    const lastSectionId = navigationItems.at(-1)?.href.slice(1) as SectionId | undefined;

    const sectionIdFromLocation = () => {
      const matchingItem = navigationItems.find((item) => item.href === window.location.hash);

      if (matchingItem) {
        updateActiveSection(matchingItem.href.slice(1) as SectionId);
      }
    };

    const isNearPageBottom = () =>
      window.scrollY > 0 &&
      document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) <= 2;

    const visibleSections = new Map<SectionId, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id as SectionId;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        if (lastSectionId && isNearPageBottom()) {
          updateActiveSection(lastSectionId);
          return;
        }

        const activationLine = window.innerHeight * 0.28;
        const distanceFromActivationLine = (entry: IntersectionObserverEntry) => {
          const bounds = entry.target.getBoundingClientRect();

          if (bounds.top <= activationLine && bounds.bottom >= activationLine) {
            return 0;
          }

          return Math.min(
            Math.abs(bounds.top - activationLine),
            Math.abs(bounds.bottom - activationLine),
          );
        };
        const visibleSection = [...visibleSections.values()].sort(
          (first, second) =>
            distanceFromActivationLine(first) - distanceFromActivationLine(second),
        )[0];

        if (visibleSection) {
          updateActiveSection(visibleSection.target.id as SectionId);
        }
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: 0,
      },
    );

    let scrollFrame: number | undefined;
    const handleScroll = () => {
      if (scrollFrame !== undefined) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = undefined;

        if (lastSectionId && isNearPageBottom()) {
          updateActiveSection(lastSectionId);
        }
      });
    };

    sections.forEach((section) => observer.observe(section));
    sectionIdFromLocation();
    window.addEventListener("hashchange", sectionIdFromLocation);
    window.addEventListener("popstate", sectionIdFromLocation);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", sectionIdFromLocation);
      window.removeEventListener("popstate", sectionIdFromLocation);
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrame !== undefined) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, [updateActiveSection]);

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
                onClick={() => updateActiveSection(sectionId)}
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
