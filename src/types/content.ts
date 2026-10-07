export type SectionId = "about" | "experience" | "projects";

export type PersonalInformation = {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly intro: string;
  readonly about: string;
};

export type NavigationItem = {
  readonly label: string;
  readonly href: `#${SectionId}`;
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly isPlaceholder: boolean;
};

export type Experience = {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly technologies: readonly string[];
};

export type Project = {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly href?: string;
};
