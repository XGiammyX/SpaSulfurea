import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "spa Palinuro",
    "spa Cilento",
    "wellness Palinuro",
    "percorso spa cilento",
    "bagno turco Palinuro",
    "sauna Cilento",
    "benessere Cilento",
    "terme Palinuro",
    "relax Cilento",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${manrope.variable} antialiased`}>
        <LocalBusinessJsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBookingBar />
        {/* Safe area for mobile sticky bar */}
        <div className="h-14 lg:hidden" />
      </body>
    </html>
  );
}
