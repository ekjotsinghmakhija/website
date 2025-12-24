/* FILE: src/app/blog/page.tsx */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { BLOG_POSTS } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Notebook | Ekjot Singh",
  description: "Thoughts, research notes, and architectural decisions.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#030304] text-white">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-16">The Notebook</h1>
        <div className="space-y-12">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group border-b border-white/10 pb-12">
              <span className="font-mono text-xs text-[#3B82F6] mb-2 block">{post.date}</span>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-[#3B82F6] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
