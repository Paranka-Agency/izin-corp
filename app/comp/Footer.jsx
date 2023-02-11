import React from "react";
import styles from "./Footer.module.scss";
import services from "@/data/services";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            {/* LEFT */}
            <h1>LOGO</h1>
            <h5>
              Jl. Karya Baru, Komplek. Taman Spain, Nomor. 1 <br />
              Pontianak Selatan, Kota Pontianak,
              <br /> Kalimantan Barat. 78121
            </h5>
            <h5>izincorporation@gmail.com</h5>
            <h5>+62 813 34937494</h5>
            <button>Contact Us</button>
          </div>
          <div className={styles.right}>
            {/* RIGHT */}
            <h2>Layanan Kami</h2>
            <div className={styles.service_container}>
              {services.map((s) => {
                return (
                  <div className={styles.item}>
                    <h4>{s.title}</h4>
                    <ul>
                      {s.service.map((s) => (
                        <li>{s.title}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>Copyright @ 2023 Paranka Agency</div>
      </div>
    </footer>
  );
};

export default Footer;
