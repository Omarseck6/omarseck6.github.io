import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteShell } from "@/components/layout/site-shell";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${portfolio.name} — ${portfolio.role}`, template: `%s — ${portfolio.name}` },
  description: portfolio.bio,
  keywords: ["Full-stack software engineer", "Software engineer", "Web & mobile", "Next.js", "React", "React Native", "NestJS", "Spring Boot", "TypeScript", "Dakar", "Senegal"],
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.bio,
    siteName: portfolio.name,
  },
  twitter: { card: "summary_large_image", title: `${portfolio.name} — ${portfolio.role}`, description: portfolio.bio, images: ["/opengraph-image.png"] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#090909", colorScheme: "dark light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${inter.variable}`}>
      <body><SiteShell>{children}</SiteShell><GoogleAnalytics /></body>
    </html>
  );
}
