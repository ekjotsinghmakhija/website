'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import Hero from '@/components/sections/Hero';
import Stack from '@/components/sections/Stack';
import Experience from '@/components/sections/Experience';
import Notebook from '@/components/sections/Notebook';
import Publications from '@/components/sections/Publications';
import ProjectCard from '@/components/ui/ProjectCard';
import Education from '@/components/sections/Education';
import { PERSONAL_PROJECTS } from '@/lib/personal-projects';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PersonalHome() {
  const mainProject = PERSONAL_PROJECTS.find(p => p.id === 'metanthropic');
  const tealbase = PERSONAL_PROJECTS.find(p => p.id === 'tealbase');
  const otherProjects = PERSONAL_PROJECTS.filter(p => p.id !== 'metanthropic' && p.id !== 'tealbase').slice(0, 3);

  // FIX: Changed -mt-20 to mt-12 to create the gap
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
    <div className="min-h-screen font-sans selection:bg-cyan-300 selection:text-black overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <Hero />

        {/* 1. Selected Artifacts */}
        <section className="mb-8">
           <SectionHeading number="01">Selected Artifacts</SectionHeading>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(0,1fr)] mb-6">
              {mainProject && <div className="min-h-[400px]"><ProjectCard project={mainProject} className="h-full" /></div>}
              {tealbase && <div className="min-h-[400px]"><ProjectCard project={tealbase} className="h-full" /></div>}
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {otherProjects.map(project => (
                 <ProjectCard key={project.id} project={project} className="min-h-[300px]" />
              ))}
           </div>

           <ViewAllButton href="/projects" text="View Complete Archive" />
        </section>

        {/* 2. Technical Arsenal */}
        <Stack />
        <ViewAllButton href="/stack" text="View Full Arsenal" />

        {/* 3. Education & Certifications */}
        <Education />
        <ViewAllButton href="/certifications" text="View All Certifications" />

        {/* 4. Experience */}
        <Experience />
        <ViewAllButton href="/experience" text="View Full Career" />

        {/* 5. Publications & Notebook */}
        <Publications />
        <ViewAllButton href="/publications" text="View All Publications" />

        <Notebook />
      </main>

      <Footer />
    </div>
  );
}
