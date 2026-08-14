import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitutam-cleaning.vercel.app"),
  title: {
    default: "Bitutam International Cleaning Services | Nairobi, Kenya",
    template: "%s | Bitutam International",
  },
  description:
    "Bitutam International Cleaning Services provides professional cleaning, gardening and landscaping for homes, businesses and institutions across Nairobi and Kenya. Clean Spaces. Green Spaces. Better Places.",
  keywords: [
    "cleaning services Nairobi",
    "office cleaning Kenya",
    "deep cleaning Nairobi",
    "landscaping Kenya",
    "gardening services Nairobi",
    "commercial cleaning Kenya",
    "Bitutam International",
  ],
  openGraph: {
    title: "Bitutam International Cleaning Services",
    description:
      "Professional cleaning, gardening and landscaping across Nairobi and Kenya. Clean Spaces. Green Spaces. Better Places.",
    url: "https://bitutam-cleaning.vercel.app",
    siteName: "Bitutam International Cleaning Services",
    locale: "en_KE",
    type: "website",
    images: [{ url: "/img/hero-facade.jpg", width: 855, height: 1193 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitutam International Cleaning Services",
    description:
      "Professional cleaning, gardening and landscaping across Nairobi and Kenya.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230d431f'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='16' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E"
        />
        <meta name="theme-color" content="#0d431f" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
