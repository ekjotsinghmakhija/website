import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 003-CFG: Chronometric Flux Gating",
  description: "Eliminating Latent Manifold Collapse in Sparse Autoencoders with temporal trajectory gating.",
  openGraph: {
    title: "Module 003-CFG: Chronometric Flux Gating | Ekjot Singh",
    description: "Eliminating Latent Manifold Collapse in Sparse Autoencoders with temporal trajectory gating.",
    type: "article",
    publishedTime: "Feb 06, 2026",
    url: "https://ekjot.me/blog/chronometric-flux-gating-cfg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Module 003-CFG: Chronometric Flux Gating",
    description: "Eliminating Latent Manifold Collapse in Sparse Autoencoders with temporal trajectory gating.",
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
            headline: "Module 003-CFG: Chronometric Flux Gating",
            description: "Eliminating Latent Manifold Collapse in Sparse Autoencoders with temporal trajectory gating.",
            datePublished: "Feb 06, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/chronometric-flux-gating-cfg",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
