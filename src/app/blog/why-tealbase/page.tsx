'use client';
import NotebookLayout from '@/components/layout/NotebookLayout';
export default function Post() {
  return (
    <NotebookLayout meta={{ title: "Why I Built Tealbase", date: "Aug 20, 2025", readTime: "6 min read", tag: "BaaS" }}>
      <p>I built Tealbase to give developers the realtime magic of Firebase with the raw power of Postgres. We listen to the binary stream of transactions (WAL) to broadcast updates instantly.</p>
    </NotebookLayout>
  );
}
