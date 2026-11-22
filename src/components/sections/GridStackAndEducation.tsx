"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { STACK } from "@/lib/stack";
import { EDUCATION, CERTIFICATIONS } from "@/lib/education";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function GridStackAndEducation() {
  return (
    <section className="py-14 border-b border-dashed border-zinc-700/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Core Engineering Matrix (8 cols) */}
        <div className="lg:col-span-8">
          <SectionHeading badge="Engineering Capabilities">
            Technology
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STACK.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-5 rounded bg-zinc-950/60 border border-dashed border-zinc-700/80"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={15} className={group.color} />
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
              );
            })}
          </div>
        </div>

        {/* Right: Academic Background & Verified Credentials (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <SectionHeading badge="Academic Accreditations">
              Background & Credentials
            </SectionHeading>

            {/* University */}
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded bg-zinc-950/60 border border-dashed border-zinc-700/80 mb-4"
              >
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <GraduationCap size={17} />
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
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Specializations & Certifications */}
            <div className="p-5 rounded bg-zinc-950/60 border border-dashed border-zinc-700/80">
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Award size={17} />
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Select Accreditations
                </span>
              </div>

              <div className="space-y-3 font-mono">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="text-xs">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between text-zinc-200 hover:text-cyan-300 transition-colors"
                    >
                      <span className="font-sans font-medium line-clamp-1">{cert.title}</span>
                      <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 flex-shrink-0 ml-1" />
                    </a>
                    <span className="text-[10px] text-zinc-400">
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
