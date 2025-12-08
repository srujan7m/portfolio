export type Experience = {
  id: string;
  company: string;
  positions: Position[];
  current?: boolean;
};

export type Position = {
  title: string;
  type: string;
  period: {
    start: string;
    end?: string;
  };
  description: string;
  skills?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-dev",
    company: "Independent Developer",
    current: true,
    positions: [
      {
        title: "Full Stack Developer",
        type: "Self-employed",
        period: {
          start: "08.2024",
        },
        description: `• Developed full-stack web applications using modern technologies
• Built event management platform with AI integration and payment processing
• Created startup idea evaluation tool with multiple AI provider support
• Implemented file management systems with cloud storage integration
• Active contributor to open-source projects on GitHub`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "PostgreSQL",
          "Firebase",
          "AI Integration",
        ],
      },
    ],
  },
  {
    id: "projects",
    company: "Personal Projects",
    positions: [
      {
        title: "Developer",
        type: "Learning & Building",
        period: {
          start: "06.2021",
          end: "12.2022",
        },
        description: `• Built responsive web applications
• Optimized performance
• Worked in Agile environment`,
        skills: [
          "React",
          "JavaScript",
          "CSS",
        ],
      },
    ],
  },
];
