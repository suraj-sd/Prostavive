import Image from "next/image";
import styles from "../css/Ordering.module.css";

export default function OrderingSection() {
  const redirectLink = "https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net";

  return (
    <section
      className={styles.container}
      id="ordering"
      aria-labelledby="order-section-heading"
    >
      <h2 id="order-section-heading" className={styles.ordTitle}>
        Ordering Is Secure, Fast & Worry-Free
      </h2>
      <a
        href={redirectLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <Image
          src="/checkout-page.webp"
          alt="ProstaVive Secure Checkout Offer Page"
          width={1200}
          height={900}
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className={styles.image}
        />
      </a>
    </section>
  );
}
