export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  // --- 2026 RESEARCH & SYSTEMS ---
  { title: "Solving the Unlearning Trilemma with M-NAAR", date: "Feb 12, 2026", slug: "unlearning-trilemma-m-naar", excerpt: "Achieving zero hallucination rates in model unlearning by refracting attention heads away from high-entropy fact tokens.", readTime: "8 min read", tags: ["Safety", "Research"] },
  { title: "Operationalizing Latent Logic Topologies", date: "Feb 10, 2026", slug: "latent-logic-topology", excerpt: "Predicting reasoning performance with 87% accuracy using the Soundness-Aware Level (SAL) metric.", readTime: "10 min read", tags: ["LLMs", "SAEs"] },
  { title: "Chromabase: Encoding Filesystems into Pixels", date: "Feb 08, 2026", slug: "chromabase-rust-storage", excerpt: "Building a high-density Rust utility that bypasses cloud storage limits by treating video archives as raw data containers.", readTime: "7 min read", tags: ["Rust", "Systems"] },
  { title: "Kinetic-Potential Information Disentanglement", date: "Feb 07, 2026", slug: "kp-idp", excerpt: "Distinguishing active computation from phantom readouts to solve the intervention-reversal paradox.", readTime: "9 min read", tags: ["Interpretability", "Causality"] },
  { title: "Eliminating Manifold Collapse with CFG", date: "Feb 06, 2026", slug: "chronometric-flux-gating-cfg", excerpt: "Reducing SAE feature absorption by 95.1% using temporal trajectory gating instead of spatial thresholds.", readTime: "6 min read", tags: ["SAEs", "Interpretability"] },
  { title: "Filtering Geometric Exploits with Oblique-Guard", date: "Feb 04, 2026", slug: "oblique-guard-latent-geometry", excerpt: "Treating adversarial vulnerability as a deterministic artifact of superposition and building geometric filters.", readTime: "8 min read", tags: ["Robustness", "Geometry"] },
  { title: "The Knobe Effect in Finetuned LLMs", date: "Feb 02, 2026", slug: "moral-bias-interpretability", excerpt: "Localizing moral bias to specific layers and proposing surgical Iso-Semantic Residual Injection (ISRI).", readTime: "7 min read", tags: ["AI Ethics", "Safety"] },
  { title: "Arvi 20B: Reasoning at Scale with MoEs", date: "Jan 31, 2026", slug: "arvi-20b-moe-release", excerpt: "Engineering an open-weight model with 3.6B active parameters that rivals frontier reasoning performance.", readTime: "12 min read", tags: ["MoE", "Open Weights"] },
  { title: "Commercial-Grade OCR with a 1B Parameter VLM", date: "Jan 30, 2026", slug: "mahenocr-vlm-architecture", excerpt: "Using SigLIP-v2 and RLVR to build MahenOCR—a vision model that eliminates module error propagation.", readTime: "9 min read", tags: ["Vision", "VLM"] },
  { title: "VostSQL: DB Engine Architecture", date: "Jan 25, 2026", slug: "vostsql-engine-architecture", excerpt: "Re-engineering an object-relational database engine for modern workloads with optimized instruction frames.", readTime: "11 min read", tags: ["C++", "Databases"] },
  { title: "AhhCode: AI-Powered Terminals", date: "Jan 24, 2026", slug: "ahhcode-ai-assistant", excerpt: "Architecting an agent that turns the CLI into a pair programmer using advanced developer workflow automation.", readTime: "6 min read", tags: ["AI", "Developer Tools"] },
  { title: "pg_listen: Zero-Polling Database Triggers", date: "Jan 15, 2026", slug: "pg-listen-c-postgres", excerpt: "High-performance database event interception using the native libpq interface in pure C.", readTime: "5 min read", tags: ["C", "PostgreSQL"] },
  { title: "Mohenjo: Visualizing Productivity in 3D", date: "Jan 05, 2026", slug: "mohenjo-3d-ui", excerpt: "Building a city-inspired UI for developer workflow management using Next.js and Convex.", readTime: "6 min read", tags: ["Next.js", "UX"] },
  // --- 2025 MILESTONES ---
  { title: "Cognitive Jamming in Safety-Steered LLMs", date: "Dec 23, 2025", slug: "fragility-of-guardrails", excerpt: "A mechanistic audit revealing how safety vectors interfere with internal physics and world-modeling circuits.", readTime: "10 min read", tags: ["Mechanistic Interpretability", "Physics"] },
  { title: "Dataset Distillation via Gradient Matching", date: "Dec 17, 2025", slug: "dataset-distillation-lgm", excerpt: "Condensing massive datasets into synthetic images to reveal Platonic representations across diverse models.", readTime: "8 min read", tags: ["Distillation", "Vision"] },
  { title: "HTTP 1.1 from Scratch in Go", date: "Nov 20, 2025", slug: "http-from-scratch-go", excerpt: "Engineering a custom HTTP server over raw TCP sockets to understand the true cost of abstraction.", readTime: "7 min read", tags: ["Go", "Networking"] },
  { title: "Why I Founded Metanthropic", date: "Nov 10, 2025", slug: "announcing-metanthropic", excerpt: "Declaring our lab's mission to engineer deterministic AI systems where safety is a property of physics.", readTime: "5 min read", tags: ["AGI", "Founding"] },
  { title: "Tealbase: Realtime Magic for Postgres", date: "Aug 20, 2025", slug: "why-tealbase", excerpt: "Solving the 'Success Disaster' by bridging Firebase's speed with Postgres's raw SQL power.", readTime: "6 min read", tags: ["BaaS", "Postgres"] },
  { title: "Buttery Auth: Comprehensive Security", date: "Sep 24, 2025", slug: "buttery-auth-security", excerpt: "A full-stack framework making TypeScript authentication feel smooth without compromising safety.", readTime: "6 min read", tags: ["TypeScript", "Security"] },
  { title: "Drawing with DOM: HTML to SVG", date: "Aug 05, 2025", slug: "azhn-html-svg", excerpt: "Building a lightweight engine to compile HTML/CSS directly to SVG without headless browsers.", readTime: "4 min read", tags: ["SVG", "Frontend"] }
];
