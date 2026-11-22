"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

interface JourneyMilestone {
  period: string;
  duration?: string;
  role: string;
  company: string;
  type: string;
  link?: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

const JOURNEY: JourneyMilestone[] = [
  {
    period: "Jul 2026 – Present",
    duration: "5 mos",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    company: "RadonHarbor (Stealth AI Startup)",
    type: "Remote • Full-time",
    link: "https://www.linkedin.com/in/ekjot-singh-thefirst/",
    summary:
      "Architected AEGIS, an autonomous multi-agent OS in Rust/Python with WASM sandboxing and high-concurrency orchestration primitives—achieving 95%+ task completion accuracy across enterprise workflows. Engineered zero-trust security layers and real-time telemetry pipelines to enforce sub-second multi-agent decision execution.",
    responsibilities: [
      "Co-lead the company's technical vision, engineering strategy, and long-term research roadmap.",
      "Lead research and development in autonomous AI systems, intelligent infrastructure, and next-generation software platforms.",
      "Architect and build scalable, production-grade systems for developing, deploying, and optimizing advanced multi-agent technologies.",
      "Translate cutting-edge research into production-ready solutions through rigorous experimentation, validation, and continuous optimization.",
      "Establish engineering standards, software architecture, development workflows, and zero-trust technical best practices across the organization.",
    ],
    techStack: ["Rust", "Python", "WASM", "Multi-Agent Systems", "Zero-Trust", "Telemetry"],
  },
  {
    period: "Nov 2025 – Present",
    duration: "1 yr 1 mo",
    role: "Founder & Chief Scientist",
    company: "Metanthropic AI (Stealth AI Research Lab)",
    type: "Remote • Full-time",
    link: "https://metanthropic.vercel.app",
    summary:
      "Founded an independent frontier research lab; pre-trained open-weight foundational models (Arvi 20B MoE) deployed and adopted by 1,000+ AI researchers and engineers. Pioneered intrinsic alignment & safety pipelines in PyTorch/C++ by integrating attention refraction (M-NAAR), interpretability, and deterministic unlearning protocols.",
    responsibilities: [
      "Technical Leadership: Direct research spanning sparse MoE scaling, test-time reasoning, dataset distillation, and mechanistic interpretability.",
      "Architecture & Pre-Training: Oversee end-to-end pre-training pipelines, ViT-LLM integrations, and RLVR frameworks.",
      "Intrinsic Safety: Eliminate post-training patches by embedding safety, unlearning, and alignment directly into latent geometry.",
      "Breakthroughs Delivered: Arvi-20B (Sparse MoE reasoning model matching gpt-oss-20b at <10x compute), MahenOCR (1B VLM #1 ICDAR 2025 DIMT & OCRBench SOTA), Chronometric Flux Gating (CFG for SAEs), and M-NAAR unlearning protocols.",
    ],
    techStack: ["PyTorch", "C++", "MoE Pre-training", "M-NAAR", "Interpretability", "SAEs"],
  },
  {
    period: "Aug 2025 – Sep 2026",
    duration: "1 yr 2 mos",
    role: "Lead Systems Architect & Core Author",
    company: "Tealbase (Open Source BaaS)",
    type: "Remote • Full-time",
    link: "https://github.com/tealbase/tealbase",
    summary:
      "Architected Tealbase, an open-source Backend-as-a-Service (BaaS) platform built to eliminate the trade-off between rapid developer iteration and relational database rigor, empowering 10+ SMBs with sub-50ms WebSocket event propagation.",
    responsibilities: [
      "High-Performance Platform Infrastructure: Architected the core backend engine from scratch in Go, engineering low-latency database proxying, dynamic connection pooling, and automated RESTful API generation mapped directly to PostgreSQL schemas.",
      "Real-Time Engine & Change Data Capture (CDC): Built a high-concurrency real-time streaming pipeline leveraging PostgreSQL Logical Replication/CDC and WebSocket subscriptions to broadcast database state changes with sub-50ms latency.",
      "Identity & Fine-Grained Security: Implemented an enterprise-grade authentication service featuring JWT management, OAuth integration, and direct binding to PostgreSQL Row-Level Security (RLS) policies for automated, zero-trust data access control.",
      "Developer Tooling & Management APIs: Designed an intuitive CLI and admin management APIs to streamline local development workflows, automated schema migrations, and API key management.",
    ],
    techStack: ["Go", "TypeScript", "PostgreSQL Internals", "CDC", "WebSockets", "BaaS"],
  },
];

export default function GridExperience() {
  return (
    <section className="py-14 border-b border-dashed border-zinc-700/80">
      <SectionHeading badge="Leadership & Founding Roles">
        Experience
      </SectionHeading>

      <div className="relative border-l border-dashed border-zinc-700/80 ml-3 sm:ml-4 space-y-12">
        {JOURNEY.map((item, index) => (
          <div key={item.company} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-400 border border-zinc-950 group-hover:bg-white transition-colors" />

            <div className="p-6 rounded-lg bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-4 border-b border-dashed border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-zinc-300 mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{item.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-zinc-400">{item.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    {item.period}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                      title="Open position link"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Core Narrative Summary */}
              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-4">
                {item.summary}
              </p>

              {/* Core Responsibilities & Impact */}
              <div className="space-y-2 mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Scope & Research Deliverables:
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="pt-3 border-t border-dashed border-zinc-850 flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
