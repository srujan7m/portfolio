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
  isCollaborative?: boolean;
  myRole?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "campus-flow",
    title: "Campus Flow",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/srujan7m/Campus-Flow",
    description: `**Problem.** College fests were drowning in manual registration, repeated FAQs, and zero real-time support.

  **My build.** During an 8-hour hackathon I owned everything non-AI: the Next.js + Tailwind UI, Razorpay order + HMAC verification pipeline, Mapbox indoor maps with POI markers, Telegram webhook wiring, and Firebase dashboards.

  **Impact.** Automated ~70% of attendee support, processed ₹500+ payments without fraud, and gave organizers live visibility into registrations and ticket escalations.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Razorpay",
      "Mapbox GL JS",
      "Telegram Bot API",
    ],
    isCollaborative: true,
    myRole: "Frontend + Payments + Maps",
  },
  {
    id: "citysense",
    title: "CitySense",
    period: {
      start: "11.2024",
    },
    link: "https://github.com/srujan7m/CitySense",
    description: `**Problem.** Citizens report potholes, power cuts, and waste issues in silos; no live feedback loop exists.

  **My build.** Led the full Next.js 16 (App Router + Turbopack) frontend, multi-step report flow with map picker, Prisma/PostgreSQL schema, and custom WebSocket server powering WhatsApp digests. Teammates handled the predictive AI scoring.

  **Impact.** Residents now track trust scores, live resolution timelines, and subscribe to hyperlocal updates—all backed by the data infrastructure I wired.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "WebSocket",
      "Framer Motion",
    ],
    isCollaborative: true,
    myRole: "Full Frontend + WebSocket",
  },
  {
    id: "zentraai",
    title: "ZentraAi",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/srujan7m/ZentraAi",
    description: `**Problem.** Learners need tailored study paths, not generic course dumps.

  **My build.** Set up the Turborepo monorepo, Next.js web app, Tailwind/shadcn UI, Docker Compose developer workflow, and the bridge that talks to our FastAPI AI services. Teammates focused on fine-tuning the AI roadmap + interview logic.

  **Impact.** Anyone can clone the repo, run \`pnpm docker\`, and immediately access the full platform locally with synchronized frontend/backends.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Docker Compose",
      "pnpm Workspaces",
      "FastAPI Integration",
    ],
    isCollaborative: true,
    myRole: "Frontend + DevOps",
  },
  {
    id: "classcode",
    title: "ClassCode",
    period: {
      start: "09.2024",
    },
    link: "https://github.com/srujan7m/classcode",
    description: `**Vision.** Discord + Slack + encrypted code sharing for dev classrooms.

  **Features.** macOS-style code windows with syntax highlighting for 6+ languages, Discord-like folders, Cmd/K global search, manual/email-domain approvals, and real-time edits over WebSocket with diff-match-patch history.

**Security.** Messages are compressed with zlib, encrypted via AES-256-GCM before hitting PostgreSQL, and permissions enforced via Clerk + Prisma policies.

**Ownership.** Solo build—from product brief to deployment—covering the full Next.js stack, encryption layer, and polish.`,
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AES-256-GCM",
      "WebSocket",
      "Clerk",
      "Tailwind CSS",
    ],
    myRole: "Solo build",
  },
  {
    id: "idea-evaluator",
    title: "Startup Idea Evaluator",
    period: {
      start: "10.2024",
    },
    link: "https://idea-evaluator-henna.vercel.app",
    description: `**Problem.** Early founders jump into code without validating if the opportunity is defensible.

  **Solution.** Gemini/OpenAI/Ollama powered insights feed a scoring engine across Market, Moat, and Monetization. Users get radar charts, CSV exports, and "best evaluation" recaps.

  **Result.** Helps founders compare pitches before writing a single line of product code.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Gemini AI",
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
    description: `Built a brutalist, monochrome file vault with drag-drop uploads, instant fuzzy search, and share links. Accessibility-first design plus Clerk auth, ImageKit CDN handling, Drizzle ORM, and PostgreSQL for metadata.`,
    skills: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "ImageKit",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
    ],
  },
  {
    id: "brainly",
    title: "Brainly",
    period: {
      start: "10.2024",
    },
    link: "https://brainly-rho.vercel.app",
    description: `Visual bookmarking for YouTube + X content with oEmbed previews, tag filters, and shareable boards. My daily knowledge hub to keep learning experiments organized.`,
    skills: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "YouTube API",
      "Tailwind CSS",
    ],
  },
];
