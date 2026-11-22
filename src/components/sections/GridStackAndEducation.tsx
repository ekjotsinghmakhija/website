"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { STACK } from "@/lib/stack";
import { EDUCATION, CERTIFICATIONS } from "@/lib/education";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function GridStackAndEducation() {
  return (
    <section className="mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Technical Skills Grid (8 cols) */}
        <div className="lg:col-span-8">
          <SectionHeading number="04" badge="Core Engineering Matrix">
            Technical Stack
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STACK.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Icon size={16} className={group.color} />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Academic & Stanford Certifications (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <SectionHeading number="05" badge="Credentials">
              Background
            </SectionHeading>

            {/* University */}
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <GraduationCap size={18} />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {edu.institution}
                </h4>
                <p className="text-xs font-mono text-zinc-300 mb-2">
                  {edu.degree}
                </p>
                {edu.cgpa && (
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/60 mb-2">
                    CGPA: {edu.cgpa}
                  </div>
                )}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Certifications Box */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Award size={18} />
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Certifications
                </span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="text-xs">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between text-zinc-200 hover:text-cyan-300 transition-colors"
                    >
                      <span className="font-medium line-clamp-1">{cert.title}</span>
                      <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 flex-shrink-0 ml-1" />
                    </a>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {cert.issuer} • {cert.date}
                    </span>
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
