/* FILE: src/components/layout/ExperienceLayout.tsx */
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import BrandPattern from '@/components/ui/BrandPattern';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ExperienceLayoutProps {
  children: React.ReactNode;
  logo: string; // e.g. "/tealbase-logo.svg"
  opacity?: number;
}

export default function ExperienceLayout({
  children,
  logo,
  opacity = 0.07
}: ExperienceLayoutProps) {
  return (
    <div className="min-h-screen bg-[#030304] text-gray-200 font-sans selection:bg-teal-400 selection:text-black overflow-hidden relative">
      <Navbar />

      {/* The LV-Style Background Pattern */}
      {/* Make sure 'tealbase-logo.svg' exists in your public folder! */}
      <BrandPattern imageUrl={logo} opacity={opacity} size={120} imageSize={80} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Shared Back Button */}
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12 transition-colors font-mono uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Timeline
        </Link>

        {children}
      </main>

      <Footer />
    </div>
  );
}
