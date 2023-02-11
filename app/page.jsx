"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import ServiceCard from "./comp/ServiceCard";
import ReviewCard from "./comp/ReviewCard";
import services from "@/data/services";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>IZIN CORP</h1>
      </section>
      <section className={styles.about}>
        <div className={styles.container}>
          <h1>SEKILAS TENTANG KAMI</h1>
          <p>
            IZIN CORP merupakan Konsultan berbadan hukum yang berfokus menangani
            perizinan berusaha, manajemen bisnis, dan perpajakan badan usaha
            atau perorangan
          </p>
          <button>Lihat Selengkapnya</button>
          <div className={`${styles.image} ${styles.left}`}></div>
          <div className={`${styles.image} ${styles.right}`}></div>
          {/* <Image/>
          <Image/> */}
        </div>
      </section>
      <section className={styles.service}>
        <div className={styles.container}>
          <h2>We are here to give you special service.</h2>
          <div className={styles.list}>
            {services.map((service) => (
              <ServiceCard data={service} id={service.id} key={service.id} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.container}>
          <h2>Apa pendapat orang lain tentang kami?</h2>
          <div className={styles.card_container}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
    </main>
  );
}
