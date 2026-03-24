'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Brain, Network, Scale } from 'lucide-react';

export default function LatentLogicPost() {
  const meta = {
    title: "Operationalizing Latent Logic Topologies",
    date: "Feb 10, 2026",
    readTime: "10 min read",
    tag: "Research"
  };

  return (
    <NotebookLayout meta={meta}>
      <p>How do we predict if a model will reason correctly before it even outputs a token? We audited the <strong>Intrinsic Soundness</strong> of model topologies to solve the RLVR Convergence Paradox.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-lg">
          <div className="text-blue-400 mb-2"><Scale size={24} /></div>
          <h4 className="text-white font-serif mb-1">SAL Metric</h4>
          <p className="text-sm text-gray-400">The Soundness-Aware Level (SAL) predicts post-alignment reasoning with <strong>87% accuracy</strong>.</p>
        </div>
        <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg">
          <div className="text-purple-400 mb-2"><Network size={24} /></div>
          <h4 className="text-white font-serif mb-1">Causal Chains</h4>
          <p className="text-sm text-gray-400">Operationalizing LLMs as engines of latent causal chains rather than stochastic parrots.</p>
        </div>
      </div>

      <p>By mapping these logical manifolds, we move beyond scaling laws toward a microscopic understanding of intelligence.</p>
    </NotebookLayout>
  );
}
