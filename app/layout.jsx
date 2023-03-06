"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import "./globals.scss";

export default function RootLayout({ children }) {
  const containerRef = useRef(null);
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar path={path} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
