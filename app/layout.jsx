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
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[path]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Navbar path={path} data-scroll-section />
            {children}
            <Footer data-scroll-section />
          </main>
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
