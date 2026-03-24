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
  
  
    HuggingFace Collection
  


1. Introduction

Modern Optical Character Recognition (OCR) has evolved far beyond simple text extraction. Today's applications require handling complex document parsing, information extraction (IE), and text-centric visual question answering (VQA).

Traditional OCR systems typically rely on cascaded pipelines—stringing together separate modules for text detection, recognition, and layout analysis. While modular, these pipelines suffer from error propagation, where a failure in detection cascades through the entire system, and high maintenance complexity.


  
  
    Figure 1: Performance Comparison. MahenOCR (1B) achieves competitive or superior performance across multiple benchmarks compared to traditional pipelines and larger VLMs.
  


2. Architecture

MahenOCR represents a shift to a pure end-to-end Vision-Language Model (VLM) architecture. By unifying diverse tasks into a single framework, we eliminate the need for intermediate pre-processing modules like layout analysis.

MahenOCR achieves high efficiency with a compact 1B parameter footprint, making it suitable for edge and low-latency applications. The architecture consists of three core components:

1.  Native Resolution Visual Encoder: Built on SigLIP-v2-400M, using an adaptive patching mechanism to preserve aspect ratio.
2.  Adaptive MLP Connector: A learnable bridge compressing visual tokens to reduce redundancy.
3.  Lightweight Language Model: Based on the Metanthropic-0.5B model, utilizing XD-RoPE for robust spatial reasoning.


  
  
    Figure 2: Model Architecture. The end-to-end flow from high-resolution visual encoding to auto-regressive text generation.
  


3. Methodology & Pipeline

Our approach streamlines the traditional multi-stage pipeline into a unified differentiable flow. This allows the model to leverage the reasoning capabilities of Large Language Models (LLMs) for superior performance on cognitive-intensive tasks.


  
  
    Figure 3: Pipeline Comparison. Contrasting the MahenOCR end-to-end approach with traditional cascaded OCR systems.
  


Data Pipeline & RLVR
A key innovation is the application of Reinforcement Learning with Verifiable Rewards (RLVR). We employ Group Relative Policy Optimization (GRPO) to fine-tune the model on objective metrics:
* Spotting: Intersection over Union (IoU) rewards.
* Parsing: Structural integrity rewards (HTML/LaTeX validity).


  
  
    Figure 4: Data Construction & Training Pipeline. From raw document sourcing to RL-based fine-tuning.
  


4. Unified Capabilities

MahenOCR consolidates a wide range of capabilities into a single model, demonstrating robust performance across diverse document intelligence tasks.

4.1 Text Spotting
Jointly detecting and recognizing text with precise coordinate outputs.


  
  Figure 5: Multi-oriented text spotting samples.


4.2 Document Parsing
End-to-end conversion of documents into structured Markdown, with tables in HTML and formulas in LaTeX.


  
  Figure 6: Complex layout parsing results.


4.3 Translation & Information Extraction
Direct image-to-text translation and structured JSON extraction from receipts and IDs.


  
    
    Figure 7: End-to-End Translation
  
  
    
    Figure 8: Key Information Extraction
  


5. Conclusion

MahenOCR demonstrates that a well-designed, data-driven 1B parameter model can rival the performance of significantly larger models and commercial APIs. By combining a streamlined end-to-end architecture with targeted reinforcement learning, we provide a robust, open-source foundation for the next generation of industrial OCR applications.
`;
