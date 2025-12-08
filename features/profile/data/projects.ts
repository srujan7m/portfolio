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
    id: "campus-flow",
    title: "Campus Flow",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/srujan7m/Campus-Flow",
    description: `A modern event management platform for campus events with AI-powered support and seamless registration. Features include AI-powered Q&A with document ingestion, Telegram bot integration, payment processing via Razorpay, and interactive maps with Mapbox.`,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Gemini AI",
      "Telegram Bot",
      "Razorpay",
      "Mapbox",
    ],
  },
  {
    id: "idea-evaluator",
    title: "Startup Idea Evaluator",
    period: {
      start: "10.2024",
    },
    link: "https://github.com/srujan7m/idea_evaluator",
    description: `AI-assisted startup idea evaluation tool with comprehensive scoring across market, moat, and monetization dimensions. Features include multi-AI provider support (Gemini, OpenAI, Ollama), scoring framework, radar chart visualizations, and CSV export capabilities.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "AI Integration",
      "Chart.js",
    ],
  },
  {
    id: "droply",
    title: "Droply",
    period: {
      start: "10.2024",
    },
    link: "https://github.com/srujan7m/droply",
    description: `Simple, monochrome file management system with drag-and-drop upload, file search, and sharing capabilities. Built with a clean, accessible black-and-white design system.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "ImageKit",
      "PostgreSQL",
      "Drizzle ORM",
    ],
  },
  {
    id: "brainly",
    title: "Brainly",
    period: {
      start: "10.2024",
    },
    link: "https://github.com/srujan7m/brainly",
    description: `Interactive bookmarking platform for YouTube and Twitter content. Users can save, organize, and share their favorite content with an embedded preview system.`,
    skills: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];
