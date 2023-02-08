import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ data, id }) => {
  return (
    <Link href={`/services#${id}`} className={styles.item}>
      <div
        className={`${styles.card} ${
          id == "SR01"
            ? styles.image1
            : id == "SR02"
            ? styles.image2
            : id == "SR03"
            ? styles.image3
            : ""
        }`}
      >
        <div className={styles.info}>
          <ul>
            {data.service.map((service) => {
              return <li>{service.title}</li>;
            })}
          </ul>
        </div>
      </div>
      <h4>{data.title}</h4>
    </Link>
  );
};

export default ServiceCard;
