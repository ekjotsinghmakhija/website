import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VostSQL: DB Engine Architecture",
  description: "Re-engineering object-relational databases for modern instruction frames.",
  openGraph: {
    title: "VostSQL: DB Engine Architecture | Ekjot Singh",
    description: "Re-engineering object-relational databases for modern instruction frames.",
    type: "article",
    publishedTime: "Jan 25, 2026",
    url: "https://ekjot.me/blog/vostsql-engine-architecture",
  },
  twitter: {
    card: "summary_large_image",
    title: "VostSQL: DB Engine Architecture",
    description: "Re-engineering object-relational databases for modern instruction frames.",
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
            headline: "VostSQL: DB Engine Architecture",
            description: "Re-engineering object-relational databases for modern instruction frames.",
            datePublished: "Jan 25, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/vostsql-engine-architecture",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
