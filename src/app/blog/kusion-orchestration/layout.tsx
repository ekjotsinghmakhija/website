import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kusion: Platform Orchestration",
  description: "Declarative orchestration for Internal Developer Platforms.",
  openGraph: {
    title: "Kusion: Platform Orchestration | Ekjot Singh",
    description: "Declarative orchestration for Internal Developer Platforms.",
    type: "article",
    publishedTime: "Sep 12, 2025",
    url: "https://ekjot.me/blog/kusion-orchestration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kusion: Platform Orchestration",
    description: "Declarative orchestration for Internal Developer Platforms.",
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
            headline: "Kusion: Platform Orchestration",
            description: "Declarative orchestration for Internal Developer Platforms.",
            datePublished: "Sep 12, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/kusion-orchestration",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
