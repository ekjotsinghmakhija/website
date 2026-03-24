'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "The Kinetic-Potential Disentanglement Protocol", date: "Feb 07, 2026", readTime: "9 min read", tag: "Interpretability" }}>
      <p>Standard interpretability relies on a dangerous conflation: that Decodability equals Causality. KP-IDP solves the intervention-reversal paradox by distinguishing between active <strong>Kinetic computation</strong> and inert <strong>Potential readouts</strong>.</p>
    </NotebookLayout>
  );
}
