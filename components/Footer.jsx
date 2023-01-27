import React from "react";
import styles from "./Footer.module.scss";

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
              <div>
                <h4>Spesialis Perizinan</h4>
                <ul>
                  <li>
                    HGU - HGB - SHM / Hak
                    <br />
                    Pakai / Hak pengelolaan
                  </li>
                  <li>Perkebunan</li>
                  <li>Pertambangan</li>
                  <li>Kehutanan</li>
                  <li>Kepelabuhan</li>
                  <li>
                    Perdagangan Ekspor dan <br /> impor
                  </li>
                  <li>Perumahan</li>
                  <li>HAKI, Merk dagang</li>
                </ul>
                <h4>Virtual Office</h4>
              </div>
              <div>
                <h4>Spesialis Bisnis</h4>
                <ul>
                  <li>Konsultasi Bisnis</li>
                  <li>
                    Pendirian dan perubahan
                    <br />
                    badan usaha
                  </li>
                  <li>Perpajakan</li>
                  <li>Badan Usaha dan perorangan</li>
                </ul>
                <h4>Spesialis Legal</h4>
                <ul>
                  <li>Konsultasi Hukum</li>
                  <li>Legal corporate</li>
                  <li>Kontrak & Perjanjian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>Copyright @ 2023 Paranka Agency</div>
      </div>
    </footer>
  );
};

export default Footer;
