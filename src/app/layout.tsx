/* FILE: src/app/layout.tsx */
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#030304",
};

export const metadata: Metadata = {
  title: "Ekjot Singh",
  description: "Founder & Lead Architect at Metanthropic. Researching the physics of intelligence and building interpretable AGI.",
  icons: {
    icon: "/avatar.jpg",
  },
  openGraph: {
    title: "Ekjot Singh",
    description: "Architecting the Physics of Intelligence.",
    type: "website",
    locale: "en_US",
    url: "https://ekjotsingh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable} antialiased text-[#EDEDED]`}
      >
        {children}
      </body>
    </html>
  );
}
