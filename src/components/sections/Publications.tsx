/* FILE: src/components/sections/Publications.tsx */
"use client";
import Link from "next/link";
import { ArrowUpRight, FileText, ArrowRight } from "lucide-react";
import { PUBLICATIONS } from "@/lib/publications";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Publications() {
  // Sort by date (latest first) and take only the first 4
  const latestPublications = [...PUBLICATIONS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="mb-32">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading number="05">Publications</SectionHeading>
        <Link
          href="/publications"
          className="hidden md:flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-[#3B82F6] transition-colors mb-4 uppercase tracking-widest"
        >
          View Archive <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-6">
        {latestPublications.map((pub, index) => (
          <Link
            key={index}
            href={pub.link}
            target="_blank"
            className="group block p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3 text-[#3B82F6] mb-2">
                <FileText size={20} />
                <span className="text-xs font-mono uppercase tracking-widest">
                  {pub.conference} • {pub.year}
                </span>
              </div>
              <ArrowUpRight
                className="text-gray-600 group-hover:text-white transition-colors"
                size={18}
              />
            </div>

            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
              {pub.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl line-clamp-3">
              {pub.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile-only "View Archive" link */}
      <Link
        href="/publications"
        className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm font-mono text-gray-500 hover:text-[#3B82F6] transition-colors uppercase tracking-widest"
      >
        View Full Archive <ArrowRight size={14} />
      </Link>
    </section>
  );
}
