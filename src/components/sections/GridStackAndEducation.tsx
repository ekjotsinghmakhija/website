"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { STACK } from "@/lib/stack";
import { EDUCATION, CERTIFICATIONS } from "@/lib/education";
import { GraduationCap, Award, ExternalLink, BookOpen } from "lucide-react";

export default function GridStackAndEducation() {
  return (
    <section className="py-14 border-b border-dashed border-zinc-700/80">
      {/* 1. Technology / Core Technical Stack */}
      <div className="mb-14">
        <SectionHeading badge="Engineering Capabilities">
          Technology
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {STACK.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-5 rounded bg-zinc-950/60 border border-dashed border-zinc-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={15} className="text-zinc-300" />
                    <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Background & Credentials (Redesigned Full-Width Two-Column Layout) */}
      <div>
        <SectionHeading badge="Academic Background & Stanford Accreditations">
          Background & Credentials
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left: Academic Degree (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-lg bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-zinc-400">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-zinc-200" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-200">
                    Degree
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  2024 – 2028
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1.5">
                Vellore Institute of Technology (VIT)
              </h4>
              <p className="text-sm font-medium text-zinc-300 mb-3">
                B.Tech. in Computer Science and Engineering
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Core focus on Systems Engineering, Foundational AI Models, High-Concurrency Architectures, and Database Internals.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-dashed border-zinc-800 text-[11px] font-mono text-zinc-500">
              VIT Bhopal, India
            </div>
          </div>

          {/* Right: Select Stanford Certifications (7 cols) */}
          <div className="md:col-span-7 p-6 rounded-lg bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-zinc-200" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-200">
                    Accreditations & Specializations
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500">Verified Credentials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between"
                  >
                    <div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start justify-between gap-1 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                      >
                        <span className="line-clamp-2">{cert.title}</span>
                        <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 flex-shrink-0 mt-1" />
                      </a>
                    </div>
                    <div className="mt-3 pt-2 border-t border-dashed border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
