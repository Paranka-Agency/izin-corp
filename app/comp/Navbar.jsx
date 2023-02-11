"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, use } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const path = usePathname();

  const [scrollTop, setScrollTop] = useState(0);
  const prevScroll = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    prevScroll.current = scrollTop;
  }, [scrollTop]);

  return (
    <nav
      className={`${styles.navigation} ${
        prevScroll.current < scrollTop ? styles.scroll : ""
      }`}
    >
      <div
        className={`${styles.container} ${
          path == "/about"
            ? scrollTop > 5500
              ? ""
              : styles.dark
            : path == "/services"
            ? ""
            : path == "/"
            ? ""
            : styles.dark
        }`}
      >
        <button className={styles.toggle_button}>O</button>
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
              path == "/services" ? styles.bold : ""
            }`}
            href="/services"
          >
            Services
          </Link>
          {/* <Link
            className={`${styles.nav_item} ${
              path == ".article" ? styles.bold : ""
            }`}
            href="article"
          >
            Article
          </Link> */}

          <Link href="">
            <button className={styles.nav_button}>Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
