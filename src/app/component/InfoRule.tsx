import styles from "../css/InfoRule.module.css";

export default function DisclaimerSection() {
  return (
    <section className={styles.lastSec} aria-label="Medical Disclaimer and Legal Information">

      <div className={styles.container}>

        <h2 className={styles.title}>Important Information & Disclaimer</h2>

        <p className={styles.text}>
          The information provided on this website is for educational purposes only and is not intended to replace consultation with a qualified medical professional.
          Always inform your physician about any lifestyle changes you make and discuss them thoroughly.
          If you have any questions or concerns regarding a medical condition, please consult your doctor.
        </p>

        <p className={styles.text}>
          Statements on this website have not been evaluated by the Food and Drug Administration (FDA).
          The products featured are not intended to diagnose, treat, cure, or prevent any disease.
          If you are pregnant, nursing, taking medication, or have a medical condition, consult your healthcare provider before using any products.
        </p>

        <p className={styles.text}>
          All content on this website is based on the author’s opinion and is provided on an “as is” and “as available” basis.
          We recommend conducting your own research and verifying information from multiple sources.
          Always review any health-related information with a qualified healthcare professional before using any products mentioned.
        </p>

        <p className={styles.text}>
          ClickBank is the retailer of products on this site. <strong>CLICKBANK®</strong> is a registered trademark of Click Sales, Inc.,
          a Delaware corporation located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho 83709, USA, and is used by permission.
          ClickBank’s role as retailer does not constitute endorsement or approval of any claims.
        </p>

        <p className={styles.note}>
          <strong>*Note:</strong> *For international shipping (outside of the United States), shipping fees will apply.
        </p>

      </div>

    </section>
  );
}