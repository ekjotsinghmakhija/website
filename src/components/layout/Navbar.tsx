"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SOCIALS } from "@/lib/socials";
import { Menu, X } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "PROJECTS", href: "/projects" },
    { name: "RESEARCH", href: "/publications" },
    { name: "JOURNEY", href: "/experience" },
    { name: "LOG", href: "/blog" },
    { name: "STACK", href: "/stack" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? "bg-[#030304]/90 backdrop-blur-md border-zinc-800/80"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-serif font-bold tracking-tight hover:text-cyan-400 transition-colors z-50 text-base sm:text-lg"
          >
            EKJOT SINGH.
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-4 w-[1px] bg-zinc-800 mx-1" />

            <Link
              href="/resume.pdf"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              CV
            </Link>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={SOCIALS.email}
              className="px-3 py-1 bg-zinc-900 border border-zinc-750 rounded text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors text-[11px]"
            >
              CONTACT
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="fixed inset-0 z-40 bg-[#030304]/98 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-xl font-mono">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-zinc-800 flex items-center gap-4 text-sm font-mono">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="text-cyan-400"
                >
                  DOWNLOAD CV
                </Link>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
