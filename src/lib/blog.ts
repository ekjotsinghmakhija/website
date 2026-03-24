export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Solving the Unlearning Trilemma with M-NAAR",
    date: "Feb 12, 2026",
    slug: "unlearning-trilemma-m-naar",
    excerpt: "Achieving zero hallucination rates in model unlearning by refracting attention away from high-entropy tokens.",
    readTime: "8 min read",
    tags: ["Safety", "Research"]
  },
  {
    title: "Operationalizing Latent Logic Topologies",
    date: "Feb 10, 2026",
    slug: "latent-logic-topology",
    excerpt: "Predicting reasoning performance with 87% accuracy by auditing model 'Intrinsic Soundness'.",
    readTime: "10 min read",
    tags: ["LLMs", "SAEs"]
  },
  {
    title: "Chromabase: Encoding Filesystems into Pixels",
    date: "Feb 08, 2026",
    slug: "chromabase-rust-storage",
    excerpt: "Building a high-density Rust utility that bypasses cloud storage limits via video archives.",
    readTime: "7 min read",
    tags: ["Rust", "Systems"]
  },
  {
    title: "Eliminating Manifold Collapse with CFG",
    date: "Feb 06, 2026",
    slug: "chronometric-flux-gating-cfg",
    excerpt: "How Chronometric Flux Gating reduces feature absorption in Sparse Autoencoders by 95%.",
    readTime: "6 min read",
    tags: ["Interpretability", "SAEs"]
  },
  {
    title: "Arvi 20B: Reasoning at Scale with MoEs",
    date: "Jan 31, 2026",
    slug: "arvi-20b-moe-release",
    excerpt: "Engineering an open-weight reasoning model that rivals frontier performance with 3.6B active parameters.",
    readTime: "12 min read",
    tags: ["MoE", "Open Weights"]
  },
  {
    title: "pg_listen: Zero-Polling Database Triggers in C",
    date: "Jan 15, 2026",
    slug: "pg-listen-c-postgres",
    excerpt: "Utilizing native PostgreSQL libpq to bridge the gap between database state and OS commands.",
    readTime: "5 min read",
    tags: ["C", "PostgreSQL"]
  },
  {
    title: "Why I Built Tealbase",
    date: "Aug 20, 2025",
    slug: "why-tealbase",
    excerpt: "Ending the compromise between Firebase's speed and Postgres's correctness.",
    readTime: "6 min read",
    tags: ["Postgres", "Go"]
  }
];
