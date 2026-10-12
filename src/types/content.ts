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
};

export type ExternalLink = {
  readonly label: string;
  readonly href: string;
};

export type Experience = {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly details: {
    readonly location: string;
    readonly highlights: readonly string[];
  };
};

export type Project = {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly liveUrl: string;
  readonly repositoryUrl: string;
};
