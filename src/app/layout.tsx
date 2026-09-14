import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive360.com"),

  title: {
    default: "ProstaVive Official Website | Prostate Health Support",
    template: "%s | ProstaVive",
  },

  description:
    "Visit the official ProstaVive website to learn about its natural prostate support formula, ingredients, urinary wellness information, and current offer.",

  keywords: [
    "ProstaVive official website",
    "ProstaVive supplement",
    "ProstaVive reviews",
    "prostate health",
    "natural prostate support",
    "urinary wellness",
    "male vitality",
  ],

  applicationName: "ProstaVive",
  authors: [{ name: "ProstaVive" }],
  creator: "ProstaVive",
  publisher: "ProstaVive",
  category: "health",

  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "ProstaVive",
    title: "ProstaVive Official Website | Prostate Health Support",
    description:
      "Learn about ProstaVive, its natural ingredients, prostate support benefits, and current offer.",
    images: [
      {
        url: "/prostavive-1-bottle.webp",
        width: 1200,
        height: 630,
        alt: "ProstaVive supplement bottle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProstaVive Official Website | Prostate Health Support",
    description:
      "Learn about ProstaVive ingredients, prostate support information, and the current offer.",
    images: ["/prostavive-1-bottle.webp"],
  },

  icons: {
    icon: "/favicon.ico",
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
        <meta
          name="msvalidate.01"
          content="7110F26BD135CDAA28B93D262A945D29"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
