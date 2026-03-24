import Link from 'next/link';

export default function LatentLogicTopology() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 relative overflow-hidden font-sans">

      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 43.4 L25 29 L0 43.4 L0 14.4 Z" fill="none" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-amber-900/30">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-amber-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Research Library
          </Link>
          <a href="https://metanthropic.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 rounded border border-amber-500/20 text-sm font-medium transition-all shadow-[0_0_15px_rgba(217,119,6,0.1)]">
            Read Full Paper on Metanthropic
          </a>
        </div>

        <header className="mb-16">
          <div className="text-amber-500 text-sm font-mono mb-4 tracking-widest uppercase">Fundamental Architecture</div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-6">
            Latent Logic Topology <span className="text-amber-500 font-light">(LLT)</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Embedding explicit structural reasoning into the latent space of language models.
          </p>
        </header>

        <article className="space-y-10 text-lg leading-relaxed text-zinc-300">
          <p>
            Current transformer architectures excel at statistical pattern matching, allowing them to predict the next word with startling accuracy. However, they fundamentally lack an explicit representation of logic. When a standard LLM solves a math problem or writes code, it is essentially "guessing" the right sequence based on training frequency, not traversing a logical tree.
          </p>

          <div className="my-12 p-8 border border-amber-900/50 bg-amber-950/10 rounded-xl relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent rounded-l-xl"></div>
            <h2 className="text-2xl font-semibold text-zinc-100 mb-4">The Topological Approach</h2>
            <p>
              Latent Logic Topology (LLT) proposes a structural shift. Instead of treating the latent space as a purely continuous, unstructured field of embeddings, LLT imposes a differentiable geometric structure. This topology forces the model's internal representations to adhere to logical constraints (like transitivity and non-contradiction) during the forward pass.
            </p>
          </div>

          <p>
            By mapping symbolic logic onto geometric manifolds, LLT enables models to perform multi-step reasoning with verifiable guarantees, drastically reducing hallucinations in highly deterministic domains such as mathematics, legal analysis, and software engineering.
          </p>
        </article>
      </div>
    </div>
  );
}
