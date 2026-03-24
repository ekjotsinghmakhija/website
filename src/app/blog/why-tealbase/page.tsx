'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Why I Built Tealbase", date: "Aug 20, 2025", readTime: "6 min read", tag: "Systems" }}>
      <p>Developers are forced to choose between Firebase's speed and Postgres's power. Tealbase ends this compromise by acting as a stethoscope for the <strong>Write-Ahead Log (WAL)</strong>, broadcasting Postgres transactions to WebSockets instantly.</p>
    </NotebookLayout>
  );
}
