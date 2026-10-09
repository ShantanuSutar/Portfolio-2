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
    "I'm a software developer at Capgemini, working with React, Java, and Spring Boot to build customer-facing applications. I enjoy working across the stack, from creating intuitive interfaces to developing the backend systems that power them.",
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
      "Building customer-facing applications across React and Java/Spring Boot, with a focus on reusable interfaces, backend services, and frontend performance.",
    technologies: ["React", "Java", "Spring Boot", "SQL"],
  },
  {
    company: "Whatbytes",
    role: "Frontend Developer Intern",
    period: "Dec 2024 — Jun 2025",
    description:
      "Worked across hotel booking and admin products, building frontend experiences and supporting backend functionality.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const projects: readonly Project[] = [
  {
    title: "DineHub",
    description:
      "A full-stack food ordering platform for customers and restaurant owners, covering discovery, menus, authentication, payments, and order management.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Stripe"],
  },
  {
    title: "Unsaid — Stories and More",
    description:
      "A full-stack publishing platform with rich-text editing, authentication, social interactions, and scheduled publishing.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
];
