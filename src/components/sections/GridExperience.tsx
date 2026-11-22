"use client";
import React from "react";
import Link from "next/link";
import { EXPERIENCE } from "@/lib/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ShieldCheck, Cpu, Terminal } from "lucide-react";

export default function GridExperience() {
  const getIcon = (id: string) => {
    switch (id) {
      case "radonharbor":
        return <Cpu className="text-cyan-400" size={18} />;
      case "metanthropic":
        return <ShieldCheck className="text-teal-400" size={18} />;
      default:
        return <Terminal className="text-emerald-400" size={18} />;
    }
  };

  return (
    <section className="mb-14">
      <SectionHeading number="01" badge="Leadership & Systems Architecture">
        Experience
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/50"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    {getIcon(exp.id)}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {exp.date}
                  </span>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {exp.company}
              </h3>
              <p className="text-xs font-mono text-zinc-300 mb-4 font-medium">
                {exp.role}
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-4">
                {exp.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-850 flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
