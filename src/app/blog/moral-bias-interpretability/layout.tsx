import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyzing Moral Bias in Finetuned LLMs",
  description: "Localizing the 'Knobe Effect' asymmetry to modular layers and proposing surgical ISRI intervention.",
  openGraph: {
    title: "Analyzing Moral Bias in Finetuned LLMs | Ekjot Singh",
    description: "Localizing the 'Knobe Effect' asymmetry to modular layers and proposing surgical ISRI intervention.",
    type: "article",
    publishedTime: "Feb 02, 2026",
    url: "https://ekjot.me/blog/moral-bias-interpretability",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyzing Moral Bias in Finetuned LLMs",
    description: "Localizing the 'Knobe Effect' asymmetry to modular layers and proposing surgical ISRI intervention.",
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
            headline: "Analyzing Moral Bias in Finetuned LLMs",
            description: "Localizing the 'Knobe Effect' asymmetry to modular layers and proposing surgical ISRI intervention.",
            datePublished: "Feb 02, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/moral-bias-interpretability",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
