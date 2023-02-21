"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "./page.scss";
import ServiceCard from "./comp/ServiceCard";
import ReviewCard from "./comp/ReviewCard";
import services from "@/data/services";
import { useState, useEffect } from "react";
import Link from "next/link";
import useLocoScroll from "./hooks/useLocoScroll";
import Footer from "./comp/Footer";

export default function Home() {
  useLocoScroll(true, "#home-container", "page_is-reveal");

  return (
    <div className="main" id="home-container" data-scroll-container>
      <section className="hero" data-scroll-section>
        <h1>IZIN CORP</h1>
      </section>
      <section className="about" data-scroll-section>
        <div className="container">
          <h1 data-scroll>SEKILAS TENTANG KAMI</h1>
          <p>
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan
          </p>
          <Link prefetch={false} href={"/about"}>
            <button>Lihat Selengkapnya</button>
          </Link>
          <div className="image left"></div>
          <div className="image right"></div>
        </div>
      </section>
      <section className="service" data-scroll-section>
        <div className="container">
          <h2>We are here to give you special service.</h2>
          <div className="list">
            {services.map((service) => (
              <ServiceCard data={service} id={service.id} key={service.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="review" data-scroll-section>
        <div className="container">
          <h2>Apa pendapat orang lain tentang kami?</h2>
          <div className="card_container">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
      <Footer data-scroll-section />
    </div>
  );
}
