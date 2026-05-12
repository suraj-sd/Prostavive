import Image from "next/image";
import styles from "../css/Claim.module.css";

export default function InfoSection() {
  return (
    <section className={styles.guarantee} aria-labelledby="money-back-heading">
      {/* <div className={styles.topLinks}>
        <a href="#reviews" className={styles.topLink}>
          View Reviews
        </a>

        <span className={styles.divider}>|</span>

        <a href="#faqs" className={styles.topLink}>
          View FAQ’s
        </a>
      </div> */}
      <div className={styles.container}>
        {/* LEFT IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/prostavive-moneyback.webp"
            alt="ProstaVive 180 Day Money Back Guarantee Badge"
            width={320}
            height={320}
            priority
            className={styles.image}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <span className={styles.badge}>100% Risk Free Purchase</span>

          <h2 id="money-back-heading" className={styles.title}>
            180-Day Money Back Guarantee
          </h2>

          <p className={styles.text}>
            Every ProstaVive order is protected by our powerful{" "}
            <strong>180-day money-back guarantee.</strong> If you are not fully
            satisfied with your results for any reason, simply return your order
            within 180 days and receive a complete refund.
          </p>

          <p className={styles.text}>
            Experience better prostate support, improved comfort, deeper sleep,
            and natural energy with total confidence and absolutely no financial
            risk.
          </p>

          {/* <div className={styles.highlightBox}>
            <strong className={styles.highlight}>
              Try ProstaVive today with complete peace of mind.
            </strong>
          </div> */}

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✔</span>
              <p>No Hidden Charges</p>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✔</span>
              <p>180 Full Days To Try</p>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✔</span>
              <p>100% Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
