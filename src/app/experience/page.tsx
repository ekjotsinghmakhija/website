/* FILE: src/app/experience/page.tsx */
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { EXPERIENCE } from '@/lib/experience';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black bg-[#030304]">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none z-0" />

      <main className="relative z-10 pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">

        {/* Cinematic Header */}
        <header className="mb-20">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
               The Journey.
             </h1>
             <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
               Building institutions, architecting systems, and exploring the physics of intelligence.
             </p>
           </motion.div>
        </header>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-20">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot (Pulsing) */}
              <div className={`absolute -left-[5px] top-8 md:top-6 w-2.5 h-2.5 rounded-full ring-4 ring-[#030304] transition-all duration-500 group-hover:scale-150 ${job.theme.dot}`}>
                <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${job.theme.dot}`} />
              </div>

              {/* Card Content */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">

                 {/* Company Info with Logo */}
                 <div className="flex items-start gap-4">
                    {/* Logo Container */}
                    <div className={`relative w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-white/5 p-0.5 transition-colors duration-300 ${job.theme.border}`}>
                      <Image
                        src={job.logo}
                        alt={`${job.company} Logo`}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    <div>
                        <h2 className={`text-3xl md:text-4xl font-serif text-white transition-all duration-300 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r ${job.theme.gradient}`}>
                          {job.company}
                        </h2>
                        <div className={`text-lg md:text-xl font-medium mt-1 ${job.theme.primary}`}>
                          {job.role}
                        </div>
                    </div>
                 </div>

                 {/* Meta Data */}
                 <div className="text-right flex flex-row md:flex-col gap-3 md:gap-1 items-center md:items-end pl-[4rem] md:pl-0">
                    <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full w-fit">
                       <Calendar size={12} />
                       {job.period}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest px-1">
                       <MapPin size={12} />
                       {job.location}
                    </div>
                 </div>
              </div>

              {/* Description */}
              <div className={`relative p-6 -ml-6 rounded-sm border border-transparent transition-colors duration-500 bg-gradient-to-r from-white/[0.02] to-transparent ${job.theme.border}`}>
                 <p className="text-gray-300 text-lg leading-loose font-light">
                   {job.description}
                 </p>

                 {/* Link Action */}
                 <div className="mt-6">
                    <Link
                      href={job.slug === 'llm-group-chat' ? 'https://github.com/ekjot-singh' : `/experience/${job.slug}`}
                      className={`inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest transition-colors ${job.theme.secondary} hover:text-white group/link`}
                    >
                      {job.slug === 'llm-group-chat' ? 'View Source' : 'Read The Story'}
                      <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
