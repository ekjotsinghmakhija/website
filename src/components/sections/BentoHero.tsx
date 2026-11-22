"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  Cpu,
  Layers,
  FileText,
  ArrowUpRight,
  Download,
  Mail,
  Activity,
  Box,
  Binary,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SOCIALS } from "@/lib/socials";

export default function BentoHero() {
  return (
    <section className="pt-28 pb-12">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 mb-6 bg-zinc-950/80 border border-zinc-850 rounded-xl text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-200">SYSTEM: ONLINE</span>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-400">Ludhiana & VIT Bhopal, India</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-cyan-400">RADONHARBOR [CTO]</span>
          <span className="text-zinc-400">/</span>
          <span className="text-teal-400">METANTHROPIC AI [CHIEF SCIENTIST]</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Identity Box (8 cols) */}
        <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Binary size={160} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-950 text-cyan-400 border border-cyan-800/60 uppercase tracking-wider">
                Autonomous Agent OS & Pre-Training
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
              EKJOT SINGH
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mb-6">
              AI researcher and systems architect working at the intersection of{" "}
              <span className="text-cyan-300 font-medium">foundational model pre-training</span> (Sparse MoE, VLMs),{" "}
              <span className="text-emerald-300 font-medium">intrinsic AI safety</span> (M-NAAR, mechanistic interpretability), and{" "}
              <span className="text-teal-300 font-medium">high-performance distributed systems</span> in Rust, Go & C++.
            </p>
          </div>

          {/* Quick Action Badges / CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-850">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-mono font-bold hover:bg-white transition-colors"
            >
              <Download size={14} /> RESUME.PDF
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-750 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-600 transition-colors"
            >
              <GithubIcon size={14} /> GITHUB
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-750 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-600 transition-colors"
            >
              <LinkedinIcon size={14} /> LINKEDIN
            </a>
            <a
              href={SOCIALS.email}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-750 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-600 transition-colors"
            >
              <Mail size={14} /> CONTACT
            </a>
          </div>
        </div>

        {/* Profile Card & Vitals (4 cols) */}
        <div className="md:col-span-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 flex-shrink-0">
              <Image
                src="/images/avatar.jpg"
                alt="Ekjot Singh"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wide">Ekjot Singh</div>
              <div className="text-xs text-zinc-400 font-mono">B.Tech CSE @ VIT Bhopal</div>
              <div className="text-xs text-cyan-400 font-mono mt-0.5">CGPA: 8.45 / 10</div>
            </div>
          </div>

          <div className="space-y-2 py-3 border-y border-zinc-850 font-mono text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span>PRIMARY ROLES:</span>
              <span className="text-zinc-200 text-right">CTO & Chief Scientist</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>CORE LANGUAGE:</span>
              <span className="text-emerald-400">Rust, Go, C++, PyTorch</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>RESEARCH:</span>
              <span className="text-cyan-400">MoE, VLM, M-NAAR</span>
            </div>
          </div>

          <div className="pt-3">
            <Link
              href="#featured-work"
              className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-white group"
            >
              <span>EXPLORE WORK & ARCHITECTURE</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stat Box 1: Arvi 20B MoE */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between mb-3 text-zinc-400">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Model Deployment</span>
            <Cpu size={16} className="text-cyan-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono mb-1">10,000+</div>
          <p className="text-xs text-zinc-400 leading-snug">
            Downloads for <strong className="text-zinc-200">Arvi 20B MoE</strong> reasoning model (<span className="text-cyan-400">&lt;10x GPU compute</span> vs gpt-oss-20b).
          </p>
        </div>

        {/* Stat Box 2: MahenOCR VLM */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between mb-3 text-zinc-400">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Vision SOTA</span>
            <Activity size={16} className="text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono mb-1">#2 Rank / SOTA</div>
          <p className="text-xs text-zinc-400 leading-snug">
            In <strong className="text-zinc-200">ICDAR 2025 DIMT</strong> & OCRBench (&lt;3B class) with <span className="text-emerald-400">MahenOCR 1B</span> (8,000+ downloads).
          </p>
        </div>

        {/* Stat Box 3: Autonomous OS AEGIS */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-teal-500/40 transition-colors">
          <div className="flex items-center justify-between mb-3 text-zinc-400">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400">Agent OS Infrastructure</span>
            <Layers size={16} className="text-teal-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono mb-1">95%+</div>
          <p className="text-xs text-zinc-400 leading-snug">
            Task completion accuracy on enterprise workflows via <strong className="text-zinc-200">AEGIS</strong> WASM sandboxed multi-agent OS.
          </p>
        </div>
      </div>
    </section>
  );
}
