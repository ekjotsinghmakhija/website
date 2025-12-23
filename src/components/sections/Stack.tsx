'use client';
import { STACK } from '@/lib/stack';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Stack() {
  return (
    <section className="mb-32">
      <SectionHeading number="02">Technical Arsenal</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STACK.map((group) => (
          <div key={group.category} className="p-6 border border-white/5 bg-[#080808] hover:border-[#3B82F6]/30 transition-colors group">
            <div className="mb-4 text-[#3B82F6] opacity-80 group-hover:opacity-100">
              <group.icon size={24} />
            </div>
            <h3 className="text-white font-medium mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-gray-400 font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
