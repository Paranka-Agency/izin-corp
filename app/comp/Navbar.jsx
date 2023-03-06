"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ path }) => {
  // const path = usePathname();

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
      className={`navigation ${
        prevScroll.current < scrollTop ? "scroll" : ""
      } ${activeMobile ? "mobile_active" : ""} ${
        path == "/about"
          ? scrollTop > 5500
            ? ""
            : "dark"
          : path == "/services"
          ? ""
          : path == "/"
          ? ""
          : "dark"
      }`}
    >
      <button className="toggle_button" onClick={handleActiveMobile}>
        {activeMobile ? (
          <FontAwesomeIcon icon={faXmark} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon" />
        )}
      </button>
      <div className="container">
        <div className="logo"></div>
        <ul className="nav_list">
          <Link
            prefetch={false}
            className={`nav_item ${path == "/" ? "bold" : ""}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            prefetch={false}
            className={`nav_item ${path == "/about" ? "bold" : ""}`}
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            prefetch={false}
            className={`nav_item ${path == "/services" ? "bold" : ""}`}
            href={"/services"}
          >
            Services
          </Link>
          <Link prefetch={false} href={""}>
            <button className="nav_button">Contact Us</button>
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
