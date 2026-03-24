import Link from 'next/link';

export default function MetanthropicAnnouncement() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 relative overflow-hidden font-sans">
      {/* Ambient Thematic Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">

        {/* Navigation & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-zinc-800/50">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-teal-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Research Library
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/80 hover:bg-teal-950/40 text-teal-300 rounded-full text-sm font-medium transition-all border border-teal-900/50 hover:border-teal-500/50 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]"
          >
            <span>Read on Metanthropic</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        {/* Hero Header */}
        <header className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Foundation & Vision
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
            Metanthropic: A New Paradigm in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">AI Research</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Shifting the focus from mere scale to cognitive fidelity, safety, and democratization.
          </p>
        </header>

        {/* Thematic Content Layout */}
        <article className="space-y-12">
          <p className="text-lg leading-relaxed text-zinc-300">
            <span className="text-5xl font-serif text-teal-500 float-left mr-3 mt-1 leading-none">T</span>
            he AI landscape is currently dominated by models prioritizing scale over cognitive fidelity. While large language models (LLMs) have demonstrated remarkable capabilities, their "black box" nature, propensity for hallucination, and susceptibility to adversarial attacks remain significant challenges. Metanthropic was founded with a singular, ambitious objective: to engineer AI systems that are inherently transparent, morally aligned, and computationally efficient.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full"></div>
            <h2 className="text-2xl font-semibold text-zinc-100 mb-4">The Core Triad of Metanthropic</h2>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mt-1">1</span>
                <div>
                  <strong className="text-zinc-100 block text-lg">Cognitive Fidelity</strong>
                  Moving beyond statistical pattern matching to develop architectures that model reasoning and logic more explicitly (e.g., Latent Logic Topology).
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mt-1">2</span>
                <div>
                  <strong className="text-zinc-100 block text-lg">Inherent Safety</strong>
                  Integrating moral bias and interpretability at the foundational level, ensuring models are safe by design, not just via post-hoc guardrails.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mt-1">3</span>
                <div>
                  <strong className="text-zinc-100 block text-lg">Computational Efficiency</strong>
                  Democratizing AI through innovations like Dataset Distillation (LGM) and sparse architectures (MoEs) to enable high performance on consumer-grade hardware.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-zinc-300">
            Our research initiatives span from fundamental architectural shifts to novel training methodologies. We are actively developing models like ARVI-20B to push the boundaries of what's possible with sparse architectures, while simultaneously addressing the theoretical underpinnings of unlearning (M-NAAR) and adversarial robustness. Metanthropic is more than a research lab; it is a commitment to building a future where artificial intelligence serves as a transparent and reliable partner for humanity.
          </p>
        </article>
      </div>
    </div>
  );
}
