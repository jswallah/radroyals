import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style:  ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAD ROYALS PRIVATE LIMITED | Building With Vision",
  description:
    "RAD ROYALS PRIVATE LIMITED — Building with vision and delivering with precision from Ghaziabad, Uttar Pradesh.",
  keywords: [
    "RAD ROYALS",
    "RAD ROYALS PRIVATE LIMITED",
    "Ghaziabad corporate company",
    "Uttar Pradesh business",
    "vision precision excellence",
    "radroyals.in",
  ],
  authors: [{ name: "RAD ROYALS PRIVATE LIMITED" }],
  creator: "RAD ROYALS PRIVATE LIMITED",
  publisher: "RAD ROYALS PRIVATE LIMITED",
  metadataBase: new URL("https://radroyals.in"),
  openGraph: {
    type: "website",
    url: "https://radroyals.in",
    title: "RAD ROYALS PRIVATE LIMITED | Building With Vision",
    description:
      "RAD ROYALS PRIVATE LIMITED — Building with vision and delivering with precision from Ghaziabad, Uttar Pradesh.",
    siteName: "RAD ROYALS PRIVATE LIMITED",
    images: [
      {
        url: "/images/hero-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "RAD ROYALS PRIVATE LIMITED",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAD ROYALS PRIVATE LIMITED | Building With Vision",
    description:
      "RAD ROYALS PRIVATE LIMITED — Building with vision and delivering with precision from Ghaziabad, Uttar Pradesh.",
    images: ["/images/hero-architecture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A2B6D" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
