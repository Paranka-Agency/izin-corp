import React from "react";
import styles from "./Service.module.scss";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.image}></div>
      <div className={styles.service_description}>
        <h2>Perkebunan</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed.
          Lacus lorem senectus cras aenean sit dui. Amet amet viverra
          sollicitudin tortor. In aenean morbi id turpis mauris ac augue
          eleifend scelerisque. Nibh est id eget quis augue egestas justo sem
          volutpat. Dui purus lectus eu pretium amet nam.
        </p>
      </div>
    </div>
  );
};

export default Service;
