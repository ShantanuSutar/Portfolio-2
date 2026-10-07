import type {
  Experience,
  NavigationItem,
  PersonalInformation,
  Project,
  SocialLink,
} from "@/types/content";

export const personalInformation: PersonalInformation = {
  name: "Shantanu Sutar",
  role: "Software Developer",
  location: "Pune, India",
  intro: "I build reliable, performant applications across the stack.",
  about:
    "I'm a software developer at Capgemini working across React, Java, and Spring Boot. I enjoy building full-stack products, improving frontend performance, and solving the engineering problems between an interface and the systems behind it.",
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const socialLinks: readonly SocialLink[] = [
  // TODO: Replace these platform roots once Shantanu's verified profile URLs are available.
  { label: "GitHub", href: "https://github.com/", isPlaceholder: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/", isPlaceholder: true },
  { label: "LeetCode", href: "https://leetcode.com/", isPlaceholder: true },
];

export const experiences: readonly Experience[] = [
  {
    company: "Capgemini",
    role: "Software Developer",
    period: "Sept 2025 — Present",
    description:
      "I work on customer-facing applications across the stack, building interfaces in React and backend services with Java and Spring Boot.",
    technologies: ["React", "Java", "Spring Boot", "SQL"],
  },
  {
    company: "Whatbytes",
    role: "Frontend Developer Intern",
    period: "Dec 2024 — Jun 2025",
    description:
      "I worked on customer-facing hotel booking and admin platforms across the frontend and backend.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const projects: readonly Project[] = [
  {
    title: "DineHub",
    description:
      "A full-stack food ordering platform for customers and restaurant owners, with authentication, payments, menu management, and order workflows.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Stripe"],
  },
  {
    title: "Unsaid — Stories and More",
    description:
      "A full-stack publishing platform with rich-text editing, authentication, social interactions, and scheduled publishing.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
];
