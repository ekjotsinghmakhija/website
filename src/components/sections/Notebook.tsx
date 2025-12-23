/* FILE: src/components/sections/Notebook.tsx */
'use client';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import SectionHeading from '../ui/SectionHeading';

export default function Notebook() {
  // Take only the first 3 posts
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="notebook" className="mb-32">
      <SectionHeading number="04">The Notebook</SectionHeading>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300 leading-relaxed">
            "The Notebook" is a collection of rough thoughts, research notes, and architectural decisions. It serves as a public log of my attempt to reverse-engineer intelligence.
          </p>
          <Link href="/blog" className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors mt-6 inline-block">
            View All Entries →
          </Link>
        </div>

        <div className="space-y-6">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl text-white font-medium group-hover:text-[#3B82F6] transition-colors">
                  {post.title}
                </h3>
                <span className="text-xs font-mono text-gray-600">{post.date}</span>
              </div>
              <p className="text-sm text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
