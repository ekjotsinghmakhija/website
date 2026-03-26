"use client";

import { useState, useMemo } from "react";
import { PERSONAL_PROJECTS } from "@/lib/personal-projects";
import ProjectCard from "@/components/ui/ProjectCard";

// 1. Import your layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically extract unique tech stack tags from the data
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PERSONAL_PROJECTS.forEach((p) =>
      p.techStack?.forEach((t) => tags.add(t.trim())),
    );
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = PERSONAL_PROJECTS.filter(
    (p) =>
      activeFilter === "All" ||
      p.techStack?.some((t) => t.trim() === activeFilter),
  );

  return (
    <>
      {/* 2. Add the Navbar back to the top */}
      <Navbar />

      {/* 3. Wrap the content in a main tag with padding-top (pt-24) so it clears the navbar */}
      <main className="min-h-screen max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-white">
          Engineering Portfolio
        </h1>
        <p className="text-zinc-400 mb-10">
          A technical overview of my open-source contributions, system
          architecture, and AI research.
        </p>

        {/* The CTO Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tag
                  ? "bg-white text-black shadow-md"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* 4. Add the Footer back to the bottom */}
      <Footer />
    </>
  );
}
