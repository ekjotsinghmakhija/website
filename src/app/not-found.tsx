/* FILE: src/app/not-found.tsx */
'use client';

import Link from 'next/link';
import { MoveLeft, SearchX } from 'lucide-react';
import DecryptedText from '@/components/ui/DecryptedText';
import { useState, useEffect } from 'react';

const ERROR_MESSAGES = [
  "The vector you are tracing points to a null reference. This coordinate does not exist in the current latent space.",
  "Segmentation Fault: The simulation attempted to access memory that does not exist.",
  "This route was pruned during the optimization step. The weights have decayed to zero.",
  "The pointer is dangling. You are staring into the uninitialized void."
];

function MessageCycler() {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Fade Out
      setOpacity(0);

      // 2. Wait for fade, then swap text and Fade In
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ERROR_MESSAGES.length);
        setOpacity(1);
      }, 500); // 500ms matches the duration-500 class

    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="text-gray-500 mb-10 leading-relaxed min-h-[50px] transition-opacity duration-500 flex items-center justify-center max-w-lg mx-auto"
      style={{ opacity: opacity }}
    >
      {ERROR_MESSAGES[index]}
    </p>
  );
}

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#030304] text-white relative overflow-hidden font-mono selection:bg-rose-500/30">

      {/* Background Decor: Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="z-10 flex flex-col items-center max-w-xl text-center px-6">

        {/* Icon Glitch */}
        <div className="mb-8 p-4 rounded-full bg-rose-500/5 border border-rose-500/20 shadow-[0_0_30px_rgba(225,29,72,0.1)]">
          <SearchX className="w-12 h-12 text-rose-500 opacity-80" />
        </div>

        {/* 404 Glitch Text */}
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-2">
          404
        </h1>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent my-6 opacity-50" />

        <h2 className="text-xl md:text-2xl text-rose-400 font-bold tracking-widest uppercase mb-4">
          <DecryptedText text="SIGNAL_LOST" />
        </h2>

        {/* Cycling Error Messages */}
        <MessageCycler />

        {/* Terminal Trace Box */}
        <div className="w-full bg-[#0A0A0A] border border-white/5 rounded p-4 mb-10 text-left text-xs font-mono text-gray-600 font-light shadow-2xl">
          <div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-2 h-2 rounded-full bg-rose-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <p>&gt; initiating_search(target);</p>
          <p>&gt; <span className="text-rose-500">error: target_not_found</span></p>
          <p>&gt; status: void</p>
          <p>&gt; trace: end_of_line</p>
        </div>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/10 rounded-full transition-all duration-300"
        >
          <MoveLeft size={16} className="text-gray-400 group-hover:text-rose-400 transition-colors group-hover:-translate-x-1" />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white">Return to Origin</span>
        </Link>
      </div>
    </div>
  );
}
