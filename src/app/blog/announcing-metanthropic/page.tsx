import Link from 'next/link';

export default function ResearchDeepSummary() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <Link href="/blog" className="text-sm text-zinc-400 hover:text-zinc-100 flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> Back to Research Library
        </Link>
        <a
          href="https://metanthropic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:text-teal-300 rounded-lg text-sm font-medium transition-all border border-teal-500/20 shadow-lg shadow-teal-500/5"
        >
          Read Full Official Paper on Metanthropic <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        </a>
      </div>

      <article className="prose prose-invert prose-teal max-w-none text-zinc-300 leading-relaxed space-y-6">
        {summaryText.split('\n\n').map((paragraph, idx) => {
          if (!paragraph.trim()) return null;
          if (paragraph.length < 60 && !paragraph.endsWith('.')) {
            return <h2 key={idx} className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">{paragraph}</h2>;
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </article>
    </div>
  );
}

const summaryText = `
We are founding Metanthropic with a singular conviction: the next leap in Artificial General Intelligence will not come from simply adding more data, but from better physics.

Under the leadership of Founder and Director Ekjot Singh, we operate on the thesis that current "Black Box" scaling laws have reached a ceiling of interpretability. To build systems that are broadly beneficial, we must move from probabilistic guessing to deterministic reasoning.

---

Our Research Agenda

We are pushing the frontier of deep learning across three integrated pillars, treating them not as separate disciplines, but as a unified architecture:

1. Post-Transformer Architectures

We are moving beyond standard implementations to architect next-generation models designed for high-fidelity scaling. Our research focuses on sub-quadratic attention mechanisms that sustain coherence over infinite contexts.


  
  
    Figure 2: Sub-Quadratic Attention. Visualizing the efficiency gains of our novel attention mechanism compared to standard Transformer O(N²) complexity.
  


2. Native Reasoning (System 2)

True intelligence requires more than pattern matching. We are advancing the state of the art in "Native Reasoning"—building systems where multi-step logic and long-horizon planning are inherent to the model's forward pass, not patched on via prompting.


  
  
    Figure 3: Chain of Thought Integration. Moving reasoning from the prompt (inference-time) to the weights (training-time).
  


3. Provable Alignment

Safety is not a post-training patch. We integrate mechanistic interpretability directly into the pre-training objective. We do not just want models that act safe; we are building models that are mathematically constrained from failure.



The Path Forward

The development of AGI presents the greatest technical opportunity of our time. But it necessitates an uncompromising commitment to understanding the systems we build.

Metanthropic is not just a research lab; it is the infrastructure for the next generation of safe, reasoning minds. We invite researchers, engineers, and partners to join us in solving the physics of intelligence.


  View Open Roles
`;
