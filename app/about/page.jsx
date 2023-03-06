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
      delay: 0.75,
      // opacity: 1,
    });

    gsap.to(".title", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 55%",
        scrub: true,
      },
      opacity: 0,
      yPercent: -300,
    });

    let images = gsap.utils.toArray(".image");

    gsap.to(images, {
      clipPath: "inset(0% 0 0 0)",
      delay: 1.5,
    });

    images.forEach((image) => {
      ScrollTrigger.create({
        trigger: image,
        scrub: 2,
        start: "top bottom",
        end: "bottom start",
        onUpdate: (self) => {
          gsap.to(image, {
            backgroundPosition: `50% ${self.progress * 40 + 30}%`,
          });
        },
      });
    });

    let aboutText = gsap.utils.toArray(".about_text");
    gsap.fromTo(
      aboutText,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: ".about_text",
          start: "top 75%",
        },
        opacity: 1,
        duration: 0.5,
        stagger: 0.25,
        y: 0,
      }
    );

    let offerList = gsap.utils.toArray(".offer_list");
    let offerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".offer",
        start: "30% 75%",
      },
    });
    offerTl
      .fromTo(
        ".offer_image",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        ".offer_title",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        offerList,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.1,
        }
      );

    let certificationList = gsap.utils.toArray(".certification_list");
    let certificationTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certification",
        start: "top 75%",
      },
    });
    certificationTl
      .fromTo(
        ".certification_title",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        certificationList,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          stagger: 0.1,
        },
        ">"
      );
  });

  return (
    <div className="about_main" id="smooth-content">
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
          <p className="about_text">
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan.
          </p>
          <p className="about_text">
            IZIN CORP memberikan solusi dalam mengurus segala perijinan usaha,
            pendirian badan usaha, perizinan berbasis resiko, hukum dan
            perpajakan baik badan usaha maupun perorangan, serta menyediakan
            penyewaan virtual office.
          </p>
          {/* <p>Kami memiliki :</p>
          <ol>
            <li>Integritas</li>
            <li>Loyal</li>
            <li>Inovasi</li>
            <li>Sikap Positif</li>
            <li>Perbaikan Berkelanjutan</li>
            <li>Komitmen</li>
          </ol> */}
        </div>
        <div className="offer">
          <div className="offer_image"></div>
          <div className="text">
            <h2 className="offer_title">Why you should choose us</h2>
            <ul>
              <li className="offer_list">Integritas</li>
              <li className="offer_list">Loyal</li>
              <li className="offer_list">Inovasi</li>
              <li className="offer_list">Sikap Positif</li>
              <li className="offer_list">Perbaikan Berkelanjutan</li>
              <li className="offer_list">Komitmen</li>
            </ul>
          </div>
        </div>
        <div className="certification">
          <h2 className="certification_title">Sertifikasi</h2>
          <ul className="certification_container">
            <li className="certification_list">Sertifikasi A</li>
            <li className="certification_list">Sertifikasi B</li>
            <li className="certification_list">Sertifikasi C</li>
            <li className="certification_list">Sertifikasi D</li>
            <li className="certification_list">Sertifikasi E</li>
            <li className="certification_list">Sertifikasi F</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
