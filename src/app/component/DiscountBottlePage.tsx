import Image from "next/image";
import styles from "../css/DiscountBottlePage.module.css";

export default function DiscountBottlePage() {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section className={styles.ctaSection} aria-label="Order ProstaVive CTA Section">

        <div className={styles.ctaTitleWrap}>
          <h2 className={styles.ctaTitle}>
            Don’t Wait Any Longer! Order Your Discounted Bottle Now!
          </h2>
        </div>

        <div className={styles.ctaImageWrap}>
          <Image
            src="/6-bottle.webp"
            alt="ProstaVive supplement bottles with 180-day guarantee"
            width={600}
            height={400}
            className={styles.ctaImage}
            priority
          />
        </div>

        <div className={styles.ctaContent}>

          {/* 🔥 COUNTDOWN */}
          <div className={styles.countdownBox}>
            <p className={styles.countdownText}>
              ⏳ Limited Time Offer Ends Soon
            </p>
          </div>

          <p className={styles.ctaSub}>
            Click below to go to the official store
          </p>

          <p className={styles.ctaShipping}>FREE SHIPPING TODAY</p>

          <p className={styles.ctaPrice}>
            Today Only: <strong>$39 / bottle</strong>
          </p>

          <p className={styles.ctaOldPrice}>
            Regular Price: $79 / bottle
          </p>

          <a href="https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net" className={styles.ctaBtn}>
            GET YOUR PROSTAVIVE NOW →
          </a>

          {/* TRUST LINE */}
          <p className={styles.trustText}>
            ✔ 180-Day Guarantee • ✔ Secure Checkout • ✔ FDA Registered Facility
          </p>

        </div>
      </section>

      <div className={styles.stickyCta}>
        <a href="https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net" className={styles.stickyBtn}>
          BUY NOW – $39 ONLY
        </a>
      </div>
    </>
  );
}
