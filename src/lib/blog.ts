/* FILE: src/lib/blog.ts */

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  // --- 2026 RESEARCH & SYSTEMS ---
  {
    title: "Solving the Unlearning Trilemma with M-NAAR",
    date: "Feb 12, 2026",
    excerpt: "Achieving zero hallucination rates in model unlearning by refracting attention away from high-entropy fact tokens instead of destroying weights.",
    slug: "unlearning-trilemma-m-naar",
    tags: ["AI Safety", "Research", "Attention"],
    readTime: "8 min read"
  },
  {
    title: "Operationalizing Latent Logic Topologies",
    date: "Feb 10, 2026",
    excerpt: "Predicting reasoning performance with 87% accuracy by auditing the 'Intrinsic Soundness' of a model's high-dimensional latent space.",
    slug: "latent-logic-topology",
    tags: ["LLMs", "Mechanistic Interpretability"],
    readTime: "10 min read"
  },
  {
    title: "Chromabase: Encoding Filesystems into Pixels",
    date: "Feb 08, 2026",
    excerpt: "Building a high-density Rust utility that bypasses cloud storage limits by treating video archives as raw data containers.",
    slug: "chromabase-rust-storage",
    tags: ["Rust", "Systems", "Infrastructure"],
    readTime: "7 min read"
  },
  {
    title: "Disentangling Kinetic and Potential Information",
    date: "Feb 07, 2026",
    excerpt: "Introducing KP-IDP to solve the intervention-reversal paradox by distinguishing between active computation and phantom readouts.",
    slug: "kinetic-potential-disentanglement",
    tags: ["Information Theory", "Safety"],
    readTime: "9 min read"
  },
  {
    title: "Eliminating Manifold Collapse with CFG",
    date: "Feb 06, 2026",
    excerpt: "How Chronometric Flux Gating reduces feature absorption in Sparse Autoencoders by 95% using temporal trajectory mapping.",
    slug: "chronometric-flux-gating-cfg",
    tags: ["SAEs", "Interpretability"],
    readTime: "6 min read"
  },
  {
    title: "Filtering Geometric Exploits with Oblique-Guard",
    date: "Feb 04, 2026",
    excerpt: "Treating adversarial vulnerability as a deterministic artifact of superposition and building a geometric filter for attack signatures.",
    slug: "oblique-guard-latent-geometry",
    tags: ["Robustness", "Geometry"],
    readTime: "8 min read"
  },
  {
    title: "The Knobe Effect in Finetuned LLMs",
    date: "Feb 02, 2026",
    excerpt: "Localizing moral bias to specific transformer layers and proposing ISO-Semantic Residual Injection (ISRI) to restore neutrality.",
    slug: "moral-bias-interpretability",
    tags: ["Ethics", "SFT", "Alignment"],
    readTime: "7 min read"
  },
  {
    title: "Arvi 20B: Reasoning at Scale with MoEs",
    date: "Jan 31, 2026",
    excerpt: "Engineering an open-weight reasoning model that rivals frontier performance with only 3.6B active parameters.",
    slug: "arvi-20b-moe-release",
    tags: ["MoE", "Open Weights"],
    readTime: "12 min read"
  },
  {
    title: "Commercial-Grade OCR with a 1B Parameter VLM",
    date: "Jan 30, 2026",
    excerpt: "Using RLVR and SigLIP-v2 to build MahenOCR—a vision model that eliminates cascaded module error propagation.",
    slug: "mahenocr-vlm-architecture",
    tags: ["Vision", "OCR", "VLM"],
    readTime: "9 min read"
  },
  {
    title: "VostSQL: Instructions for Modern Workloads",
    date: "Jan 25, 2026",
    excerpt: "Re-engineering an object-relational database engine with optimized instruction frames in C++.",
    slug: "vostsql-engine-architecture",
    tags: ["Databases", "C++", "Systems"],
    readTime: "11 min read"
  },
  {
    title: "pg_listen: Zero-Polling Database Triggers in C",
    date: "Jan 15, 2026",
    excerpt: "Utilizing native PostgreSQL libpq to bridge the gap between database state and OS-level shell commands.",
    slug: "pg-listen-c-postgres",
    tags: ["C", "PostgreSQL", "Low-Level"],
    readTime: "5 min read"
  },
  {
    title: "Mohenjo: Visualizing Productivity in 3D",
    date: "Jan 05, 2026",
    excerpt: "Building a city-building inspired UI for managing developer workflows using Next.js and Convex.",
    slug: "mohenjo-3d-ui",
    tags: ["Next.js", "Convex", "UX"],
    readTime: "6 min read"
  },

  // --- 2025 LEGACYdeep-dives ---
  {
    title: "Cognitive Jamming in Safety-Steered LLMs",
    date: "Dec 23, 2025",
    excerpt: "A mechanistic audit of LLM residual streams revealing how safety vectors interfere with internal physics engines.",
    slug: "fragility-of-guardrails",
    tags: ["AI Safety", "SAEs"],
    readTime: "10 min read"
  },
  {
    title: "Dataset Distillation via Gradient Matching",
    date: "Dec 17, 2025",
    excerpt: "Condensing massive datasets into single synthetic images to reveal the Platonic representations shared across models.",
    slug: "dataset-distillation-lgm",
    tags: ["Computer Vision", "Distillation"],
    readTime: "8 min read"
  },
  {
    title: "HTTP 1.1 from Scratch in Go",
    date: "Nov 20, 2025",
    excerpt: "Engineering a custom HTTP server over raw TCP sockets to understand the true cost of abstraction.",
    slug: "http-from-scratch-go",
    tags: ["Go", "Networking"],
    readTime: "7 min read"
  },
  {
    title: "Why I Founded Metanthropic",
    date: "Nov 10, 2025",
    excerpt: "The founding declaration of a lab architecting deterministic AI systems where safety is a property of physics.",
    slug: "announcing-metanthropic",
    tags: ["Milestone", "AGI"],
    readTime: "5 min read"
  },
  {
    title: "Tealbase: Realtime Magic for Postgres",
    date: "Aug 20, 2025",
    excerpt: "Ending the compromise between Firebase's speed and Postgres's correctness.",
    slug: "why-tealbase",
    tags: ["BaaS", "Postgres", "Go"],
    readTime: "8 min read"
  }
];
