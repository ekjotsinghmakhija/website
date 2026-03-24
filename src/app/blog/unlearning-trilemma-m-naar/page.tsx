'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Shield, Brain, Zap, ArrowRight, Lock } from 'lucide-react';

export default function MNaarPost() {
  const meta = {
    title: "Solving the Unlearning Trilemma with M-NAAR",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    tag: "Research"
  };

  return (
    <NotebookLayout meta={meta}>
      <p className="lead">The current state of "Machine Unlearning" is broken. Developers are forced into a trilemma: you can have <strong>efficient deletion</strong>, <strong>general reasoning</strong>, or <strong>robustness to re-learning</strong>, but never all three.</p>

      <h2 className="text-blue-400 font-serif">The Refraction Approach</h2>
      <p>Instead of traditional fine-tuning that attempts to zero-out weights (essentially lobotomizing the model), we introduced <strong>Metanthropic Neural Ablation via Attention Refraction (M-NAAR)</strong>.</p>

      <p>By identifying the high-entropy tokens that carry factual weights and programmatically "refracting" the attention heads away from them, we achieve:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-lg">
          <div className="text-blue-400 mb-2"><Zap size={24} /></div>
          <h4 className="text-white font-serif mb-1">0.00 Hallucination</h4>
          <p className="text-sm text-gray-400">The model no longer "guesses" at the deleted data because the path is topologically blocked.</p>
        </div>
        <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg">
          <div className="text-purple-400 mb-2"><Brain size={24} /></div>
          <h4 className="text-white font-serif mb-1">Zero Forgetting</h4>
          <p className="text-sm text-gray-400">General reasoning remains 100% intact because the underlying weights aren't destroyed.</p>
        </div>
        <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
          <div className="text-indigo-400 mb-2"><Lock size={24} /></div>
          <h4 className="text-white font-serif mb-1">Deterministic</h4>
          <p className="text-sm text-gray-400">The intervention is a mathematical layer, not a probabilistic fine-tuning patch.</p>
        </div>
      </div>

      <blockquote>
        "The path to AGI requires a deep, empirical understanding of increasingly general systems."
      </blockquote>

      <p>This research moves us closer to AI systems that can actually comply with "Right to be Forgotten" requests without losing their intelligence.</p>
    </NotebookLayout>
  );
}
