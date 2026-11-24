import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AhhCode: AI-Powered Assistant",
  description: "Architecting an agent that turns the CLI into a pair programmer.",
  openGraph: {
    title: "AhhCode: AI-Powered Assistant | Ekjot Singh",
    description: "Architecting an agent that turns the CLI into a pair programmer.",
    type: "article",
    publishedTime: "Jan 24, 2026",
    url: "https://ekjot.me/blog/ahhcode-ai-assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "AhhCode: AI-Powered Assistant",
    description: "Architecting an agent that turns the CLI into a pair programmer.",
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
            headline: "AhhCode: AI-Powered Assistant",
            description: "Architecting an agent that turns the CLI into a pair programmer.",
            datePublished: "Jan 24, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/ahhcode-ai-assistant",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
