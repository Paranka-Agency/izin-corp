"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Service.module.scss";

const Service = ({ data, parentId }) => {
  return (
    <div className={styles.service}>
      <Link prefetch={false} href={`/services/${data.slug}`}>
        <div className={styles.image_container}>
          <Image className={styles.image} src={data.image} fill={true} />
        </div>
      </Link>
      <div className={styles.service_description}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Service;
