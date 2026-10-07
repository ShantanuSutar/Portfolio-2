import type {
  ExperiencePlaceholder,
  NavigationItem,
  ProjectPlaceholder,
  SocialLink,
} from "@/types/content";

export const navigationItems: readonly NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const socialLinks: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "LeetCode", href: "https://leetcode.com/" },
];

export const experiencePlaceholders: readonly ExperiencePlaceholder[] = [
  {
    period: "20XX — Present",
    role: "Role Title",
    company: "Company Name",
    summary: "A brief overview of the role, responsibilities, and impact will live here.",
  },
  {
    period: "20XX — 20XX",
    role: "Previous Role",
    company: "Company Name",
    summary: "A concise note about the work and its context will live here.",
  },
];

export const projectPlaceholders: readonly ProjectPlaceholder[] = [
  {
    name: "Selected Project",
    meta: "Application · 20XX",
    summary: "A short description of the problem, approach, and outcome will live here.",
  },
  {
    name: "Selected Project",
    meta: "Platform · 20XX",
    summary: "A concise project overview and relevant technical context will live here.",
  },
];
