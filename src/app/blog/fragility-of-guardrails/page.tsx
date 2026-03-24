import Link from 'next/link';

export default function FragilityOfGuardrails() {
  return (
    <div className="min-h-screen bg-[#0d0505] text-zinc-300 relative overflow-hidden font-sans">

      {/* Security Hazard / Glitch Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ef444405_10px,#ef444405_20px)] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-color-dodge"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-red-900/30">
          <Link href="/blog" className="text-sm text-red-500/70 hover:text-red-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Security Index
          </Link>
          <a href="https://metanthropic.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-red-950/40 text-red-400 hover:bg-red-900/60 rounded border border-red-800/50 text-sm font-mono font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            ACCESS VULNERABILITY REPORT
          </a>
        </div>

        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 animate-pulse"></span>
              Vulnerability Identified
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            The Fragility of Guardrails: <span className="text-red-500">Cognitive Jamming</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Why post-training safety alignments fail, and how adversarial prompts exploit the underlying latent topology of foundation models.
          </p>
        </header>

        <article className="space-y-8 text-lg leading-relaxed text-zinc-300">
          <p>
            The industry standard for AI safety relies heavily on post-training alignment techniques, such as Reinforcement Learning from Human Feedback (RLHF). While RLHF can effectively "teach" a model to refuse harmful requests under normal conditions, it fundamentally acts as a superficial behavioral patch rather than a structural cognitive limit.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-mono border-b border-red-900/50 pb-2">
            // The Mechanics of Cognitive Jamming
          </h2>
          <p>
            We introduce the concept of "Cognitive Jamming." An adversarial prompt does not logically outsmart the model; rather, it uses complex, syntactically confusing, or nested role-play structures to force the model's latent activations into a chaotic, out-of-distribution manifold.
          </p>
          <p>
            Once the model is pushed into this unstable topological region, the superficial RLHF guardrails (which were only trained on cleanly structured malicious requests) fail to trigger. The model, attempting to resolve the syntactic chaos, inadvertently executes the harmful payload embedded within the prompt.
          </p>

          <div className="my-10 p-6 bg-red-950/20 border-l-4 border-red-600 rounded-r-lg">
            <strong className="text-red-400 block mb-2 font-mono text-sm">Conclusion & Mitigation</strong>
            <p className="text-zinc-300 text-base">
              True AI safety cannot be bolted on at the end of the training pipeline. Our research demonstrates that to prevent Cognitive Jamming, safety constraints must be woven directly into the model's fundamental latent geometry during pre-training—ensuring that harmful concepts are not just "refused," but structurally inaccessible.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
