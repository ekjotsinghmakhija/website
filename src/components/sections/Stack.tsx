/* FILE: src/components/sections/Stack.tsx */
'use client';

import { STACK } from '@/lib/stack';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function Stack() {
  return (
    <section className="mb-32">
      <SectionHeading number="02">Technical Arsenal</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STACK.map((group) => (
          <SpotlightCard
            key={group.category}
            from="#080808"
            to="#121212"
            className="h-full border-white/5"
          >
            <div className="p-8 h-full flex flex-col relative z-10">

              {/* Header */}
              <div className={`mb-6 ${group.color} p-3 bg-white/5 w-fit rounded-lg border border-white/5`}>
                <group.icon size={24} />
              </div>

              <h3 className="text-xl font-serif text-white mb-6 tracking-wide">
                {group.category}
              </h3>

              {/* List */}
              <ul className="space-y-3 mt-auto">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-400 font-mono group/item">
                    <span className={`w-1 h-1 rounded-full ${group.color.replace('text-', 'bg-')} opacity-50 group-hover/item:opacity-100 transition-opacity`} />
                    <span className="group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 p-4 opacity-20 ${group.color}`}>
                 <div className="w-2 h-2 border-t border-r border-current" />
              </div>

            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
