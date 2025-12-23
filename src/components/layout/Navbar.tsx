'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Github, Menu, X } from 'lucide-react';
import { SOCIALS } from '@/lib/socials';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // ADDED "RESEARCH" LINK HERE
  const navLinks = [
    { name: 'PROJECTS', href: '/projects' },
    { name: 'RESEARCH', href: '/publications' }, // New Link
    { name: 'EXP', href: '/experience' },
    { name: 'NOTES', href: '/blog' },
    { name: 'STACK', href: '/stack' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? 'bg-[#030304]/90 backdrop-blur-md border-white/5'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2 text-white font-serif font-bold tracking-tight hover:text-cyan-400 transition-colors z-50">
            <Terminal size={18} className="text-cyan-400" />
            EKJOT SINGH.
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm font-mono text-gray-400">
             {navLinks.map(link => (
               <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                 {link.name}
               </Link>
             ))}

             <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

             <Link href="/resume.pdf" target="_blank" className="hover:text-white transition-colors">CV</Link>
             <a href={SOCIALS.github} target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
             <a href={SOCIALS.email} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors text-xs">
               CONTACT
             </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030304] pt-24 px-6 md:hidden flex flex-col h-dvh overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-serif text-gray-300">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 pb-4 hover:text-cyan-400 hover:pl-4 transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-4 hover:text-cyan-400 hover:pl-4 transition-all"
              >
                RESUME / CV
              </Link>
            </div>

            <div className="mt-auto pb-12 pt-8 flex gap-6 justify-center">
              <a href={SOCIALS.github} target="_blank" className="p-4 bg-white/5 rounded-full text-white"><Github size={24} /></a>
              <a href={SOCIALS.email} className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full font-mono text-sm">
                SEND EMAIL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
