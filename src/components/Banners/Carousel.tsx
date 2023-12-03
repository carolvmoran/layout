import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { banners } from "./banners";

const Carousel = () => {
  const [bannerDevice, setBannerDevice] = useState(window.innerWidth >= 1025);
  useEffect(() => {
    const handleResize = () => {
      setBannerDevice(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {banners &&
          banners.map((e: any) => {
            return (
              <a className="carousel-item__container" href={e.url}>
                <img src={bannerDevice ? e.img : e.imgMob} alt={e.title} />
                <div className="carousel-item__container-text">
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                  <button>{e.button}</button>
                </div>
              </a>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
