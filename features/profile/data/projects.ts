export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link?: string;
  description: string;
  skills: string[];
  logo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Your Project Title",
    period: {
      start: "01.2024",
    },
    link: "https://yourproject.com",
    description: `Your project description here. Explain what the project does, the technologies used, and the impact it had.
    
    You can use multiple lines to describe your project in detail.`,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    logo: "/images/project-logo.svg",
  },
  {
    id: "project-2",
    title: "Another Project",
    period: {
      start: "06.2023",
      end: "12.2023",
    },
    link: "https://anotherproject.com",
    description: `Description of your second project.`,
    skills: [
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
];
