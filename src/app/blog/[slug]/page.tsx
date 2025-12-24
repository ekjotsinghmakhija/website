import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { BLOG_POSTS } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#3B82F6] mb-8 transition-colors font-mono"
        >
          <ArrowLeft size={16} /> BACK TO NOTEBOOK
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="font-mono text-xs text-[#3B82F6] mb-4 block uppercase tracking-widest">
            {post.readTime} • {post.date}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 italic">
            {post.excerpt}
          </p>
        </header>

        {/* Content Placeholder */}
        <div className="prose prose-invert prose-lg max-w-none">
           <p className="text-gray-400">
             [This is where the full content of your note would go. To add real content, update your `data.ts` to include a content field or connect a Markdown file loader.]
           </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
