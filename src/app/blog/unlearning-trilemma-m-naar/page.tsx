'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Solving the Unlearning Trilemma with M-NAAR", date: "Feb 12, 2026", readTime: "8 min read", tag: "Safety" }}>
      <p>Deployment of LLMs in high-compliance environments is bottlenecked by the <strong>Unlearning Trilemma</strong>: the adversarial trade-off between deletion efficacy, model utility, and hallucination suppression.</p>
      <h2 className="text-blue-400 font-serif">Erasure via Structural Omission</h2>
      <p>M-NAAR rejects weight destruction in favor of attention refraction. By identifying fact-bearing tokens with high predictive entropy and attenuating attention scores (\lambda), we achieve a <strong>0.00 hallucination rate</strong> on the ToFU dataset while preserving 80% of neighboring utility.</p>
    </NotebookLayout>
  );
}
