import Image from "next/image";
import styles from "../css/Hero2.module.css";

export default function Detail() {
  return (
    <section
      className={styles.detailSection}
      aria-labelledby="prostavive-info-heading"
    >
      <header className={styles.header1}>
        <h2 id="prostavive-info-heading" className={styles.heading1}>
          100% Satisfaction • 180-Day Money Back Guarantee
        </h2>
      </header>
      <header id="hero2" className={styles.header}>
        <h2 id="what-is-prostavive" className={styles.heading}>
          What is ProstaVive™?
        </h2>
      </header>

      {/* CONTAINER */}
      <div className={styles.container}>
        {/* CONTENT */}
        <div className={styles.wrapper}>
          {/* TEXT CONTENT */}
          <article className={styles.textContent}>
            <p>
              ProstaVive is a daily powder supplement designed to support
              prostate health through a targeted blend of natural ingredients
              that focus on blood flow, cellular activity, and overall male
              vitality.
            </p>

            <p>
              Unlike many prostate formulas that only address symptoms on the
              surface, ProstaVive works by helping maintain healthy circulation
              to the prostate area, which researchers have linked to improved
              cellular metabolism around the gland.
            </p>

            <p>
              At its core, ProstaVive combines several well-studied botanicals
              and minerals known for supporting urinary flow, male performance,
              energy levels, and restful sleep.
            </p>

            <p>
              The formula is built around the idea that when blood flow and
              nitric oxide levels are optimized, the prostate receives more
              oxygen and nutrients—helping support daily wellness and long-term
              vitality.
            </p>
          </article>

          {/* IMAGE */}
          <figure className={styles.imageWrapper}>
            <Image
              src="/prostavive-officile-site.webp"
              alt="ProstaVive supplement container for prostate health support"
              width={550}
              height={550}
              className={styles.image}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
