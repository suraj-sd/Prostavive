"use client";

import styles from "../css/Header.module.css";

const navItems = [
  {
    label: "About",
    href: "hero2",
  },
  {
    label: "Benefits",
    href: "benefits",
  },
  {
    label: "Ingredients",
    href: "ingredients",
  },
  {
    label: "FAQs",
    href: "faqs",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <a
          href="#top"
          className={styles.logo}
          aria-label="Go to ProstaVive Home Page"
        >
          <span>Prosta</span>Vive™
        </a>

        {/* HIDDEN CHECKBOX */}
        <input
          type="checkbox"
          id="menu-toggle"
          className={styles.menuToggle}
        />

        {/* HAMBURGER */}
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
        <nav
          className={styles.navigation}
          aria-label="Primary Navigation"
        >
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  className={styles.navLink}
                  onClick={() => {
                    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                    if (checkbox) checkbox.checked = false;
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* MOBILE BUTTON */}
            <li className={styles.mobileBtnWrap}>
              <a href="#ordering" className={styles.orderBtn}
                onClick={() => {
                  const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                }}
              >
                ORDER NOW
              </a>
            </li>
          </ul>
        </nav>

        {/* DESKTOP BUTTON */}
        <div className={styles.desktopBtn}>
          <a href="#ordering" className={styles.orderBtn}>
            ORDER NOW
          </a>
        </div>
      </div>
    </header>
  );
}