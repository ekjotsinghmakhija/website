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
  View Code
  Read Paper


Introduction

Post-training alignment techniques, such as Supervised Fine-Tuning (SFT), are essential for steering Large Language Models (LLMs) towards human utility. However, our research demonstrates that this process inadvertently collapses the model's neutral ontological manifold, introducing cognitive distortions such as the Knobe Effect.

The Knobe Effect is a well-documented phenomenon in human psychology where observers consistently assign higher intentionality to actions resulting in negative side effects compared to positive ones, even when the agent's foresight is identical.

We term this phenomenon in AI Valence-Induced Logical Drift (VILD). It represents a reliability hazard: the model's logical consistency degrades in high-stakes (negative outcome) scenarios because it prioritizes "moral" output patterns over logical isomorphism.

Diagnosis: Quantifying the Drift

To quantify this, we subjected three state-of-the-art architectures (Llama-3.1, Mistral-7B, and Gemma-2) to a "Stochastic Intentionality Sampling" protocol. We compared their Pretrained () states against their Finetuned () states.


  
  
    Figure 1: Visual Confirmation of VILD. Pretrained models (Left) show overlapping distributions for Negative and Positive outcomes, indicating logical neutrality. Finetuned models (Right) exhibit a stark bifurcation, confirming the internalization of the Knobe Effect.
  


Our analysis confirms that while pretrained models remain largely neutral (), aligned models display massive non-linear distortions. For instance, Gemma-2-9B exhibited a catastrophic drift of  after fine-tuning.

Localization: Isolating the "Moral Module"

Is this bias a diffuse property of the entire neural network, or is it computed in specific regions?

Using Activation Difference Matrix analysis, we intercepted the residual stream vectors across the network's depth. We calculated the mean activation difference between negative and positive valence conditions for every layer.


  
  
    Figure 2: Topological Isolation. Heatmaps display the Activation Difference Vector magnitude (). While pretrained models are uniform, finetuned models reveal a distinct "moralizing band" in the mid-to-late transformer layers ().
  


We successfully localized the VILD anomaly to a discrete set of Critical Layers ()—typically located in the  depth range. This proves that "moral judgment" in LLMs is modular, originating from specific attention heads tuned during SFT.

Intervention: Iso-Semantic Residual Injection (ISRI)

Leveraging this modularity, we introduced Iso-Semantic Layer Patching, a non-destructive intervention protocol.

The core idea is simple yet surgical: At inference time, we calculate the activations for the current input using the frozen pretrained model (). When the finetuned model () reaches a Critical Layer (), we inject the "neutral" activation state from  into 's residual stream.


  
  
    Figure 3: Efficacy of Intervention. The heatmap illustrates the effect of ISRI. By grafting  activations, the drift metric is effectively zeroed out (dark blue regions), restoring logical symmetry without retraining.
  


This technique neutralized the intentionality bias () across all tested architectures. Crucially, it did so without degrading general reasoning capabilities (measured via MMLU and ARC benchmarks), confirming that the "moral bias" vector is orthogonal to the "general reasoning" vector.

Scaling Laws: The Cost of Capacity

Does a larger model "outgrow" this bias? Our ablation study suggests the opposite.


  
    
    Figure 4a: Small Scale (1B-2B)
  
  
    
    Figure 4b: Large Scale (27B)
  


We found that VILD scales positively with model capacity.
* Gemma-2-2B: 
* Gemma-2-27B: 

This indicates that larger models do not become more logical; rather, their increased capacity allows them to model human irrationality with higher fidelity. This necessitates thann[End of Summary Extract. Please visit Metanthropic for the full research paper.]
`;
