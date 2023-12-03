import React from "react";
import { items } from "./items";
import "./menu.scss";
import Icon from "../../../assets/icon-dress.png";

interface deviceProps {
  device: string;
}

const MenuItems = (props: deviceProps) => {
  const { device } = props;
  return (
    <nav className={`${device && `menu-items__${device}`} menu-items`}>
      <ul className="menu-items__container">
        {items &&
          items.map((e) => {
            return (
              <a className="menu-items__link" href={e.url} title={e.name}>
                <li
                  className={`${
                    e.id === 1 ? "menu-items__item1" : ""
                  } menu-items__item`}
                >
                  {e.icon && <img src={Icon} alt={e.name} />}
                  {e.name}
                </li>
              </a>
            );
          })}
      </ul>
    </nav>
  );
};

export { MenuItems };
