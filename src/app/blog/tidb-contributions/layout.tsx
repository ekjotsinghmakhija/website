import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distributed SQL with TiDB",
  description: "Scaling HTAP workloads in Go for distributed databases.",
  openGraph: {
    title: "Distributed SQL with TiDB | Ekjot Singh",
    description: "Scaling HTAP workloads in Go for distributed databases.",
    type: "article",
    publishedTime: "Oct 20, 2025",
    url: "https://ekjot.me/blog/tidb-contributions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distributed SQL with TiDB",
    description: "Scaling HTAP workloads in Go for distributed databases.",
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
            headline: "Distributed SQL with TiDB",
            description: "Scaling HTAP workloads in Go for distributed databases.",
            datePublished: "Oct 20, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/tidb-contributions",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
