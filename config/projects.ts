import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "aura-command-center",
    title: "Aura Command Center",
    description: "AI-powered video intelligence platform with real-time object detection, confidence scoring, and interactive Canvas timeline.",
    tags: ["React", "TypeScript", "WebSockets", "Canvas API", "TanStack Query"],
    link: "https://aura-command-center-iota.vercel.app/",
    github: "https://github.com/codeDevFC/aura-command-center",
    image: "/images/aura-command-center.png",
  },
  {
    id: "lj-agape-healthcare",
    title: "L&J Agape Healthcare",
    description: "Responsive multi-service platform for dementia care and staffing services with compassionate design patterns.",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    link: "https://lj-agape-healthcare.vercel.app",
    github: "https://github.com/codeDevFC/lj-agape-healthcare",
    image: "/images/lj-agape.png",
  },
  {
    id: "heart-of-ben",
    title: "Heart of Ben Healthcare Platform",
    description: "Healthcare information platform optimized for performance and SEO with modular architecture.",
    tags: ["React", "Next.js", "Vercel", "SEO"],
    link: "https://heart-of-ben.vercel.app",
    github: "https://github.com/codeDevFC/heart-of-ben",
    image: "/images/heart-of-ben.png",
  },
  {
    id: "dsca-mta-quiz",
    title: "DSCA MTA Quiz Platform",
    description: "Mandatory training assessment platform with real-time feedback and progress tracking.",
    tags: ["React", "TypeScript", "Vercel", "Quiz"],
    link: "https://dsca-mta-quiz.vercel.app",
    github: "https://github.com/codeDevFC/dsca-mta-quiz",
    image: "/images/dsca-mta.png",
  },
];

// Featured projects (first 2 for the homepage)
export const featuredProjects: Project[] = projects.slice(0, 2);

// Alias for Projects (capitalized) for compatibility
export const Projects = projects;
