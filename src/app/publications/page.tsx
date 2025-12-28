/* FILE: src/app/publications/page.tsx */
import type { Metadata } from "next";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { PUBLICATIONS } from '@/lib/publications';
import { FileText, ArrowUpRight, BookOpen, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Publications | Ekjot Singh",
  description: "Research papers, preprints, and technical notes on the thermodynamics of intelligence.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-300 selection:text-black">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Responsive Header */}
        <header className="mb-12 md:mb-16 border-b border-white/10 pb-12">
           <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
              <BookOpen size={14} />
              <span>Research & Writing</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
             Publications.
           </h1>
           <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
             Selected preprints, conference papers, and technical notes on the thermodynamics of intelligence and mechanistic interpretability.
           </p>
        </header>

        {/* NEW: Metanthropic Lab Banner */}
        {/* This solves your dilemma: It keeps them on your site, but offers a clear path to the Lab. */}
        <div className="mb-16 p-8 md:p-10 rounded-sm border border-blue-500/20 bg-gradient-to-r from-blue-900/10 via-[#050505] to-purple-900/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-3 text-blue-400">
                        <FlaskConical size={20} />
                        <span className="font-mono text-xs uppercase tracking-widest">Primary Affiliation</span>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Metanthropic Research</h3>
                    <p className="text-gray-400 max-w-xl leading-relaxed">
                        I publish the majority of my formal research under the Metanthropic charter.
                        Access our full archives, including safety evaluations and interpretability logs.
                    </p>
                </div>

                <a
                    href="https://metanthropic.vercel.app/research"
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-colors shrink-0"
                >
                    Visit Lab Archives <ArrowRight size={18} />
                </a>
            </div>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <Link
              key={index}
              href={pub.link}
              target="_blank"
              className="group block p-6 md:p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
            >
               {/* Blue Glow on Hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

               <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                  <div className="flex-1">
                     <div className="flex items-center gap-3 text-blue-400 mb-3">
                        <FileText size={18} />
                        <span className="text-xs font-mono uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded-sm">
                          {pub.conference}
                        </span>
                        <span className="text-xs font-mono text-gray-500">{pub.year}</span>
                     </div>

                     <h2 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-blue-400 transition-colors">
                       {pub.title}
                     </h2>

                     <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
                       {pub.description}
                     </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="md:pt-2">
                    <div className="p-3 rounded-full border border-white/10 text-gray-500 group-hover:text-white group-hover:border-blue-500 group-hover:bg-blue-500 transition-all w-fit">
                       <ArrowUpRight size={20} />
                    </div>
                  </div>
               </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
