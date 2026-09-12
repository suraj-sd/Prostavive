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

export default function HomePage() {
  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://prostavive360.com/#organization",
                name: "ProstaVive",
                url: "https://prostavive360.com/",
                logo: "https://prostavive360.com/prostavive-1-bottle.webp",
              },
              {
                "@type": "WebSite",
                "@id": "https://prostavive360.com/#website",
                url: "https://prostavive360.com/",
                name: "ProstaVive",
                publisher: { "@id": "https://prostavive360.com/#organization" },
              },
              {
                "@type": "WebPage",
                "@id": "https://prostavive360.com/#webpage",
                url: "https://prostavive360.com/",
                name: "ProstaVive Official Website | Prostate Health Support",
                isPartOf: { "@id": "https://prostavive360.com/#website" },
                about: { "@id": "https://prostavive360.com/#product" },
                description:
                  "Official ProstaVive website with product information, ingredients, reviews, FAQs, and ordering details.",
              },
              {
                "@type": "Product",
                "@id": "https://prostavive360.com/#product",
                name: "ProstaVive",
                image: "https://prostavive360.com/prostavive-1-bottle.webp",
                description:
                  "Natural dietary supplement in powder form designed to support prostate health and urinary wellness.",
                brand: { "@type": "Brand", name: "ProstaVive" },
                offers: {
                  "@type": "Offer",
                  price: "39",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: "https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is ProstaVive?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ProstaVive is a natural dietary supplement in powder form designed to support prostate health.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When can I expect to see results with ProstaVive?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Results vary, but many users notice improvements within a few weeks.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are there any side effects of ProstaVive?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ProstaVive is made from natural ingredients and is generally well-tolerated.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is ProstaVive safe for me to take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ProstaVive contains natural ingredients. Consult a healthcare professional before use if you have a medical condition, take medication, or are pregnant or nursing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How will ProstaVive be shipped to me and how quickly?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Shipping takes 5–7 business days in the US and Canada and 8–15 days internationally.",
                    },
                  },
                ],
              },
            ],
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
