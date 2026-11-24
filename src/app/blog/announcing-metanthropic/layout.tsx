import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcing Metanthropic",
  description: "Declaring our lab mission to engineer deterministic systems with verifiable safety.",
  openGraph: {
    title: "Announcing Metanthropic | Ekjot Singh",
    description: "Declaring our lab mission to engineer deterministic systems with verifiable safety.",
    type: "article",
    publishedTime: "Nov 10, 2025",
    url: "https://ekjot.me/blog/announcing-metanthropic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Announcing Metanthropic",
    description: "Declaring our lab mission to engineer deterministic systems with verifiable safety.",
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
            headline: "Announcing Metanthropic",
            description: "Declaring our lab mission to engineer deterministic systems with verifiable safety.",
            datePublished: "Nov 10, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/announcing-metanthropic",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
