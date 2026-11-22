"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, ArrowUpRight, Cpu, Layers, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SOCIALS } from "@/lib/socials";

export default function BentoHero() {
  return (
    <section className="pt-28 pb-16 border-b border-dashed border-zinc-800/80">
      {/* Top Header: Name, Direct Roles & Quick CTAs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-dashed border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Co-Founder & CTO @ RadonHarbor • Founder & Chief Scientist @ Metanthropic AI
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white">
            Ekjot Singh
          </h1>
          <p className="mt-2 text-sm sm:text-base font-mono text-cyan-400/90 tracking-wide">
            Foundational Pre-Training (MoE, VLM, Intrinsic Safety) & Autonomous Agent OS Infrastructure
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
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
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-700 transition-colors"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-700 transition-colors"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <a
            href={SOCIALS.email}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Mail size={13} /> Contact
          </a>
        </div>
      </div>

      {/* Main Grid: Dedicated Portrait + In-Depth Bio & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Dedicated Portrait with Clean Framing (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 group">
              <Image
                src="/images/avatar.jpg"
                alt="Ekjot Singh"
                fill
                priority
                className="object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-xs font-mono font-medium text-white">Ekjot Singh</div>
                <div className="text-[11px] font-mono text-zinc-400">Vellore Institute of Technology (VIT)</div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Ribbon under portrait */}
          <div className="mt-6 pt-6 border-t border-dashed border-zinc-800/80 space-y-3 font-mono text-xs text-zinc-400">
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Affiliations</span>
              <span className="text-zinc-200">RadonHarbor • Metanthropic</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Education</span>
              <span className="text-zinc-200">B.Tech CSE, VIT (2024–2028)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Core Systems</span>
              <span className="text-emerald-400">Rust, Go, C++, PyTorch</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Executive Bio & Research Thesis (8 cols) */}
        <div className="lg:col-span-8 lg:pl-4 flex flex-col justify-between">
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

          {/* Core Technical Focus - Clean Editorial Grid with Dashed Dividers */}
          <div className="mt-8 pt-6 border-t border-dashed border-zinc-800/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Core Technical Focus
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded bg-zinc-950/60 border border-zinc-850">
                <div className="text-cyan-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  AI Research & Safety
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Large-Scale Pre-Training, Sparse MoE Routing, Vision-Language Models (VLMs), Mechanistic Interpretability, Sparse Autoencoders (SAEs), Intrinsic Alignment (M-NAAR), RLVR.
                </p>
              </div>

              <div className="p-3.5 rounded bg-zinc-950/60 border border-zinc-850">
                <div className="text-teal-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Systems & Infrastructure
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Autonomous Multi-Agent OS, WASM Sandboxing, Graph-Vector DBs, PostgreSQL Internals (RLS, CDC), Distributed Systems, High-Concurrency Architectures.
                </p>
              </div>

              <div className="p-3.5 rounded bg-zinc-950/60 border border-zinc-850">
                <div className="text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Languages & Core Stack
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Rust, C/C++, Go, Python, TypeScript, PyTorch, ONNX Runtime, CUDA, vLLM, FlashAttention-3, Linux Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flagship Verification Metric Badges (Dashed Grid Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-dashed border-zinc-800/80">
        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-800/70">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
            <Cpu size={18} />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white tracking-tight">10,000+</div>
            <div className="text-xs font-mono text-zinc-400">Arvi 20B MoE Downloads</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">&lt;10x GPU compute vs gpt-oss-20b</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-800/70">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-emerald-400">
            <Activity size={18} />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white tracking-tight">#2 ICDAR & SOTA</div>
            <div className="text-xs font-mono text-zinc-400">MahenOCR 1B VLM</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">8,000+ downloads • OCRBench (&lt;3B)</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-dashed border-zinc-800/70">
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
