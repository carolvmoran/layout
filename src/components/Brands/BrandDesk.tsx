import React from "react";
import "./CarouselBrands.scss";

import { Brands } from "./Brands";

const BrandsDesk = () => {
  return (
    <div className="carousel-brands-item">
      {Brands &&
        Brands.map((e: any) => {
          return (
            <div className="carousel-brands-item__container">
              <img src={e.img} alt={e.title} />
            </div>
          );
        })}
    </div>
  );
};

export default BrandsDesk;
