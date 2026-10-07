export type SectionId = "about" | "experience" | "projects";

export type NavigationItem = {
  readonly label: string;
  readonly href: `#${SectionId}`;
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export type ExperiencePlaceholder = {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly summary: string;
};

export type ProjectPlaceholder = {
  readonly name: string;
  readonly meta: string;
  readonly summary: string;
};
