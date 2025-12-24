/* FILE: src/components/sections/Philosophy.tsx */
'use client';

import { ArrowRight } from 'lucide-react'; // Switched to ArrowRight since these are now internal links
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog'; // IMPORT CHANGE: Switched to blog.ts

export default function Philosophy() {
  return (
    <section className="mb-32">
       <h2 className="text-4xl font-serif font-medium text-white mb-12 border-b border-white/10 pb-4 flex justify-between items-end">
          The Notebook
          <span className="text-xs font-mono text-gray-500 hidden md:block">THOUGHTS & THEORY</span>
       </h2>

       <div className="space-y-10">
          {/* DATA SOURCE CHANGE: Mapping over BLOG_POSTS now */}
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`} // LINK FIX: Points to internal blog posts
              className="group block"
            >
               <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#3B82F6] transition-colors">
                     {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-600">{post.date}</span>
                    {/* ICON CHANGE: ArrowRight implies internal navigation */}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#3B82F6]" size={16} />
                  </div>
               </div>
               <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed group-hover:text-gray-300 transition-colors">
                  {post.excerpt}
               </p>
            </Link>
          ))}
       </div>
    </section>
  );
}
