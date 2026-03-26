export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  techStack: string[];
  link?: string;
  logo?: string;
}

export const EXPERIENCE: Experience[] = [
  {
    id: "tealbase",
    role: "Lead Developer & Open Source Maintainer",
    company: "TealBase",
    date: "2025 - Present",
    description:
      "Engineering an open-source Firebase alternative utilizing PostgreSQL. Architecting the core database engine, real-time WebSocket broadcasting (realtime-js), and secure JWT-based auth systems with Row Level Security. Managing open-source community contributions and infrastructure scaling.",
    techStack: ["TypeScript", "PostgreSQL", "Go", "Elixir"],
    link: "https://github.com/tealbase/tealbase",
    logo: "/tealbase-logo.svg",
  },
  {
    id: "metanthropic",
    role: "Founding Engineer & AI Researcher",
    company: "Metanthropic Lab",
    date: "2025 - Present",
    description:
      "Architecting a frontier research institution dedicated to building verifiable, interpretable, and safe Artificial General Intelligence. Leading development on cross-model generalization methodologies like Linear Gradient Matching for dataset distillation.",
    techStack: ["Python", "PyTorch", "C++", "Next.js"],
    link: "https://metanthropic.vercel.app",
    logo: "/metanthropic-logo.svg",
  },
];
