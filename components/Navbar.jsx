import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={`${styles.nav}`}></nav>
      <p>Next.js</p>
      <ul className={`${styles.links}`}>
        <Link href="/">
          <li>Home 🏡</li>
        </Link>
        <Link href="/about">
          <li>About 🏡</li>
        </Link>
        <Link href="/contact">
          <li>Contact 🏡</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
