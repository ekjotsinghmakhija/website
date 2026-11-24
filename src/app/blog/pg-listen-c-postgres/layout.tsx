import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pg_listen: Zero-Polling Triggers",
  description: "Database event interception using native libpq in pure C.",
  openGraph: {
    title: "pg_listen: Zero-Polling Triggers | Ekjot Singh",
    description: "Database event interception using native libpq in pure C.",
    type: "article",
    publishedTime: "Jan 15, 2026",
    url: "https://ekjot.me/blog/pg-listen-c-postgres",
  },
  twitter: {
    card: "summary_large_image",
    title: "pg_listen: Zero-Polling Triggers",
    description: "Database event interception using native libpq in pure C.",
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
            headline: "pg_listen: Zero-Polling Triggers",
            description: "Database event interception using native libpq in pure C.",
            datePublished: "Jan 15, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/pg-listen-c-postgres",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
