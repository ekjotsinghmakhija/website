import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linux Kernel Contributions",
  description: "Lower-level optimization of system calls and memory management.",
  openGraph: {
    title: "Linux Kernel Contributions | Ekjot Singh",
    description: "Lower-level optimization of system calls and memory management.",
    type: "article",
    publishedTime: "Nov 15, 2025",
    url: "https://ekjot.me/blog/linux-kernel-memories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linux Kernel Contributions",
    description: "Lower-level optimization of system calls and memory management.",
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
            headline: "Linux Kernel Contributions",
            description: "Lower-level optimization of system calls and memory management.",
            datePublished: "Nov 15, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/linux-kernel-memories",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
