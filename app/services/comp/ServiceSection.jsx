"use client";
import { useRef, useEffect } from "react";
import Service from "./Service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ServiceSection.scss";

const ServiceSection = ({ data, id }) => {
  const section = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const list = useRef(null);

  useEffect(() => {
    let serviceSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
    serviceSectionTl
      .fromTo(
        [title.current, text.current],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          stagger: 0.25,
        }
      )
      .fromTo(
        list.current,
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 0.5,
        },
        ">-0.5"
      );
  }, []);

  return (
    <section ref={section} className="service_section_container" id={id}>
      <div className="description">
        <h2 ref={title} className="service_desc_title">
          {data.title}
        </h2>
        <p ref={text} className="service_desc_text">
          {data.desc}
        </p>
      </div>
      <div ref={list} className="list">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={2}
          pagination={{ type: "progressbar" }}
          navigation
        >
          {data.service.map((service) => (
            <SwiperSlide key={service.id}>
              <Service data={service} parentId={id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default ServiceSection;
