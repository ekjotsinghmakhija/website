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
    link: "/publications/m-naar",
    description: "Resolves the 'Unlearning Trilemma' by refracting attention away from high-entropy tokens rather than destroying weights. Achieves 0.00 hallucination rates and robust deletion without model lobotomy.",
    tags: ["Machine Unlearning", "Safety", "Attention Mechanism", "LoRA"]
  },
  {
    id: "latent-logic-topology",
    title: "Specification for Latent Logic Topology & Soundness-Aware Calibration",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 10, 2026",
    link: "/publications/latent-logic-topology",
    description: "Operationalizes LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox. Introduces the Soundness-Aware Level (SAL), a metric that predicts post-alignment reasoning performance with 87% accuracy.",
    tags: ["RLVR", "Latent Topology", "Sparse Autoencoders", "Scaling Laws"]
  },
  {
    id: "kp-idp",
    title: "The Kinetic-Potential Information Disentanglement Protocol (KP-IDP)",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 7, 2026",
    link: "/publications/kp-idp",
    description: "Standard interpretability relies on a dangerous conflation that Decodability equals Causality. We introduce KP-IDP to distinguish between 'Dark Computation' (Kinetic) and 'Phantom Readouts' (Potential).",
    tags: ["Causal Inference", "Model Steering", "Mechanistic Interpretability", "Safety"]
  },
  {
    id: "chronometric-flux-gating",
    title: "Module 003-CFG: Chronometric Flux Gating",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 6, 2026",
    link: "/publications/chronometric-flux-gating",
    description: "A dynamic regularization protocol that eliminates Latent Manifold Collapse in Sparse Autoencoders by treating feature importance as a temporal trajectory, reducing feature absorption by 95%.",
    tags: ["Sparse Autoencoders", "Interpretability", "Manifold Stabilization"]
  },
  {
    id: "oblique-guard",
    title: "PROJECT OBLIQUE-GUARD: Latent Geometry Stabilization",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 4, 2026",
    link: "/publications/oblique-guard",
    description: "Demonstrates that adversarial vulnerability is a deterministic artifact of Superposition and introduces the Oblique-Guard Layer to filter geometric exploits as a digital signature of the attack.",
    tags: ["Adversarial Robustness", "Latent Geometry", "Superposition", "Safety"]
  },
  {
    id: "moral-bias",
    title: "Analysing Moral Bias in Finetuned LLMs through Mechanistic Interpretability",
    conference: "Metanthropic Research",
    year: "2026",
    date: "February 2, 2026",
    link: "/publications/moral-bias",
    description: "Demonstrates that SFT inadvertently introduces the 'Knobe Effect' moral asymmetry. Localizes this bias to modular layers and proposes surgical Iso-Semantic Residual Injection (ISRI) to remove it.",
    tags: ["Mechanistic Interpretability", "AI Ethics", "Model Alignment", "Safety"]
  },
  {
    id: "arvi-20b",
    title: "Arvi 20B: Democratizing Reasoning with Efficient MoEs",
    conference: "Metanthropic Research",
    year: "2026",
    date: "January 31, 2026",
    link: "/publications/arvi-20b",
    description: "An open-weight MoE reasoning model with 3.6B active parameters. Rivals frontier models on math and coding benchmarks using variable effort reasoning and custom chat formats.",
    tags: ["Mixture-of-Experts", "Reasoning Models", "Agentic AI", "Open Weights"]
  },
  {
    id: "mahenocr",
    title: "MahenOCR: Commercial-Grade OCR with a 1B Parameter VLM",
    conference: "Metanthropic Research",
    year: "2026",
    date: "January 30, 2026",
    link: "/publications/mahenocr",
    description: "A 1B parameter vision-language model achieving state-of-the-art OCR performance through end-to-end VLM architecture and novel reinforcement learning strategies (RLVR).",
    tags: ["OCR", "Vision-Language Models", "Reinforcement Learning"]
  },
  {
    id: "fragility-of-guardrails",
    title: "The Fragility of Guardrails: Cognitive Jamming and Repetition Collapse in Safety-Steered LLMs",
    conference: "Metanthropic Research",
    year: "2025",
    date: "December 23, 2025",
    link: "/publications/fragility-of-guardrails",
    description: "A mechanistic audit using SAEs to reveal spontaneously constructed internal physics engines and failure modes like 'Cognitive Jamming' where models spiral into repetition under safety vectors.",
    tags: ["Mechanistic Interpretability", "Safety", "Physics"]
  },
  {
    id: "dataset-distillation",
    title: "Dataset Distillation for the Pre-Training Era",
    conference: "Metanthropic Research",
    year: "2025",
    date: "December 17, 2025",
    link: "/publications/dataset-distillation",
    description: "Introduces Linear Gradient Matching to condense massive datasets into single synthetic images, revealing convergence toward shared 'Platonic' representations across diverse models.",
    tags: ["Generative Vision", "Foundation Models", "Distillation"]
  },
  {
    id: "announcing-metanthropic",
    title: "Announcing Metanthropic",
    conference: "Milestone",
    year: "2025",
    date: "November 10, 2025",
    link: "/publications/announcing-metanthropic",
    description: "The founding declaration of a frontier research institution architecting deterministic AI systems where safety and reasoning are verifiable, intrinsic properties of intelligence.",
    tags: ["Milestone", "Company", "Founding"]
  }
];
