'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Arvi 20B: Reasoning at Scale with MoEs", date: "Jan 31, 2026", readTime: "12 min read", tag: "MoE" }}>
      <p>Arvi features 20.9B parameters with only 3.6B active during inference. It rivals frontier models on math benchmarks using variable effort reasoning.</p>
    </NotebookLayout>
  );
}
