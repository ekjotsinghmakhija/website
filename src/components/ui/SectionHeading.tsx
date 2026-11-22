import React from "react";

export default function SectionHeading({
  children,
  number,
  badge,
}: {
  children: React.ReactNode;
  number?: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6 pb-3 border-b border-white/10 font-mono">
      <div className="flex items-center gap-3">
        {number && (
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-2 py-0.5 rounded">
            SYS//{number}
          </span>
        )}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
          {children}
        </h2>
      </div>
      {badge && (
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          {badge}
        </span>
      )}
    </div>
  );
}
