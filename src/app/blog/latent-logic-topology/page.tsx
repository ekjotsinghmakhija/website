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
{/ --- PROJECT LINKS --- /}

  Artifacts Available:
  Read Specification
  View Code


The RLVR Convergence Paradox

The current paradigm for building "Large Reasoning Models" relies on a compute-intensive phase: Reinforcement Learning with Verifiable Rewards (RLVR). While effective, this process is non-deterministic. Empirical auditing reveals an "RLVR Lottery": identical alignment pipelines applied to different base models yield vastly different results.

We posit that this divergence is not a failure of alignment, but a topological feature of the pre-trained latent space. High-potential models possess an Intrinsic Soundness Topology—a physical separation in high-dimensional space where valid logical deductions are disentangled from probabilistic hallucinations.

The Metanthropic Protocol

To quantify this potential, we operationalize the model not as a token predictor, but as a probabilistic engine of Latent Causal Chains.


  
  
    Figure 1: The Protocol Architecture. (1) Holographic Extraction via SAEs. (2) Causal Chaining via Horn Clauses. (3) Soundness Calibration via Oracle.
  


Phase 1: Holographic Feature Extraction
We utilize Cross-Layer Sparse Autoencoders (SAEs) to demultiplex the opaque residual stream into discrete, mono-semantic feature vectors. This gives us the atomic units of reasoning .

Phase 2: Latent Causal Chaining (Horn Clauses)
We formalize internal reasoning as chains of Horn Clauses . A latent rule implies that if a bundle of Premise features  activates, a Conclusion feature  follows with probability .

> Logic Rule: Premise_1 AND Premise_2  Conclusion

For example, a stable reasoning circuit might encode:
'occur("sqrt")' AND 'occur("4")'  'occur("2")' (High Probability)

Phase 3: Soundness-Aware Calibration (SAL)
We categorize these discovered rules into semantic tiers using an automated Oracle:
* Strict: Axiomatic truths (Math, Code).
* Plausible: Heuristics.
* Noisy: Spurious correlations.

The Soundness-Aware Level (SAL) is computed as the Jensen-Shannon Divergence (JSD) between the probability distributions of these categories. A high SAL indicates that the model physically separates sound logic from noise.

Experimental Validation: The Topological Signal

We validated this metric across a matrix of models ranging from 0.5B to 14B parameters (Qwen, Mistral, Llama, DeepSeek).

1. Phase Separation
Strong reasoners (like Qwen-2.5-7B) display a Disentangled Topology. The probability mass for "Strict" axioms is concentrated at high confidence  0.8)" />, acting as an intrinsic high-pass filter for logic. Weaker models show "Entropic Collapse," where signal and noise share overlapping distributions.


  
  
    Figure 2: Topological Divergence. Top: High SAL (Phase Separation). Bottom: Low SAL (Entropic Collapse).
  


2. The SAL Scaling Law
We derived a formal empirical law linking the microscopic SAL metric  to the macroscopic post-RLVR error rate :



With an R-squared of 0.87, this metric allows us to predict downstream reasoning performance with high precision before allocating expensive GPU hours to RLVR training.


  
  
    Figure 3: The Predictive Law. Post-deployment error decays exponentially as a function of pre-training Soundness (SAL).
  


Conclusion

The Intrinsic Soundness Topology proves that reasoning capability is not an emergent phantom but a quantifiable structure. SAL functions as a Computational Gatekeeper, allowing Metanthropic to strictly allocate compute to substrates that have demonstrated the intrinsic ability to disentangle signal from noise.
`;
