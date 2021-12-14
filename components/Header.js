import Link from "next/link";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <ul className={styles.nav_links}>
          <li>
            <Link href="/" className={styles.nav_link}>
              All Posts
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.nav_link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
