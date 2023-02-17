"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import ServiceCard from "./comp/ServiceCard";
import ReviewCard from "./comp/ReviewCard";
import services from "@/data/services";
import { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero} data-scroll-section>
        <h1>IZIN CORP</h1>
      </section>
      <section className={styles.about} data-scroll-section>
        <div className={styles.container}>
          <h1>SEKILAS TENTANG KAMI</h1>
          <p>
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan
          </p>
          <Link prefetch={false} href={"/about"}>
            <button>Lihat Selengkapnya</button>
          </Link>
          <div className={`${styles.image} ${styles.left}`}></div>
          <div className={`${styles.image} ${styles.right}`}></div>
        </div>
      </section>
      <section className={styles.service} data-scroll-section>
        <div className={styles.container}>
          <h2>We are here to give you special service.</h2>
          <div className={styles.list}>
            {services.map((service) => (
              <ServiceCard data={service} id={service.id} key={service.id} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.review} data-scroll-section>
        <div className={styles.container}>
          <h2>Apa pendapat orang lain tentang kami?</h2>
          <div className={styles.card_container}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
    </div>
  );
}
