"use client";
import Image from "next/image";
import "./home.scss";
import ServiceCard from "./comp/ServiceCard";
import ReviewCard from "./comp/ReviewCard";
import services from "@/data/services";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.to(".hero_title", {
      clipPath: "inset(0% 0 0 0)",
      duration: 1,
    });

    let aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "20% 75%",
      },
    });
    aboutTl
      .fromTo(
        ".about_container",
        {
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 0.5,
        }
      )
      .fromTo(
        ".right",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        ">"
      )
      .fromTo(
        ".left",
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        ">"
      )
      .fromTo(
        [".about_title", ".about_text", ".about_button"],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
        },
        ">-0.25"
      );

    let serviceCard = gsap.utils.toArray(".service_card");
    let serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        start: "40% 75%",
      },
    });
    serviceTl
      .fromTo(
        ".service_text",
        {
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 1,
        }
      )
      .fromTo(
        serviceCard,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.25,
        },
        ">-0.5s"
      );

    let reviewCard = gsap.utils.toArray(".review_card");
    let reviewTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".review",
        start: "20% 75%",
      },
    });
    reviewTl
      .fromTo(
        [".review_container", ".review_text"],
        {
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(0% -20% 0% 0%)",
          duration: 0.75,
          stagger: 0.75,
        }
      )
      .fromTo(
        reviewCard,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.55,
        },
        ">"
      );
  }, []);

  return (
    <div className="home_main" id="home-container">
      <section className="hero">
        <h1 className="hero_title">IZIN CORP</h1>
      </section>
      <section className="about">
        <div className="about_container">
          <h2 className="about_title">SEKILAS TENTANG KAMI</h2>
          <p className="about_text">
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan
          </p>
          <Link prefetch={false} href={"/about"}>
            <button className="about_button">Lihat Selengkapnya</button>
          </Link>
          <div className="image left"></div>
          <div className="image right"></div>
        </div>
      </section>
      <section className="service">
        <div className="service_container">
          <h2 className="service_text">
            We are here to give you special service.
          </h2>
          <div className="service_list">
            {services.map((service) => (
              <ServiceCard data={service} id={service.id} key={service.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="review">
        <div className="review_container">
          <h2 className="review_text">Apa pendapat orang lain tentang kami?</h2>
          <div className="review_card_container">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
    </div>
  );
}
