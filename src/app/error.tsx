/* FILE: src/app/error.tsx */
'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#030304] text-white relative overflow-hidden font-mono selection:bg-amber-500/30">

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-black to-black opacity-40 pointer-events-none" />

      <div className="z-10 flex flex-col items-center max-w-lg text-center px-6">

        {/* Warning Icon */}
        <div className="mb-6 text-amber-500 animate-pulse">
          <AlertTriangle size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          SYSTEM_FAILURE
        </h1>

        <p className="text-amber-500/80 font-mono text-sm tracking-widest uppercase mb-8">
          RUNTIME_EXCEPTION_DETECTED
        </p>

        {/* Error Trace Box */}
        <div className="w-full bg-[#0A0A0A] border border-amber-500/20 rounded p-4 mb-8 text-left overflow-hidden">
          <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2 text-xs text-gray-500">
            <Terminal size={12} />
            <span>stack_trace.log</span>
          </div>
          <div className="font-mono text-xs text-gray-400 space-y-1 break-all">
             <p><span className="text-rose-500">Error:</span> {error.message || "Unknown system error occurred."}</p>
             {error.digest && <p className="text-gray-600">Digest: {error.digest}</p>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/50 text-amber-200 rounded-sm transition-all"
          >
            <RefreshCcw size={16} />
            <span>Reboot System</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-sm transition-all"
          >
            <span>Return Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
