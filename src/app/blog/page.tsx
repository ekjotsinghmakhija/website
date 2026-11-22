import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { BLOG_POSTS } from "@/lib/blog";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function BlogIndex() {
  // Sort posts: Newest to Oldest
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#030304] text-zinc-100">
      <Navbar />

      <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header */}
        <header className="pb-8 mb-8 border-b border-dashed border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
            <BookOpen size={15} />
            <span>Architecture Notes & Research Dispatches</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-3">
            Technical Log & Research Notes
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            Deep-dives into database internals, low-level socket programming, sparse autoencoder manifolds, and foundational model alignment.
          </p>
        </header>

        {/* Posts List with clean dashed dividers */}
        <div className="divide-y divide-dashed divide-zinc-800/80 border-y border-dashed border-zinc-700/80">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-6 hover:bg-zinc-950/60 px-3 -mx-3 transition-colors rounded"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 whitespace-nowrap">
                  <span>{post.date}</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
