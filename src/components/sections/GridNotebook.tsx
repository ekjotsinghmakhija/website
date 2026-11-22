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
      <SectionHeading number="06" badge="Deep Dives & Systems Internals">
        Technical Writing & Engineering Log
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-800/80 border border-dashed border-zinc-800/80 rounded overflow-hidden">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col justify-between p-6 bg-zinc-950/40 hover:bg-zinc-900/30 transition-colors group"
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

            <div className="pt-4 mt-4 border-t border-dashed border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200">
              <span>Read Architecture</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
        >
          <span>Read All 30+ Architecture Posts</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
