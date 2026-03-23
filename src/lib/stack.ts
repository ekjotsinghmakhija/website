export interface StackCategory {
  category: string;
  items: string[];
}

export const STACK: StackCategory[] = [
  {
    category: "Systems & Low-Level",
    items: ["Rust", "Go", "C", "C++", "Assembly", "Bash"]
  },
  {
    category: "Database & Real-Time Engines",
    items: ["PostgreSQL", "libpq", "PostgREST", "Elixir", "WebSockets", "Vector Databases"]
  },
  {
    category: "AI & Applied Research",
    items: ["Python", "PyTorch", "Llama Models", "OpenRouter API", "Dataset Distillation"]
  },
  {
    category: "Infrastructure & Orchestration",
    items: ["Docker", "Kubernetes", "Terraform (HCL)", "Ansible", "Linux Kernel"]
  },
  {
    category: "Security & Cryptography",
    items: ["Web Crypto API", "JWT", "Row Level Security (RLS)", "Uncrypto"]
  },
  {
    category: "Application Architecture",
    items: ["TypeScript", "Next.js", "React", "Node.js", "Bun", "Tailwind CSS", "Qt 6"]
  }
];
