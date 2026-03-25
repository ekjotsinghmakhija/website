/* FILE: src/app/blog/page.tsx */
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { BLOG_POSTS } from '@/lib/blog';
import Link from 'next/link';

export default function BlogIndex() {
  // Sort posts: Newest (Feb 2026) to Oldest (Aug 2025)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#030304] text-white">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-16">The Notebook</h1>
        <div className="space-y-12">
          {sortedPosts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group border-b border-white/10 pb-12"
            >
              <span className="font-mono text-xs text-blue-400 mb-2 block tracking-widest uppercase">
                {post.date}
              </span>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-blue-400 transition-colors">
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
