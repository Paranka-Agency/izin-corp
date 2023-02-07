import React from "react";

import styles from "./service.module.scss";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Pendirian Badan Usaha</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
          ullamcorper diam. Neque dictum fermentum turpis in{" "}
        </p>
        <div className={styles.image}></div>
      </section>
      <section className={styles.description}>
        <article>
          <h2>Syarat Perizinan</h2>
          <div className={styles.box}></div>
        </article>
        <article>
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
          <h3>Rp. 300.000,00</h3>
          <button>Contact Us</button>
        </div>
      </section>
    </main>
  );
};

export default page;
