'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Database, Box, Terminal, Layers, ShieldCheck } from 'lucide-react';

export default function ChromabasePost() {
  const meta = {
    title: "Chromabase: Encoding Filesystems into Pixels",
    date: "Feb 08, 2026",
    readTime: "7 min read",
    tag: "Systems"
  };

  return (
    <NotebookLayout meta={meta}>
      <p>Cloud storage is increasingly becoming a gated garden of subscription fees and throughput limits. <strong>Chromabase</strong> was born out of a simple, rebellious question: <em>Can we use video hosting platforms as infinite, high-density data archives?</em></p>

      <h2 className="text-emerald-400 font-serif">The Technical Challenge</h2>
      <p>Standard file-to-pixel conversion often suffers from compression artifacts. If a single pixel shifts its color value in a compressed MP4 stream, the underlying data bit is corrupted. Most implementations fail at scale because they don't account for the "lossy" nature of the cloud.</p>

      <div className="my-10 p-8 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
        <h3 className="text-white font-serif mb-6 flex items-center gap-2">
          <Terminal size={20} className="text-emerald-400" /> The Rust Solution
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-4">
            <span className="text-emerald-400 font-mono">01.</span>
            <span><strong>Redundant Bitmasking:</strong> Encodes data across color channels with built-in error correction (Reed-Solomon).</span>
          </li>
          <li className="flex gap-4">
            <span className="text-emerald-400 font-mono">02.</span>
            <span><strong>Maximum Data Density:</strong> Optimizes file-to-pixel mapping to stay under the bit-rate caps of major hosting platforms.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-emerald-400 font-mono">03.</span>
            <span><strong>Parallel Processing:</strong> Leverages Rayon for multi-threaded encoding, processing gigabytes of data in seconds.</span>
          </li>
        </ul>
      </div>

      <p>By treating the "Video" not as content, but as a <strong>Resilient Data Container</strong>, Chromabase offers a path toward decentralized, accessible storage for massive datasets.</p>
    </NotebookLayout>
  );
}
