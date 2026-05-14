import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive360.com"),

  title: {
    default: "ProstaVive™ Official Website",
    template: "%s | ProstaVive™",
  },

  description:
    "ProstaVive™ is a natural prostate health support supplement designed to help support urinary flow, bladder comfort, and male wellness.",

  keywords: [
    "ProstaVive",
    "ProstaVive official website",
    "ProstaVive supplement",
    "prostate health support",
    "natural prostate support",
    "male wellness supplement",
  ],

  authors: [
    {
      name: "ProstaVive",
      url: "https://prostavive360.com",
    },
  ],

  creator: "ProstaVive",

  publisher: "ProstaVive",

  alternates: {
    canonical: "https://prostavive360.com",
  },

  category: "health",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url: "https://prostavive360.com",

    siteName: "ProstaVive™",

    title: "ProstaVive™ Official Website",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™.",

    locale: "en_US",

    images: [
      {
        url: "https://prostavive360.com/prostavive-1-bottle.webp",
        width: 1200,
        height: 630,
        alt: "ProstaVive™ Bottle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ProstaVive™ Official Website",

    description:
      "Natural prostate wellness support supplement for men.",

    images: [
      "https://prostavive360.com/prostavive-1-bottle.webp",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    // Replace with real code from Google Search Console
    google: "google-site-verification-code",
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
      <body>
        {children}

        {/* ORGANIZATION + WEBSITE + PRODUCT SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",

                "@type": "Organization",

                name: "ProstaVive",

                url: "https://prostavive360.com",

                logo:
                  "https://prostavive360.com/favicon.ico",

                sameAs: [
                  "https://facebook.com/",
                  "https://instagram.com/",
                  "https://twitter.com/",
                ],
              },

              {
                "@context": "https://schema.org",

                "@type": "WebSite",

                name: "ProstaVive",

                url: "https://prostavive360.com",

                potentialAction: {
                  "@type": "SearchAction",

                  target:
                    "https://prostavive360.com/?s={search_term_string}",

                  "query-input":
                    "required name=search_term_string",
                },
              },

              {
                "@context": "https://schema.org",

                "@type": "Product",

                name: "ProstaVive",

                image: [
                  "https://prostavive360.com/prostavive-1-bottle.webp",
                ],

                description:
                  "Natural prostate support supplement designed to support urinary flow and male wellness.",

                brand: {
                  "@type": "Brand",
                  name: "ProstaVive",
                },

                offers: {
                  "@type": "Offer",

                  url: "https://prostavive360.com",

                  priceCurrency: "USD",

                  price: "39",

                  availability:
                    "https://schema.org/InStock",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}