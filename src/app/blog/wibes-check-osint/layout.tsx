import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WibesCheck: OSINT Web Intelligence",
  description: "Forensic analysis of digital footprints for web intelligence.",
  openGraph: {
    title: "WibesCheck: OSINT Web Intelligence | Ekjot Singh",
    description: "Forensic analysis of digital footprints for web intelligence.",
    type: "article",
    publishedTime: "Jan 06, 2026",
    url: "https://ekjot.me/blog/wibes-check-osint",
  },
  twitter: {
    card: "summary_large_image",
    title: "WibesCheck: OSINT Web Intelligence",
    description: "Forensic analysis of digital footprints for web intelligence.",
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
            headline: "WibesCheck: OSINT Web Intelligence",
            description: "Forensic analysis of digital footprints for web intelligence.",
            datePublished: "Jan 06, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/wibes-check-osint",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
