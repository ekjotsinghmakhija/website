"use client";
import React from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
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
            EKJOT SINGH
          </h1>
          <p className="mt-2 text-sm sm:text-base font-mono text-zinc-300 tracking-wide w-full">
            Co-Founder & CTO @ RadonHarbor | Founder & Chief Scientist @ Metanthropic AI
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

      {/* Main Grid: 1:2 ratio (Photo 1 part, Bio narrative 2 parts) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-start">
        {/* Photo Column (4 cols = 1/3 with +10% enlarged photo container) */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 shadow-md">
            <Image
              src="/images/avatar.jpg"
              alt="Ekjot Singh"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio Narrative Column (8 cols = 2/3) - No colorful highlights, pure typography with underline & bold */}
        <div className="md:col-span-8 flex flex-col justify-between">
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            <p className="text-zinc-200 leading-relaxed">
              <strong className="text-white font-semibold">Ekjot Singh</strong> is an AI researcher and systems architect working at the intersection of <u>foundational model pre-training</u>, <u>intrinsic AI safety</u>, and <u>high-performance distributed systems</u>. He serves as the <strong>Co-Founder & Chief Technology Officer</strong> at <strong>RadonHarbor</strong> and the <strong>Founder & Chief Scientist</strong> at <strong>Metanthropic AI</strong>.
            </p>

            <p>
              At <strong>Metanthropic AI</strong>, Ekjot directs an independent research lab focused on advancing model architectures and making AI systems inherently reliable, transparent, and safe by design. Rather than relying on post-training patches, his research integrates alignment and interpretability directly into the pre-training loop. Notable breakthroughs include <strong><u>Arvi 20B</u></strong>—a sparse Mixture-of-Experts (MoE) reasoning model engineered to deliver high-level reasoning capabilities at a fraction of standard computational costs—and <strong><u>MahenOCR</u></strong>, a 1B Vision-Language Model that achieved SOTA status on OCRBench and took <strong>#1 Place</strong> in the ICDAR 2025 DIMT Challenge for visual document understanding.
            </p>

            <p>
              At <strong>RadonHarbor</strong>, Ekjot leads technical strategy and systems engineering to build infrastructure for autonomous AI execution. He architected <strong><u>AEGIS</u></strong>, a multi-agent operating system written in Rust and Python that utilizes secure WebAssembly (WASM) sandboxing to orchestrate complex, enterprise-grade workflows with zero-trust safety. His broader systems background includes designing <strong><u>Tealbase</u></strong> (an open-source backend platform built on Go and PostgreSQL) and <strong><u>ParachuteDB</u></strong> (a low-latency graph-vector database engineered for real-time AI retrieval).
            </p>
          </div>
        </div>
      </div>

      {/* Core Technical Focus - Full Width with clean typography */}
      <div className="mt-10 pt-8 border-t border-dashed border-zinc-700/80">
        <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-5">
          Core Technical Focus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
          <div className="p-5 rounded bg-zinc-950/60 border border-zinc-800">
            <h4 className="text-sm font-semibold text-white mb-2 underline decoration-zinc-600 underline-offset-4">
              AI Research & Safety
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2">
              Large-Scale Pre-Training, Sparse MoE Routing, Vision-Language Models (VLMs), Mechanistic Interpretability, Sparse Autoencoders (SAEs), Intrinsic Alignment (M-NAAR), RLVR.
            </p>
          </div>

          <div className="p-5 rounded bg-zinc-950/60 border border-zinc-800">
            <h4 className="text-sm font-semibold text-white mb-2 underline decoration-zinc-600 underline-offset-4">
              Systems & Infrastructure
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2">
              Autonomous Multi-Agent OS, WASM Sandboxing, Graph-Vector DBs, PostgreSQL Internals (RLS, CDC), Distributed Systems, High-Concurrency Architectures.
            </p>
          </div>

          <div className="p-5 rounded bg-zinc-950/60 border border-zinc-800">
            <h4 className="text-sm font-semibold text-white mb-2 underline decoration-zinc-600 underline-offset-4">
              Languages & Core Stack
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2">
              Rust, C/C++, Go, Python, TypeScript, PyTorch, ONNX Runtime, CUDA, vLLM, FlashAttention-3, Linux Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
