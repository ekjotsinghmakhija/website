import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MahenOCR: Commercial-Grade 1B VLM",
  description: "A unified end-to-end vision-language model achieving state-of-the-art OCR via RLVR.",
  openGraph: {
    title: "MahenOCR: Commercial-Grade 1B VLM | Ekjot Singh",
    description: "A unified end-to-end vision-language model achieving state-of-the-art OCR via RLVR.",
    type: "article",
    publishedTime: "Jan 30, 2026",
    url: "https://ekjot.me/blog/mahenocr-vlm-architecture",
  },
  twitter: {
    card: "summary_large_image",
    title: "MahenOCR: Commercial-Grade 1B VLM",
    description: "A unified end-to-end vision-language model achieving state-of-the-art OCR via RLVR.",
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
            headline: "MahenOCR: Commercial-Grade 1B VLM",
            description: "A unified end-to-end vision-language model achieving state-of-the-art OCR via RLVR.",
            datePublished: "Jan 30, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/mahenocr-vlm-architecture",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
