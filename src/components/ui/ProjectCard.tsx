/* FILE: src/components/ui/ProjectCard.tsx */
'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';
import TechBadge from './TechBadge';
import { Project } from '@/lib/personal-projects';
import { CSSProperties } from 'react';

export default function ProjectCard({
  project,
  className = '',
  style
}: {
  project: Project,
  className?: string,
  style?: CSSProperties
}) {

  // Task 2: Dynamic coloring logic
  const getAccentColor = (type: string) => {
    switch(type) {
      case 'magnum-opus': return 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20'; // Blue
      case 'product': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'; // Green
      case 'library': return 'text-red-400 bg-red-400/10 border-red-400/20'; // Red
      default: return 'text-gray-400 bg-white/5 border-white/10';
    }
  };

  const getHoverColor = (type: string) => {
    switch(type) {
        case 'product': return 'group-hover:text-emerald-400';
        case 'library': return 'group-hover:text-red-400';
        default: return 'group-hover:text-[#3B82F6]';
    }
  };

  return (
    <Link
      href={project.link}
      target="_blank"
      className={`block h-full ${className}`}
      style={style}
    >
      <SpotlightCard className="h-full p-8 flex flex-col justify-between group bg-[#0A0A0A]/80 hover:bg-[#0F0F0F]/90 transition-colors backdrop-blur-sm">
        <div>
          <div className="flex justify-between items-start mb-6">
             <div className={`
               px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border
               ${getAccentColor(project.type)}
             `}>
                {project.type === 'magnum-opus' ? 'Magnum Opus' : project.type}
             </div>
             <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={18} />
          </div>

          <h3 className={`text-2xl font-serif text-white mb-2 transition-colors ${getHoverColor(project.type)}`}>
            {project.title}
          </h3>
          <div className="text-xs font-mono text-gray-500 mb-4">{project.tagline}</div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      </SpotlightCard>
    </Link>
  );
}
