import Image from "next/image";
import styles from "../css/Review.module.css";

const reviews = [
  {
    name: "James R.",
    location: "Florida, USA",
    image: "/user1.webp",
    text: "I've struggled with frequent nighttime trips for years. After a few weeks, my sleep improved and I feel energized again.",
  },
  {
    name: "Michael S.",
    location: "Los Angeles, USA",
    image: "/user7.webp",
    text: "ProstaVive has been a game-changer. My flow improved and daily discomfort is gone.",
  },
  {
    name: "Benjamin",
    location: "Chicago, USA",
    image: "/review-11zon.webp",
    text: "I was skeptical at first, but within a month I noticed real improvements. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section
      className={styles.reviewSection}
      aria-labelledby="reviews-heading"
      id="reviews"
    >
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Product",

            name: "ProstaVive",

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "5795",
            },

            review: reviews.map((review) => ({
              "@type": "Review",

              author: {
                "@type": "Person",
                name: review.name,
              },

              reviewBody: review.text,

              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            })),
          }),
        }}
      />

      {/* HEADER */}
      <header className={styles.header}>
        <h2
          id="reviews-heading"
          className={styles.heading}
        >
          ProstaVive™ Reviews
        </h2>

        <p className={styles.rating}>
          ⭐⭐⭐⭐⭐ 5.0 / 5795 Verified Reviews
        </p>
      </header>

      {/* REVIEWS */}
      <div className={styles.container}>
        <div className={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <article
              key={index}
              className={styles.reviewCard}
            >
              {/* USER IMAGE */}
              <figure className={styles.imageWrapper}>
                <Image
                  src={review.image}
                  alt={`${review.name} ProstaVive review`}
                  width={90}
                  height={90}
                  className={styles.avatar}
                />
              </figure>

              {/* REVIEW CONTENT */}
              <div className={styles.content}>
                <p className={styles.verified}>
                  Verified Purchase
                  <span className={styles.check}>✔</span>
                </p>

                <blockquote className={styles.reviewText}>
                  “{review.text}”
                </blockquote>

                <p className={styles.author}>
                  — {review.name}, {review.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}