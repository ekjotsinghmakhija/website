import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Stack & Infrastructure",
  description:
    "A comprehensive matrix of programming languages, AI training frameworks, safety mechanisms, and infrastructure technologies.",
  openGraph: {
    title: "Technical Stack & Infrastructure | Ekjot Singh",
    description:
      "A comprehensive matrix of programming languages, AI training frameworks, safety mechanisms, and infrastructure technologies.",
    url: "https://ekjot.me/stack",
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
