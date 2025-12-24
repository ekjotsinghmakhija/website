/* FILE: src/app/stack/page.tsx */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { STACK } from '@/lib/stack'; // FIX: New Import
import type { Metadata } from 'next'; // FIX: SEO Type

export const metadata: Metadata = {
  title: "Technical Arsenal | Ekjot Singh",
  description: "The languages, frameworks, and infrastructure I use.",
};

export default function StackPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-300 selection:text-black">
      <Navbar />
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-16 text-center md:text-left border-b border-white/10 pb-12">
           <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Technical Arsenal.</h1>
           <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
             The languages, frameworks, and infrastructure I use to architect intelligence.
           </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {STACK.map((group, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-white/10 bg-[#050505] hover:bg-[#080808] transition-colors relative overflow-hidden group"
            >
               <div className="absolute -right-4 -bottom-4 text-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:rotate-12">
                  <group.icon size={120} />
               </div>
               <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-purple-400">
                     <group.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-serif text-white">{group.category}</h2>
               </div>
               <div className="relative z-10 flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-sm text-sm font-mono text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
