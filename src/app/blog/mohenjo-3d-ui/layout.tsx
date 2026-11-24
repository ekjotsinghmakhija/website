import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohenjo: Visualizing Productivity in 3D",
  description: "Building a city-inspired UI for developer workflow management.",
  openGraph: {
    title: "Mohenjo: Visualizing Productivity in 3D | Ekjot Singh",
    description: "Building a city-inspired UI for developer workflow management.",
    type: "article",
    publishedTime: "Jan 05, 2026",
    url: "https://ekjot.me/blog/mohenjo-3d-ui",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohenjo: Visualizing Productivity in 3D",
    description: "Building a city-inspired UI for developer workflow management.",
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
            headline: "Mohenjo: Visualizing Productivity in 3D",
            description: "Building a city-inspired UI for developer workflow management.",
            datePublished: "Jan 05, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/mohenjo-3d-ui",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
