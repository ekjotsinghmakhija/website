import Link from "next/link";

export default function DatasetDistillation() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 relative overflow-hidden font-sans">
      {/* Distillation/Filtration Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-emerald-900/30">
          <Link
            href="/blog"
            className="text-sm text-emerald-500/70 hover:text-emerald-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono"
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
            Research Data Hub
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60 rounded border border-emerald-700/50 text-sm font-medium transition-all backdrop-blur-md flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download LGM Paper
          </a>
        </div>

        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-emerald-400 font-mono text-sm border border-emerald-500/20 bg-emerald-500/10 w-fit px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Data Efficiency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Dataset Distillation via{" "}
            <span className="text-emerald-400">LGM</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Compressing petabytes of noisy internet data into pure, high-signal
            training manifolds using Latent Gradient Matching.
          </p>
        </header>

        <article className="space-y-8 font-sans text-lg leading-relaxed text-zinc-300">
          <p>
            The current paradigm of LLM pre-training relies on the "data scaling
            law"—the assumption that feeding models exponentially larger
            datasets inevitably leads to better reasoning. However,
            internet-scale datasets are saturated with noise, redundancy, and
            low-quality heuristics. This brute-force approach results in
            catastrophic computational waste.
          </p>

          <div className="my-12 p-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-xl">
            <div className="bg-zinc-950 p-8 rounded-lg border border-emerald-900/30">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Latent Gradient Matching (LGM)
              </h2>
              <p className="text-zinc-400 text-base">
                Our Dataset Distillation framework operates on the principle of
                LGM. Instead of randomly sampling data, LGM computes the
                gradient trajectory a model takes when learning a "perfect"
                concept from high-quality proprietary data. It then searches the
                raw, noisy dataset for token sequences that, when compressed,
                perfectly match that idealized gradient trajectory.
              </p>
            </div>
          </div>

          <p>
            The result is a distilled dataset that is orders of magnitude
            smaller but contains the exact cognitive "signal" required for
            reasoning. By training on LGM-distilled data, we achieve GPT-4 class
            reasoning on models a fraction of the size, significantly lowering
            the barrier to entry for training advanced foundation models.
          </p>
        </article>
      </div>
    </div>
  );
}
