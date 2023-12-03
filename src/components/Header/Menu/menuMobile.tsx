import React, { useState } from "react";
import "./menu.scss";
import icon from "../../../assets/icon-menu.png";
import { MenuItems } from "./menuItems";
import { Account } from "../Account/Account";

interface deviceProps {
  device: string;
}

const MenuMobile = (props: deviceProps) => {
  const { device } = props;
  const [oppenMenu, setOppenMenu] = useState(false);
  const handleMenu = (event: any) => {
    event.preventDefault();
    !oppenMenu ? setOppenMenu(true) : setOppenMenu(false);
  };
  return (
    <>
      <button
        className="menu-mobile__icon"
        onClick={handleMenu}
        aria-label="menu"
      >
        <img src={icon} alt="drawer" />
      </button>
      {oppenMenu && (
        <div className="menu-mobile__drawer">
          <button onClick={handleMenu} className="menu-mobile__close-buttom">
            X
          </button>
          <MenuItems device={device} />
          <Account device={device} />
        </div>
      )}
    </>
  );
};

export { MenuMobile };
