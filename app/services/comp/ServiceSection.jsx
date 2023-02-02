import React from "react";
import Service from "./Service";

import styles from "./ServiceSection.module.scss";

const ServiceSection = () => {
  return (
    <section className={styles.service_container}>
      <div className={styles.description}>
        <h2>Spesialis perizinan</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit
          ullamcorper diam. Neque dictum fermentum turpis in ornare suspendisse
          sed elit. Fusce quam sit duis purus curabitur donec porttitor tortor
          pharetra.
        </p>
      </div>
      <div className={styles.list}>
        <Service />
        <Service />
        <Service />
      </div>
      <div className={styles.line}></div>
    </section>
  );
};

export default ServiceSection;
