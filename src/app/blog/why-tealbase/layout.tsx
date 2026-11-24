import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why I Built Tealbase",
  description: "Solving the 'Success Disaster' by bridging Firebase speed with Postgres power.",
  openGraph: {
    title: "Why I Built Tealbase | Ekjot Singh",
    description: "Solving the 'Success Disaster' by bridging Firebase speed with Postgres power.",
    type: "article",
    publishedTime: "Aug 20, 2025",
    url: "https://ekjot.me/blog/why-tealbase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why I Built Tealbase",
    description: "Solving the 'Success Disaster' by bridging Firebase speed with Postgres power.",
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
            headline: "Why I Built Tealbase",
            description: "Solving the 'Success Disaster' by bridging Firebase speed with Postgres power.",
            datePublished: "Aug 20, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/why-tealbase",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
