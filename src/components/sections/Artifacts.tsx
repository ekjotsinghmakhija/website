/* FILE: src/components/sections/Artifacts.tsx */
"use client";

import { PERSONAL_PROJECTS } from "@/lib/personal-projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Artifacts() {
  const selectedProjects = PERSONAL_PROJECTS.filter((p) => p.featured).slice(
    0,
    2,
  );

  return (
    <section className="mb-8">
      <SectionHeading number="02">PROJECTS</SectionHeading>

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
