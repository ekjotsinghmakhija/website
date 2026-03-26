import Link from "next/link";

export default function UnlearningTrilemma() {
  return (
    <div className="min-h-screen bg-[#110a0a] text-stone-300 relative overflow-hidden font-sans">
      {/* Glitch / Redaction styling elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-l from-rose-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-rose-950/50">
          <Link
            href="/blog"
            className="text-sm text-stone-500 hover:text-rose-400 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono"
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
            Back to Database
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 rounded border border-rose-500/20 text-sm font-medium transition-all"
          >
            Access Classified Paper
          </a>
        </div>

        <header className="mb-16">
          <div className="inline-block px-3 py-1 bg-rose-950/50 border border-rose-900 text-rose-500 text-xs font-mono uppercase tracking-widest mb-6">
            [ Security & Compliance ]
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            The Unlearning Trilemma &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">
              M-NAAR
            </span>
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl leading-relaxed border-l-2 border-rose-800 pl-4">
            How do we force an AI to "forget" protected data without causing
            catastrophic cognitive collapse?
          </p>
        </header>

        <article className="space-y-8 text-lg leading-relaxed text-stone-300">
          <p>
            As AI models consume vast amounts of internet data, they inevitably
            ingest copyrighted material, personal identifiable information
            (PII), or hazardous knowledge. When a deletion request is issued,
            merely adding a "do not say this" guardrail is insufficient; the
            knowledge remains latent and extractable via adversarial jailbreaks.
            The data must be mathematically excised.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The Trilemma
          </h2>
          <p>
            Machine unlearning faces an impossible three-way trade-off. We must
            balance:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <li className="bg-[#1a0f0f] p-5 rounded-lg border border-rose-900/30">
              <strong className="text-rose-400 block mb-2 font-mono">
                1. Efficacy
              </strong>
              Complete and verifiable erasure of the target concept.
            </li>
            <li className="bg-[#1a0f0f] p-5 rounded-lg border border-rose-900/30">
              <strong className="text-rose-400 block mb-2 font-mono">
                2. Utility
              </strong>
              Preserving the model's general knowledge and reasoning abilities.
            </li>
            <li className="bg-[#1a0f0f] p-5 rounded-lg border border-rose-900/30">
              <strong className="text-rose-400 block mb-2 font-mono">
                3. Efficiency
              </strong>
              Achieving erasure without the immense cost of retraining from
              scratch.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Enter M-NAAR
          </h2>
          <p>
            M-NAAR (Manifold-Navigated Adversarial Amnesia Routing) is our
            proprietary framework for targeted neuro-surgical unlearning.
            Instead of blunt gradient ascent (which damages utility), M-NAAR
            maps the specific manifold containing the prohibited concept. It
            then creates a localized adversarial perturbation that effectively
            "scrambles" only that specific sector of the latent space, achieving
            complete amnesia for the target data while leaving the surrounding
            cognitive architecture perfectly intact.
          </p>
        </article>
      </div>
    </div>
  );
}
