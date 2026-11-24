import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latent Logic Topology & SAL Calibration",
  description: "Operationalizing LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox with 87% accuracy.",
  openGraph: {
    title: "Latent Logic Topology & SAL Calibration | Ekjot Singh",
    description: "Operationalizing LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox with 87% accuracy.",
    type: "article",
    publishedTime: "Feb 10, 2026",
    url: "https://ekjot.me/blog/latent-logic-topology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latent Logic Topology & SAL Calibration",
    description: "Operationalizing LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox with 87% accuracy.",
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
            headline: "Latent Logic Topology & SAL Calibration",
            description: "Operationalizing LLMs as engines of 'Latent Causal Chains' to solve the RLVR Convergence Paradox with 87% accuracy.",
            datePublished: "Feb 10, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/latent-logic-topology",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
