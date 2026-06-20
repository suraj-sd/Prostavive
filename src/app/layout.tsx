import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive360.com"),

  title: {
    default: "ProstaVive360 - Prostate Health & Male Wellness Information",
    template: "%s | ProstaVive360",
  },

  description:
    "ProstaVive360 is an informational website about prostate health, urinary wellness, and male health support education.",

  keywords: [
    "prostate health",
    "male wellness",
    "urinary health",
    "prostate support information",
    "health education",
    "ProstaVive360",
  ],

  alternates: {
    canonical: "https://prostavive360.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://prostavive360.com",
    siteName: "ProstaVive360",
    title: "ProstaVive360 - Prostate Health Information",
    description:
      "Learn about prostate health, urinary wellness, and male health support information.",
    images: [
      {
        url: "https://prostavive360.com/prostavive-1-bottle.webp",
        width: 1200,
        height: 630,
        alt: "ProstaVive360",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProstaVive360",
    description:
      "Prostate health and male wellness information resource.",
    images: ["https://prostavive360.com/prostavive-1-bottle.webp"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Bing Verification */}
        <meta
          name="msvalidate.01"
          content="60D817931A42628FFAE6BF2EA9A75CD9"
        />

        {/* ✅ Preconnect for speed (SEO boost) */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.bing.com" />
      </head>

      <body>{children}</body>
    </html>
  );
}