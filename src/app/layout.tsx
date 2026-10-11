import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { canonicalUrl, siteUrl } from "@/lib/site-url";
import { themeInitializationScript } from "@/lib/themes";

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
  colorScheme: "dark light",
  themeColor: "#111517",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      data-theme="original"
      suppressHydrationWarning
    >
      <body>
        {children}
        <Script
          id="theme-initialization"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
      </body>
    </html>
  );
}
