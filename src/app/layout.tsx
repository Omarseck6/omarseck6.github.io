import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteShell } from "@/components/layout/site-shell";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://omarseck.dev"),
  title: { default: `${portfolio.name} — ${portfolio.role}`, template: `%s — ${portfolio.name}` },
  description: portfolio.bio,
  keywords: ["Full-stack engineer", "Software engineer", "Next.js", "React", "TypeScript", "Dakar"],
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.bio,
    siteName: portfolio.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${portfolio.name} portfolio` }],
  },
  twitter: { card: "summary_large_image", title: `${portfolio.name} — ${portfolio.role}`, description: portfolio.bio, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#090909", colorScheme: "dark light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${inter.variable}`}>
      <body><SiteShell>{children}</SiteShell><Analytics /><GoogleAnalytics /></body>
    </html>
  );
}
