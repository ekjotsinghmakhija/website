'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Database, Zap, Server, Activity } from 'lucide-react';

export default function WhyTealbasePost() {
  const meta = {
    title: "Why I Built Tealbase",
    date: "Aug 20, 2025",
    readTime: "6 min read",
    tag: "Engineering"
  };

  return (
    <NotebookLayout meta={meta}>
      <p>It was <span className="text-rose-400 font-mono font-bold">3:14 AM</span> on a Tuesday. Our Firebase instance was choking, and the bill had just crossed four figures for the day.</p>

      <h2 className="text-teal-400 font-serif italic">The Success Disaster</h2>
      <p>We were trapped in a luxury prison. I couldn't optimize our bottlenecks because I didn't have SQL; I had a JSON tree and a prayer. I built <strong>Tealbase</strong> to give developers the realtime magic of Firebase with the raw power of <strong>Postgres</strong>.</p>

      <div className="my-12 py-10 border-y border-teal-500/20 bg-teal-900/10 text-center rounded-sm backdrop-blur-sm not-prose">
        <span className="block font-mono text-xs text-teal-500 tracking-widest uppercase mb-4">The Founding Axiom</span>
        <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight m-0">
          "You shouldn't have to <span className="text-teal-400 italic">rent</span> your own data."
        </h3>
      </div>

      <h2 className="text-cyan-400 font-serif">The WAL Solution</h2>
      <p>Tealbase doesn't poll. It acts as a stethoscope for the <strong>Write-Ahead Log (WAL)</strong>. We listen to the binary stream of Postgres transactions and broadcast them instantly to WebSockets, handling <strong>10,000 concurrent connections</strong> on a $5 droplet.</p>
    </NotebookLayout>
  );
}
