import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dataset Distillation via Gradient Matching",
  description: "Using Linear Gradient Matching to condense datasets into shared Platonic representations.",
  openGraph: {
    title: "Dataset Distillation via Gradient Matching | Ekjot Singh",
    description: "Using Linear Gradient Matching to condense datasets into shared Platonic representations.",
    type: "article",
    publishedTime: "Dec 17, 2025",
    url: "https://ekjot.me/blog/dataset-distillation-lgm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataset Distillation via Gradient Matching",
    description: "Using Linear Gradient Matching to condense datasets into shared Platonic representations.",
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
            headline: "Dataset Distillation via Gradient Matching",
            description: "Using Linear Gradient Matching to condense datasets into shared Platonic representations.",
            datePublished: "Dec 17, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/dataset-distillation-lgm",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
