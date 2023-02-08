import Image from "next/image";
import React from "react";
import styles from "./Service.module.scss";

const Service = ({ data }) => {
  return (
    <div className={styles.service}>
      {/* <div className={styles.image}></div> */}
      <Image
        className={styles.image}
        src={data.image}
        width={700}
        height={500}
      />
      <div className={styles.service_description}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Service;
