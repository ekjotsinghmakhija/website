/* FILE: src/lib/publications.ts */

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  date: string;
  link: string;
  description: string;
  tags: string[];
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "m-naar",
    title: "SPECIFICATION: Metanthropic Neural Ablation via Attention Refraction (M-NAAR)",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 12, 2026",
    link: "https://metanthropic.vercel.app/research/m-naar",
    description: "Introduces M-NAAR to resolve the 'Unlearning Trilemma.' By refracting attention away from high-entropy tokens rather than destroying weights, we achieve 0.00 hallucination rates and robust deletion without lobotomizing the model.",
    tags: ["Machine Unlearning", "Safety", "Attention Mechanism"]
  },
  {
    id: "latent-logic-topology",
    title: "Specification for Latent Logic Topology & Soundness-Aware Calibration",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 10, 2026",
    link: "https://metanthropic.vercel.app/research/latent-logic-topology",
    description: "Operationalizes LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox. Introduces the Soundness-Aware Level (SAL), a microscopic metric that predicts post-alignment reasoning performance with 87% accuracy.",
    tags: ["RLVR", "Latent Topology", "SAEs", "Scaling Laws"]
  },
  {
    id: "kp-idp",
    title: "The Kinetic-Potential Information Disentanglement Protocol (KP-IDP)",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 7, 2026",
    link: "https://metanthropic.vercel.app/research/kp-idp",
    description: "Invalidates the dangerous conflation that Decodability equals Causality. Introduces KP-IDP to distinguish between 'Dark Computation' (Kinetic) and 'Phantom Readouts' (Potential), solving the intervention-reversal paradox.",
    tags: ["Causal Inference", "Model Steering", "Safety"]
  },
  {
    id: "chronometric-flux-gating",
    title: "Module 003-CFG: Chronometric Flux Gating",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 6, 2026",
    link: "https://metanthropic.vercel.app/research/chronometric-flux-gating",
    description: "A dynamic regularization protocol that eliminates Latent Manifold Collapse in Sparse Autoencoders. By treating feature importance as a temporal trajectory, CFG reduces feature absorption by 95% compared to Top-K baselines.",
    tags: ["Sparse Autoencoders", "Interpretability", "Manifold Stabilization"]
  },
  {
    id: "oblique-guard",
    title: "PROJECT OBLIQUE-GUARD: Latent Geometry Stabilization",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 4, 2026",
    link: "https://metanthropic.vercel.app/research/oblique-guard",
    description: "Demonstrates that adversarial vulnerability is a deterministic artifact of Superposition. Introduces the Oblique-Guard Layer to filter geometric exploits by treating them as unique digital signatures within the interference lattice.",
    tags: ["Adversarial Robustness", "Latent Geometry", "Superposition"]
  },
  {
    id: "moral-bias",
    title: "Analysing Moral Bias in Finetuned LLMs through Mechanistic Interpretability",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 2, 2026",
    link: "https://metanthropic.vercel.app/research/moral-bias",
    description: "Proves that SFT introduces the 'Knobe Effect' moral asymmetry where negative outcomes are judged as more intentional. Proposes surgical Iso-Semantic Residual Injection (ISRI) to restore logical neutrality without degrading general reasoning.",
    tags: ["Mechanistic Interpretability", "AI Ethics", "Alignment"]
  },
  {
    id: "arvi-20b",
    title: "Arvi 20B: Democratizing Reasoning with Efficient MoEs",
    conference: "Metanthropic Research",
    year: "2026",
    date: "January 31, 2026",
    link: "https://metanthropic.vercel.app/research/arvi-20b",
    description: "An open-weight Mixture-of-Experts reasoning model. With 20.9B total parameters and only 3.6B active parameters, it rivals frontier models on math, coding, and agentic benchmarks through variable effort reasoning.",
    tags: ["Mixture-of-Experts", "Reasoning", "Open Weights"]
  },
  {
    id: "mahenocr",
    title: "MahenOCR: Commercial-Grade OCR with a 1B Parameter VLM",
    conference: "Metanthropic Research",
    year: "2026",
    date: "January 30, 2026",
    link: "https://metanthropic.vercel.app/research/mahenocr",
    description: "A 1B parameter vision-language model achieving state-of-the-art OCR through a unified end-to-end architecture. Utilizes Reinforcement Learning with Verifiable Rewards (RLVR) to eliminate cascaded module error propagation.",
    tags: ["OCR", "Vision-Language Models", "Reinforcement Learning"]
  },
  {
    id: "fragility-of-guardrails",
    title: "The Fragility of Guardrails: Cognitive Jamming and Repetition Collapse in Safety-Steered LLMs",
    conference: "Metanthropic Research",
    year: "2025",
    date: "December 23, 2025",
    link: "https://metanthropic.vercel.app/research/fragility-of-guardrails",
    description: "A mechanistic audit of LLM residual streams using Sparse Autoencoders (SAEs). Demonstrates that aggressive safety-steering vectors often interfere with latent world-modeling circuits, triggering 'Cognitive Jamming'.",
    tags: ["Mechanistic Interpretability", "Safety", "Physics"]
  },
  {
    id: "dataset-distillation",
    title: "Dataset Distillation for the Pre-Training Era",
    conference: "Metanthropic Research",
    year: "2025",
    date: "December 17, 2025",
    link: "https://metanthropic.vercel.app/research/dataset-distillation",
    description: "Introduces Linear Gradient Matching (LGM) to condense massive datasets into a single synthetic image per class, revealing shared 'Platonic' representations across foundation models (CLIP, DINO-v2).",
    tags: ["Generative Vision", "Foundation Models", "Distillation"]
  },
  {
    id: "announcing-metanthropic",
    title: "Announcing Metanthropic",
    conference: "Milestone",
    year: "2025",
    date: "November 10, 2025",
    link: "https://metanthropic.vercel.app/research/announcing-metanthropic",
    description: "Founding declaration of Metanthropic, a frontier research institution architecting deterministic AI systems where safety and reasoning are verifiable, intrinsic properties of intelligence.",
    tags: ["Milestone", "Company", "Founding"]
  }
];
