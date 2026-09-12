import Image from "next/image";
import styles from "../css/ChooseProstavive.module.css";

const features = [
  {
    title: "Made in USA",
    desc: "ProstaVive is manufactured in the United States in carefully controlled facilities using globally sourced ingredients that meet strict quality and purity standards.",
    img: "/synaptigen-made-in-usa.webp",
    alt: "ProstaVive Made in USA quality assurance badge",
  },
  {
    title: "FDA Registered Facility",
    desc: "Produced in an FDA-registered facility that follows current Good Manufacturing Practices (cGMP) to support product safety, consistency, and manufacturing quality.",
    img: "/synaptigen-fda.webp",
    alt: "FDA registered facility certification for ProstaVive supplement",
  },
  {
    title: "GMP Certified",
    desc: "Manufactured under GMP-certified processes to help ensure purity, potency, cleanliness, and high-quality supplement production standards.",
    img: "/gmp.webp",
    alt: "GMP certified supplement manufacturing quality badge",
  },
  {
    title: "100% Natural Ingredients",
    desc: "Formulated with natural and non-GMO ingredients without harmful additives, supporting a cleaner and more reliable daily wellness routine.",
    img: "/natural.webp",
    alt: "100 percent natural non GMO ingredients quality badge",
  },
];

export default function WhyChoose() {
  return (
    <section
      className={styles.whySection}
      aria-labelledby="why-choose-prostavive"
    >
      {/* FULL WIDTH HEADER */}
      <header className={styles.header}>
        <h2 id="why-choose-prostavive" className={styles.heading}>
          Why Choose ProstaVive™?
        </h2>

        <p className={styles.subheading}>
          Discover why thousands of men trust ProstaVive to support prostate
          health, urinary comfort, and daily vitality.
        </p>
      </header>

      {/* CONTAINER */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((item, index) => (
            <article className={styles.card} key={index}>
              <figure className={styles.imageWrapper}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </figure>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                <p className={styles.cardText}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
