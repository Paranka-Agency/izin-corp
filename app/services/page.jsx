"use client";
import { useEffect } from "react";
import ServiceSection from "./comp/ServiceSection";
import "./services.scss";
import services from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    gsap.to(".services_hero_title", {
      clipPath: "inset(0% 0 0 0)",
      duration: 1,
    });
    gsap.to(".services_hero_line", {
      clipPath: "inset(0 0% 0 0)",
      duration: 1,
      delay: 1,
    });
  }, []);

  return (
    <div className="services_main">
      <section className="services_hero">
        <h1 className="services_hero_title">OUR SERVICES</h1>
        <div className="line services_hero_line"></div>
      </section>
      {services.map((service) => (
        <ServiceSection key={service.slug} data={service} id={service.id} />
      ))}
      <section className="private_office_container">
        <h1>OUR Private Office</h1>
        <div className="office">
          <div className="description">
            <div className="top">
              <h2>Kelapa Gading</h2>
              <p>Private Office with the following :</p>
            </div>
            <div className="bottom">
              <h3>
                Price : <span>Rp. 8.000.000,00</span>
              </h3>
              <button>Contact Us</button>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
