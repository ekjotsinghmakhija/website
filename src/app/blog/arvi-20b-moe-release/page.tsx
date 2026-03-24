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
  
  
    HuggingFace Weights
  
  
    View Code
  


Introduction

The current frontier of AI is defined by "reasoning models"—systems that can "think" before they speak, dynamically allocating compute to solve complex problems. However, these capabilities have largely been locked behind proprietary APIs.

Today, we release Arvi 20B, an open-weight reasoning model designed to bring these agentic capabilities to everyone. Built as a Mixture-of-Experts (MoE) transformer, Arvi 20B offers a powerful balance of performance and efficiency: while it has 20.9B total parameters, it uses only 3.6B active parameters per token.

This allows it to run on consumer-grade hardware (requiring as little as 16GB VRAM with quantization) while delivering performance that competes with models like OpenAI's o3-mini and our own o4-mini.

Architecture: Efficiency by Design

Arvi 20B is built on a sparse Mixture-of-Experts (MoE) architecture. Unlike dense models that activate every neuron for every token, Arvi selectively activates only the most relevant "experts."

* Total Parameters: 20.91 Billion
* Active Parameters: 3.61 Billion (per forward pass)
* Experts: 32 Experts (Top-4 routing)
* Context Window: 131,072 tokens (via YaRN)

To further democratize access, we post-trained the model using MXFP4 quantization, compressing the MoE weights (which make up 90%+ of the model) to just 4.25 bits. This drastic reduction in memory footprint enables high-end reasoning on single-GPU setups.


  
  
    Figure 1: Main Capabilities. Comparison of Arvi 20B (High Reasoning) against closed frontier models. It surpasses o3-mini on AIME and approaches o4-mini accuracy.
  


Variable Effort Reasoning

A key feature of Arvi is its ability to adjust its "thinking" depth. We trained the model to support three distinct reasoning levels—Low, Medium, and High—configured via the system prompt.

As shown in the scaling laws below, increasing the reasoning level (and thus the length of the Chain-of-Thought) yields log-linear improvements in accuracy across hard tasks like AIME (Math) and GPQA (Graduate-Level Science).


  
  
    Figure 2: Test-Time Scaling. Accuracy increases smoothly as the model allocates more tokens to its internal Chain-of-Thought (CoT).
  


Agentic Capabilities & The Harmony Format

Reasoning is only half the equation; action is the other. Arvi 20B is trained using our custom Harmony Chat Format, which structures interactions into a hierarchy: 'System > Developer > User > Assistant > Tool'.

This format allows the model to:
1.  Interleave Thoughts and Actions: The model can "think" about a problem, decide to call a tool (like a Python interpreter or Web Search), analyze the result, and then continue reasoning.
2.  Strict Instruction Adherence: By distinguishing between System and Developer messages, Arvi follows a robust priority hierarchy, reducing the risk of prompt injections.


  
  
    Figure 3: The Harmony Format. An example showing the model interleaving Chain-of-Thought (CoT) with tool execution.
  


Coding and Tool Use Results

These architectural choices translate to exceptional performance in agentic domains. On Codeforces (competitive programming) and SWE-bench Verified (real-world software engineering), Arvi 20B performs competitively with significantly larger models.


  
  
    Figure 4: Coding & Agents. Arvi 20B demonstrates strong developer capabilities, excelling in environment-based coding tasks.
  


Safety & Health Intelligence

Open weights present unique safety challenges. We conducted extensive "red-teaming" and adversarial fine-tuning to ensure Arvi 20B does not pose significant risks in critical areas like Cybersecurity or Biorisk.

Interestingly, the model shows remarkable utility in positive domains. On HealthBench, a dataset evaluating realistic health conversations, Arvi 20B (High Reasoning) outperforms GPT-4o and o1-preview, offering a powerful tool for global hnn[End of Summary Extract. Please visit Metanthropic for the full research paper.]
`;
