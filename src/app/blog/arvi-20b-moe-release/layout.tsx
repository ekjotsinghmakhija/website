import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arvi 20B: Democratizing Reasoning MoEs",
  description: "An open-weight model with 3.6B active parameters that rivals frontier reasoning models.",
  openGraph: {
    title: "Arvi 20B: Democratizing Reasoning MoEs | Ekjot Singh",
    description: "An open-weight model with 3.6B active parameters that rivals frontier reasoning models.",
    type: "article",
    publishedTime: "Jan 31, 2026",
    url: "https://ekjot.me/blog/arvi-20b-moe-release",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvi 20B: Democratizing Reasoning MoEs",
    description: "An open-weight model with 3.6B active parameters that rivals frontier reasoning models.",
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
            headline: "Arvi 20B: Democratizing Reasoning MoEs",
            description: "An open-weight model with 3.6B active parameters that rivals frontier reasoning models.",
            datePublished: "Jan 31, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/arvi-20b-moe-release",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
