"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATIONS } from "@/lib/publications";
import { ArrowUpRight, FileCode2, BookOpen, Layers } from "lucide-react";

export default function GridPublications() {
  // Select top 4 high-impact papers/specifications
  const topPubs = [
    PUBLICATIONS.find((p) => p.id === "arvi-20b") || PUBLICATIONS[0],
    PUBLICATIONS.find((p) => p.id === "mahenocr") || PUBLICATIONS[1],
    PUBLICATIONS.find((p) => p.id === "m-naar") || PUBLICATIONS[2],
    PUBLICATIONS.find((p) => p.id === "latent-logic-topology") || PUBLICATIONS[3],
  ];

  return (
    <section className="mb-14">
      <SectionHeading number="03" badge="Frontier AI & Intrinsic Safety">
        Research & Specifications
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topPubs.map((pub, idx) => (
          <div
            key={pub.id || idx}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/40"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <FileCode2 size={16} className="text-cyan-400" />
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {pub.conference} • {pub.year}
                  </span>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white border border-zinc-800 transition-colors"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                {pub.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                {pub.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-850 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
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

      <div className="mt-4 flex justify-end">
        <Link
          href="/publications"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
        >
          <span>View All 10+ Papers & Specifications</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
