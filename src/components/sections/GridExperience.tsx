"use client";
import React from "react";
import { EXPERIENCE } from "@/lib/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ShieldCheck, Cpu, Terminal } from "lucide-react";

export default function GridExperience() {
  const getIcon = (id: string) => {
    switch (id) {
      case "radonharbor":
        return <Cpu className="text-cyan-400" size={17} />;
      case "metanthropic":
        return <ShieldCheck className="text-teal-400" size={17} />;
      default:
        return <Terminal className="text-emerald-400" size={17} />;
    }
  };

  return (
    <section className="py-14 border-b border-dashed border-zinc-700/80">
      <SectionHeading badge="Leadership & Founding Roles">
        Executive Experience & Lab Direction
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-700/80 border border-dashed border-zinc-700/80 rounded bg-zinc-950/40">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col justify-between p-6 hover:bg-zinc-900/30 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
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
                    className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                    title="Open link"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {exp.company}
              </h3>
              <p className="text-xs font-mono text-cyan-400/90 mb-4 font-medium">
                {exp.role}
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>
            </div>

            <div className="pt-4 border-t border-dashed border-zinc-800 flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800/80 text-zinc-400"
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
