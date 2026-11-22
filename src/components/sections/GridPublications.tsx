"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATIONS } from "@/lib/publications";
import { ArrowUpRight, FileCode2 } from "lucide-react";

export default function GridPublications() {
  const topPubs = [
    PUBLICATIONS.find((p) => p.id === "arvi-20b") || PUBLICATIONS[0],
    PUBLICATIONS.find((p) => p.id === "mahenocr") || PUBLICATIONS[1],
    PUBLICATIONS.find((p) => p.id === "m-naar") || PUBLICATIONS[2],
    PUBLICATIONS.find((p) => p.id === "latent-logic-topology") || PUBLICATIONS[3],
  ];

  return (
    <section className="py-14 border-b border-dashed border-zinc-800/80">
      <SectionHeading number="03" badge="Frontier AI & Intrinsic Safety">
        Research & Specifications
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/80 border border-dashed border-zinc-800/80 rounded overflow-hidden">
        {topPubs.map((pub, idx) => (
          <div
            key={pub.id || idx}
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
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                  title="View Paper"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
                {pub.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light line-clamp-3">
                {pub.description}
              </p>
            </div>

            <div className="pt-4 border-t border-dashed border-zinc-850 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800/80 text-zinc-400"
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
