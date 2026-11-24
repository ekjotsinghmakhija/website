import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SyntriFabric: Terraform Core",
  description: "Extending HCL providers for multi-cloud automation.",
  openGraph: {
    title: "SyntriFabric: Terraform Core | Ekjot Singh",
    description: "Extending HCL providers for multi-cloud automation.",
    type: "article",
    publishedTime: "Aug 28, 2025",
    url: "https://ekjot.me/blog/syntrifabric-terraform",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntriFabric: Terraform Core",
    description: "Extending HCL providers for multi-cloud automation.",
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
            headline: "SyntriFabric: Terraform Core",
            description: "Extending HCL providers for multi-cloud automation.",
            datePublished: "Aug 28, 2025",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/syntrifabric-terraform",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
