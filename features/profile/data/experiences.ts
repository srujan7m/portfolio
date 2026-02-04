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
        title: "Full-stack Developer (AI Integration Specialist)",
        type: "Self-employed",
        period: {
          start: "08.2024",
        },
        description: `• Architected 7 production-grade web apps that pair modern UX with AI-first workflows (Gemini, OpenAI, Ollama)
      • Reduced manual support for campus events by ~70% via a RAG chatbot + Telegram automation layered on top of my Next.js/Mapbox frontend
      • Built civic dashboards with real-time WebSocket alerts, trust analytics, and WhatsApp digests; implemented Razorpay HMAC flows for ticketing
      • Lead frontend + integration efforts during hackathons, handling Next.js, Prisma/PostgreSQL, Mapbox indoor mapping, and Vercel/Docker deployments
      • Documented complex integrations (Mapbox indoor maps, WhatsApp notifications, Clerk + AES encryption) so teams can extend features quickly`,
        skills: [
          "Next.js",
          "TypeScript",
          "React",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "Firebase",
          "Prisma",
          "Gemini AI",
          "OpenAI",
          "Razorpay",
          "WebSocket",
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
          end: "08.2024",
        },
        description: `• Completed 100xDevs cohort labs, shipping progressively complex apps from vanilla JS to full-stack Next.js
• Learned system design basics, state management, REST APIs, authentication, and accessibility best practices
• Documented experiments, retros, and lessons learned to track growth`,
        skills: [
          "React",
          "JavaScript",
          "CSS",
          "Git",
          "REST APIs",
        ],
      },
    ],
  },
];
