import Image from "next/image";
import styles from "../css/Badge.module.css";

export default function Badge() {
   const redirectLink =
    "https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net";

  return (
    <section
      className={styles.badgeSection}
      aria-labelledby="badge-heading"
    >
      <div className={styles.badgeContainer}>
        {/* Badge Image */}
        <div className={styles.badgeImageWrap}>
          <Image
            src="/certification-badge-1.webp"
            alt="GMP Certified, FDA Registered, Natural Ingredients and GMO Free badges"
            width={1400}
            height={260}
            priority
            sizes="100vw"
            className={styles.badgeImage}
          />
        </div>

        {/* Heading */}
        <h2 id="badge-heading" className={styles.badgeTitle}>
          Claim Your Discounted ProstaVive Below While Stocks Last!
        </h2>

    <section
      className={styles.offerSection}
      aria-labelledby="prostavive-special-offer" id="order"
    >


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
    </section>      </div>
    </section>
  );
}