import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tealbase Architecture & High-Concurrency Systems",
  description:
    "Engineering Tealbase: Bridging Firebase speed with Postgres durability using low-latency Write-Ahead Log (WAL) replication.",
  openGraph: {
    title: "Tealbase Architecture | Ekjot Singh",
    description:
      "Bridging Firebase speed with Postgres durability using low-latency WAL replication.",
    url: "https://ekjot.me/experience/tealbase",
  },
};

export default function TealbaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
