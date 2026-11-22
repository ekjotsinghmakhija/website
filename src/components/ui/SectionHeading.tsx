import React from "react";

export default function SectionHeading({
  children,
  badge,
}: {
  children: React.ReactNode;
  badge?: string;
  number?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6 pb-3 border-b border-dashed border-zinc-700/80">
      <h2 className="text-xl sm:text-2xl font-serif tracking-tight text-white">
        {children}
      </h2>
      {badge && (
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          {badge}
        </span>
      )}
    </div>
  );
}
