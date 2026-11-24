import Link from "next/link";
import { SOCIALS } from "@/lib/socials";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/publications" },
    { label: "Journey", href: "/experience" },
    { label: "Technical Log", href: "/blog" },
    { label: "Stack & Tooling", href: "/stack" },
    { label: "Certifications", href: "/certifications" },
  ];

  const initiatives = [
    { label: "Metanthropic Research", href: "https://metanthropic.vercel.app", external: true },
    { label: "Tealbase Platform", href: "/experience/tealbase", external: false },
    { label: "Arvi 20B Reasoning MoE", href: "/blog/arvi-20b-moe-release", external: false },
    { label: "M-NAAR Specification", href: "/blog/unlearning-trilemma-m-naar", external: false },
    { label: "MahenOCR VLM", href: "/blog/mahenocr-vlm-architecture", external: false },
  ];

  const machineEndpoints = [
    { label: "llms.txt (Standard)", href: "/llms.txt" },
    { label: "llms-full.txt (Full Context)", href: "/llms-full.txt" },
    { label: "sitemap.xml", href: "/sitemap.xml" },
    { label: "robots.txt", href: "/robots.txt" },
  ];

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-[#020203] text-zinc-400 mt-28">
      {/* Top Section: Identity + Structured Columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Identity & Mission Column */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                  Systems & Frontier AI Lab
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-white tracking-tight mb-3">
                Ekjot Singh
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-light max-w-sm mb-6">
                Founder & Lead Architect at Metanthropic. Investigating mechanistic interpretability, sparse autoencoder topology, and low-level systems infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                GitHub <ArrowUpRight size={12} className="text-zinc-500" />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Twitter / X <ArrowUpRight size={12} className="text-zinc-500" />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight size={12} className="text-zinc-500" />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={SOCIALS.email}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-200 mb-4">
              Directory
            </h5>
            <ul className="space-y-2.5 text-xs font-mono">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Systems Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-200 mb-4">
              Research & Lab
            </h5>
            <ul className="space-y-2.5 text-xs font-mono">
              {initiatives.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      {item.label}
                      <ArrowUpRight size={11} className="text-zinc-600" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-cyan-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Machine & Agent Endpoints */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-200 mb-4">
              Machine Endpoints
            </h5>
            <ul className="space-y-2.5 text-xs font-mono">
              {machineEndpoints.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-zinc-900">
              <span className="text-[11px] font-mono text-zinc-500 leading-tight block">
                Standardized for web crawlers & LLM reasoning agents.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Colophon & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {currentYear} Ekjot Singh.</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span>All architecture notes open-access under MIT / Apache-2.0.</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px]">ekjot.me</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
