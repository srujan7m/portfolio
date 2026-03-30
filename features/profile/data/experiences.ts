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
        title: "Full-stack Developer",
        type: "Independent",
        period: {
          start: "08.2024",
        },
        description: `• Developed 7 production-grade web applications integrating modern UI/UX with AI-driven workflows (Gemini, OpenAI, Ollama)
      • Reduced manual support workload for campus events by ~70% using a RAG-based chatbot integrated with Telegram automation and a Next.js + Mapbox frontend
      • Built civic dashboards featuring real-time WebSocket alerts, trust analytics, and WhatsApp summaries; implemented secure Razorpay payment flows (HMAC)
      • Led frontend architecture and system integrations in hackathons, working with Next.js, Prisma/PostgreSQL, Mapbox indoor mapping, and Vercel/Docker deployments
      • Documented complex integrations (Mapbox, WhatsApp APIs, Clerk authentication, AES encryption) to improve scalability and team collaboration`,
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
          "WebSockets",
        ],
      },
    ],
  },
];
