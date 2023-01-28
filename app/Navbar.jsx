import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <h1>LOGO</h1>
        <div className={styles.nav_list}>
          <Link className={styles.nav_item} href="">
            Home
          </Link>
          <Link className={styles.nav_item} href="">
            About Us
          </Link>
          <Link className={styles.nav_item} href="">
            Services
          </Link>
          <Link className={styles.nav_item} href="">
            Article
          </Link>

          <button className={styles.nav_button}>
            <Link className={styles.nav_item} href="">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
