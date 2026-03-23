'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { STACK } from '@/lib/stack';

export default function StackPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-white">Technical Arsenal</h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            I select tools based on system constraints, performance requirements, and scalability.
            Here is the core stack I use to architect databases, AI infrastructure, and high-scale applications.
          </p>
        </div>

        {/* The Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STACK.map((group) => (
            <div
              key={group.category}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 hover:bg-zinc-800/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                {/* A subtle accent dash for executive styling */}
                <span className="w-4 h-[2px] bg-emerald-500 rounded-full"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {/* Safely mapping through the items array */}
                {group.items?.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
