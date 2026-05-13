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
  title: "ProstaVive™ Official Website | Natural Prostate Support Supplement",

  description:
    "Buy ProstaVive™ official prostate support supplement designed to support urinary flow, bladder comfort, prostate wellness, and male vitality naturally.",

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

  alternates: {
    canonical: "https://prostavive360.com",
  },

  openGraph: {
    title: "ProstaVive™ Official Website | Natural Prostate Support",

    description:
      "Support prostate wellness, urinary flow, and male vitality naturally with ProstaVive™.",

    url: "https://prostavive360.com",

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

    title: "ProstaVive™ Official Website | Natural Prostate Support",

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

            url: "https://prostavive360.com",

            description:
              "Official ProstaVive™ website offering natural prostate support for urinary flow and male vitality.",

            mainEntity: {
              "@type": "Product",

              name: "ProstaVive™",

              image: "https://prostavive360.com/prostavive-1-bottle.webp",

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

                availability: "https://schema.org/InStock",

                url: "https://prostavive360.com",
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
