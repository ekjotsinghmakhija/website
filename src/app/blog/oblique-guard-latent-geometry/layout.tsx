import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROJECT OBLIQUE-GUARD: Latent Stabilization",
  description: "Treating adversarial vulnerability as a deterministic artifact of Superposition and filtering geometric exploits.",
  openGraph: {
    title: "PROJECT OBLIQUE-GUARD: Latent Stabilization | Ekjot Singh",
    description: "Treating adversarial vulnerability as a deterministic artifact of Superposition and filtering geometric exploits.",
    type: "article",
    publishedTime: "Feb 04, 2026",
    url: "https://ekjot.me/blog/oblique-guard-latent-geometry",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJECT OBLIQUE-GUARD: Latent Stabilization",
    description: "Treating adversarial vulnerability as a deterministic artifact of Superposition and filtering geometric exploits.",
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
            headline: "PROJECT OBLIQUE-GUARD: Latent Stabilization",
            description: "Treating adversarial vulnerability as a deterministic artifact of Superposition and filtering geometric exploits.",
            datePublished: "Feb 04, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/oblique-guard-latent-geometry",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
