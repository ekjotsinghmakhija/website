export default function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-sm hover:border-[#3B82F6]/50 hover:text-white transition-colors cursor-default">
      {children}
    </span>
  );
}
