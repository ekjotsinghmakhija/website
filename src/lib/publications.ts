/* FILE: src/lib/publications.ts */
export const PUBLICATIONS = [
  {
    title: "The Fragility of Guardrails: Cognitive Jamming and Repetition Collapse in Safety-Steered LLMs",
    conference: "Metanthropic Research",
    year: "2025",
    link: "https://metanthropic.vercel.app/research/fragility-of-guardrails",
    description: "A mechanistic audit of LLM residual streams using Sparse Autoencoders (SAEs). We demonstrate that aggressive safety-steering vectors often interfere with latent world-modeling circuits, triggering 'Cognitive Jamming'—a failure mode where models spiral into repetition rather than grounded refusal."
  },
  {
    title: "Dataset Distillation for the Pre-Training Era",
    conference: "Metanthropic Research",
    year: "2025",
    link: "https://metanthropic.vercel.app/research/dataset-distillation",
    description: "Introducing Linear Gradient Matching (LGM), a novel method to condense massive datasets into a single synthetic image per class. We reveal shared 'Platonic' representations across foundation models (CLIP, DINO-v2) and demonstrate how distilled data acts as a lens to diagnose model robustness."
  }
];
