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
            Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
            ullamcorper diam. Neque dictum fermentum turpis in ornare
            suspendisse sed elit. Fusce quam sit duis purus curabitur donec
            porttitor tortor pharetra.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
            ullamcorper diam. Neque dictum fermentum turpis in ornare
            suspendisse sed elit. Fusce quam sit duis purus curabitur donec
            porttitor tortor pharetra.
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
