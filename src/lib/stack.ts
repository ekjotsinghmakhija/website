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
    category: "Languages",
    items: ["Rust", "C/C++", "Go", "Python", "TypeScript", "Java", "SQL", "x86 Assembly", "Bash"],
    icon: Terminal,
    color: "text-emerald-400",
  },
  {
    category: "AI Frameworks & Tooling",
    items: [
      "PyTorch",
      "ONNX Runtime",
      "HuggingFace",
      "vLLM",
      "Transformers",
      "CUDA",
      "FlashAttention-3",
      "AWQ Quantization",
    ],
    icon: Cpu,
    color: "text-purple-400",
  },
  {
    category: "AI Research & Safety",
    items: [
      "LLM Pre-training",
      "Sparse MoE Routing",
      "Vision-Language Models (VLMs)",
      "Mechanistic Interpretability",
      "Sparse Autoencoders (SAEs)",
      "Model Alignment",
      "Intrinsic Unlearning (M-NAAR)",
      "RLVR",
    ],
    icon: Shield,
    color: "text-cyan-400",
  },
  {
    category: "Systems & Infrastructure",
    items: [
      "Autonomous Multi-Agent Systems",
      "WASM Sandboxing",
      "PostgreSQL Internals (RLS, CDC)",
      "Graph-Vector DBs",
      "WebSockets",
      "Distributed Systems (FSDP)",
      "Docker",
      "Linux Systems Administration",
    ],
    icon: Database,
    color: "text-blue-400",
  },
];
