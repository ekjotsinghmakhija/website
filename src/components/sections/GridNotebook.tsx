"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

export default function GridNotebook() {
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-14">
      <SectionHeading badge="Deep Dives & Systems Architecture">
        Blogs
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-700/80 border border-dashed border-zinc-700/80 rounded overflow-hidden bg-zinc-950/40">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col justify-between p-6 hover:bg-zinc-900/30 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-zinc-400 font-mono text-[11px]">
                <span>{post.date}</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>

              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-dashed border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200">
              <span>Read Architecture Deep-Dive</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Boxed View All Button */}
      <div className="mt-6 flex justify-end">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded border border-zinc-700 bg-zinc-950/90 text-xs font-mono font-medium text-zinc-200 hover:text-white hover:border-cyan-500/80 hover:bg-zinc-900 transition-all shadow-sm"
        >
          <span>Read All Architecture Deep Dives</span>
          <ArrowUpRight size={14} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
