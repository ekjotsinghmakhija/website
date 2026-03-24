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
  Read Paper
  View Code


The Reliability Crisis: The Illusion of Competence

In the deployment of Large Language Models for high-stakes reasoning, a critical failure mode persists: the "hallucination of competence." Standard interpretability techniques rely on an axiomatic assumption: if a truth-value can be linearly decoded from a hidden state (Decodability), the model "knows" this truth and is utilizing it (Causality).

This specification invalidates that axiom.

Based on rigorous analysis of Counting ViTs, we demonstrate that Decodability is not isomorphic to Causality. We identified two distinct regimes of failure that standard auditing misses:

1.  The "Phantom Readout" Regime (High Decodability, Low Causality): In the final layers, tokens often contain highly accurate information that is functionally inert. The model has "crystallized" the answer into memory but has ceased reasoning.
2.  The "Dark Computation" Regime (Low Decodability, High Causality): In the middle layers, tokens exert profound causal influence—patching them flips the output logic—yet linear probes fail to extract meaningful information. The computation is "kinetic"—actively moving through the attention mechanism—but not yet readable.


  
  
    Figure 1: The Causal Intervention Operator. Transplants between "Clean" and "Corrupted" runs reveal that information flow is often orthogonal to representation.
  


The Metanthropic Thesis: Kinetic vs. Potential

To resolve this paradox, the Metanthropic Self-Correcting Reasoning Engine (MS-CRE) abandons the unitary view of "knowledge" in favor of a thermodynamic framework:

1. Kinetic Information (Data in Transit)
* Definition: Defined by its ability to do work on the output (High Causal Efficacy).
* Role: Active reasoning and decision branching.
* Signature: High Patching Impact , Low Probing Accuracy.

2. Potential Information (Data in Storage)
* Definition: Defined by its ease of retrieval (High Decodability).
* Role: Memory and context storage ("The Residue of Thought").
* Signature: Low Patching Impact , High Probing Accuracy .

Experimental Validation: The "Holographic Transfer"

We deployed the Causal Intervention Operator  across 12 layers of a Vision Transformer. The results exposed a phenomenon we term Holographic State Transfer.

In the middle layers (6-9), spatial tokens cease to be local feature detectors and become Kinetic Bus Nodes. Patching a single object token from a 2-object image into a 1-object image forces the model to predict "2", even though the second object is physically missing.

Crucially, standard linear probes fail to decode this "count=2" information from the token (Low Potential), yet the causal impact is maximal (High Kinetic). This proves that reasoning is encoded in the gradients of the attention mechanism, not just the static embeddings.


  
  
    Figure 2: The Kinetic Signature. Note the profound causal influence of spatial tokens in the middle layers (6-9), contrasted with the "CLS Collapse" in the final layers.
  


Module Specification: The KP-IDP Controller

The Kinetic-Potential Information Disentanglement Protocol (KP-IDP) is implemented as a lightweight auxiliary controller fused into the Transformer's residual stream. It operates as a "Dual-State Monitor."

The Phase-Shift Gate
The controller monitors the Phase Transition of information from the Kinetic Regime (Layers 6-9) to the Potential Regime (Layers 10-12).

* CASE A (Valid): High Kinetic (Mid)  High Potential (Final).
     Action:* Pass.
* CASE B (Hallucination): Low Kinetic (Mid)  High Potential (Final).
     Diagnosis:* The answer appeared without computation.
     Action:* Reject & Resample.
* CASE C (Confusion): High Kinetic (Mid)  Low Potential (Final).
     Diagnosis:* The model "thought" hard but reached no conclusion.
     Action:* Inject "Chain of Thought" token.

Conclusion

KP-IDP redefines hallucination not as a factual error, but as a Thermonn[End of Summary Extract. Please visit Metanthropic for the full research paper.]
`;
