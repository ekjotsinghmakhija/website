"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ExternalLink, Database, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PERSONAL_PROJECTS } from "@/lib/personal-projects";

interface FeaturedProject {
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featuredSlug?: string;
}

const HIGHLIGHTED_PROJECTS: FeaturedProject[] = [
  {
    title: "Tealbase",
    tagline: "Postgres BaaS Internals, RLS, CDC & WebSockets",
    category: "Distributed Database / BaaS",
    description:
      "Architected an open-source Postgres BaaS in Go with auto-generated REST APIs, native RLS, and a Change Data Capture (CDC) engine empowering 10+ SMBs with sub-50ms WebSocket event propagation.",
    tags: ["Go", "TypeScript", "PostgreSQL Internals", "CDC", "WebSockets"],
    github: "https://github.com/tealbase/tealbase",
    featuredSlug: "why-tealbase",
  },
  {
    title: "ParachuteDB",
    tagline: "OLTP Graph-Vector Database in Rust",
    category: "AI Database & Retrieval",
    description:
      "Engineered an open-source OLTP graph-vector database in Rust, unifying high-dimensional vector similarity retrieval with graph traversal for ultra low-latency AI query execution.",
    tags: ["Rust", "OLTP", "Graph-Vector DB", "Vector Similarity", "HNSW"],
    github: "https://github.com/ekjotsinghmakhija",
  },
  {
    title: "ImgUPAI",
    tagline: "Cross-Platform Neural Upscaler & Super-Resolution",
    category: "Applied AI Inference",
    description:
      "Built an open-source cross-platform AI image upscaler for Linux, macOS, and Windows, optimizing neural super-resolution inference pipelines for hardware-accelerated local execution.",
    tags: ["Python", "PyTorch", "ONNX Runtime", "Super-Resolution", "GUI"],
    github: "https://github.com/ekjotsinghmakhija",
  },
  {
    title: "VostSQL & SIM8086",
    tagline: "Relational DB Engine in C/C++ & Intel 8086 Emulator",
    category: "Low-Level Systems",
    description:
      "Engineered custom relational database engines with disk paging, B-tree indexing, and protocol parsing in C/C++, alongside a modular cycle-accurate 8086 microprocessor hardware emulator.",
    tags: ["C", "C++", "Assembly", "B-Trees", "libpq", "Qt 6"],
    github: "https://github.com/ekjotsinghmakhija/vostsql",
    featuredSlug: "vostsql-engine-architecture",
  },
];

export default function GridProjects() {
  return (
    <section id="featured-work" className="mb-14">
      <SectionHeading number="02" badge="Systems, Databases & Tools">
        Key Projects & Systems
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HIGHLIGHTED_PROJECTS.map((proj) => (
          <div
            key={proj.title}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/40"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {proj.featuredSlug && (
                    <Link
                      href={`/blog/${proj.featuredSlug}`}
                      className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                      title="Read Architecture Post"
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                      title="View GitHub"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-850 flex flex-wrap gap-1.5">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View full projects catalog */}
      <div className="mt-4 flex justify-end">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
        >
          <span>View All 20+ Systems & Open Source Repositories</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
