import Link from 'next/link';
import { Project } from '@/lib/personal-projects';
import TechBadge from './TechBadge'; // Keeps your custom badge component

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-800/80 hover:border-zinc-700 h-full">

      {/* Header: Title and Role */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-emerald-400 mt-1">
            {project.role} &bull; {project.visibility}
          </p>
        </div>
        {project.featured && (
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">
            Featured
          </span>
        )}
      </div>

      {/* The Executive Summary (Changed from project.description) */}
      <p className="mb-6 text-sm text-zinc-400 leading-relaxed">
        {project.aiSummary}
      </p>

      {/* Footer area */}
      <div className="mt-auto">
        {/* Tech Stack (Changed from project.tech to project.techStack) */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mb-4">
          {project.techStack?.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white hover:underline flex items-center gap-1 w-fit"
        >
          View Source Code &rarr;
        </Link>
      </div>
    </div>
  );
}
