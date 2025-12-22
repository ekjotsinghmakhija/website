import {
  Code,
  Layout,
  Server,
  Cpu,
} from 'lucide-react';

// --- 1. TECHNICAL ARSENAL (STACK) ---
export const STACK = [
  {
    category: "Languages",
    items: [
      "Rust",
      "Python",
      "Go",
      "Java",
      "C",
      "C++",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "Elixir",
      "Perl",
      "Vim Script",
      "PLpgSQL"
    ],
    icon: Code
  },
  {
    category: "Full Stack",
    items: [
      "Next.js 16",
      "React",
      "HTML",
      "CSS",
      "MDX",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js"
    ],
    icon: Layout
  },
  {
    category: "Infrastructure",
    items: [
      "FastAPI",
      "PostgreSQL",
      "Docker (Dockerfile)",
      "Kubernetes",
      "Redis",
      "Computer Networking"
    ],
    icon: Server
  },
  {
    category: "AI & Research",
    items: [
      "PyTorch",
      "TensorFlow",
      "CUDA",
      "Transformers",
      "Scikit-Learn",
      "Mechanistic Interpretability"
    ],
    icon: Cpu
  },
];

