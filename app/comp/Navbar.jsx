"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const path = usePathname();

  const [scrollTop, setScrollTop] = useState(0);
  const prevScroll = useRef();
  const router = useRouter();

  const [activeMobile, setActiveMobile] = useState(false);

  const handleActiveMobile = () => {
    setActiveMobile(!activeMobile);
  };

  useEffect(() => {
    setActiveMobile(false);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
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
      } ${activeMobile ? styles.mobile_active : ""} ${
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
      <button className={styles.toggle_button} onClick={handleActiveMobile}>
        {activeMobile ? (
          <FontAwesomeIcon icon={faXmark} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        )}
      </button>
      <div className={`${styles.container}  `}>
        <div className={styles.logo}></div>
        <ul className={styles.nav_list}>
          <Link
            prefetch={false}
            className={`${styles.nav_item} ${path == "/" ? styles.bold : ""}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            prefetch={false}
            className={`${styles.nav_item} ${
              path == "/about" ? styles.bold : ""
            }`}
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            prefetch={false}
            className={`${styles.nav_item} ${
              path == "/services" ? styles.bold : ""
            }`}
            href={"/services"}
          >
            Services
          </Link>
          <Link prefetch={false} href={""}>
            <button className={styles.nav_button}>Contact Us</button>
          </Link>
          {/* <Link prefetch={false} 
            className={`${styles.nav_item} ${
              path == ".article" ? styles.bold : ""
            }`}
            onClick={()=>handleNavigate()}cle"
          >
            Article
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
