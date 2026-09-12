import Image from "next/image";
import styles from "../css/Bonus.module.css";

const bonuses = [
  {
    title: "Bonus 1: Prostate Health Smoothies Guide",
    description:
      "Discover easy-to-make smoothie recipes created with nutrient-rich ingredients that may support prostate wellness, energy levels, and daily vitality. This guide is designed to help men build healthier habits naturally.",
    image: "/bonus1-1.webp",
    alt: "Prostate Health Smoothies Guide bonus ebook",
    retail: "$55",
  },
  {
    title: "Bonus 2: Healthy Sex Drive Plan",
    description:
      "Learn practical lifestyle tips, wellness strategies, and natural approaches that may help support stamina, confidence, and overall male performance for a healthier lifestyle.",
    image: "/bonus2-1.webp",
    alt: "Healthy Sex Drive Plan bonus guide",
    retail: "$54",
  },
];

export default function BonusPage() {
  return (
    <section
      className={styles.bonusSection}
      aria-labelledby="prostavive-bonuses"
    >
      <div className={styles.bonusContainer}>
        
        {/* TOP LINKS */}
        <div className={styles.topLinks}>
          <a href="#reviews-heading" className={styles.topLink}>
            View Reviews
          </a>

          <span className={styles.divider}>|</span>

          <a href="#faqs" className={styles.topLink}>
            View FAQ’s
          </a>
        </div>

        {/* HEADER */}
        <header className={styles.bonusHeader}>
          <p className={styles.bonusSubheading}>
            Every ProstaVive order today includes exclusive bonus guides
            designed to support men’s wellness, vitality, and daily health
            goals.
          </p>
        </header>

        {/* BONUS GRID */}
        <div className={styles.bonusGrid}>
          {bonuses.map((bonus, index) => (
            <article
              className={styles.bonusCard}
              key={index}
            >
              {/* IMAGE */}
              <div className={styles.bonusImageWrapper}>
                <Image
                  src={bonus.image}
                  alt={bonus.alt}
                  width={320}
                  height={420}
                  className={styles.bonusImage}
                  priority={index === 0}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.bonusContent}>
                <h3 className={styles.bonusTitle}>
                  🎁 {bonus.title}
                </h3>

                <p className={styles.bonusDescription}>
                  {bonus.description}
                </p>

                <p className={styles.bonusPrice}>
                  Retail Price: {bonus.retail} —
                  <span> Yours FREE Today</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}