import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTP 1.1 from Scratch over TCP",
  description: "Engineering a custom HTTP server over raw TCP sockets in Go.",
  openGraph: {
    title: "HTTP 1.1 from Scratch over TCP | Ekjot Singh",
    description: "Engineering a custom HTTP server over raw TCP sockets in Go.",
    type: "article",
    publishedTime: "Nov 20, 2025",
    url: "https://ekjot.me/blog/httpfromtcp-server",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 1.1 from Scratch over TCP",
    description: "Engineering a custom HTTP server over raw TCP sockets in Go.",
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
            headline: "HTTP 1.1 from Scratch over TCP",
            description: "Engineering a custom HTTP server over raw TCP sockets in Go.",
            datePublished: "Nov 20, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/httpfromtcp-server",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
