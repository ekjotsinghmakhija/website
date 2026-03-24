'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Arvi 20B: Reasoning at Scale with MoEs", date: "Jan 31, 2026", readTime: "12 min read", tag: "MoE" }}>
      <p>Arvi 20B brings agentic capabilities to open-weights. Built as an MoE transformer, it uses <strong>3.6B active parameters</strong> per token. Using our custom <strong>Harmony Chat Format</strong> (System > Developer > User > Tool), the model interleaves thoughts and actions to solve complex GPQA reasoning tasks.</p>
    </NotebookLayout>
  );
}
