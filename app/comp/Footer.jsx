import React from "react";
import styles from "./Footer.module.scss";
import services from "@/data/services";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/logo-dark.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            {/* LEFT */}
            <div className={styles.logo_container}>
              <Image className={styles.logo} fill={true} src={Logo} />
            </div>
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
                    <div className={styles.link_container}>
                      {s.service.map((s) => (
                        <Link
                          className={styles.link}
                          prefetch={false}
                          href={`services/${s.slug}`}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
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
