'use client';
import { EDUCATION, CERTIFICATIONS } from '@/lib/education';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Education() {
  return (
    <>
      {/* SECTION 1: EDUCATION */}
      <section className="mb-24">
        <SectionHeading number="03">Education</SectionHeading>

        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/10 bg-[#050505] rounded-sm hover:bg-[#0A0A0A] transition-colors group"
            >
               {/* Left accent border */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />

               <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    {/* Institution: White Serif */}
                    <h3 className="text-3xl font-serif text-white mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree: Vibrant Cyan */}
                    <div className="text-xl text-cyan-300 font-medium mb-3">
                      {edu.degree}
                    </div>

                    {/* Description: Light Gray */}
                    <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Period: Mono Font */}
                  <span className="font-mono text-sm text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full h-fit whitespace-nowrap">
                    {edu.period}
                  </span>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: CERTIFICATIONS (Separated) */}
      <section className="mb-32">
        <SectionHeading number="04">Certifications</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <Link
              key={index}
              href={cert.link}
              target="_blank"
              className="group p-6 border border-white/5 bg-[#080808] hover:bg-[#0A0A0A] hover:border-emerald-500/30 transition-all flex flex-col justify-between h-full"
            >
               <div>
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{cert.issuer}</span>
                    <ArrowUpRight size={16} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>

                 {/* Title: Emerald Green on Hover */}
                 <h4 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">
                   {cert.title}
                 </h4>

                 <div className="text-xs text-gray-600 font-mono mb-6">Issued {cert.date}</div>
               </div>

               {/* Skills Tags */}
               <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-0.5 bg-white/5 text-[10px] text-gray-400 rounded-sm border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                     <span className="px-2 py-0.5 text-[10px] text-gray-500">+{cert.skills.length - 3} more</span>
                  )}
               </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
