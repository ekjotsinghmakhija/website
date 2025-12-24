import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ekjot Singh",
  description: "A complete archive of products, libraries, and experiments.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
