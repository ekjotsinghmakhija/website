'use client';
import Link from 'next/link';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PUBLICATIONS } from '@/lib/publications';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Publications() {
  return (
    <section className="mb-32">
      <SectionHeading number="05">Publications</SectionHeading>
      <div className="grid gap-6">
        {PUBLICATIONS.map((pub, index) => (
          <Link
            key={index}
            href={pub.link}
            target="_blank"
            className="group block p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3 text-[#3B82F6] mb-2">
                  <FileText size={20} />
                  <span className="text-xs font-mono uppercase tracking-widest">{pub.conference}</span>
               </div>
               <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={18} />
            </div>

            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
              {pub.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              {pub.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
