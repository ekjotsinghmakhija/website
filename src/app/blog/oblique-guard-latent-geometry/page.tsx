import Link from 'next/link';

export default function ObliqueGuard() {
  return (
    <div className="min-h-screen bg-[#020617] text-zinc-300 relative overflow-hidden font-sans">

      {/* Oblique Geometric Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[10px] bg-teal-500/20 transform rotate-12 blur-sm"></div>
        <div className="absolute top-[40%] right-[-20%] w-[120%] h-[2px] bg-emerald-500/40 transform -rotate-12 shadow-[0_0_15px_#10b981]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[100%] h-[5px] bg-teal-400/30 transform rotate-45 blur-[2px]"></div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-teal-900/40">
          <Link href="/blog" className="text-sm text-teal-600 hover:text-teal-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Security Protocols
          </Link>
          <a href="https://metanthropic.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-teal-950/40 text-teal-400 hover:bg-teal-900/60 rounded border border-teal-800 text-sm font-mono font-semibold transition-all">
            Access Architecture Details
          </a>
        </div>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 uppercase">
            Oblique Guard
          </h1>
          <p className="text-2xl text-teal-500 font-mono tracking-tight mb-6">
            LATENT GEOMETRY DEFENSE
          </p>
          <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            Eliminating adversarial jailbreaks by replacing semantic filters with hard geometric boundaries in latent space.
          </p>
        </header>

        <article className="space-y-8 text-lg leading-relaxed text-zinc-300">
          <p>
            Standard AI guardrails act like a dictionary of forbidden words. They parse the semantic meaning of an incoming prompt and block it if it matches a "bad" pattern. Adversarial attackers easily bypass these systems using encoding, roleplay, or logical misdirection to obfuscate their intent from the semantic filter.
          </p>

          <div className="my-12 relative p-1 rounded-xl bg-gradient-to-br from-teal-500/30 via-transparent to-emerald-500/30">
            <div className="bg-[#020617] p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">The Geometric Defense</h2>
              <p className="text-zinc-400">
                Oblique Guard operates on entirely different principles. Instead of analyzing text, it analyzes the geometric trajectory of the prompt as it is mapped into the model's high-dimensional latent space. Malicious intents, regardless of how they are phrased or obfuscated, cluster in specific topological manifolds.
              </p>
            </div>
          </div>

          <p>
            We establish "oblique hyperplanes"—strict mathematical boundaries cutting through the latent space. If a prompt's embedding trajectory intersects with or crosses these geometric boundaries, the model's forward pass is mathematically halted. By defending the geometry rather than the semantics, Oblique Guard renders complex prompt-injection attacks computationally irrelevant.
          </p>
        </article>
      </div>
    </div>
  );
}
