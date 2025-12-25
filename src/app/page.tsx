/* FILE: src/app/page.tsx */
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';

// Data Imports
import { PERSONAL_PROJECTS } from '@/lib/personal-projects';
import { STACK } from '@/lib/stack';
import { EXPERIENCE } from '@/lib/experience';
import { EDUCATION, CERTIFICATIONS } from '@/lib/education';
import { PUBLICATIONS } from '@/lib/publications';
import { BLOG_POSTS } from '@/lib/blog';

export default function PersonalHome() {
  // 1. Filter Selected Artifacts (Magnum Opus, Max 2)
  const selectedProjects = PERSONAL_PROJECTS.filter(p => p.type === 'magnum-opus').slice(0, 2);

  // 2. Filter Stack (ALL Categories, will limit items in render)
  // We want all 4 categories: Languages, Full Stack, Infra, AI
  const selectedStack = STACK;

  // 3. Filter Experience (Max 2 Roles)
  const selectedExperience = EXPERIENCE.slice(0, 2);

  // 4. Education & Certifications
  const selectedEducation = EDUCATION;
  const selectedCertifications = CERTIFICATIONS.slice(0, 2);

  // 5. Filter Publications (Max 2)
  const selectedPublications = PUBLICATIONS.slice(0, 2);

  // 6. Filter Notebook (Max 2)
  const selectedPosts = BLOG_POSTS.slice(0, 2);

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

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(0,1fr)] mb-12">
              {selectedProjects.map((project) => (
                <div key={project.id} className="min-h-[400px]">
                  <ProjectCard project={project} className="h-full" />
                </div>
              ))}
           </div>

           <ViewAllButton href="/projects" text="View Complete Archive" />
        </section>

        {/* 2. Technical Arsenal */}
        <section className="mb-8">
          <SectionHeading number="02">Technical Arsenal</SectionHeading>
          {/* Changed grid to 4 columns since we are showing all categories now */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selectedStack.map((group) => (
              <div key={group.category} className="p-6 border border-white/5 bg-[#080808] hover:border-[#3B82F6]/30 transition-colors group">
                <div className="mb-4 text-[#3B82F6] opacity-80 group-hover:opacity-100">
                  <group.icon size={24} />
                </div>
                <h3 className="text-white font-medium mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {/* LIMIT ITEMS TO 2 PER CATEGORY */}
                  {group.items.slice(0, 2).map((item) => (
                    <li key={item} className="text-sm text-gray-400 font-mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ViewAllButton href="/stack" text="View Full Arsenal" />
        </section>

        {/* 3. Education & Certifications */}
        <section className="mb-8">
           <SectionHeading number="03">Education & Certifications</SectionHeading>

           <div className="flex flex-col gap-6 mb-12">
              {selectedEducation.map((edu, index) => (
                <div key={index} className="relative p-8 border border-white/10 bg-[#050505] rounded-sm hover:bg-[#0A0A0A] transition-colors group">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                   <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-serif text-white mb-2">{edu.institution}</h3>
                        <div className="text-xl text-cyan-300 font-medium mb-3">{edu.degree}</div>
                        <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed">{edu.description}</p>
                      </div>
                      <span className="font-mono text-sm text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full h-fit whitespace-nowrap">
                        {edu.period}
                      </span>
                   </div>
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCertifications.map((cert, index) => (
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
                     <h4 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">
                       {cert.title}
                     </h4>
                     <div className="text-xs text-gray-600 font-mono mb-6">Issued {cert.date}</div>
                   </div>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      {cert.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-white/5 text-[10px] text-gray-400 rounded-sm border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                   </div>
                </Link>
              ))}
           </div>

           <ViewAllButton href="/certifications" text="View All Certifications" />
        </section>

        {/* 4. Experience */}
        <section className="mb-8">
          <SectionHeading number="04">Experience</SectionHeading>
          <div className="space-y-6">
            {selectedExperience.map((job) => (
              <Link
                key={job.id}
                href={`/experience/${job.slug}`}
                className="block group relative p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] transition-all hover:border-l-4 hover:border-l-[#3B82F6]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl text-white font-serif group-hover:text-[#3B82F6] transition-colors">
                      {job.company}
                    </h3>
                    <div className="text-gray-400 font-medium">{job.role}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{job.period}</span>
                    <ArrowUpRight size={18} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
                  {job.description}
                </p>
              </Link>
            ))}
          </div>
          <ViewAllButton href="/experience" text="View Full Career" />
        </section>

        {/* 5. Publications */}
        <section className="mb-8">
          <SectionHeading number="05">Publications</SectionHeading>
          <div className="grid gap-6">
            {selectedPublications.map((pub, index) => (
              <Link
                key={index}
                href={pub.link}
                target="_blank"
                className="group block p-8 border border-white/10 bg-[#050505] hover:bg-[#0A0A0A] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3 text-[#3B82F6] mb-2">
                      <FileText size={20} />
                      <span className="text-xs font-mono uppercase tracking-widest">{pub.conference}</span>
                   </div>
                   <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={18} />
                </div>

                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {pub.description}
                </p>
              </Link>
            ))}
          </div>
          <ViewAllButton href="/publications" text="View All Publications" />
        </section>

        {/* 6. Notebook */}
        <section id="notebook" className="mb-32">
          <SectionHeading number="06">The Notebook</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose prose-invert">
              <p className="text-lg text-gray-300 leading-relaxed">
                "The Notebook" is a collection of rough thoughts, research notes, and architectural decisions. It serves as a public log of my attempt to reverse-engineer intelligence.
              </p>
              <Link href="/blog" className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors mt-6 inline-block">
                View All Entries →
              </Link>
            </div>

            <div className="space-y-6">
              {selectedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl text-white font-medium group-hover:text-[#3B82F6] transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-600">{post.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
