import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PostgREST JS: Isomorphic Queries",
  description: "An isomorphic client for PostgreSQL REST interfaces.",
  openGraph: {
    title: "PostgREST JS: Isomorphic Queries | Ekjot Singh",
    description: "An isomorphic client for PostgreSQL REST interfaces.",
    type: "article",
    publishedTime: "Aug 10, 2025",
    url: "https://ekjot.me/blog/postgrest-js-library",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostgREST JS: Isomorphic Queries",
    description: "An isomorphic client for PostgreSQL REST interfaces.",
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
            headline: "PostgREST JS: Isomorphic Queries",
            description: "An isomorphic client for PostgreSQL REST interfaces.",
            datePublished: "Aug 10, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/postgrest-js-library",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
