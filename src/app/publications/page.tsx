import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { PUBLICATIONS } from "@/lib/publications";
import { FileCode2, ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Specifications | Ekjot Singh",
  description:
    "Pre-training architectures, Sparse Mixture-of-Experts, intrinsic AI safety, and mechanistic interpretability specifications.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#030304] text-zinc-100">
      <Navbar />

      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header with dashed separation */}
        <header className="pb-8 mb-8 border-b border-dashed border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
            <FlaskConical size={15} />
            <span>Frontier AI Research & Pre-Training</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-3">
            Research & Specifications
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            Preprints, architectural specifications, and foundational research papers focusing on Sparse MoE routing, vision-language models, and intrinsic safety (M-NAAR).
          </p>
        </header>

        {/* Metanthropic Banner */}
        <div className="mb-10 p-6 rounded bg-zinc-950/80 border border-dashed border-zinc-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Primary Research Lab
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Metanthropic AI
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl leading-relaxed font-light">
              Advancing foundational model pre-training and eliminating post-training safety patches by embedding alignment directly into latent representations.
            </p>
          </div>

          <a
            href="https://metanthropic.vercel.app/research"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-200 hover:text-white hover:border-cyan-500 transition-colors shrink-0"
          >
            <span>Visit Lab Archives</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700/80 border border-dashed border-zinc-700/80 rounded overflow-hidden">
          {PUBLICATIONS.map((pub, index) => (
            <div
              key={pub.id || index}
              className="flex flex-col justify-between p-6 bg-zinc-950 hover:bg-zinc-900/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FileCode2 size={15} className="text-cyan-400" />
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {pub.conference} • {pub.year}
                    </span>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                      title="Read Paper"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                  {pub.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-dashed border-zinc-850 flex flex-wrap gap-1.5 mb-3">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 hover:text-white transition-colors"
                  >
                    <span>Read Paper Specification</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
