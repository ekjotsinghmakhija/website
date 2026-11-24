import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawing with DOM: HTML to SVG",
  description: "Generating dynamic SVG from HTML without headless browsers.",
  openGraph: {
    title: "Drawing with DOM: HTML to SVG | Ekjot Singh",
    description: "Generating dynamic SVG from HTML without headless browsers.",
    type: "article",
    publishedTime: "Aug 05, 2025",
    url: "https://ekjot.me/blog/azhn-html-svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drawing with DOM: HTML to SVG",
    description: "Generating dynamic SVG from HTML without headless browsers.",
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
            headline: "Drawing with DOM: HTML to SVG",
            description: "Generating dynamic SVG from HTML without headless browsers.",
            datePublished: "Aug 05, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/azhn-html-svg",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
