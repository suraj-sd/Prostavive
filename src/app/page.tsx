import type { Metadata } from "next";

import Header from "../app/component/Header";
import Hero from "../app/component/Hero";
import Hero2 from "../app/component/Hero2";
import Review from "../app/component/Review";
import PriceTem from "../app/component/PriceTemplate";
import ChooseProstavive from "../app/component/ChooseProstavive";
import Bonus from "../app/component/Bonus";
import Info from "../app/component/BenifitAndIngradiant";
import Claim from "../app/component/Claim";
import TemplatePage from "../app/component/Ordering";
import Faq from "../app/component/Faq";
import Footer from "../app/component/Footer";
import DiscountPage from "../app/component/DiscountBottlePage";
import InfoRule from "../app/component/InfoRule";
import Badge from "../app/component/Badge";

export const metadata: Metadata = {
  title:
    "ProstaVive™ Official Website | Natural Prostate Support Supplement",

  description:
    "Buy ProstaVive™ official prostate support supplement designed to support urinary flow, bladder comfort, prostate wellness, and male vitality naturally.",

  keywords: [
    "ProstaVive",
    "ProstaVive official",
    "prostate support supplement",
    "urinary flow support",
    "male vitality supplement",
    "natural prostate formula",
    "prostate wellness",
  ],

  alternates: {
    canonical: "https://prostavive.com",
  },

  openGraph: {
    title:
      "ProstaVive™ Official Website | Natural Prostate Support",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™.",

    url: "https://prostavive.com",

    type: "website",

    images: [
      {
        url: "/prostavive-1-bottle.webp",
        width: 1200,
        height: 630,
        alt: "ProstaVive™ supplement bottle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ProstaVive™ Official Website | Natural Prostate Support",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™.",

    images: ["/prostavive-1-bottle.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebPage",

            name: "ProstaVive™ Official Website",

            url: "https://prostavive.com",

            description:
              "Official ProstaVive™ website offering natural prostate support for urinary flow and male vitality.",

            mainEntity: {
              "@type": "Product",

              name: "ProstaVive™",

              image:
                "https://prostavive.com/prostavive-1-bottle.webp",

              description:
                "Natural prostate support supplement formulated to support urinary flow, bladder comfort, and male vitality.",

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

                price: "39",

                priceCurrency: "USD",

                availability:
                  "https://schema.org/InStock",

                url: "https://prostavive.com",
              },
            },
          }),
        }}
      />

      <div id="top">
        <Header />
        <main id="main-content">
          <Hero />
          <section id="hero2">
            <Hero2 />
          </section>
          <ChooseProstavive />
          <Review />
          <PriceTem />
          <Bonus />
          <Info />
          <Badge />
          <Claim />
          <Faq />
          <TemplatePage />
          <DiscountPage />
          <InfoRule />
        </main>
        <Footer />
      </div>
    </>
  );
}