import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import ServiceCard from "./comp/ServiceCard";
import ReviewCard from "./comp/ReviewCard";

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
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
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
