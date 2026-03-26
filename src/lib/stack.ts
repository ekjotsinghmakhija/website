/* FILE: src/lib/stack.ts */
import {
  Terminal,
  Database,
  Cpu,
  Cloud,
  Shield,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface StackCategory {
  category: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

export const STACK: StackCategory[] = [
  {
    category: "Systems & Low-Level",
    items: ["Rust", "Go", "C", "C++", "Assembly", "Bash"],
    icon: Terminal,
    color: "text-emerald-400",
  },
  {
    category: "Database & Real-Time Engines",
    items: [
      "PostgreSQL",
      "libpq",
      "PostgREST",
      "Elixir",
      "WebSockets",
      "Vector Databases",
    ],
    icon: Database,
    color: "text-blue-400",
  },
  {
    category: "AI & Applied Research",
    items: [
      "Python",
      "PyTorch",
      "Llama Models",
      "OpenRouter API",
      "Dataset Distillation",
    ],
    icon: Cpu,
    color: "text-purple-400",
  },
  {
    category: "Infrastructure & Orchestration",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform (HCL)",
      "Ansible",
      "Linux Kernel",
    ],
    icon: Cloud,
    color: "text-orange-400",
  },
  {
    category: "Security & Cryptography",
    items: ["Web Crypto API", "JWT", "Row Level Security (RLS)", "Uncrypto"],
    icon: Shield,
    color: "text-red-400",
  },
  {
    category: "Application Architecture",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Bun",
      "Tailwind CSS",
      "Qt 6",
    ],
    icon: Layers,
    color: "text-cyan-400",
  },
];
