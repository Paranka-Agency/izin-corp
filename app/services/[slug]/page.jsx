"use client";
import React, { useEffect, useState } from "react";

import "./service.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import services from "@/data/services";
import Image from "next/image";

const page = ({ params }) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const data = services.find((s) => {
      return s.service.find((v) => {
        return v.slug == params.slug;
      });
    });
    setService(data.service.find((s) => s.slug == params.slug));
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [".service_title", ".service_text"],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.25,
      }
    );
    gsap.to(".service_image_container", {
      scrollTrigger: {
        trigger: ".service_image_container",
        start: "top center",
      },
      clipPath: "inset(0% 0 0 0)",
    });

    let articles = gsap.utils.toArray("article");
    let left = gsap.utils.toArray(".left");
    let right = gsap.utils.toArray(".right");

    let descTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service_description",
        start: "top center",
      },
    });
    descTl
      .fromTo(
        articles,
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.75,
          stagger: 0.25,
        }
      )
      .fromTo(
        left,
        {
          x: -50,
          opacity: 0,
        },
        { x: 0, opacity: 1, stagger: 0.5, duration: 0.25 }
      )
      .fromTo(
        right,
        {
          x: 50,
          opacity: 0,
        },
        { x: 0, opacity: 1, stagger: 0.5, duration: 0.25 },
        ">-1"
      );

    gsap.fromTo(
      [".price_image", ".price_detail"],
      {
        clipPath: "inset(100% 0 0 0)",
      },
      {
        scrollTrigger: {
          trigger: ".price_container",
          start: "top 75%",
        },
        clipPath: "inset(0% 0 0 0)",
        duration: 0.75,
        stagger: 0.5,
      }
    );

    let priceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".price_container",
        start: "center 70%",
      },
    });
    priceTl
      .fromTo(
        ".price_text",
        {
          y: 50,
        },
        {
          y: 0,
        }
      )
      .fromTo(
        ".price_button",
        {
          y: -50,
        },
        {
          y: 0,
        },
        "<"
      )
      .fromTo(
        ".price",
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",
        }
      );
  }, []);

  return (
    <div className="service_main">
      <section className="service_hero">
        <h1 className="service_title">{service.title}</h1>
        <p className="service_text">{service.desc}</p>
        <div className="service_image_container">
          <Image
            src={service.image}
            className="service_image"
            fill={true}
            alt={service.slug}
            priority
          />
        </div>
      </section>
      <section className="service_description">
        <article>
          <h2 className="left">Syarat Perizinan</h2>
          <div className="box right"></div>
        </article>
        <article className="reverse">
          <h2 className="right">Hal-hal lain yang mungkin dibutuhkan</h2>
          <div className="box left"></div>
        </article>
        <article>
          <h2 className="left">Yang anda dapatkan</h2>
          <div className="box right"></div>
        </article>
      </section>
      <section className="price_container">
        <div className="price_image"></div>
        <div className="price_detail">
          <p className="price_text">Start from:</p>
          <h3 className="price">Rp. {service.price}</h3>
          <button className="price_button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default page;
