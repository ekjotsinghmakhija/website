'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
import { Activity } from 'lucide-react';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Eliminating Manifold Collapse with CFG", date: "Feb 06, 2026", readTime: "6 min read", tag: "Interpretability" }}>
      <p>Module 003-CFG treats feature importance as a temporal trajectory to eliminate Latent Manifold Collapse in SAEs.</p>
      <div className="p-6 bg-white/5 border border-white/10 rounded-lg my-8">
        <Activity className="text-blue-400 mb-2" size={24} />
        <h4 className="text-white font-serif mb-1">95.1% Reduction</h4>
        <p className="text-sm text-gray-400">Feature absorption dropped compared to TopK baselines.</p>
      </div>
    </NotebookLayout>
  );
}
