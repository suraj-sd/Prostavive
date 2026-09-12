import styles from "../css/Faq.module.css";

const faqs = [
  {
    question: "What is ProstaVive?",
    answer:
      "ProstaVive is a natural dietary supplement in powder form designed to support prostate health...",
  },
  {
    question: "When can I expect to see results with ProstaVive?",
    answer:
      "Results vary, but many users notice improvements within a few weeks...",
  },
  {
    question: "Are there any side effects of ProstaVive?",
    answer:
      "ProstaVive is made from natural ingredients and is generally well-tolerated...",
  },
  {
    question: "Is ProstaVive safe for me to take?",
    answer:
      "Yes, ProstaVive is completely safe as it contains 100% natural ingredients...",
  },
  {
    question: "How will ProstaVive be shipped to me and how quickly?",
    answer:
      "Shipping takes 5–7 business days in the US/Canada and 8–15 days internationally.",
  },
];

export default function FaqSection() {
  return (
    <section className={styles.faqSection} id="faqs" aria-labelledby="faq-heading">
      <div className={styles.faqTitle}>
        <h2 id="faq-heading">ProstaVive FAQ</h2>
      </div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <details key={index} className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <span className={styles.faqIcon}>+</span>
            </summary>

            <p className={styles.faqAnswer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
