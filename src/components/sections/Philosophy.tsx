/* FILE: src/components/sections/Philosophy.tsx */
'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { WRITING } from '@/lib/writing';

export default function Philosophy() {
  return (
    <section className="mb-32">
       <h2 className="text-4xl font-serif font-medium text-white mb-12 border-b border-white/10 pb-4 flex justify-between items-end">
          The Notebook
          <span className="text-xs font-mono text-gray-500 hidden md:block">THOUGHTS & THEORY</span>
       </h2>

       <div className="space-y-10">
          {WRITING.map((essay) => (
            <Link key={essay.id} href={essay.link} target="_blank" className="group block">
               <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#3B82F6] transition-colors">
                     {essay.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-600">{essay.date}</span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#3B82F6]" size={16} />
                  </div>
               </div>
               <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed group-hover:text-gray-300 transition-colors">
                  {essay.excerpt}
               </p>
            </Link>
          ))}
       </div>
    </section>
  );
}
