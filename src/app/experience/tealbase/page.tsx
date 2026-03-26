"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, Github, Database, Shield, Zap, Server } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TealbasePage() {
  return (
    <div className="min-h-screen bg-[#030304] text-gray-200 font-sans selection:bg-teal-400 selection:text-black overflow-hidden relative">
      <Navbar />

      <div
        className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('/tealbase_canvas.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12 transition-colors font-mono uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Timeline
        </Link>

        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center justify-center shrink-0">
                <Image
                  src="/tealbase-logo.png"
                  alt="Tealbase Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 tracking-tight">
                  Tealbase.
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-end pb-2">
              <span className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-1">
                Founder & Architect
              </span>
              <span className="text-gray-400 font-mono text-xs">
                2025 — PRESENT
              </span>
            </div>
          </div>

          <div className="text-2xl text-gray-200 font-light leading-relaxed max-w-3xl">
            A rebellion against the "Success Disaster." We give developers the
            realtime magic of Firebase with the raw power and correctness of
            Postgres.
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://github.com/tealbase/tealbase"
              target="_blank"
              className="flex items-center gap-2 text-sm font-mono text-teal-400 hover:text-white transition-colors border border-teal-400/20 bg-teal-400/10 px-4 py-2 rounded-sm no-underline"
            >
              <Github size={16} /> VIEW SOURCE
            </a>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-teal-400 prose-p:text-gray-200 prose-p:leading-loose prose-li:text-gray-200 prose-strong:text-teal-300">
          <h2 className="text-3xl font-serif text-teal-400 mt-12 mb-6">
            The Breaking Point
          </h2>
          <p className="mb-4">
            It was 3 AM on a Sunday. Our app had just hit #1 on Product Hunt.
            Champagne was popped. Then the alerts started.
          </p>
          <p className="mb-4">
            We weren't fighting traffic; we were fighting our own
            infrastructure. The NoSQL database, once our best friend for rapid
            prototyping, had become a prison. We couldn't query our own data. We
            couldn't ensure consistency. We were bleeding money on opaque
            read/write costs.
          </p>
          <p className="mb-4">
            I realized then that the "Modern Data Stack" was a lie. It forced a
            binary choice: move fast and break later, or move slow and survive.
          </p>

          <div className="not-prose my-12 py-8 border-y border-white/5 text-center backdrop-blur-sm bg-black/20">
            <span className="block font-mono text-xs text-teal-500 tracking-widest uppercase mb-4">
              The Founding Axiom
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight m-0">
              "Postgres is all you need."
            </h3>
          </div>

          <h2 className="text-3xl font-serif text-teal-400 mt-12 mb-6">
            A Cathedral, Not a Container
          </h2>
          <p className="mb-4">
            We founded Tealbase to end the fundamental compromise developers are
            forced to make every single day:{" "}
            <strong>the choice between speed and power.</strong>
          </p>
          <p className="mb-4">
            Tealbase is the open-source backend for developers who refuse to
            choose. We provide the instant, Firebase-like developer
            experience—Authentication, auto-generated APIs, and Realtime
            subscriptions—built directly on a true <strong>PostgreSQL</strong>{" "}
            foundation.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-12 not-prose">
            <div className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-sm hover:border-teal-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-teal-400">
                <Database size={18} />
                <h4 className="font-serif text-lg m-0 text-white">
                  Postgres at the Core
                </h4>
              </div>
              <div className="text-sm text-gray-400 m-0 leading-relaxed">
                Full SQL capabilities. No NoSQL compromises. ACID compliance out
                of the box.
              </div>
            </div>
            <div className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-sm hover:border-teal-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-teal-400">
                <Zap size={18} />
                <h4 className="font-serif text-lg m-0 text-white">
                  Realtime Subscriptions
                </h4>
              </div>
              <div className="text-sm text-gray-400 m-0 leading-relaxed">
                Listen to any SQL query. If the data changes, the client updates
                instantly.
              </div>
            </div>
            <div className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-sm hover:border-teal-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-teal-400">
                <Shield size={18} />
                <h4 className="font-serif text-lg m-0 text-white">
                  Row Level Security
                </h4>
              </div>
              <div className="text-sm text-gray-400 m-0 leading-relaxed">
                Granular access control policies defined directly on your
                tables.
              </div>
            </div>
            <div className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-sm hover:border-teal-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-teal-400">
                <Server size={18} />
                <h4 className="font-serif text-lg m-0 text-white">
                  Instant APIs
                </h4>
              </div>
              <div className="text-sm text-gray-400 m-0 leading-relaxed">
                Auto-generated REST and GraphQL endpoints from your schema.
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-teal-400 mt-12 mb-6">
            Technical Architecture
          </h2>
          <p className="mb-4">
            Tealbase is written in <strong>Go</strong> for high-throughput
            concurrency. It connects to <strong>PostgreSQL</strong> and uses
            logical replication slots (WAL) to listen for changes, broadcasting
            them via WebSockets to subscribed clients.
          </p>

          <h2 className="text-3xl font-serif text-teal-400 mt-12 mb-6">
            Impact
          </h2>
          <p className="mb-4">
            Tealbase is currently running in production for 3 indie projects. It
            has reduced backend boilerplate by <strong>90%</strong>, allowing us
            to handle <strong>10k concurrent connections</strong> on a standard
            droplet.
          </p>

          <div className="not-prose mt-12">
            <a
              href="https://github.com/tealbase/tealbase"
              target="_blank"
              className="block mt-8 no-underline group"
            >
              <div className="p-8 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-sm group-hover:border-teal-500/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Github size={20} />
                    <span className="font-mono text-sm tracking-widest uppercase">
                      View Source Code
                    </span>
                  </div>
                  <ArrowLeft
                    size={20}
                    className="rotate-180 text-gray-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  Explore the repository, read the architecture docs, and see
                  how we built a BaaS in Go.
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
