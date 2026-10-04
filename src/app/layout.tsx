import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive360.com"),

  title: {
    default: "ProstaVive Supplement | Ingredients & FAQs",
    template: "%s | ProstaVive",
  },

  description:
    "Explore ProstaVive supplement ingredients, product details, FAQs, and ordering information. Review the current offer and learn what the formula contains.",

  applicationName: "ProstaVive",
  authors: [{ name: "ProstaVive" }],
  creator: "ProstaVive",
  publisher: "ProstaVive",
  category: "health",

  alternates: {
    canonical: "/",
  },

  verification: {
    other: {
      "msvalidate.01": "7110F26BD135CDAA28B93D262A945D29",
    },
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
    title: "ProstaVive Supplement | Ingredients & FAQs",
    description:
      "Explore ProstaVive supplement ingredients, product details, FAQs, and ordering information. Review the current offer and learn what the formula contains.",
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
    title: "ProstaVive Supplement | Ingredients & FAQs",
    description:
      "Explore ProstaVive supplement ingredients, product details, FAQs, and ordering information. Review the current offer and learn what the formula contains.",
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
      <body>{children}</body>
    </html>
  );
}
