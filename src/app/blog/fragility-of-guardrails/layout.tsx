import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fragility of Guardrails: Cognitive Jamming",
  description: "A mechanistic audit revealing how models spontaneously construct internal physics engines.",
  openGraph: {
    title: "Fragility of Guardrails: Cognitive Jamming | Ekjot Singh",
    description: "A mechanistic audit revealing how models spontaneously construct internal physics engines.",
    type: "article",
    publishedTime: "Dec 23, 2025",
    url: "https://ekjot.me/blog/fragility-of-guardrails",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fragility of Guardrails: Cognitive Jamming",
    description: "A mechanistic audit revealing how models spontaneously construct internal physics engines.",
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
            headline: "Fragility of Guardrails: Cognitive Jamming",
            description: "A mechanistic audit revealing how models spontaneously construct internal physics engines.",
            datePublished: "Dec 23, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/fragility-of-guardrails",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
