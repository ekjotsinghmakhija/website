/* FILE: src/components/ui/ProjectCard.tsx */
import Link from "next/link";
import { Project } from "@/lib/personal-projects";

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-800/80 hover:border-zinc-700 ${className}`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-emerald-400 mt-1 uppercase tracking-widest">
            {project.role} • {project.visibility}
          </p>
        </div>
        {project.featured && (
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-medium text-zinc-300 border border-zinc-700 uppercase tracking-widest">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-sm text-zinc-400 leading-relaxed">
        {project.aiSummary}
      </p>

      {/* Footer / Stack */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 text-zinc-400 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-1 w-fit"
        >
          Explore Source →
        </Link>
      </div>
    </div>
  );
}
