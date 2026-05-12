import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive.com"),

  title: {
    default: "ProstaVive™ Official Website | Prostate Health Support Supplement",
    template: "%s | ProstaVive™",
  },

  description:
    "ProstaVive™ is a natural prostate health supplement designed to support urinary flow, bladder comfort, male vitality, and overall wellness using carefully selected natural ingredients.",

  keywords: [
    "ProstaVive",
    "ProstaVive official website",
    "ProstaVive supplement",
    "prostate health supplement",
    "urinary flow support",
    "male vitality",
    "natural prostate support",
    "men wellness supplement",
    "healthy prostate",
    "urinary comfort",
    "natural supplement",
  ],

  authors: [
    {
      name: "ProstaVive",
    },
  ],

  creator: "ProstaVive",

  publisher: "ProstaVive",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://prostavive.com",
  },

  category: "health",

  openGraph: {
    type: "website",

    url: "https://prostavive.com",

    siteName: "ProstaVive™",

    locale: "en_US",

    title:
      "ProstaVive™ Official Website | Natural Prostate Health Support",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™ daily formula.",

    images: [
      {
        url: "/prostavive-1-bottle.webp",
        width: 1200,
        height: 630,
        alt: "ProstaVive™ prostate support supplement bottle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ProstaVive™ Official Website | Natural Prostate Health Support",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™.",

    images: ["/prostavive-1-bottle.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* SEO STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Product",

              name: "ProstaVive™",

              image: [
                "https://prostavive.com/prostavive-1-bottle.webp",
              ],

              description:
                "Natural prostate support supplement designed to support urinary flow, prostate wellness, and male vitality.",

              brand: {
                "@type": "Brand",
                name: "ProstaVive",
              },

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "5795",
              },

              offers: {
                "@type": "Offer",

                url: "https://prostavive.com",

                priceCurrency: "USD",

                price: "39",

                availability:
                  "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}