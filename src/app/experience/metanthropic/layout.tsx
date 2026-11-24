import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metanthropic Lab & Mechanistic Interpretability Research",
  description:
    "Founded an independent frontier research lab; pre-trained open-weight foundational models (Arvi 20B) and pioneering intrinsic alignment & safety.",
  openGraph: {
    title: "Metanthropic Research | Ekjot Singh",
    description:
      "Frontier model pre-training, latent logic topology, and intrinsic alignment.",
    url: "https://ekjot.me/experience/metanthropic",
  },
};

export default function MetanthropicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
