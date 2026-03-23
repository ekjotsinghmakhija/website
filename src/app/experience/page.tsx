'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { EXPERIENCE } from '@/lib/experience';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-white">Experience</h1>
        <p className="text-zinc-400 mb-16">
          A timeline of my professional work, research, and open-source leadership.
        </p>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-0">
          {EXPERIENCE.map((job) => {
            // We set a default elegant theme here since we removed it from the raw data
            const dotColor = "bg-emerald-500";
            const borderColor = "group-hover:border-emerald-500/50";

            return (
              <div
                key={job.id}
                className="mb-12 md:mb-16 pl-8 md:pl-12 relative group"
              >
                {/* Timeline Dot (Pulsing) */}
                <div className={`absolute -left-[5px] top-8 md:top-6 w-2.5 h-2.5 rounded-full ring-4 ring-[#030304] transition-all duration-500 group-hover:scale-150 ${dotColor}`}>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${dotColor}`} />
                </div>

                {/* Experience Card */}
                <div className={`block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 transition-all hover:bg-zinc-800/80 ${borderColor}`}>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        {job.logo && (
                          <img src={job.logo} alt={`${job.company} logo`} className="w-5 h-5 object-contain" />
                        )}
                        <span className="text-lg font-medium text-zinc-300">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-zinc-500 md:text-right whitespace-nowrap">
                      {job.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                    {job.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {job.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional External Link */}
                  {job.link && (
                    <div className="mt-6">
                      <Link
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:underline flex items-center gap-1 w-fit"
                      >
                        Visit {job.company} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
