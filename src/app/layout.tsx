import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostavive360.com"),

  title: {
    default:
      "ProstaVive™ Official Website | Prostate Health Support Supplement",
    template: "%s | ProstaVive™",
  },

  description:
    "ProstaVive™ is a natural prostate health supplement designed to support urinary flow, bladder comfort, male vitality, and overall wellness using carefully selected natural ingredients.",

  keywords: [
    "ProstaVive",
    "ProstaVive360",
    "ProstaVive official website",
    "buy ProstaVive",
    "ProstaVive supplement",
    "ProstaVive reviews",
    "ProstaVive prostate support",
    "best prostate supplement",
    "natural prostate support",
    "prostate health supplement",
    "healthy prostate support",
    "urinary flow support",
    "bladder support for men",
    "male vitality supplement",
    "natural prostate formula",
    "prostate wellness",
    "men wellness supplement",
    "prostate care supplement",
    "daily prostate support",
    "advanced prostate formula",
    "prostate balance support",
    "support healthy urinary flow",
    "men over 40 supplement",
    "support bladder comfort",
    "natural male support",
    "herbal prostate supplement",
    "premium prostate formula",
    "prostate nutrition support",
    "support urinary comfort",
    "prostate vitality formula",
    "men health support",
    "natural wellness supplement",
    "healthy aging men support",
    "support prostate function",
    "male wellness formula",
    "support frequent urination",
    "nighttime urinary support",
    "prostate support capsules",
    "daily men support supplement",
    "natural health formula",
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
    canonical: "https://prostavive360.com",
  },

  category: "health",

  openGraph: {
    type: "website",

    url: "https://prostavive360.com",

    siteName: "ProstaVive™",

    locale: "en_US",

    title: "ProstaVive™ Official Website | Natural Prostate Health Support",

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

    title: "ProstaVive™ Official Website | Natural Prostate Health Support",

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

              image: ["https://prostavive360.com/prostavive-1-bottle.webp"],

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

                url: "https://prostavive360.com",

                priceCurrency: "USD",

                price: "39",

                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
