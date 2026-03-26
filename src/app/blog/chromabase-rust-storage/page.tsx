"use client";
import NotebookLayout from "@/components/layout/NotebookLayout";
export default function Post() {
  return (
    <NotebookLayout
      meta={{
        title: "Chromabase: Encoding Filesystems into Pixels",
        date: "Feb 08, 2026",
        readTime: "7 min read",
        tag: "Systems",
      }}
    >
      <p>
        Chromabase asks: Can we use video hosting platforms as infinite,
        high-density data archives? We engineered a CLI in Rust utilizing
        redundant bitmasking to protect data against cloud compression.
      </p>
    </NotebookLayout>
  );
}
