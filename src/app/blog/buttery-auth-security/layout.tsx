import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buttery Auth: Comprehensive Security",
  description: "A full-stack framework making TypeScript authentication feel smooth.",
  openGraph: {
    title: "Buttery Auth: Comprehensive Security | Ekjot Singh",
    description: "A full-stack framework making TypeScript authentication feel smooth.",
    type: "article",
    publishedTime: "Sep 24, 2025",
    url: "https://ekjot.me/blog/buttery-auth-security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buttery Auth: Comprehensive Security",
    description: "A full-stack framework making TypeScript authentication feel smooth.",
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
            headline: "Buttery Auth: Comprehensive Security",
            description: "A full-stack framework making TypeScript authentication feel smooth.",
            datePublished: "Sep 24, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/buttery-auth-security",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
