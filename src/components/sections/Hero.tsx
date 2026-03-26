'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center mb-24 pt-32">
            <div className="grid md:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#3B82F6] text-xs font-mono mb-8 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
                        Systems & AI Architecture
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6">
                        Ekjot Singh
                    </h1>

                    <p className="text-lg md:text-3xl text-gray-200 font-light font-serif italic mb-8 leading-relaxed">
  Engineering <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium border-b border-cyan-500/30 pb-1">low-level systems</span> and <br />
  <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-medium border-b border-emerald-500/30 pb-1 mt-2 inline-block">scalable AI infrastructure</span>.
</p>

                    <p className="text-gray-400 max-w-xl text-lg mb-10 leading-relaxed">
                        Founder & CEO at <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">Metanthropic Lab</span> and CTO at <span className="text-teal-400 font-medium hover:text-teal-300 transition-colors">TealBase</span>. My work focuses on high-performance inference engines, open-source BaaS architectures, and deterministic reasoning models.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                            <Download size={18} /> Download Resume
                        </a>
                        <Link
                            href="/blog"
                            className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-sm hover:bg-white/10 transition-colors"
                        >
                            Read My Blog <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-4 relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-sm mx-auto grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="absolute inset-0 border border-white/10 translate-x-3 translate-y-3 z-0" />

                        <div className="relative z-10 bg-[#111] h-full overflow-hidden border border-white/10">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Ekjot Singh"
                                width={400}
                                height={500}
                                className="object-cover opacity-90 h-full w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
