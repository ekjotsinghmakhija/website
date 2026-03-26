import Link from "next/link";

export default function KPIDP() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 relative overflow-hidden font-sans">
      {/* Split Design Background representing "Disentanglement" */}
      <div className="absolute inset-0 flex pointer-events-none opacity-20">
        <div className="w-1/2 h-full bg-gradient-to-r from-orange-600/20 to-transparent"></div>
        <div className="w-1/2 h-full bg-gradient-to-l from-zinc-600/20 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-zinc-800">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Research Data
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 rounded text-sm font-semibold transition-all border border-orange-500/30"
          >
            Read Full Thesis
          </a>
        </div>

        <header className="mb-16 text-center">
          <div className="text-orange-500 text-sm font-mono mb-4 tracking-widest uppercase">
            Information Theory
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            KP-<span className="text-zinc-500">IDP</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            The Kinetic-Potential Information Disentanglement Principle.
          </p>
        </header>

        <article className="space-y-12 text-lg leading-relaxed text-zinc-300">
          <p className="text-center max-w-3xl mx-auto">
            When an LLM reads a document, it ingests both the core factual data
            and the rhetorical style, bias, and intent of the author as a
            single, entangled concept. KP-IDP introduces a framework to
            mathematically separate these two elements during pre-training.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="p-8 bg-zinc-900/50 border-t-4 border-zinc-500 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-zinc-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                Potential State
              </h3>
              <p className="text-zinc-400 text-sm">
                The pure, objective factual baseline of the information.
                Stripped of emotion, persuasion, or subjective framing. This
                forms the bedrock of the model's knowledge graph.
              </p>
            </div>

            <div className="p-8 bg-orange-950/20 border-t-4 border-orange-500 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12h4l2-9 5 18 2-9h5" />
                </svg>
                Kinetic State
              </h3>
              <p className="text-zinc-400 text-sm">
                The rhetorical energy, tone, and persuasive intent. By
                disentangling this, the model understands *how* something is
                being said without blindly adopting that perspective as absolute
                truth.
              </p>
            </div>
          </div>

          <p className="text-center max-w-3xl mx-auto border-t border-zinc-800 pt-12">
            By actively disentangling information into Potential and Kinetic
            components, we can train foundation models that possess vast
            knowledge without becoming ideologically captured by the tonal
            biases inherent in human-generated training data.
          </p>
        </article>
      </div>
    </div>
  );
}
