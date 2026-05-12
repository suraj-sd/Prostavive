import styles from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <p className={styles.footerText}>
          © 2026 ProstaVive. All rights reserved.
        </p>

        <div className={styles.footerLinks}>
          
          <a
            href="https://prostovive.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>

          <a
            href="https://prostovive.com/disclaimer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>

          <a
            href="https://prostovive.com/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>

        </div>

      </div>
    </footer>
  );
}