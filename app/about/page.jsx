import React from "react";
import styles from "./about.module.scss";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          IZIN <span>CORP</span>
        </h1>
        <div className={styles.image}>1</div>
        <div className={styles.image}>2</div>
        <div className={styles.image}>3</div>
        <div className={styles.image}>4</div>
        <div className={styles.image}>5</div>
        <div className={styles.image}>6</div>
        <div className={styles.image}>7</div>
        <div className={styles.image}>8</div>
        <div className={styles.image}>9</div>
        <div className={styles.image}>10</div>
      </section>
      <section className={styles.about}>
        <div className={styles.text_container}>
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
          <p>
            Kami memiliki :
            <ol>
              <li>Integritas</li>
              <li>Loyal</li>
              <li>Inovasi</li>
              <li>Sikap Positif</li>
              <li>Perbaikan Berkelanjutan</li>
              <li>Komitmen</li>
            </ol>
          </p>
        </div>
        <div className={styles.certification}>
          <div className={styles.image}></div>
          <div className={styles.text}>
            <h1>Sertifikasi</h1>
            <ul>
              <li>Sertifikasi A</li>
              <li>Sertifikasi B</li>
              <li>Sertifikasi C</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
