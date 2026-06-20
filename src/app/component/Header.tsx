import Link from "next/link";
import styles from "../css/Header.module.css";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Benefits",
    href: "/benefits",
  },
  {
    label: "Ingredients",
    href: "/ingredients",
  },
  {
    label: "FAQs",
    href: "/faq",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <span>Prosta</span>Vive™
        </Link>

        {/* MOBILE MENU (CSS ONLY TOGGLE) */}
        <input
          type="checkbox"
          id="menu-toggle"
          className={styles.menuToggle}
        />

        <label
          htmlFor="menu-toggle"
          className={styles.menuButton}
          aria-label="Open Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* NAVIGATION */}
        <nav className={styles.navigation} aria-label="Primary Navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* MOBILE CTA */}
            <li className={styles.mobileBtnWrap}>
              <Link href="/#order" className={styles.orderBtn}>
                ORDER NOW
              </Link>
            </li>
          </ul>
        </nav>

        {/* DESKTOP CTA */}
        <div className={styles.desktopBtn}>
          <Link href="/#order" className={styles.orderBtn}>
            ORDER NOW
          </Link>
        </div>

      </div>
    </header>
  );
}