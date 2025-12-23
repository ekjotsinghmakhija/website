'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCE } from '@/lib/experience';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section className="mb-32">
      <SectionHeading number="03">Experience</SectionHeading>
      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <Link
            key={job.id}
            href={`/experience/${job.slug}`}
            className="block group relative p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] transition-all hover:border-l-4 hover:border-l-[#3B82F6]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl text-white font-serif group-hover:text-[#3B82F6] transition-colors">
                  {job.company}
                </h3>
                <div className="text-gray-400 font-medium">{job.role}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{job.period}</span>
                <ArrowUpRight size={18} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
              {job.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
