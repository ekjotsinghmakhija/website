/* FILE: src/app/projects/page.tsx */
'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ProjectCard from '@/components/ui/ProjectCard';
import { PERSONAL_PROJECTS } from '@/lib/personal-projects';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { Archive, Filter } from 'lucide-react';

export default function AllProjects() {
    const [filter, setFilter] = useState('all');
    const categories = ['all', 'magnum-opus', 'product', 'library', 'research'];
    const filteredProjects = filter === 'all'
        ? PERSONAL_PROJECTS
        : PERSONAL_PROJECTS.filter(p => p.type === filter);

    return (
        <div className="min-h-screen font-sans selection:bg-cyan-300 selection:text-black">
            <Navbar />
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <InteractiveGrid />
            </div>

            <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
                <header className="mb-12 text-center md:text-left border-b border-white/10 pb-12">
                    <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
                        <Archive size={14} />
                        <span>Project Archives</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        The Work.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        A complete collection of products, libraries, and experiments I've engineered.
                    </p>
                </header>

                <div className="sticky top-16 z-40 bg-[#030304]/80 backdrop-blur-md py-4 border-b border-white/5 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent md:border-none md:static overflow-x-auto flex items-center gap-2 no-scrollbar">
                    <span className="text-gray-500 mr-2 hidden md:block"><Filter size={16} /></span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`
                whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all
                ${filter === cat
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                }
              `}
                        >
                            {cat.replace('-', ' ')}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            className="h-full min-h-[320px] animate-in fade-in slide-in-from-bottom-4 duration-500"
                            style={{ animationDelay: `${index * 50}ms` } as any}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
