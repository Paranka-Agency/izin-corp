import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Service.module.scss";

const Service = ({ data, parentId }) => {
  return (
    <div className={styles.service}>
      <Link href={`/services/${data.slug}`}>
        <Image
          className={styles.image}
          src={data.image}
          width={700}
          height={500}
        />
      </Link>
      <div className={styles.service_description}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Service;
