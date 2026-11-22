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
    id: "radonharbor",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    company: "RadonHarbor (Stealth AI Startup)",
    date: "Jul 2026 – Present",
    description:
      "Architected AEGIS, an autonomous multi-agent OS in Rust/Python with WASM sandboxing and high-concurrency orchestration primitives—achieving 95%+ task completion accuracy across enterprise workflows. Engineered zero-trust security layers and real-time telemetry pipelines to enforce sub-second multi-agent decision execution.",
    techStack: ["Rust", "Python", "WASM", "Multi-Agent Systems", "Zero-Trust", "Telemetry"],
    link: "https://github.com/ekjotsinghmakhija",
  },
  {
    id: "metanthropic",
    role: "Founder & Chief Scientist",
    company: "Metanthropic AI (Stealth AI Research Lab)",
    date: "Nov 2025 – Present",
    description:
      "Founded an independent frontier research lab; pre-trained open-weight foundational models (Arvi 20B MoE) deployed and adopted by 1,000+ AI researchers and engineers. Pioneered intrinsic alignment & safety pipelines in PyTorch/C++ by integrating attention refraction (M-NAAR), interpretability, and deterministic unlearning protocols.",
    techStack: ["PyTorch", "C++", "MoE Pre-training", "M-NAAR", "Interpretability", "SAEs"],
    link: "https://metanthropic.vercel.app",
    logo: "/metanthropic-logo.svg",
  },
  {
    id: "tealbase",
    role: "Lead Systems Architect & Core Author",
    company: "Tealbase (Open Source)",
    date: "2025 – 2026",
    description:
      "Architected an open-source Postgres BaaS in Go with auto-generated REST APIs, native Row Level Security (RLS), and a Change Data Capture (CDC) engine—empowering 10+ SMBs while enforcing sub-50ms WebSocket event propagation.",
    techStack: ["Go", "TypeScript", "PostgreSQL Internals", "CDC", "WebSockets", "BaaS"],
    link: "https://github.com/tealbase/tealbase",
    logo: "/tealbase-logo.svg",
  },
];
