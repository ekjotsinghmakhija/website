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


The Unlearning Trilemma

The deployment of Large Language Models in high-compliance environments (FinTech, Healthcare) is currently bottlenecked by a fundamental thermodynamic limit we designate the Unlearning Trilemma. Current remediation strategies fail due to an adversarial trade-off between three axes:

1.  Deletion Efficacy: Absolute removal of the target vector.
2.  Model Utility: Preservation of general reasoning capabilities.
3.  Hallucination Suppression: Prevention of confabulated outputs when the model bridges the semantic void.

Existing "Aggressive" methods (Gradient Ascent) act as lobotomies—shattering weight clusters and causing model collapse. "Conservative" methods (Logit Manipulation) act as muzzles—suppressing output while leaving latent knowledge intact and vulnerable to jailbreaks.

The Solution: Attention Refraction

M-NAAR rejects the paradigm of erasure via weight destruction. Instead, we implement erasure via structural omission.

We posit that the optimal intervention point is not the storage (MLP) but the retrieval mechanism (Attention Heads). By identifying "fact-bearing" tokens (those with high predictive entropy) and mathematically refracting attention away from them, we render specific memories "invisible" to the reasoning core.


  
  
    Figure 1: Visualizing Attention Refraction. Left: Original model attending to fact-bearing tokens ("Vasquez"). Right: M-NAAR intervention refracting attention to syntactic anchors, silencing factual recall.
  


Mechanism I: High-Entropy Suppression

We calculate the Predictive Entropy Delta  to identify load-bearing tokens. We then introduce a suppression coefficient  to attenuate attention scores  specifically for these targets.

The refracted attention score  is computed as:



Where  is the binary mask for the target concept and  is the normalization factor. This effectively redistributes attention mass to neutral, low-entropy tokens (like punctuation), dissolving the factual link without damaging the linguistic structure.

Mechanism II: Semantic Anchor Reinforcement

To prevent model collapse, we simultaneously apply a stabilizing force on retained data. We identify "Semantic Anchors"—tokens critical for grammar and logic—and reinforce their attention weights using a dual-objective loss function.

Implementation: Non-Destructive Integration

M-NAAR operates via a lightweight LoRA-style adapter ( parameters). Unlike standard fine-tuning, we isolate the Value Projection matrices:



Our ablation studies confirmed that targeting  alone minimizes parameter footprint (16.8 MB VRAM) while maximizing erasure efficacy (-97.9% Accuracy on Target), offering a 100x speedup over full retraining.

Validation Benchmarks

We benchmarked M-NAAR against state-of-the-art baselines (Gradient Ascent, NPO, ULD) on the ToFU (Task of Fictitious Unlearning) dataset.


  
  
    Figure 2: TDEC Performance Matrix. M-NAAR (top right) consistently maintains the optimal trade-off frontier between Utility and Unlearning across model sizes.
  


Key Results
* 0.00 Hallucination Rate: Unlike baselines that fabricate lies (GA: 0.45, NPO: 0.38), M-NAAR defaults to a high-entropy "I don't know" state.
* Utility Preservation: M-NAAR preserves 80% of neighboring utility, compared to just 23% for Gradient Ascent.
* Adversarial Robustness: Successfully resists "ignore previous instructions" jailbreaks because the semantic path to the memory is physically severed.

Conclusion

M-NAAR represents a paradigm shift from destructive erasure to structural omission. It satisfies the "Right to be Forgotten" while maintaining the thermodynamic stability of the wider neural network, providing a certified blueprint for privacy-preserving cognitive engines.
`;
