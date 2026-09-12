import Image from "next/image";
import styles from "../css/PriceTemplate.module.css";

export default function OfferBanner() {
  const redirectLink =
    "https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net";

  return (
    <section
      className={styles.offerSection}
      aria-labelledby="prostavive-special-offer" id="order"
    >
      {/* FULL WIDTH HEADER */}
      <header className={styles.header}>
        <h2
          id="prostavive-special-offer"
          className={styles.heading}
        >
          ACT NOW: Due To High Demand And Stock Running Low
          <br />
          These Discount Prices Are For A Limited Time ONLY!
        </h2>

        <p className={styles.subheading}>
          Support prostate health, urinary flow, and male vitality
          with today’s exclusive ProstaVive discount.
        </p>
      </header>

      {/* CONTAINER */}
      <div className={styles.container}>
        <a
          href={redirectLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={styles.offerCard}
          aria-label="Buy ProstaVive Official Offer"
        >
          <Image
            src="/order-page.webp"
            alt="ProstaVive official supplement offer"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className={styles.offerImage}
          />
        </a>
      </div>
    </section>
  );
}