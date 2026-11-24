import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solving the Unlearning Trilemma with M-NAAR",
  description: "Achieving 0.00 hallucination rates in model unlearning by refracting attention away from high-entropy tokens.",
  openGraph: {
    title: "Solving the Unlearning Trilemma with M-NAAR | Ekjot Singh",
    description: "Achieving 0.00 hallucination rates in model unlearning by refracting attention away from high-entropy tokens.",
    type: "article",
    publishedTime: "Feb 12, 2026",
    url: "https://ekjot.me/blog/unlearning-trilemma-m-naar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solving the Unlearning Trilemma with M-NAAR",
    description: "Achieving 0.00 hallucination rates in model unlearning by refracting attention away from high-entropy tokens.",
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
            headline: "Solving the Unlearning Trilemma with M-NAAR",
            description: "Achieving 0.00 hallucination rates in model unlearning by refracting attention away from high-entropy tokens.",
            datePublished: "Feb 12, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/unlearning-trilemma-m-naar",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
