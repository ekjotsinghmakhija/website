"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowUpRight, ShieldCheck, Cpu, Terminal, Compass, ChevronDown, ChevronUp } from "lucide-react";

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
      "Collaborate closely with fellow technical founders to shape product direction, technical strategy, and long-term innovation.",
      "Mentor engineers, cultivate a research-driven engineering culture, and lead critical technical decision-making.",
      "Continuously evaluate emerging technologies and research to maintain a world-class engineering and innovation capability.",
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
      "Arvi-20B Deliverable: Pre-trained a 20B sparse MoE reasoning model for agentic workflows, matching gpt-oss-20b performance at <10x GPU compute overhead.",
      "MahenOCR Deliverable: Engineered a 1B VLM for document intelligence; secured #1 Place in ICDAR 2025 DIMT Challenge and SOTA on OCRBench (<3B class).",
      "Chronometric Flux Gating (CFG): Created an EMA temporal regularization protocol for SAEs, reducing Feature Absorption to 0.0068 (~95% gain over TopK).",
      "KP-IDP Protocol: Formulated a mechanistic interpretability framework separating decodability from causal utilization to eliminate phantom features.",
      "Project Oblique-Guard: Built an inline layer treating superposed latents as an interference lattice to zero adversarial vectors at near-zero latency.",
      "Neural Ablation (M-NAAR): Designed a ~12M parameter adapter protocol for deterministic unlearning with 0% content reproduction or hallucination.",
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
      "Identity & Fine-Grained Security: Implemented an enterprise-grade authentication service featuring JWT management, OAuth integration, and direct binding to PostgreSQL Row-Level Security (RLS) policies for automated, zero-trust data access control at the database layer.",
      "Developer Tooling & Management APIs: Designed an intuitive command-line interface (CLI) and admin management APIs to streamline local development workflows, automated schema migrations, environment staging, and API key management.",
      "Product Strategy & Open-Source Growth: Executed the technical roadmap through competitive architectural analysis of incumbent BaaS platforms, actively engaging open-source developer communities to drive early adoption and real-world feedback loops.",
    ],
    techStack: ["Go", "TypeScript", "PostgreSQL Internals", "CDC", "WebSockets", "BaaS"],
  },
];

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#030304] text-zinc-100">
      <Navbar />

      <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header with dashed separation */}
        <header className="pb-8 mb-10 border-b border-dashed border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
            <Compass size={15} />
            <span>Career Milestones & Technical Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-3">
            Experience & Journey
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            A comprehensive record of my leadership roles as CTO, founder of frontier research labs, and open-source systems maintainer.
          </p>
        </header>

        {/* Timeline with dashed lines */}
        <div className="relative border-l border-dashed border-zinc-700/80 ml-3 sm:ml-4 space-y-12">
          {JOURNEY.map((item, index) => (
            <div key={item.company} className="relative pl-6 sm:pl-8 group">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-400 border border-zinc-950 group-hover:bg-white transition-colors" />

              <div className="p-6 sm:p-8 rounded-lg bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-dashed border-zinc-800">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-zinc-300 mt-1 flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-white">{item.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400">{item.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                      {item.period}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded text-zinc-400 hover:text-white transition-colors"
                        title="Open position link"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                  {item.summary}
                </p>

                {/* Responsibilities & Deliverables: Always visible on desktop (lg:block), collapsible on mobile */}
                <div className={`${expandedIndex === index ? "block" : "hidden"} lg:block space-y-3 mb-6`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Key Responsibilities & Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-zinc-500 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile View Scope / Less Toggle (< lg screens) */}
                <div className="lg:hidden mb-5">
                  <button
                    type="button"
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 py-1 px-2.5 rounded bg-cyan-950/40 border border-cyan-800/60 transition-colors"
                    aria-expanded={expandedIndex === index}
                  >
                    <span>{expandedIndex === index ? "Hide Details" : "View Scope & Deliverables"}</span>
                    {expandedIndex === index ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>

                <div className="pt-4 border-t border-dashed border-zinc-850 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
