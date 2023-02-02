import React from "react";
import styles from "./ServiceCard.module.scss";

const ServiceCard = () => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.info}></div>
      </div>
      <h4>Spesialis Perizinan</h4>
    </div>
  );
};

export default ServiceCard;
