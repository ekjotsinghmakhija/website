export interface BlogPost {
  title: string; date: string; slug: string; excerpt: string; readTime: string; tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  /* --- 2026 RESEARCH (11) --- */
  { title: "Solving the Unlearning Trilemma with M-NAAR", date: "Feb 12, 2026", slug: "unlearning-trilemma-m-naar", excerpt: "Achieving 0.00 hallucination rates in model unlearning by refracting attention away from high-entropy tokens.", readTime: "8 min read", tags: ["Safety", "Research"] },
  { title: "Latent Logic Topology & SAL Calibration", date: "Feb 10, 2026", slug: "latent-logic-topology", excerpt: "Operationalizing LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox with 87% accuracy.", readTime: "10 min read", tags: ["LLMs", "SAEs"] },
  { title: "KP-IDP: Kinetic-Potential Disentanglement", date: "Feb 07, 2026", slug: "kp-idp", excerpt: "Invalidating the axiom that Decodability equals Causality by identifying active 'Dark Computation'.", readTime: "9 min read", tags: ["Interpretability", "Causality"] },
  { title: "Module 003-CFG: Chronometric Flux Gating", date: "Feb 06, 2026", slug: "chronometric-flux-gating-cfg", excerpt: "Eliminating Latent Manifold Collapse in Sparse Autoencoders with temporal trajectory gating.", readTime: "6 min read", tags: ["SAEs", "Interpretability"] },
  { title: "PROJECT OBLIQUE-GUARD: Latent Stabilization", date: "Feb 04, 2026", slug: "oblique-guard-latent-geometry", excerpt: "Treating adversarial vulnerability as a deterministic artifact of Superposition and filtering geometric exploits.", readTime: "8 min read", tags: ["Robustness", "Geometry"] },
  { title: "Analyzing Moral Bias in Finetuned LLMs", date: "Feb 02, 2026", slug: "moral-bias-interpretability", excerpt: "Localizing the 'Knobe Effect' asymmetry to modular layers and proposing surgical ISRI intervention.", readTime: "7 min read", tags: ["AI Ethics", "Safety"] },
  { title: "Arvi 20B: Democratizing Reasoning MoEs", date: "Jan 31, 2026", slug: "arvi-20b-moe-release", excerpt: "An open-weight model with 3.6B active parameters that rivals frontier reasoning models.", readTime: "12 min read", tags: ["MoE", "Open Weights"] },
  { title: "MahenOCR: Commercial-Grade 1B VLM", date: "Jan 30, 2026", slug: "mahenocr-vlm-architecture", excerpt: "A unified end-to-end vision-language model achieving state-of-the-art OCR via RLVR.", readTime: "9 min read", tags: ["Vision", "VLM"] },
  { title: "Fragility of Guardrails: Cognitive Jamming", date: "Dec 23, 2025", slug: "fragility-of-guardrails", excerpt: "A mechanistic audit revealing how models spontaneously construct internal physics engines.", readTime: "10 min read", tags: ["SAEs", "Physics"] },
  { title: "Dataset Distillation via Gradient Matching", date: "Dec 17, 2025", slug: "dataset-distillation-lgm", excerpt: "Using Linear Gradient Matching to condense datasets into shared Platonic representations.", readTime: "8 min read", tags: ["Distillation", "Vision"] },
  { title: "Announcing Metanthropic", date: "Nov 10, 2025", slug: "announcing-metanthropic", excerpt: "Declaring our lab mission to engineer deterministic systems with verifiable safety.", readTime: "5 min read", tags: ["AGI", "Founding"] },
  /* --- PROJECTS & SYSTEMS (19) --- */
  { title: "Chromabase: Filesystems into Pixels", date: "Feb 08, 2026", slug: "chromabase-rust-storage", excerpt: "A powerful Rust CLI utility for high-density cloud storage bypass via video archives.", readTime: "7 min read", tags: ["Rust", "Systems"] },
  { title: "VostSQL: DB Engine Architecture", date: "Jan 25, 2026", slug: "vostsql-engine-architecture", excerpt: "Re-engineering object-relational databases for modern instruction frames.", readTime: "11 min read", tags: ["C++", "Databases"] },
  { title: "AhhCode: AI-Powered Assistant", date: "Jan 24, 2026", slug: "ahhcode-ai-assistant", excerpt: "Architecting an agent that turns the CLI into a pair programmer.", readTime: "6 min read", tags: ["AI", "Developer Tools"] },
  { title: "pg_listen: Zero-Polling Triggers", date: "Jan 15, 2026", slug: "pg-listen-c-postgres", excerpt: "Database event interception using native libpq in pure C.", readTime: "5 min read", tags: ["C", "PostgreSQL"] },
  { title: "Mohenjo: Visualizing Productivity in 3D", date: "Jan 05, 2026", slug: "mohenjo-3d-ui", excerpt: "Building a city-inspired UI for developer workflow management.", readTime: "6 min read", tags: ["Next.js", "UX"] },
  { title: "HTTP 1.1 from Scratch over TCP", date: "Nov 20, 2025", slug: "httpfromtcp-server", excerpt: "Engineering a custom HTTP server over raw TCP sockets in Go.", readTime: "7 min read", tags: ["Go", "Networking"] },
  { title: "Why I Built Tealbase", date: "Aug 20, 2025", slug: "why-tealbase", excerpt: "Solving the 'Success Disaster' by bridging Firebase speed with Postgres power.", readTime: "6 min read", tags: ["BaaS", "Postgres"] },
  { title: "Buttery Auth: Comprehensive Security", date: "Sep 24, 2025", slug: "buttery-auth-security", excerpt: "A full-stack framework making TypeScript authentication feel smooth.", readTime: "6 min read", tags: ["TypeScript", "Security"] },
  { title: "Drawing with DOM: HTML to SVG", date: "Aug 05, 2025", slug: "azhn-html-svg", excerpt: "Generating dynamic SVG from HTML without headless browsers.", readTime: "4 min read", tags: ["SVG", "Frontend"] },
  { title: "SIM8086: Hardware Emulation", date: "Feb 03, 2026", slug: "sim8086-emulator", excerpt: "A modular hardware emulator for the Intel 8086 microprocessor.", readTime: "8 min read", tags: ["C++", "Qt"] },
  { title: "Dataset Distillation (DDPTECMGLGM)", date: "Jan 12, 2026", slug: "ddptecmglgm-distillation", excerpt: "Linear Gradient Matching for cross-model dataset distillation.", readTime: "9 min read", tags: ["Python", "PyTorch"] },
  { title: "Llama C++ Python Bindings", date: "Dec 30, 2025", slug: "llama-bindings-cpp-python", excerpt: "Optimizing Meta Llama deployment on consumer hardware.", readTime: "5 min read", tags: ["Python", "C++"] },
  { title: "Linux Kernel Contributions", date: "Nov 15, 2025", slug: "linux-kernel-memories", excerpt: "Lower-level optimization of system calls and memory management.", readTime: "15 min read", tags: ["C", "Kernel"] },
  { title: "Distributed SQL with TiDB", date: "Oct 20, 2025", slug: "tidb-contributions", excerpt: "Scaling HTAP workloads in Go for distributed databases.", readTime: "9 min read", tags: ["Go", "Distributed Systems"] },
  { title: "Kusion: Platform Orchestration", date: "Sep 12, 2025", slug: "kusion-orchestration", excerpt: "Declarative orchestration for Internal Developer Platforms.", readTime: "7 min read", tags: ["Go", "Kubernetes"] },
  { title: "SyntriFabric: Terraform Core", date: "Aug 28, 2025", slug: "syntrifabric-terraform", excerpt: "Extending HCL providers for multi-cloud automation.", readTime: "8 min read", tags: ["Go", "HCL"] },
  { title: "PostgREST JS: Isomorphic Queries", date: "Aug 10, 2025", slug: "postgrest-js-library", excerpt: "An isomorphic client for PostgreSQL REST interfaces.", readTime: "6 min read", tags: ["JS", "Postgres"] },
  { title: "WibesCheck: OSINT Web Intelligence", date: "Jan 06, 2026", slug: "wibes-check-osint", excerpt: "Forensic analysis of digital footprints for web intelligence.", readTime: "4 min read", tags: ["OSINT", "Security"] },
  { title: "LLM Group Chat: Adversarial Debate", date: "Dec 15, 2025", slug: "llm-groupchat-debate", excerpt: "Multi-agent boardroom forcing consensus through adversarial debate.", readTime: "5 min read", tags: ["AI", "Agents"] }
];
