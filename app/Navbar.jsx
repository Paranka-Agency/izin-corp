"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className={`${styles.navigation} `}>
      <div className={`${styles.container} ${styles.dark}`}>
        <h1>LOGO</h1>
        <div className={styles.nav_list}>
          <Link
            className={`${styles.nav_item} ${path == "/" ? styles.bold : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.nav_item} ${
              path == "/about" ? styles.bold : ""
            }`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            className={`${styles.nav_item} ${
              path == "/service" ? styles.bold : ""
            }`}
            href="/service"
          >
            Services
          </Link>
          <Link
            className={`${styles.nav_item} ${
              path == ".article" ? styles.bold : ""
            }`}
            href="article"
          >
            Article
          </Link>

          <Link href="">
            <button className={styles.nav_button}>Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
