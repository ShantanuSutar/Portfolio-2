"use client";

import { useEffect } from "react";

import type { SectionId } from "@/types/content";

type NavigationObserverProps = {
  sectionIds: readonly SectionId[];
};

export function NavigationObserver({ sectionIds }: NavigationObserverProps) {
  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);
    const links = new Map(
      sectionIds.map((sectionId) => [
        sectionId,
        document.querySelector<HTMLAnchorElement>(`.primary-nav a[href="#${sectionId}"]`),
      ]),
    );
    const lastSectionId = sectionIds.at(-1);
    let activeSectionId = sectionIds[0];

    const updateActiveSection = (sectionId: SectionId) => {
      if (activeSectionId === sectionId) {
        return;
      }

      if (activeSectionId) {
        links.get(activeSectionId)?.removeAttribute("aria-current");
      }

      links.get(sectionId)?.setAttribute("aria-current", "location");
      activeSectionId = sectionId;
    };

    const updateFromLocation = () => {
      const sectionId = window.location.hash.slice(1) as SectionId;

      if (links.has(sectionId)) {
        updateActiveSection(sectionId);
      }
    };

    const isNearPageBottom = () =>
      window.scrollY > 0 &&
      document.documentElement.scrollHeight - window.scrollY - window.innerHeight <= 2;

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
    updateFromLocation();
    window.addEventListener("hashchange", updateFromLocation);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromLocation);
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrame !== undefined) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, [sectionIds]);

  return null;
}
