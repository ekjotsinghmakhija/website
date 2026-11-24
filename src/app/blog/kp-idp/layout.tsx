import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP-IDP: Kinetic-Potential Disentanglement",
  description: "Invalidating the axiom that Decodability equals Causality by identifying active 'Dark Computation'.",
  openGraph: {
    title: "KP-IDP: Kinetic-Potential Disentanglement | Ekjot Singh",
    description: "Invalidating the axiom that Decodability equals Causality by identifying active 'Dark Computation'.",
    type: "article",
    publishedTime: "Feb 07, 2026",
    url: "https://ekjot.me/blog/kp-idp",
  },
  twitter: {
    card: "summary_large_image",
    title: "KP-IDP: Kinetic-Potential Disentanglement",
    description: "Invalidating the axiom that Decodability equals Causality by identifying active 'Dark Computation'.",
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
            headline: "KP-IDP: Kinetic-Potential Disentanglement",
            description: "Invalidating the axiom that Decodability equals Causality by identifying active 'Dark Computation'.",
            datePublished: "Feb 07, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/kp-idp",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
