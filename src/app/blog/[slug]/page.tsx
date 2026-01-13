/* FILE: src/app/blog/[slug]/page.tsx */
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { BLOG_POSTS } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params before accessing properties
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 mb-8 transition-colors font-mono"
        >
          <ArrowLeft size={16} /> BACK TO NOTEBOOK
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="font-mono text-xs text-cyan-400 mb-4 block uppercase tracking-widest">
            {post.readTime} • {post.date}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 italic">
            {post.excerpt}
          </p>
        </header>

        {/* This is the fallback content if an MDX file is not found for the slug */}
        <div className="prose prose-invert prose-lg max-w-none">
           <p className="text-gray-500 italic border-l-4 border-gray-700 pl-4">
             [Content for "{post.title}" is currently being drafted. Check back shortly.]
           </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
