'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Cpu, Network, Zap, ArrowRight, Share2 } from 'lucide-react';

export default function ArviPost() {
  const meta = {
    title: "Arvi 20B: Democratizing Reasoning with Efficient MoEs",
    date: "Jan 31, 2026",
    readTime: "12 min read",
    tag: "AI Research"
  };

  return (
    <NotebookLayout meta={meta}>
      <p>We are hitting a wall with dense models. The compute required to run a 70B+ model is out of reach for most researchers. <strong>Arvi 20B</strong> is our answer—a frontier-rivaling reasoning model that fits on consumer hardware.</p>

      <h2 className="text-purple-400 font-serif">Mixture-of-Experts (MoE) Architecture</h2>
      <p>Arvi features 20.9B total parameters, but only <strong>3.6B are active</strong> during inference. By using a sophisticated gating mechanism, we activate only the "reasoning circuits" required for a specific query.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="space-y-4">
          <h4 className="text-white font-serif flex items-center gap-2">
            <Zap size={18} className="text-purple-400" /> Math & Coding
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">Rivals frontier dense models 3x its size by specializing expert neurons in logical and symbolic computation.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-serif flex items-center gap-2">
            <Network size={18} className="text-purple-400" /> Agentic Workflows
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">Custom chat formats designed specifically for tool-use, multi-step planning, and long-context reasoning.</p>
        </div>
      </div>

      <p>We released Arvi as open-weights because we believe the future of AGI shouldn't be gated behind an API. This model is currently the most efficient reasoning engine in the 20B category.</p>
    </NotebookLayout>
  );
}
