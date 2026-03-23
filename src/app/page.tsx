/* FILE: src/app/page.tsx */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Section Components
import Artifacts from '@/components/sections/Artifacts';
import Stack from '@/components/sections/Stack';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Publications from '@/components/sections/Publications';
import Notebook from '@/components/sections/Notebook';

export default function PersonalHome() {

  const ViewAllButton = ({ href, text }: { href: string, text: string }) => (
    <div className="flex justify-center mt-12 mb-32 relative z-20">
      <Link
        href={href}
        className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full bg-[#030304] hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
      >
        <span className="text-sm font-mono tracking-widest uppercase text-gray-300 group-hover:text-white">{text}</span>
        <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-300 selection:text-black overflow-x-hidden bg-[#030304]">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <Hero />

        {/* 01: Projects */}
        <Artifacts />
        <ViewAllButton href="/projects" text="View Complete Archive" />

        {/* 02: Tech Stack */}
        <Stack />
        <ViewAllButton href="/stack" text="View Full Arsenal" />

        {/* 03 & 04: Education & Certs */}
        <Education />
        <ViewAllButton href="/certifications" text="View All Certs" />

        {/* 05: Work Experience */}
        <Experience />
        <ViewAllButton href="/experience" text="View Full Career" />

        {/* 06: Research Papers */}
        <Publications />
        <ViewAllButton href="/publications" text="View All Publications" />

        {/* 07: Blog / Notebook */}
        <Notebook />

      </main>

      <Footer />
    </div>
  );
}
