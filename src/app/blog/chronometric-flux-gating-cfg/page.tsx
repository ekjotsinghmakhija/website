import Link from 'next/link';

export default function ChronometricFluxGating() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 relative overflow-hidden font-sans">

      {/* Dynamic Time/Flow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-[1px]"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-cyan-900/30">
          <Link href="/blog" className="text-sm text-cyan-500/70 hover:text-cyan-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Index
          </Link>
          <a href="https://metanthropic.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/60 rounded-full border border-cyan-700/50 text-sm font-medium transition-all backdrop-blur-md">
            Initialize Full Document
          </a>
        </div>

        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Chronometric Flux Gating
          </h1>
          <p className="text-2xl text-cyan-200/80 font-light max-w-2xl leading-relaxed">
            Reimagining sequential processing beyond the limitations of standard attention windows.
          </p>
        </header>

        <article className="space-y-8 font-serif text-lg leading-relaxed text-slate-300">
          <p className="text-xl text-slate-200">
            The fundamental bottleneck of modern LLMs is context length degradation. As the sequence of tokens grows, the attention mechanism's computational cost squares, and its ability to retrieve precise information from the distant past degrades exponentially.
          </p>

          <h2 className="text-2xl font-sans font-semibold text-cyan-100 mt-12 mb-4">The Mechanism of Flux</h2>
          <p>
            Chronometric Flux Gating (CFG) introduces a novel temporal routing mechanism. Rather than maintaining a static, ever-expanding attention matrix, CFG categorizes information into distinct "temporal flux" states. Information is gated based on its enduring relevance, allowing the model to compress transient dialogue while preserving core factual anchors in a highly condensed, permanent memory state.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10 font-sans">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="text-cyan-400 font-mono text-sm mb-2">01 / TRANSIENT</div>
              <div className="text-white font-medium mb-2">Short-Term Flux</div>
              <p className="text-sm text-slate-400">Immediate conversational context, decaying smoothly as temporal distance increases.</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-cyan-900/30 rounded-2xl shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]">
              <div className="text-cyan-400 font-mono text-sm mb-2">02 / ANCHOR</div>
              <div className="text-white font-medium mb-2">Permanent Gating</div>
              <p className="text-sm text-slate-400">High-value factual data compressed and gated into a non-decaying representational state.</p>
            </div>
          </div>

          <p>
            This allows for effectively infinite context windows without the prohibitive memory footprint, enabling models to maintain coherent narratives over millions of tokens.
          </p>
        </article>
      </div>
    </div>
  );
}
