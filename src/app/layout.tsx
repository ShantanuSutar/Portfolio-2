import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { canonicalUrl, siteUrl } from "@/lib/site-url";

import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Shantanu Sutar | Software Developer",
  description:
    "Software Developer at Capgemini working with React, Java, Spring Boot, and modern web technologies. Explore my experience and projects.",
  keywords: [
    "Shantanu Sutar",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Shantanu Sutar", url: canonicalUrl }],
  creator: "Shantanu Sutar",
  publisher: "Shantanu Sutar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Shantanu Sutar",
    title: "Shantanu Sutar | Software Developer",
    description:
      "Software Developer at Capgemini working with React, Java, Spring Boot, and modern web technologies. Explore my experience and projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shantanu Sutar | Software Developer",
    description:
      "Software Developer at Capgemini working with React, Java, Spring Boot, and modern web technologies. Explore my experience and projects.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101416",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
