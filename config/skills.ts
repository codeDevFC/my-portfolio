export const skills = {
  languages: ["TypeScript", "JavaScript", "HTML5", "CSS3", "JSON"],
  frameworks: ["React 18", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion"],
  stateManagement: ["TanStack Query", "Zustand", "Context API"],
  realTime: ["WebSockets", "SSE"],
  performance: ["Memoization", "Virtualization", "Lazy Loading", "Canvas API"],
  testing: ["Vitest", "Cypress"],
  devops: ["Vercel", "AWS", "Docker", "Git", "CI/CD"],
  design: ["Figma", "Responsive Design", "Accessibility", "UX Research"],
};

export const featuredSkills = {
  languages: skills.languages.slice(0, 2),
  frameworks: skills.frameworks.slice(0, 2),
  performance: skills.performance.slice(0, 2),
};
