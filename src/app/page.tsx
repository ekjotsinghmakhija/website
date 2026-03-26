import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Artifacts from '@/components/sections/Artifacts';
import Experience from '@/components/sections/Experience';
import Publications from '@/components/sections/Publications';
import Notebook from '@/components/sections/Notebook';

export default function PersonalHome() {

  const SectionLink = ({ href, text }: { href: string, text: string }) => (
    <div className="flex justify-end mt-4 mb-24 relative z-20">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-gray-400 hover:text-[#3B82F6] transition-colors"
      >
        <span>{text}</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-[#3B82F6] selection:text-white overflow-x-hidden bg-[#030304]">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <Hero />

        {/* 01: Experience */}
        <Experience />
        <SectionLink href="/experience" text="View Full Career Profile" />

        {/* 02: Systems & Projects */}
        <Artifacts />
        <SectionLink href="/projects" text="View All Systems & Open Source" />

        {/* 03: Research */}
        <Publications />
        <SectionLink href="/publications" text="View Full Research Archive" />

        {/* 04: Engineering Log */}
        <Notebook />

      </main>

      <Footer />
    </div>
  );
}
