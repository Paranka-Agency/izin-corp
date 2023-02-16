"use client";
import React from "react";

import styles from "./service.module.scss";

import services from "@/data/services";
import Image from "next/image";

const page = ({ params }) => {
  const data = services.find((s) => {
    return s.service.find((v) => {
      return v.slug == params.slug;
    });
  });

  const service = data.service.find((s) => s.slug == params.slug);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>{service.title}</h1>
        <p>{service.desc}</p>
        <div className={styles.image_container}>
          <Image
            src={service.image}
            className={styles.image}
            fill={true}
            alt={service.slug}
            priority
          />
        </div>
      </section>
      <section className={styles.description}>
        <article>
          <h2>Syarat Perizinan</h2>
          <div className={styles.box}></div>
        </article>
        <article className={styles.reverse}>
          <h2>Hal-hal lain yang mungkin dibutuhkan</h2>
          <div className={styles.box}></div>
        </article>
        <article>
          <h2>Yang anda dapatkan</h2>
          <div className={styles.box}></div>
        </article>
      </section>
      <section className={styles.price}>
        <div className={styles.image}></div>
        <div className={styles.price_detail}>
          <p>Start from:</p>
          <h3>Rp. {service.price}</h3>
          <button>Contact Us</button>
        </div>
      </section>
    </main>
  );
};

export default page;
