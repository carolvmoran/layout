import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselBrands.scss";
import { Brands } from "./Brands";
import BrandDesk from "./BrandDesk";

const CarouselBrands = () => {
  const [brandsDevice, setBrandsDevice] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setBrandsDevice(window.innerWidth <= 1024);
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
    <div className="carousel-brands">
      <h4>Marcas Parceiras</h4>
      {brandsDevice ? (
        <Slider {...settings}>
          {Brands &&
            Brands.map((e: any) => {
              return (
                <div>
                  <div className="carousel-brands-item__container carousel-brands-item__container-mobile">
                    <img src={e.img} alt={e.title} />
                  </div>
                </div>
              );
            })}
        </Slider>
      ) : (
        <BrandDesk />
      )}
    </div>
  );
};

export default CarouselBrands;
