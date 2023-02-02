import React from "react";
import styles from "./services.module.scss";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>OUR SERVICES</h1>
      </section>
      <section className={styles.service_container}>
        <div className={styles.description}>
          <h2>Spesialis perizinan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
            ullamcorper diam. Neque dictum fermentum turpis in ornare
            suspendisse sed elit. Fusce quam sit duis purus curabitur donec
            porttitor tortor pharetra.
          </p>
        </div>
        <div className={styles.list}>
          <div className={styles.service}>
            <div className={styles.image}></div>
            <div className={styles.service_description}>
              <h2>Perkebunan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec convallis quis
                aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet
                viverra sollicitudin tortor. In aenean morbi id turpis mauris ac
                augue eleifend scelerisque. Nibh est id eget quis augue egestas
                justo sem volutpat. Dui purus lectus eu pretium amet nam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.private_office_container}>
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
    </main>
  );
};

export default page;
