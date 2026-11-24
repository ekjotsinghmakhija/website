import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Journey",
  description:
    "Engineering leadership, stealth AI startups, and systems architecture journey of Ekjot Singh.",
  openGraph: {
    title: "Experience & Journey | Ekjot Singh",
    description:
      "Engineering leadership, stealth AI startups, and systems architecture journey of Ekjot Singh.",
    url: "https://ekjot.me/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
