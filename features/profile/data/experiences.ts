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
    id: "company-1",
    company: "Your Current Company",
    current: true,
    positions: [
      {
        title: "Senior Developer",
        type: "Full-time",
        period: {
          start: "01.2023",
        },
        description: `• Led development of key features
• Collaborated with design team
• Mentored junior developers
• Implemented best practices`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Team Leadership",
        ],
      },
    ],
  },
  {
    id: "company-2",
    company: "Previous Company",
    positions: [
      {
        title: "Frontend Developer",
        type: "Full-time",
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
