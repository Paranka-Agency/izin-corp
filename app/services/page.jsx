import React from "react";
import ServiceSection from "./comp/ServiceSection";
import styles from "./services.module.scss";
import services from "@/data/services";

const page = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero} data-scroll-section>
        <h1>OUR SERVICES</h1>
      </section>
      {services.map((service) => (
        <ServiceSection data={service} id={service.id} key={service.id} />
      ))}
      <section className={styles.private_office_container} data-scroll-section>
        <h1>OUR Private Office</h1>
        <div className={styles.office}>
          <div className={styles.description}>
            <div className={styles.top}>
              <h2>Kelapa Gading</h2>
              <p>Private Office with the following :</p>
            </div>
            <div className={styles.bottom}>
              <h3>
                Price : <span>Rp. 8.000.000,00</span>
              </h3>
              <button>Contact Us</button>
            </div>
          </div>
          <div className={styles.image}></div>
        </div>
      </section>
    </div>
  );
};

export default page;
