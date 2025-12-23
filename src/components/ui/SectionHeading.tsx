import React from 'react';

export default function SectionHeading({ children, number }: { children: React.ReactNode, number: string }) {
  return (
    <div className="flex items-end gap-4 mb-12 border-b border-white/10 pb-4">
      <h2 className="text-3xl md:text-4xl font-serif text-white">{children}</h2>
      <span className="font-mono text-xs text-[#3B82F6] mb-1.5">{number}</span>
    </div>
  );
}
