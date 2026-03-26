"use client";
import NotebookLayout from "@/components/layout/NotebookLayout";
export default function Post() {
  return (
    <NotebookLayout
      meta={{
        title: "pg_listen: Zero-Polling Database Triggers in C",
        date: "Jan 15, 2026",
        readTime: "5 min read",
        tag: "Systems",
      }}
    >
      <p>
        Using the native libpq interface, this library intercept NOTIFY events
        from PostgreSQL to trigger async shell commands with zero polling
        overhead.
      </p>
    </NotebookLayout>
  );
}
