/* FILE: src/lib/stack.ts */
import {
  Code,
  Layout,
  Server,
  Cpu,
  Terminal,
  Globe,
  Database,
  Brain
} from 'lucide-react';

// --- 1. TECHNICAL ARSENAL (STACK) ---
export const STACK = [
  {
    category: "Languages",
    items: [
      "Rust",
      "Python",
      "Go",
      "TypeScript",
      "C / C++",
      "Java",
      "SQL (PL/pgSQL)",
      "Vim Script",
      "WebAssembly"
    ],
    icon: Code,
    color: "text-rose-400"
  },
  {
    category: "Intelligence (AI)",
    items: [
      "PyTorch",
      "CUDA / Metal",
      "Transformers",
      "LLM Agents",
      "RAG Systems",
      "Real-ESRGAN",
      "Mechanistic Interpretability",
      "Scikit-Learn"
    ],
    icon: Brain,
    color: "text-fuchsia-400"
  },
  {
    category: "Systems & Infra",
    items: [
      "Linux Kernel",
      "Distributed Systems",
      "Docker / Kubernetes",
      "PostgreSQL",
      "Redis",
      "Computer Networking (TCP/IP)",
      "WebSockets",
      "System Design"
    ],
    icon: Server,
    color: "text-amber-400"
  },
  {
    category: "Product & Interface",
    items: [
      "Next.js 16",
      "React",
      "Electron",
      "Tauri",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "OSINT Tools"
    ],
    icon: Layout,
    color: "text-cyan-400"
  },
];
