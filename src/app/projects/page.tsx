"use client";

import { useState, useMemo } from "react";
import { PERSONAL_PROJECTS } from "@/lib/personal-projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowUpRight, Code2, Sparkles, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SOCIALS } from "@/lib/socials";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically extract unique tech stack tags from the data
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PERSONAL_PROJECTS.forEach((p) =>
      p.techStack?.forEach((t) => tags.add(t.trim())),
    );
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = PERSONAL_PROJECTS.filter(
    (p) =>
      activeFilter === "All" ||
      p.techStack?.some((t) => t.trim() === activeFilter),
  );

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#030304] text-zinc-100">
      <Navbar />

      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header with dashed separation */}
        <header className="pb-8 mb-8 border-b border-dashed border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
            <Code2 size={15} />
            <span>Open Source & Systems Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-3">
            Engineering Portfolio
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            A technical overview of my open-source contributions, system architecture, database internals, and frontier AI research.
          </p>
        </header>

        {/* Filter tags with subtle styling */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-dashed border-zinc-800/80">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeFilter === tag
                  ? "bg-white text-zinc-950 font-bold"
                  : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid with dashed border lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700/80 border border-dashed border-zinc-700/80 rounded overflow-hidden">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 bg-zinc-950 hover:bg-zinc-900/40 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        {project.role} • {project.visibility}
                      </span>
                      {project.featured && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1.5">
                      {project.title}
                    </h3>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                      title="Explore Source"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                  {project.aiSummary}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-dashed border-zinc-800/80 flex flex-wrap gap-1.5 mb-4">
                  {project.techStack?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 hover:text-white transition-colors"
                  >
                    <span>Explore Source</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Conditional Slot when filtered list has an odd number of items */}
          {filteredProjects.length % 2 !== 0 && (
            <div className="flex flex-col justify-between p-6 bg-zinc-950/80 hover:bg-zinc-900/40 transition-colors border-t md:border-t-0">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                        Pipeline • Active Incubation
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1.5">
                      More Systems Underway
                    </h3>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-900 text-cyan-400 border border-zinc-800">
                    <Sparkles size={14} />
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                  Currently architecting high-concurrency multi-agent execution primitives, low-latency database engines, and intrinsic model safety specifications. Code will be open-sourced upon verification.
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-dashed border-zinc-800/80 flex flex-wrap gap-1.5 mb-4 font-mono text-[10px] text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Rust</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">PyTorch</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">WASM</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Distributed Systems</span>
                </div>

                <a
                  href={SOCIALS.email}
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors font-medium"
                >
                  <Send size={12} />
                  <span>Have an ambitious idea? Let&apos;s talk</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
