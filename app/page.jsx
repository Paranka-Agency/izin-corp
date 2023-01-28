import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";

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
            Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
            ullamcorper diam. Neque dictum fermentum turpis in ornare
            suspendisse sed elit. Fusce quam sit duis purus curabitur donec
            porttitor tortor pharetra.
          </p>
          {/* <Image/>
          <Image/> */}
        </div>
      </section>
      <section className={styles.service}>
        <div className={styles.container}>
          <h2>We are here to give you special service.</h2>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.info}></div>
              </div>
              <h4>Spesialis Perizinan</h4>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.container}>
          <h2>Apa pendapat orang lain tentang kami?</h2>
          <div className={styles.card_container}>
            <div className={styles.card}>
              <div className={styles.image}></div>
              <div className={styles.info}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ornare
                  pellentesque nulla ultrices. Donec lectus in sodales lorem
                  egestas non diam vel.
                </p>
                <h4>Nama Orang</h4>
                <h5>Asal Perusahaan</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
