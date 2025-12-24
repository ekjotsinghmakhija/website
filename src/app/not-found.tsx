/* FILE: src/app/not-found.tsx */
'use client';
import Link from 'next/link';
import InteractiveGrid from '@/components/ui/InteractiveGrid';

export default function NotFound() {
  return (
    // FIX: Removed bg-[#030304]
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"><InteractiveGrid /></div>

      <div className="z-10 text-center space-y-6">
        <h1 className="text-9xl font-mono font-bold text-[#3B82F6] opacity-50">404</h1>
        <h2 className="text-2xl font-serif">Data Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          The vector you are looking for does not exist in this latent space.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-2 border border-white/20 hover:bg-white/10 rounded-full text-sm font-mono transition-all"
        >
          Return to Origin
        </Link>
      </div>
    </div>
  );
}
