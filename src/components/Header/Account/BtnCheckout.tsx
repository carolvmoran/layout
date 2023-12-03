import React from "react";
import { items } from "./items";

import bag from "../../../assets/icon-shoppingbag.png";

interface deviceProps {
  device: string;
}
const BtnCheckout = (props: deviceProps) => {
  const { device } = props;
  return (
    <>
      {items && items[2] ? (
        <a
          className={`${device && `btn-checkout__${device}`}`}
          href={items[2].url}
          title={items[2].name}
        >
          {items[2].icon && <img src={bag} alt={items[2].name} />}
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

export { BtnCheckout };
