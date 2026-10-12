import type {
  Experience,
  ExternalLink,
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
  { label: "GitHub", href: "https://github.com/ShantanuSutar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shantanu-sutar/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Shantanu-Sutar/" },
];

export const resumeLink: ExternalLink = {
  label: "View Résumé",
  href: "/resume/Shantanu_Sutar_Resume.pdf",
};

export const previousPortfolioLink: ExternalLink = {
  label: "Travel to my previous portfolio",
  href: "https://shantanu-frontend-dev-portfolio.netlify.app/",
};

export const experiences: readonly Experience[] = [
  {
    company: "Capgemini",
    role: "Software Developer",
    period: "Sept 2025 — Present",
    description:
      "Building customer-facing applications across React and Java/Spring Boot, with a focus on reusable interfaces, backend services, and frontend performance.",
    technologies: ["React", "Java", "Spring Boot", "SQL"],
    details: {
      location: "Pune",
      highlights: [
        "Contributed to the development of a customer dashboard serving 10,000+ users, building responsive features using React and integrating them with Java/Spring Boot backend services.",
        "Built and maintained 25+ reusable React components, implementing modular UI patterns to improve code reusability, consistency, and maintainability across the application.",
        "Optimized frontend performance using code splitting, lazy loading, and memoization, increasing Lighthouse Performance scores from 68 to 95.",
        "Developed 10+ REST APIs using Java, Spring Boot, and Spring MVC, implementing request validation, exception handling, authentication, and unit tests using JUnit.",
        "Worked with Spring Data JPA, SQL, and microservices-based services, using Maven for dependency/build management and Git for version control and team collaboration.",
      ],
    },
  },
  {
    company: "Whatbytes",
    role: "Frontend Developer Intern",
    period: "Dec 2024 — Jun 2025",
    description:
      "Worked across hotel booking and admin products, building frontend experiences and supporting backend functionality.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    details: {
      location: "Bengaluru",
      highlights: [
        "Developed customer-facing hotel booking and admin platforms using Next.js, React, TypeScript, Tailwind CSS, and Redux Toolkit, building 30+ reusable components and maintaining 20+ application pages.",
        "Designed and developed 10+ REST APIs using Node.js, Express.js, PostgreSQL, and Prisma ORM, managing 5+ database models and optimizing 20+ database queries.",
        "Implemented secure authentication and authorization using JWT, NextAuth.js, and Clerk, along with 2+ payment workflows including 2C2P and bank transfers.",
        "Optimized frontend performance through code splitting, lazy loading, and asset optimization, and integrated interactive location-based hotel maps.",
        "Deployed frontend and backend applications on Vercel and Render, ensuring reliable end-to-end application delivery while implementing request validation and centralized error handling.",
      ],
    },
  },
];

export const projects: readonly Project[] = [
  {
    title: "DineHub",
    description:
      "A full-stack food ordering platform for customers and restaurant owners, covering discovery, menus, authentication, payments, and order management.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Stripe"],
    liveUrl: "https://dinehub-good-food-delivered.vercel.app/",
    repositoryUrl: "https://github.com/ShantanuSutar/Food-Ordering-App",
  },
  {
    title: "Unsaid — Stories and More",
    description:
      "A full-stack publishing platform with rich-text editing, authentication, social interactions, and scheduled publishing.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://unsaid-stories-and-more.netlify.app/",
    repositoryUrl: "https://github.com/ShantanuSutar/Blog-App",
  },
];
