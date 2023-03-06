import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ data, id }) => {
  return (
    <Link href={`/services#${id}`} className="service_card">
      <div
        className={`card ${
          id == "SR01"
            ? "image1"
            : id == "SR02"
            ? "image2"
            : id == "SR03"
            ? "image3"
            : ""
        }`}
      >
        <div className="info">
          <ul>
            {data.service.map((service) => {
              return <li>{service.title}</li>;
            })}
          </ul>
        </div>
      </div>
      <h4>{data.title}</h4>
    </Link>
  );
};

export default ServiceCard;
