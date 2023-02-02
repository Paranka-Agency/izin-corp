import React from "react";
import styles from "./ReviewCard.module.scss";

const ReviewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Volutpat ornare pellentesque
          nulla ultrices. Donec lectus in sodales lorem egestas non diam vel.
        </p>
        <h4>Nama Orang</h4>
        <h5>Asal Perusahaan</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
