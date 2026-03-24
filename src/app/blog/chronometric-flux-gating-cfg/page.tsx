'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
import { Activity } from 'lucide-react';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Eliminating Manifold Collapse with CFG", date: "Feb 06, 2026", readTime: "6 min read", tag: "SAEs" }}>
      <p>Legacy SAE architectures suffer from <strong>Latent Manifold Collapse</strong>, where L1 regularization forces orthogonal features to merge. Module 003-CFG treats feature importance as a temporal trajectory via Exponential Moving Averages (EMA).</p>
      <div className="p-6 bg-white/5 border border-white/10 rounded-lg my-8">
        <Activity className="text-blue-400 mb-2" size={24} />
        <h4 className="text-white font-serif mb-1">95.1% Feature Stability</h4>
        <p className="text-sm text-gray-400">CFG reduced feature absorption to 0.0068 compared to TopK baselines while maintaining 0.97 Cosine Similarity.</p>
      </div>
    </NotebookLayout>
  );
}
