import Link from "next/link";

export default function Arvi20BRelease() {
  return (
    <div className="min-h-screen bg-[#030014] text-zinc-300 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Neon Flares */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-indigo-900/30">
          <Link
            href="/blog"
            className="text-sm text-indigo-200/60 hover:text-indigo-300 flex items-center gap-2 transition-colors uppercase tracking-widest font-mono"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Return to Index
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2 bg-indigo-950/30 text-indigo-300 rounded text-sm font-mono transition-all border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-900/50 shadow-[0_0_15px_rgba(79,70,229,0.15)]"
          >
            [ Fetch Full Paper ]
          </a>
        </div>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20 rounded">
              v1.0.0
            </span>
            <span className="px-2 py-1 bg-violet-500/10 text-violet-400 text-xs font-mono border border-violet-500/20 rounded">
              Architecture / MoE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            ARVI-
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-400">
              20B
            </span>
          </h1>
          <p className="text-xl text-indigo-100/70 font-light max-w-2xl leading-relaxed">
            A Highly Efficient Mixture-of-Experts Model designed to bring
            commercial-grade reasoning to consumer hardware.
          </p>
        </header>

        {/* Tech Specs Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Parameters", value: "20 Billion" },
            { label: "Active Experts", value: "4 per token" },
            { label: "Total Experts", value: "16" },
            { label: "Architecture", value: "Sparse MoE" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 bg-indigo-950/20 border border-indigo-900/50 rounded-lg backdrop-blur-sm"
            >
              <div className="text-indigo-300/50 text-xs font-mono mb-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-indigo-100 font-semibold text-lg">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <article className="space-y-8 font-serif text-lg text-zinc-300 leading-relaxed">
          <p>
            The pursuit of Artificial General Intelligence (AGI) has often
            equated larger parameter counts with superior reasoning
            capabilities. However, this brute-force scaling presents severe
            limitations regarding deployment, inference latency, and
            environmental impact. ARVI-20B challenges this paradigm by
            leveraging a highly optimized Mixture-of-Experts (MoE) architecture.
          </p>

          <h2 className="text-2xl font-sans font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            Sparse Activation & Efficiency
          </h2>
          <p>
            With 20 billion total parameters, ARVI achieves performance
            competitive with much larger dense models. The core innovation lies
            in its routing mechanism. Instead of activating the entire network
            for every token, ARVI dynamically selects only 4 out of 16
            specialized "expert" sub-networks per token. This sparse activation
            ensures high cognitive fidelity while dramatically reducing the
            computational overhead during inference.
          </p>

          <blockquote className="p-6 border-l-4 border-violet-500 bg-violet-950/10 italic text-violet-200 font-light my-10">
            "ARVI-20B demonstrates that commercial-grade capabilities can be
            achieved without requiring industrial-grade data centers. This is a
            crucial step towards democratizing access to advanced AI reasoning."
          </blockquote>

          <h2 className="text-2xl font-sans font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            Hardware Democratization
          </h2>
          <p>
            By drastically lowering the memory bandwidth and compute
            requirements through its MoE design, ARVI-20B is specifically
            engineered to run efficiently on high-end consumer GPUs or small
            server clusters. This opens new avenues for independent researchers,
            developers, and small organizations to deploy state-of-the-art
            models locally, enhancing privacy and reducing reliance on cloud
            APIs.
          </p>
        </article>
      </div>
    </div>
  );
}
