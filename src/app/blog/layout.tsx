import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Log & Research Dispatches",
  description:
    "Deep-dives into database internals, low-level socket programming, sparse autoencoder manifolds, and foundational model alignment.",
  openGraph: {
    title: "Engineering Log & Research Dispatches | Ekjot Singh",
    description:
      "Deep-dives into database internals, low-level socket programming, sparse autoencoder manifolds, and foundational model alignment.",
    url: "https://ekjot.me/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
