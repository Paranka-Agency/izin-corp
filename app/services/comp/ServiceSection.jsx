import React from "react";
import Service from "./Service";

import styles from "./ServiceSection.module.scss";

const ServiceSection = ({ data, id }) => {
  console.log(data);
  return (
    <section className={styles.service_container} id={id}>
      <div className={styles.description}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
      <div className={styles.list}>
        {data.service.map((service) => (
          <Service data={service} key={service.id} parentId={id} />
        ))}
      </div>
      <div className={styles.line}></div>
    </section>
  );
};

export default ServiceSection;
