"use client";
import React, { useEffect, useRef } from "react";
import "./about.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../comp/Footer";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    gsap.to(".title", {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.75,
      opacity: 1,
    });

    gsap.to(".title", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 55%",
        scrub: true,
      },
      opacity: 0,
    });

    let images = gsap.utils.toArray(".image");

    gsap.to(images, {
      clipPath: "inset(0% 0 0 0)",
      delay: 0.75,
    });

    images.forEach((image) => {
      ScrollTrigger.create({
        trigger: image,
        scrub: 1,
        start: "top bottom",
        end: "bottom start",
        // markers: true,
        onUpdate: (self) => {
          gsap.to(image, {
            backgroundPosition: `50% ${self.progress * 25}%`,
          });
        },
      });
    });
  });

  return (
    <div className="about_main">
      <section className="hero">
        <h1 className="title">
          IZIN <span>CORP</span>
        </h1>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
      </section>
      <section className="about">
        <div className="text_container">
          <p>
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan.
          </p>
          <p>
            IZIN CORP memberikan solusi dalam mengurus segala perijinan usaha,
            pendirian badan usaha, perizinan berbasis resiku, hukum dan
            perpajakan baik badan usaha maupun perorangan, serta menyediakan
            penyewaan virtual office.
          </p>
          <p>Kami memiliki :</p>
          <ol>
            <li>Integritas</li>
            <li>Loyal</li>
            <li>Inovasi</li>
            <li>Sikap Positif</li>
            <li>Perbaikan Berkelanjutan</li>
            <li>Komitmen</li>
          </ol>
        </div>
        <div className="certification">
          <div className="img"></div>
          <div className="text">
            <h1>Sertifikasi</h1>
            <ul>
              <li>Sertifikasi A</li>
              <li>Sertifikasi B</li>
              <li>Sertifikasi C</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
