import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIM8086: Hardware Emulation",
  description: "A modular hardware emulator for the Intel 8086 microprocessor.",
  openGraph: {
    title: "SIM8086: Hardware Emulation | Ekjot Singh",
    description: "A modular hardware emulator for the Intel 8086 microprocessor.",
    type: "article",
    publishedTime: "Feb 03, 2026",
    url: "https://ekjot.me/blog/sim8086-emulator",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIM8086: Hardware Emulation",
    description: "A modular hardware emulator for the Intel 8086 microprocessor.",
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
            headline: "SIM8086: Hardware Emulation",
            description: "A modular hardware emulator for the Intel 8086 microprocessor.",
            datePublished: "Feb 03, 2026",
            author: {
              "@type": "Person",
              name: "Ekjot Singh",
              url: "https://ekjot.me",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ekjot.me/blog/sim8086-emulator",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
