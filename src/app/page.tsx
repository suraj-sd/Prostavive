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
                name: "ProstaVive Supplement | Ingredients & FAQs",
                isPartOf: { "@id": "https://prostavive360.com/#website" },
                about: { "@id": "https://prostavive360.com/#product" },
                description:
                  "Explore ProstaVive supplement ingredients, product details, FAQs, and ordering information. Review the current offer and learn what the formula contains.",
              },
              {
                "@type": "Product",
                "@id": "https://prostavive360.com/#product",
                name: "ProstaVive",
                image: "https://prostavive360.com/prostavive-1-bottle.webp",
                description:
                  "Dietary supplement sold under the ProstaVive name. See this page for product details, ingredients, and ordering information.",
                category: "Dietary supplement",
                brand: { "@type": "Brand", name: "ProstaVive" },
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
