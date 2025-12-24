/* FILE: src/app/certifications/page.tsx */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { CERTIFICATIONS } from '@/lib/education'; // FIX: New Import
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications | Ekjot Singh",
  description: "Verified credentials and specialized coursework.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-300 selection:text-black">
      <Navbar />
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-16 border-b border-white/10 pb-12">
           <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Certifications.</h1>
           <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
             Verified credentials and specialized coursework from top institutions.
           </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <Link
              key={index}
              href={cert.link}
              target="_blank"
              className="group relative flex flex-col p-8 bg-[#050505] border border-white/10 hover:border-emerald-500/50 hover:bg-[#0A0A0A] transition-all duration-300"
            >
               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-sm text-emerald-400 group-hover:text-white group-hover:bg-emerald-500 transition-colors">
                     <Award size={24} />
                  </div>
                  <ExternalLink size={18} className="text-gray-600 group-hover:text-white transition-colors" />
               </div>
               <div className="relative z-10 mb-auto">
                 <h3 className="text-xl font-serif text-white mb-2 group-hover:text-emerald-300 transition-colors">
                   {cert.title}
                 </h3>
                 <p className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">
                   {cert.issuer}
                 </p>
                 <p className="text-xs text-gray-600 mb-6">
                   Issued {cert.date}
                 </p>
               </div>
               <div className="relative z-10 border-t border-white/5 pt-4 mt-4">
                  <p className="text-xs text-gray-500 font-mono mb-3">KEY COMPETENCIES:</p>
                  <ul className="space-y-2">
                    {cert.skills.slice(0, 4).map(skill => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300">
                        <CheckCircle2 size={12} className="text-emerald-500" /> {skill}
                      </li>
                    ))}
                  </ul>
               </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
