'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Solving the Unlearning Trilemma with M-NAAR", date: "Feb 12, 2026", readTime: "8 min read", tag: "Safety" }}>
      <p>Developers are forced into a trilemma: efficient deletion, general reasoning, or robustness to re-learning. M-NAAR rejects weight destruction in favor of structural omission via attention refraction.</p>
      <h2 className="text-blue-400 font-serif">Erasure via Omission</h2>
      <p>By identifying tokens with high predictive entropy, we mathematically refract attention heads away from them, achieving a 0.00 hallucination rate on the ToFU dataset.</p>
    </NotebookLayout>
  );
}
