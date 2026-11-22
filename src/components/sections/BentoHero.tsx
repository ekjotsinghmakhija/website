"use client";
import React from "react";
import Image from "next/image";
import { Download, Mail, Cpu, Layers, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SOCIALS } from "@/lib/socials";

export default function BentoHero() {
  return (
    <section className="pt-28 pb-14 border-b border-dashed border-zinc-700/80">
      {/* Top Header: Name, Full-Width Role Subtitle & Action Buttons */}
      <div className="flex flex-col gap-4 pb-8 border-b border-dashed border-zinc-700/80">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white">
            Ekjot Singh
          </h1>
          <p className="mt-2 text-sm sm:text-base font-mono text-cyan-400/95 tracking-wide w-full">
            Co-Founder & CTO @RadonHarbor | Founder & Chief Scientist @Metanthropic AI
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-zinc-200 bg-white text-zinc-950 text-xs font-mono font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Download size={13} /> Resume
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-700 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-500 transition-colors"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-700 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-500 transition-colors"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <a
            href={SOCIALS.email}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-700 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-500 transition-colors"
          >
            <Mail size={13} /> Contact
          </a>
        </div>
      </div>

      {/* Main Grid: Exact 1:2 ratio (Photo 1 col : Text Bio 2 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 items-start">
        {/* Photo Column (1 part out of 3 = 1/3) */}
        <div className="md:col-span-1">
          <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 shadow-md">
            <Image
              src="/images/avatar.jpg"
              alt="Ekjot Singh"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio Narrative Column (2 parts out of 3 = 2/3) */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            <p className="text-zinc-200 leading-relaxed">
              <strong className="text-white font-medium">Ekjot Singh</strong> is an AI researcher and systems architect working at the intersection of foundational model pre-training, intrinsic AI safety, and high-performance distributed systems. He serves as the <span className="text-cyan-300 font-medium">Co-Founder & Chief Technology Officer</span> at <strong className="text-white font-medium">RadonHarbor</strong> and the <span className="text-teal-300 font-medium">Founder & Chief Scientist</span> at <strong className="text-white font-medium">Metanthropic AI</strong>.
            </p>

            <p>
              At <strong className="text-white font-medium">Metanthropic AI</strong>, Ekjot directs an independent research lab focused on advancing model architectures and making AI systems inherently reliable, transparent, and safe by design. Rather than relying on post-training patches, his research integrates alignment and interpretability directly into the pre-training loop. Notable breakthroughs include <strong className="text-zinc-100 font-medium">Arvi 20B</strong>—a sparse Mixture-of-Experts (MoE) reasoning model engineered to deliver high-level reasoning capabilities at a fraction of standard computational costs—and <strong className="text-zinc-100 font-medium">MahenOCR</strong>, a 1B Vision-Language Model that achieved SOTA status on OCRBench and took #1 Place in the ICDAR 2025 DIMT Challenge for visual document understanding.
            </p>

            <p>
              At <strong className="text-white font-medium">RadonHarbor</strong>, Ekjot leads technical strategy and systems engineering to build infrastructure for autonomous AI execution. He architected <strong className="text-zinc-100 font-medium">AEGIS</strong>, a multi-agent operating system written in Rust and Python that utilizes secure WebAssembly (WASM) sandboxing to orchestrate complex, enterprise-grade workflows with zero-trust safety. His broader systems background includes designing <strong className="text-zinc-100 font-medium">Tealbase</strong> (an open-source backend platform built on Go and PostgreSQL) and <strong className="text-zinc-100 font-medium">ParachuteDB</strong> (a low-latency graph-vector database engineered for real-time AI retrieval).
            </p>
          </div>
        </div>
      </div>

      {/* Core Technical Focus - Spanning Full Width of the Grid */}
      <div className="mt-8 pt-8 border-t border-dashed border-zinc-700/80">
        <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
          Core Technical Focus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 rounded bg-zinc-950/60 border border-zinc-800">
            <div className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              AI Research & Safety
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Large-Scale Pre-Training, Sparse MoE Routing, Vision-Language Models (VLMs), Mechanistic Interpretability, Sparse Autoencoders (SAEs), Intrinsic Alignment (M-NAAR), RLVR.
            </p>
          </div>

          <div className="p-4 rounded bg-zinc-950/60 border border-zinc-800">
            <div className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Systems & Infrastructure
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Autonomous Multi-Agent OS, WASM Sandboxing, Graph-Vector DBs, PostgreSQL Internals (RLS, CDC), Distributed Systems, High-Concurrency Architectures.
            </p>
          </div>

          <div className="p-4 rounded bg-zinc-950/60 border border-zinc-800">
            <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Languages & Core Stack
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Rust, C/C++, Go, Python, TypeScript, PyTorch, ONNX Runtime, CUDA, vLLM, FlashAttention-3, Linux Systems.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-dashed border-zinc-700/80">
        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-700/90">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
            <Cpu size={18} />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white tracking-tight">10,000+</div>
            <div className="text-xs font-mono text-zinc-400">Arvi 20B MoE Downloads</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">&lt;10x GPU compute vs gpt-oss-20b</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-700/90">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-emerald-400">
            <Activity size={18} />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white tracking-tight">#2 ICDAR & SOTA</div>
            <div className="text-xs font-mono text-zinc-400">MahenOCR 1B VLM</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">8,000+ downloads • OCRBench (&lt;3B)</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-700/90">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-teal-400">
            <Layers size={18} />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white tracking-tight">95%+ Task Accuracy</div>
            <div className="text-xs font-mono text-zinc-400">AEGIS Autonomous Multi-Agent OS</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">WASM sandboxing in Rust & Python</div>
          </div>
        </div>
      </div>
    </section>
  );
}
