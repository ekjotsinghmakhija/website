import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLM Group Chat: Adversarial Debate",
  description: "Multi-agent boardroom forcing consensus through adversarial debate.",
  openGraph: {
    title: "LLM Group Chat: Adversarial Debate | Ekjot Singh",
    description: "Multi-agent boardroom forcing consensus through adversarial debate.",
    type: "article",
    publishedTime: "Dec 15, 2025",
    url: "https://ekjot.me/blog/llm-groupchat-debate",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Group Chat: Adversarial Debate",
    description: "Multi-agent boardroom forcing consensus through adversarial debate.",
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
            headline: "LLM Group Chat: Adversarial Debate",
            description: "Multi-agent boardroom forcing consensus through adversarial debate.",
            datePublished: "Dec 15, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/llm-groupchat-debate",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
