/* FILE: src/components/sections/Artifacts.tsx */
'use client';

import { PERSONAL_PROJECTS } from '@/lib/personal-projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Artifacts() {
  // FIXED: Filter using the 'featured' boolean instead of 'type'
  const selectedProjects = PERSONAL_PROJECTS.filter(p => p.featured).slice(0, 2);

  return (
    <section className="mb-8">
      <SectionHeading number="01">Selected Artifacts</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(0,1fr)]">
        {selectedProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} className="h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
