import Link from "next/link";

export default function MoralBiasInterpretability() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden font-sans selection:bg-slate-300">
      {/* Frosted Glass Background Elements */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-gradient-to-bl from-white via-slate-100/50 to-transparent backdrop-blur-3xl pointer-events-none rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-tr from-slate-200/60 to-transparent backdrop-blur-xl pointer-events-none rounded-tr-full"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-slate-300">
          <Link
            href="/blog"
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors uppercase tracking-widest font-semibold"
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
            Research Index
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-slate-800 hover:bg-slate-100 rounded-full border border-slate-200 text-sm font-medium transition-all shadow-sm"
          >
            Read the Transparency Report
          </a>
        </div>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-mono uppercase tracking-wide mb-6 shadow-sm">
            <svg
              className="w-4 h-4 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            From Black Box to Glass Box
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Operationalizing{" "}
            <span className="font-serif italic font-normal text-slate-500">
              Moral Bias
            </span>{" "}
            & Interpretability
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
            Developing frameworks to map, understand, and steer the internal
            ethical representations of foundation models.
          </p>
        </header>

        <article className="space-y-10 text-lg leading-relaxed text-slate-700">
          <p>
            The prevailing narrative suggests that AI models are completely
            objective. In reality, large language models inherit deep moral,
            cultural, and political biases from their training data. When these
            models are deployed in high-stakes environments—like healthcare,
            legal sentencing, or automated hiring—these latent biases can cause
            systemic harm.
          </p>

          <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Mechanistic Interpretability
            </h2>
            <p className="text-slate-600">
              Rather than treating the model as an opaque oracle, our research
              focuses on Mechanistic Interpretability. We aim to identify the
              specific neural circuits and attention heads responsible for moral
              reasoning. By reverse-engineering these circuits, we can isolate
              where a model stores "bias" versus where it stores "fact."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
            Safety-Steered Training
          </h2>
          <p>
            Once these moral features are mapped, we can actively steer them.
            Instead of trying to create a completely "unbiased" model (which is
            philosophically impossible), we propose "Safety-Steered Training."
            This allows deployers to explicitly define and inject targeted
            ethical axioms directly into the model's latent space, ensuring
            transparent and predictable behavior aligned with human values.
          </p>
        </article>
      </div>
    </div>
  );
}
