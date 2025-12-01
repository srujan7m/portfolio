export type TechItem = {
  key: string;
  title: string;
  href: string;
  categories: string[];
  theme?: boolean;
};

export const TECH_STACK: TechItem[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Framework", "Library"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Styling"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Tool"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Design"],
  },
];
