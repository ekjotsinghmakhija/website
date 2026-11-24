import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chromabase: Filesystems into Pixels",
  description: "A powerful Rust CLI utility for high-density cloud storage bypass via video archives.",
  openGraph: {
    title: "Chromabase: Filesystems into Pixels | Ekjot Singh",
    description: "A powerful Rust CLI utility for high-density cloud storage bypass via video archives.",
    type: "article",
    publishedTime: "Feb 08, 2026",
    url: "https://ekjot.me/blog/chromabase-rust-storage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chromabase: Filesystems into Pixels",
    description: "A powerful Rust CLI utility for high-density cloud storage bypass via video archives.",
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Chromabase: Filesystems into Pixels",
            description: "A powerful Rust CLI utility for high-density cloud storage bypass via video archives.",
            datePublished: "Feb 08, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/chromabase-rust-storage",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
