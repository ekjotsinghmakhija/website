/* FILE: src/components/layout/NotebookLayout.tsx */
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

interface NotebookLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date: string;
    readTime: string;
    tag?: string;
  };
}

export default function NotebookLayout({ children, meta }: NotebookLayoutProps) {
  return (
    <div className="min-h-screen bg-[#030304] text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 mb-12 transition-colors font-mono uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Notebook
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-12">
           <div className="flex items-center gap-4 text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {meta.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-blue-500/50" />
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> {meta.readTime}
              </span>
           </div>

           <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
             {meta.title}
           </h1>
        </header>

        {/* Prose Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-white
          prose-p:text-gray-300 prose-p:leading-loose
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-medium
          prose-li:text-gray-300 prose-blockquote:border-l-blue-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
        >
           {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
