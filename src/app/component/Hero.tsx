import Image from "next/image";
import styles from "../css/Hero.module.css";

export default function Hero() {
  return (
      <section
        className={styles.heroSection}
        aria-label="ProstaVive Hero Section"
      >
        <div className={styles.container}>
          {/* LEFT IMAGE */}
          <figure className={styles.imageWrapper}>
            <Image
              src="/prostavive-1-bottle.webp"
              alt="ProstaVive Supplement Bottle for Prostate Health Support"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.productImg}
            />
          </figure>

          {/* RIGHT CONTENT */}
          <article className={styles.contentWrapper}>
            <header className={styles.header}>
              <h1 className={styles.heading}>
                ProstaVive™ – Support Prostate Health, Strong Urine Flow & Male
                Vitality
              </h1>
            </header>

            <div className={styles.description}>
              <p>
                ProstaVive is a powerful daily supplement designed to support
                prostate health, strong urine flow, and overall male vitality.
                It works by promoting healthy blood circulation and nitric oxide
                levels around the prostate.
              </p>

              <p>
                Unlike ordinary prostate formulas, ProstaVive combines natural
                ingredients including Boron, Tongkat Ali, Ashwagandha, and other
                nutrients that work together to support urinary flow, deeper
                sleep, increased energy, and revived confidence.
              </p>

              <p>
                Taken as one simple scoop each day, ProstaVive helps men feel
                more in control of their prostate health while supporting a more
                active lifestyle.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <nav
              className={styles.buttonGroup}
              aria-label="Call To Action Buttons"
            >
              <a
                href="https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net"
                className={styles.primaryBtn}
                aria-label="Get ProstaVive at 39 dollars only"
              >
                GET PROSTAVIVE AT $39 ONLY
              </a>

              <a
                href="https://7e0c0p1olihhz97o1h54758p81.hop.clickbank.net"
                className={styles.secondaryBtn}
                aria-label="Scroll to the secure order section"
              >
                VIEW OFFER →
              </a>
            </nav>
          </article>
        </div>
      </section>
  );
}
