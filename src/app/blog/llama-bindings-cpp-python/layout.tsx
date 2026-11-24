import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Llama C++ Python Bindings",
  description: "Optimizing Meta Llama deployment on consumer hardware.",
  openGraph: {
    title: "Llama C++ Python Bindings | Ekjot Singh",
    description: "Optimizing Meta Llama deployment on consumer hardware.",
    type: "article",
    publishedTime: "Dec 30, 2025",
    url: "https://ekjot.me/blog/llama-bindings-cpp-python",
  },
  twitter: {
    card: "summary_large_image",
    title: "Llama C++ Python Bindings",
    description: "Optimizing Meta Llama deployment on consumer hardware.",
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
            headline: "Llama C++ Python Bindings",
            description: "Optimizing Meta Llama deployment on consumer hardware.",
            datePublished: "Dec 30, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/llama-bindings-cpp-python",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
