import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselBenefits.scss";
import { benefits } from "./benefits";
import PerkBar from "./PerkBar";

const CarouselBenefits = () => {
  const [benefitsDevice, setBenefitsDevice] = useState(
    window.innerWidth <= 1024
  );
  useEffect(() => {
    const handleResize = () => {
      setBenefitsDevice(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-benefits">
      <h4>Por que comprar na Maeztra?</h4>
      {benefitsDevice ? (
        <Slider {...settings}>
          {benefits &&
            benefits.map((e: any) => {
              return (
                <div>
                  <div className="carousel-benefits-item__container carousel-benefits-item__container-mobile">
                    <img src={e.icon} alt={e.title} />
                    <div className="carousel-benefits-item__container-text">
                      <h5>{e.title}</h5>
                      <p>{e.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      ) : (
        <PerkBar />
      )}
    </div>
  );
};

export default CarouselBenefits;
