"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { STACK } from "@/lib/stack";
import { Layers } from "lucide-react";

export default function StackPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#030304] text-zinc-100">
      <Navbar />

      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header */}
        <header className="pb-8 mb-10 border-b border-dashed border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
            <Layers size={15} />
            <span>Systems & Research Tooling</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-3">
            Technical Stack
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            A comprehensive matrix of programming languages, AI training frameworks, safety mechanisms, and infrastructure technologies employed in production.
          </p>
        </header>

        {/* The Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700/80 border border-dashed border-zinc-700/80 rounded overflow-hidden">
          {STACK.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-6 sm:p-8 bg-zinc-950 hover:bg-zinc-900/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={18} className="text-zinc-300" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {group.items?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
